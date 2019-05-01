<template lang="pug">
  .team-score
    span.fill-the-void(v-if="!this.$store.state.teamNameTwo")
    h2.team-name {{ teamNameTwo }}
    div.score-box
      p.score {{ teamTwoScore }}
    .input-container(v-if="!this.$store.state.teamNameTwo")
      label.name(for="teamTwoName") Enter Team Name
      input.input-name(
        @keyup.enter="updateTeamName"
        @blur="updateTeamName"
        v-model="enteredTeamName" 
        type="text" 
        placeholder="Team Two Name"
        title="Enter your awesome team name!"
      )
    button.update-name(
      v-if="this.$store.state.teamNameTwo"
      @click="resetTeam"
    )
      | Update Name
    button.add(@click="addOne")
      i.fal.fa-plus
    button.add(@click="minusOne")
      i.fal.fa-minus
</template>

<script lang='ts'>
import { mapState } from 'vuex'

export default {
  name: 'TeamTwo',
  data() {
    return {
      enteredTeamName: ''
    }
  },
  methods: {
    addOne() {
      this.$store.commit('addTeamTwo')
    },
    minusOne() {
      this.$store.commit('subtractTeamTwo')
    },
    updateTeamName() {
      this.$store.commit('updateTeamTwo', this.enteredTeamName)
    },
    resetTeam() {
      this.$store.commit('updateTeamTwo', '')
      this.$store.commit('resetTeamTwoScore', 0)
      this.enteredTeamName = ''
    }
  },
  computed: {
    ...mapState(['teamTwoScore', 'teamNameTwo'])
  }
}
</script>

<style lang="scss" scoped>
.team-score {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
}

.fill-the-void {
  margin: 18px 0;
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
</style>


