let profiles;
let selected;
let fromField;
let toField;

let first = true

function start(data) {
    selected = 0;
    profiles = data;


    if (first) {
        let mapping = document.querySelector("#converter #mapping");
        document.querySelector("#converter #hide").onclick =
            () => mapping.style.display =
                (mapping.style.display == "none" ? "flex" : "none");
    }


    fromField = document.querySelector("#converter #from");
    toField = document.querySelector("#converter #to");
    if (first)
        fromField.addEventListener("input", e => to.value = process(e.target.value))


    let select = document.querySelector("#converter #profile");
    select.innerHTML = "";
    let index = 0;
    for (const profile of profiles) {
        let el = document.createElement("option");
        el.textContent = profile["title"];
        el.value = index++;
        select.appendChild(el);
    }
    if (first)
        select.onchange = e => selectProfile(e.target.value);

    selectProfile(selected);


    let file = document.querySelector("#converter #file");
    if (first) {
        file.addEventListener('change', handleFiles);
        document.querySelector("#converter #options #upload").onclick = () => file.click();
        document.querySelector("#converter #options #copy").onclick = copy;
    }

    fromField.dispatchEvent(new Event("input"));
    first = false;
}

function selectProfile(index) {
    selected = index;
    fromField.dispatchEvent(new Event("input"));

    let mapping = document.querySelector("#converter #mapping");
    mapping.innerHTML = "";
    for (const [from, to] of Object.entries(profiles[selected]["mapping"])) {
        mapping.innerHTML += `<p>${from.replace(' ', '_')} › ${to.replace(' ', '_')}</p>`;
    }
}

function uppercase(str) {
    let base = '';
    let i = 0;
    if (str.charAt(0) == ' ') {
        base = ' ';
        i = 1;
    }
    return base + str.charAt(i).toUpperCase() + str.slice(i + 1);
}

function process(source) {
    const convert = (str, from, to) => str.replace(new RegExp(from, 'g'), to);

    source = " " + source.replace(new RegExp("\n", 'g'), "\n ").trim();
    for (const [from, to] of Object.entries(profiles[selected]["mapping"])) {
        source = convert(source, from, to);
        source = convert(source, uppercase(from), uppercase(to));
    }
    return source.replace(new RegExp("\n ", 'g'), "\n").trim();
}

function copy() {
    toField.select();
    document.execCommand('copy');
}

function handleFiles(event) {
    var reader = new FileReader();
    reader.onload = e => download(event.target.files[0].name, process(e.target.result));
    reader.readAsText(event.target.files[0]);
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

export { start };
