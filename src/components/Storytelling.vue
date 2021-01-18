<template>
  <h1>The Harvest</h1>
  <img class="harvesters" alt="people harvesting" src="../assets/harvest.jpg" />
  <h1 class="storytelling">
    Once upon a time, in the feudal age, it was really though for the villagers
    to know what was the best apple trees to be harvested.
  </h1>
  <h1 class="storytelling2">
    However, a Space Traveller, aware of the situation, decided to build a
    gadget to help the villagers to know exactly which would be the best
    harvest.
  </h1>
  <h1 class="storytelling">
    The good new is that we managed to replicate a humble version of the gadget,
    which you can try right now! Insert the data below and watch the magic.
  </h1>
</template>

<script>
export default {
  name: "Storytelling"
};
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #bbd95b;
}
.harvesters {
  max-width: 80%;
}
.storytelling {
  max-width: 700px;
  color: red;
  font-size: 20px;
}
.storytelling2 {
  max-width: 700px;
  color: #712d2e;
  font-size: 20px;
}
</style>
