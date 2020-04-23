<template>
  <div id="app">
    <header class="main-header">
      <h1 class="text-30 main-title">Laturel Todo</h1>
      <p class="text-12 subtext">Your project tracking buddy</p>
      <div class="language-switcher">
        <button
          class="language-button"
          v-if="language == 'en'"
          @click="changeLanguage('fi')"
        >
          <img
            class="language-flag"
            src="@/assets/img/flag_uk.svg"
            alt="United Kingdom flag"
          />
        </button>
        <button
          class="language-button"
          v-if="language == 'fi'"
          @click="changeLanguage('en')"
        >
          <img
            class="language-flag"
            src="@/assets/img/flag_fi.svg"
            alt="Finland flag"
          />
        </button>
      </div>
    </header>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      language: this.$i18n.locale
    };
  },
  methods: {
    changeLanguage(language) {
      this.language = language;
      this.$i18n.locale = language;
    }
  }
};
</script>
