<template>
  <div class="py-8">
    <Welcome v-if="step == 1" @next="next" />
    <CheckinOne v-if="step == 2" @next="next" />
    <CheckinTwo v-if="step == 3" @next="next" />
    <Simulation v-if="step == 4" @next="next" @curso="cursos = $event" />
    <SimulationResult v-if="step == 5" :result="cursos" @next="next" />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome'
import CheckinOne from '@/components/CheckinOne'
import CheckinTwo from '@/components/CheckinTwo'
import Simulation from '@/components/Simulation'
import SimulationResult from '@/components/SimulationResult'

export default {
  components: { Welcome, CheckinOne, CheckinTwo, Simulation, SimulationResult },
  data() {
    return {
      cursos: null,
      step: 4,
    }
  },
  methods: {
    next() {
      this.step++
    },
  },
}
</script>

<style></style>
