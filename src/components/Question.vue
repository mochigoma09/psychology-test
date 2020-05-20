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
<style lang="scss" scoped>
@import "../assets/common.scss";

.question {
  p {
    @include mq() {
      text-align: center;
    }

    @include mq(sm) {
      width: 90%;
      margin: 0 auto;
    }
  }
  ul {
    text-align: center;
  }
}
</style>
