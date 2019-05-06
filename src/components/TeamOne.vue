<template lang="pug">
  .team-score
    span.fill-the-void(v-if="!this.$store.state.teamNameOne")
    h2.team-name {{ teamNameOne }}
    div.score-box
      p.score {{ teamOneScore }}
    .input-container(v-if="!this.$store.state.teamNameOne")
      label.name(for="teamOneName") Enter Team Name
      input.input-name(
        @keyup.enter="updateTeamName"
        @blur="updateTeamName"
        v-model="enteredTeamName" 
        type="text" 
        placeholder="Team One Name"
        title="Enter your awesome team name!"
      )
    button.update-name(
      v-if="this.$store.state.teamNameOne"
      @click="resetTeam"
    )
      | Update Name
    button(@click="addOne")
      i.fal.fa-plus
    button(@click="minusOne")
      i.fal.fa-minus
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TeamOne',
  data() {
    return {
      enteredTeamName: ''
    }
  },
  methods: {
    addOne() {
      this.$store.commit('addTeamOne')
    },
    minusOne() {
      this.$store.commit('subtractTeamOne')
    },
    updateTeamName() {
      this.$store.commit('updateTeamOne', this.enteredTeamName)
    },
    resetTeam() {
      this.$store.commit('updateTeamOne', '')
      this.$store.commit('resetTeamOneScore', 0)
      this.enteredTeamName = ''
    }
  },
  computed: {
    ...mapState(['teamOneScore', 'teamNameOne'])
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


