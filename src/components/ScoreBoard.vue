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
      .team-score
        h2.team-name {{ teamOneName }}
        div.score-box
          p.score {{ teamOneScore }}
        .input-container
          label.name(for="teamOneName") Enter Team Name
          input.input-name(
            @keyup.enter="updateTeamOne"
            @blur="updateTeamOne"
            v-model="enteredTeamOne" 
            type="text" 
            placeholder="Team One Name"
            title="Enter your awesome team name!"
          )
        button.add(@click="addTeamOne")
          i.fal.fa-plus
        button.add(@click="minusTeamOne")
          i.fal.fa-minus
      Team(
        :teamName="teamName"
        :teamScore="teamScore"
        :enteredTeamName="enteredTeamName"
      )
</template>

<script lang="ts">
import Vue from 'vue'
import Team from './Team.vue'

export default Vue.extend({
  name: 'scoreboard',
  components: { Team },
  props: {
    teamName: String,
    teamScore: Number,
    enteredTeamName: String
  },
  data() {
    return {
      teamName: '',
      teamScore: 0,
      enteredTeamName: '',
    }
  }
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

</style>

