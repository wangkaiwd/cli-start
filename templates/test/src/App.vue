<template>
  <div class="app">
    App
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'App',
  setup () {
    const state = reactive({});
    return {
      ...toRefs(state)
    };
  },
};
</script>

<style scoped>
.app {
  font-size: 40px;
}
</style>
