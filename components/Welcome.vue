<template>
  <div>
    <div class="py-8">
      <Icon icon="welcome" class="h-72 mx-auto px-4" />

      <div class="text-center mt-5">
        <h1 class="text-3xl font-bold text-gray-800 mb-5">Bem vindo</h1>
        <p class="text-lg px-6 font-medium text-gray-700 leading-snug">
          Seja bem-vindo a feira das profissões, siga os próximos passos para
          adquirir brindes
        </p>
      </div>
      <div>
        <v-button
          variant="principal-rounded"
          class="mx-auto mt-12"
          @click="submit"
        >
          Avançar
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$emit('next', 0.5)
    },
  },
}
</script>

<style></style>
