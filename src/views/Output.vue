<template>
  <h1>The Harvest</h1>
  <div class="output">
    <img class="basket" alt="apples basket" src="../assets/basket.png" />
    <h1 class="biggestamount">
      {{
        A != -1
          ? `The biggest amount of apples which can be harvested is ${A} of ${Trees.reduce(
              (a, b) => Number(a) + Number(b)
            )}`
          : "Needing to plant some trees, aren't you?"
      }}
    </h1>
  </div>
  <div>
    <p class="k-amount" v-if="K.length + L.length < Trees.length">
      Harvested by Marcelo:
      {{ K.map(e => Trees[e]).reduce((a, b) => Number(a) + Number(b)) }}
    </p>
    <p class="l-amount" v-if="K.length + L.length < Trees.length">
      Harvested by Carla:
      {{ L.map(e => Trees[e]).reduce((a, b) => Number(a) + Number(b)) }}
    </p>
  </div>
  <ul class="ul">
    <li v-for="tree in TreesIndex" v-bind:key="tree" class="trees">
      <div>
        <p v-if="K.includes(tree)" class="amount" id="k">{{ Trees[tree] }}</p>
        <p v-else-if="L.includes(tree)" class="amount" id="l">
          {{ Trees[tree] }}
        </p>
        <p v-else class="amount">{{ Trees[tree] }}</p>
        <img class="appletree" alt="appletree" src="../assets/appletree.png" />
        <p class="index">{{ Number(tree) + 1 }}</p>
      </div>
    </li>
    <br />
    <button class="back" @click="this.$router.push('/')">Try it again</button>
  </ul>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Output",
  props: {
    Trees: Object,
    TreesIndex: Object,
    A: Object,
    K: Number,
    L: Number
  },
  components: {}
};
</script>
<style>
.appletree {
  max-width: 100px;
}
.trees {
  flex-direction: row;
  list-style-type: none;
  display: inline-block;
  max-width: 80vw;
}
.basket {
  max-width: 80vw;
  padding-left: 3vw;
}
.biggestamount {
  max-width: 80vw;
  font-size: 18px;
}
.ul {
  max-width: 80vw;
  padding: 0px;
}
.amount {
  border-style: solid;
  border-radius: 40px;
  max-width: 20px;
  margin-inline-start: 34px;
  font-weight: bold;
}
.k-amount {
  color: #ff0000;
  font-weight: bold;
}
.l-amount {
  color: rgb(88, 85, 238);
  font-weight: bold;
}
#k {
  color: #ff0000 !important;
  background-color: #ffd89f;
}
#l {
  color: rgb(88, 85, 238) !important;
  background-color: #ffd89f;
}
.back {
  background-color: #ffd89f;
  font-weight: bold;
  color: #712d2e;
  margin: 40px;
  border-radius: 10px;
  outline: none;
}
.index {
  font-size: 12px;
}
</style>
