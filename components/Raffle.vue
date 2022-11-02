<template>
  <div>
    <div class="text-center mt-10 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-5">Sorteio de prémio</h1>

      <p class="text-lg px-6 font-medium text-gray-700 leading-snug mb-6">
        Apresente esse QR Code na recepção do evento para que você consiga
        avançar e ganhar mais prémios
      </p>

      <v-button
        variant="principal-rounded"
        class="mx-auto mt-12"
        :disabled="loading"
        @click="submit"
      >
        <Icon v-if="loading" icon="loading" class="text-white" />
        <span v-else>Avançar</span>
      </v-button>
    </div>
  </div>
</template>

<script>
import StatusType from '@/utils/StatusType'
export default {
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    qrcode() {
      if (this.$auth?.user?.access_codes[1]?.code) {
        return this.$auth?.user?.access_codes[1]?.code
      }
      return ''
    },
  },
  async created() {
    await this.$auth.fetchUser()
  },
  methods: {
    async submit() {
      this.loading = true
      try {
        await this.$auth.fetchUser()

        if (this.$auth.user.status === StatusType.simulation) {
          this.$emit('next', 5)
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style></style>
