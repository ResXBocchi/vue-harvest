<template >
  <Storytelling />
  <Form />
</template>

<script>
// @ is an alias to /src
import Storytelling from '../components/Storytelling.vue';
import Form from '../components/Form.vue';
export default {
  name: 'App',
  components: {
    Storytelling,
    Form
  }
};
</script>
