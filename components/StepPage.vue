<template>
  <div class="py-8">
    <Welcome v-if="step == 1" />
    <Checkin v-if="step == 2" />
    <div>
      <v-button variant="principal-rounded" class="mx-auto mt-12" @click="next">
        Avançar
      </v-button>
    </div>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome'
import Checkin from '@/components/Checkin'
export default {
  components: { Welcome, Checkin },
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