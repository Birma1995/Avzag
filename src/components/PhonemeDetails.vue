<template>
  <div class="panel">
    <div class="card panel">
      <h2 class="text-ipa">{{phoneme.ipa}}</h2>
      <p class="text-caption text-faded text-spaced" v-if="features">{{features}}</p>
      <PhoneticNote :text="phoneme.note" />
    </div>
    <audio ref="player"></audio>
    <PhonemeUse
      @play="play(lc, $event)"
      :key="i"
      v-for="(lc, i) in lects"
      :phoneme="phoneme.ipa"
      :lect="lc"
      :cases="phoneme.uses[lc]"
    />
  </div>
</template>

<script>
import PhonemeUse from "./PhonemeUse";
import PhoneticNote from "./PhoneticNote";

export default {
  name: "PhonemeDetails",
  components: {
    PhonemeUse,
    PhoneticNote,
  },
  props: ["phoneme"],
  computed: {
    lects() {
      return this.$store.getters.lects.filter((l) => l in this.phoneme.uses);
    },
    features() {
      return this.phoneme["features"]?.reduce((a, t) => (a = `${a} ${t}`));
    },
    root() {
      return this.$store.getters.languageRoot;
    },
  },
  methods: {
    play(lect, sample) {
      const player = this.$refs.player;
      player.src = `${this.root}${lect}/audio/${sample}.mp3`;
      player.play();
    },
  },
};
</script>

<style lang="scss" scoped>
.text-ipa {
  user-select: unset;
}
</style>
