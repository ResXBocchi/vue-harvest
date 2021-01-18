<template>
  <div class="output">
    <img class="basket" alt="apples basket" src="../assets/basket.png" />
    <h1>The biggest amount of apples which can be harvested is '{{ A }}'</h1>
  </div>
  <ul>
    <li v-for="(tree , index) in Trees" v-bind:key='index' class='treelist'>
      <div>
        <p>{{tree}}</p>
        <img class="appletree" alt="appletree" src="../assets/appletree.png" />
      </div>
    </li>

  </ul>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Output",
  props: {
    A: Object,
    K: Number,
    L: Number,
    Trees:Object
  },
  components: {}
};
</script>
<style>
.appletree{
  max-width:100px;
}
.treelist{
  flex-direction:row;
  list-style-type: none;
  display: inline-block

}
</style>
