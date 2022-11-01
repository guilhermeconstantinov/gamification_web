<template>
  <div>
    <div class="text-center mt-10">
      <h1 class="text-3xl font-bold text-gray-800 mb-5">Retirar brinde</h1>

      <div class="flex justify-center my-10">
        <QrCode
          text="8e03a78d-383a-4cf2-98e5-b1849af5fd6e"
          :size="200"
        ></QrCode>
      </div>

      <p class="text-lg px-6 font-medium text-gray-700 leading-snug mb-6">
        Apresente esse QR Code na recepção do evento para que você consiga
        avançar e ganhar mais prémios
      </p>

      <v-button
        variant="principal-rounded"
        class="mx-auto mt-12"
        @click="$emit('next')"
      >
        Avançar
      </v-button>
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
  methods: {},
}
</script>

<style></style>
