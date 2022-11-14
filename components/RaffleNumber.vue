<template>
  <div>
    <div class="w-full px-4 lg:w-5/6 mx-auto text-center mt-10 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-5">
        Você recebeu um número da sorte
      </h1>

      <div class="flex justify-center relative">
        <Icon icon="giftnumber" class="h-72 mx-auto text-red-500" />

        <div class="absolute bottom-10">
          <span
            class="
              font-bold
              text-4xl text-green-500
              border-2 border-green-700
              bg-white
              px-8
              py-3
            "
          >
            {{ $auth?.user?.lucky_number?.number }}
          </span>
        </div>
      </div>

      <div class="my-4">
        Enviaremos uma mensagem para o seu whatsapp caso você ganhe o prêmio
      </div>
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
}
</script>

<style>
.scrollbar::-webkit-scrollbar {
  @apply w-2 bg-gray-200 rounded-full h-2;
}

.scrollbar::-webkit-scrollbar-thumb {
  @apply rounded-full bg-blue-500;
}
</style>
