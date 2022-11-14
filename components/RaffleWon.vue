<template>
  <div>
    <div class="text-center mt-10 py-8">
      <h1 class="text-3xl font-bold text-green-500 mb-5">Você ganhou!</h1>

      <div v-if="qrcode" class="flex justify-center my-10">
        <QrCode :text="qrcode" :size="200"></QrCode>
      </div>

      <div v-else class="flex justify-center my-16">
        <Icon icon="loading" class="w-16 text-gray-600" />
      </div>

      <p class="text-lg px-6 font-medium text-gray-700 leading-snug mb-6">
        Você acaba de ganhar uma bolsa com 50% de desconto nas mensalidades, por
        favor vá até a recepção do evento para retirar o prêmio.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    qrcode() {
      if (this.$auth?.user?.access_codes[2]?.code) {
        return this.$auth?.user?.access_codes[2]?.code
      }
      return ''
    },
  },
}
</script>

<style></style>
