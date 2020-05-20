<template>
  <div class="question">
    <h1 v-html="nl2br(question.title)"></h1>
    <p v-html="nl2br(question.text)"></p>
    <ul>
      <li v-for="qu in question.anser" :key="qu.id">
        <router-link
          :to="{ name: 'ans', params: { que_id:question.id, ans_id:qu.id }}"
          v-html="nl2br(qu.choice)"
        ></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import common from "../common";

export default {
  name: "params",
  props: {
    id: String
  },
  mixins: [common],
  data() {
    return {
      question: this.getSeedQue(this.id)
    };
  },
  created() {
    console.log(this.question);
  }
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
