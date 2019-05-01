<template lang="pug">
  .scoreboard-container
    header
      h1 Score Board
      span.sports
        i.fal.fa-tennis-ball
        i.fal.fa-volleyball-ball
        i.fal.fa-hockey-sticks
        i.fal.fa-curling
        i.fal.fa-shuttlecock
        i.fal.fa-baseball
        i.fal.fa-quidditch
        i.fal.fa-golf-club
        i.far.fa-futbol
        i.fal.fa-football-ball
        i.fal.fa-basketball-ball
    .teams
      TeamOne
      TeamTwo
</template>

<script lang="ts">
import Vue from 'vue'
import TeamOne from './TeamOne.vue'
import TeamTwo from './TeamTwo.vue'

export default Vue.extend({
  name: 'scoreboard',
  components: { TeamOne, TeamTwo }
})
</script>



<style lang="scss">
.scoreboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #161616;
  background: #f2f2f2;
  min-height: 100vh;
}

.sports {
  color: #006992;
}

.teams {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: 'Permanent Marker', cursive;
}

.team-score {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
}

.score-box {
  width: 75px;
  height: 75px;
  border: 3px solid #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  .score {
    font-size: 30px;
    padding: 0;
    margin: 0
  }
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  .input-name {
    padding: 10px 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}

header {
  margin-bottom: 30px;
}

button {
  width: 100%;
  margin-top: 5px;
  font-family: 'Press Start 2P', cursive;
  font-size: 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  background: #00B6FF;
  cursor: pointer;
  color: #161616;

  .fa-plus {
    font-size: 16px;
  }
}

button:hover {
  background: #006992;
}

h1 {
  font-family: 'Press Start 2P', cursive;
}

i {
  margin: 5px;
  font-size: 20px;
}

button.update-name {
  padding: 11px 0;
  margin-top: 60px;
}

</style>

