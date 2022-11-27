<template>
  <div>
    <div class="text-center mt-10 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-5">Retirar brinde</h1>

      <div v-if="qrcode" class="flex justify-center my-10">
        <QrCode :text="qrcode" :size="200"></QrCode>
      </div>

      <div v-else class="flex justify-center my-16">
        <Icon icon="loading" class="w-16 text-gray-600" />
      </div>

      <p
        v-if="qrcode"
        class="text-lg px-6 font-medium text-gray-700 leading-snug mb-6"
      >
        Apresente esse QR Code no curso<br />
        <span class="uppercase font-bold text-yellow-500">
          {{ $auth?.user?.course1 }}
        </span>
        <br />
        para retirar seu brinde.
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
