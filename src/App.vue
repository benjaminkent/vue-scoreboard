<template lang="pug">
  .app-container
    ScoreBoard
</template>


<script lang="ts">
import Vue from 'vue';
import ScoreBoard from './components/ScoreBoard.vue';

export default Vue.extend({
  name: 'app',
  components: {
    ScoreBoard
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker|Press+Start+2P');
body {
  margin: 0;
}
</style>
