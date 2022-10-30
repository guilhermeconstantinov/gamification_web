<template>
  <div>
    <Icon icon="checkin" class="h-72 mx-auto px-4" />

    <div class="text-center mt-5">
      <h1 class="text-3xl font-bold text-gray-800 mb-5">Check-In</h1>
      <p class="text-lg px-6 font-medium text-gray-700 leading-snug">
        A primeira etapa será o processo de check-in na plataforma, para isso
        enviaremos um QR Code para seu whatsapp
      </p>
      <div>
        <v-button
          variant="principal-rounded"
          class="mx-auto mt-12"
          @click="$emit('next')"
        >
          Avançar
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
