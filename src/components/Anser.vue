<template>
  <div class="anser">
    <h3>「{{anser.choice}}」を選んだあなたは</h3>
    <h1>{{anser.value.title}}</h1>
    <p v-html="nl2br(anser.value.text)"></p>
    <div class="back">
      <router-link :to="{ name: 'que', params: { id:que_id }}">選択肢に戻る</router-link>
    </div>
  </div>
</template>

<script>
import common from "../common";

export default {
  name: "params",
  props: {
    que_id: String,
    ans_id: String
  },
  mixins: [common],
  data() {
    return {
      anser: this.getSeedAns(this.que_id, this.ans_id)
    };
  },
  created() {
    console.log(this.anser);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/common.scss";

.anser {
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
