<template>
  <div class="top">
    <h1>心理テスト</h1>
    <p>やりたいテストを選んでね</p>
    <ul>
      <li v-for="qu in getSeedAll()" :key="qu.id">
        <router-link :to="{ name: 'que', params: { id:qu.id }}" v-html="nl2br(qu.title)"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import common from "../common";

export default {
  name: "params",
  mixins: [common]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
