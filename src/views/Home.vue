<template>
  <div v-if="catalogue">
    <div id="header" class="section panel-horizontal wrap">
      <h1>Ævzag</h1>
      <div class="panel-horizontal">
        <a href="https://github.com/alkaitagi/Avzag#contacts">Contacts</a>
        <a href="https://github.com/alkaitagi/Avzag#credits">Credits</a>
        <span class="text-dot"></span>
        <a href="https://github.com/alkaitagi/Avzag">GitHub</a>
      </div>
    </div>
    <div id="languages" class="section panel-horizontal-sparse wrap">
      <LanguageCard :key="i" v-for="(lg, i) in languages" :language="lg" />
    </div>
  </div>
</template>

<script>
import LanguageCard from "@/components/LanguageCard";

export default {
  name: "Home",
  components: {
    LanguageCard,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  computed: {
    catalogue() {
      return this.$store.state.catalogue;
    },
    languages() {
      return Object.keys(this.catalogue).sort((a, b) => a.localeCompare(b));
    },
  },
};
</script>

<style lang="scss" scoped>
#languages {
  place-content: center;
  > * {
    flex: 1;
    min-width: 256px;
    height: 192px;
  }
}
</style>
