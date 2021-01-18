<template>
  <div class="output">
    <h1>This is an results page '{{ A }}' / '{{ K }}' / '{{ L }}'</h1>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Output",
  props: {
    A: Object,
    K: Object,
    L: Object
  },
  components: {}
};
</script>
