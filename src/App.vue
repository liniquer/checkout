<template>
  <section id="app">
    <router-view />
  </section>
</template>

<style lang="scss">
html {
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  background: rgb(247, 247, 247);
  background: linear-gradient(
    to bottom,
    rgba(247, 247, 247, 1) 0%,
    rgba(226, 226, 226, 1) 100%
  );
}
html,
body,
#app {
  width: 100%;
  height: 100%;

  @include media(">tablet") {
    height: 100%;
    min-height: 100%;
  }
}
</style>
