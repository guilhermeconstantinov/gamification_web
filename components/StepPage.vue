<template>
  <div class="py-8 rounded-lg sm:border w-full sm:w-3/4 lg:w-2/4 mt-14">
    <Welcome v-if="step == 1 && userStatus == 0" @next="next" />
    <CheckinOne v-if="step == 2 && userStatus == 0" @next="next" />
    <CheckinTwo v-if="step == 3 || userStatus == 1" @next="next" />
    <CheckinThree v-if="step == 4 || userStatus == 2" @next="next" />
    <Simulation
      v-if="step == 5 || userStatus == 3"
      @next="next"
      @curso="cursos = $event"
    />
    <SimulationResult v-if="step == 5" :result="cursos" @next="next" />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome'
import CheckinOne from '@/components/CheckinOne'
import CheckinTwo from '@/components/CheckinTwo'
import CheckinThree from '@/components/CheckinThree'
import Simulation from '@/components/Simulation'
import SimulationResult from '@/components/SimulationResult'

export default {
  components: { Welcome, CheckinOne, CheckinTwo, CheckinThree, Simulation, SimulationResult },
  data() {
    return {
      cursos: null,
      step: 1,
    }
  },
  computed: {
    userStatus() {
      return this.$auth.user.status
    },
  },
  methods: {
    next() {
      this.step++
    },
  },
}
</script>

<style></style>
