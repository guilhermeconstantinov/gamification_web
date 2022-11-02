<template>
  <div class="rounded-lg sm:border w-full sm:w-3/4 lg:w-2/4 mt-14">
    <Welcome v-if="step == 0" @next="next" />
    <CheckinOne v-if="step == 0.5" @next="next" />
    <CheckinTwo v-if="step == 1" @next="next" />
    <CheckinThree v-if="step == 2" @next="next" />
    <SimulationOne v-if="step == 3" @next="next" @curso="cursos = $event" />
    <SimulationTwo
      v-if="step == 3.5"
      :result="cursos"
      @next="next"
      @back="back"
    />

    <SimulationThree v-if="step == 4" @next="next" />

    <Raffle @next="next" />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome'
import CheckinOne from '@/components/CheckinOne'
import CheckinTwo from '@/components/CheckinTwo'
import CheckinThree from '@/components/CheckinThree'
import SimulationOne from '@/components/SimulationOne'
import SimulationTwo from '@/components/SimulationTwo'
import SimulationThree from '@/components/SimulationThree'
import Raffle from '@/components/Raffle'

export default {
  components: {
    Welcome,
    CheckinOne,
    CheckinTwo,
    CheckinThree,
    SimulationOne,
    SimulationTwo,
    SimulationThree,
    Raffle,
  },
  data() {
    return {
      cursos: null,
      step: this.$auth.user.status,
    }
  },
  computed: {
    userStatus() {
      return this.$auth.user.status
    },
  },
  methods: {
    next(step) {
      this.step = step
    },
    back() {
      this.step--
    },
  },
}
</script>

<style></style>
