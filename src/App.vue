<template>
  <div id="app">
    <router-view />
    <div class="back">
      <router-link :to="{ name: 'home'}" v-if="$route.name != 'home'">一覧に戻る</router-link>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  h1,
  h3 {
    text-align: center;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 16px;
  }
  a {
    color: #42b983;
  }
}

.back {
  padding: 16px 0 0 0;
  text-align: center;
}
</style>
