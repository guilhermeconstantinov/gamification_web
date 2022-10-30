<template>
  <div class="py-8">
    <Welcome v-if="step == 1" />
    <CheckinOne v-if="step == 2" />
    <CheckinTwo v-if="step == 3" />
    <div>
      <v-button variant="principal-rounded" class="mx-auto mt-12" @click="next">
        Avançar
      </v-button>
    </div>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome'
import CheckinOne from '@/components/CheckinOne'
import CheckinTwo from '@/components/CheckinTwo'
export default {
  components: { Welcome, CheckinOne, CheckinTwo },
  data() {
    return {
      step: 1,
    }
  },
  methods: {
    next() {
      this.step++
    },
  },
}
</script>

<style>
</style>