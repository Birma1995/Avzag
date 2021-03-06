<template>
  <div class="section" v-if="phrasebook">
    <div id="translations" class="panel">
      <div id="header" class="panel-horizontal">
        <button @click="searching=!searching" class="icon">{{searching?"sort":"search"}}</button>
        <input v-if="searching" placeholder="search in translations" type="text" v-model="search" />
        <select v-else v-model="category">
          <option :value="i" :key="i" v-for="(ct, i) in categories">{{ct}}</option>
        </select>
      </div>
      <div v-if="searchResults" class="panel-solid scroll">
        <template v-for="(c, i) of searchResults">
          <h3 :key="categories[i]">{{categories[i]}}</h3>
          <button
            :class="{highlight: i===category && j===phrase}"
            @click="() => {category=i; phrase=j;}"
            :key="'-'+i+j"
            v-for="(p, j) in c"
          >{{phrasebook[categories[i]][p].translation}}</button>
        </template>
      </div>
      <p v-else-if="searching" class="text-caption">Nothing found...</p>
      <div v-else class="panel-solid scroll">
        <button
          :class="{highlight: i===phrase}"
          @click="phrase=i"
          :key="i"
          v-for="(tr, i) in translations"
        >{{tr}}</button>
      </div>
    </div>
    <div class="panel">
      <PhraseBuilder :source="text" :ids="ids" />
      <PhrasebookEntry
        class="card"
        :key="i"
        v-for="(lc, i) in lects"
        :lect="lc"
        :source="sources[lc]"
        :ids="ids"
      />
    </div>
  </div>
</template>

<script>
import PhrasebookEntry from "@/components/PhrasebookEntry";
import PhraseBuilder from "@/components/PhraseBuilder";

export default {
  name: "Phrasebook",
  components: {
    PhrasebookEntry,
    PhraseBuilder,
  },
  data() {
    return {
      category: 0,
      phrase: 0,
      searching: false,
      search: "",
      ids: {},
    };
  },
  computed: {
    lects() {
      return this.$store.getters.lects.filter((l) => l in this.sources);
    },
    phrasebook() {
      return this.$store.state.phrasebook;
    },
    categories() {
      return Object.keys(this.phrasebook);
    },
    phrases() {
      return this.phrasebook
        ? this.phrasebook[this.categories[this.category]]
        : null;
    },
    translations() {
      return this.phrases.map((it) => it.translation);
    },
    sources() {
      return this.phrases[this.phrase].sources;
    },
    text: function () {
      return this.phrases ? this.phrases[this.phrase].text : null;
    },
    searchResults() {
      if (!this.searching) return null;

      let results = {};
      this.categories.forEach((c, i) => {
        let filtered = [];
        this.phrasebook[c]
          .map((p) => p.translation)
          .forEach((p, j) => {
            if (p.includes(this.search)) filtered.push(j);
          });
        if (filtered.length > 0) results[i] = filtered;
      });

      if (Object.keys(results).length === 0) return null;
      else return results;
    },
  },
  watch: {
    category(category) {
      this.$router
        .push({ query: { category: category, phrase: 0 } })
        .catch(() => {});
    },
    phrase(phrase) {
      this.$router
        .push({ query: { ...this.$route.query, phrase: phrase } })
        .catch(() => {});
    },
    text: {
      handler(text) {
        if (!text) return;

        let ids = {};
        text.forEach((s) => {
          if (typeof s !== "string") {
            ids[s.id] = 0;
          }
        });
        this.ids = ids;
      },
      immediate: true,
    },
    "$route.query": {
      handler(query) {
        this.category = query.category ?? 0;
        this.phrase = query.phrase ?? 0;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  select {
    font-weight: bold;
  }
  > *:nth-child(2) {
    flex: 1;
  }
}
.section {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: map-get($margins, "double");
}
.panel-solid {
  h3 {
    margin-bottom: map-get($margins, "normal");
    &:not(:first-child) {
      margin-top: map-get($margins, "normal");
    }
  }
}
@media only screen and (max-width: $mobile-width) {
  .section {
    grid-template-columns: 1fr;
  }
  .panel-solid {
    max-height: 7 * map-get($button-height, "normal");
  }
}
</style>
