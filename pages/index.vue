<template>
  <div class="px-4 py-16">
    <img src="~/assets/img/logo.png" class="w-64 mx-auto mb-10" />

    <form class="grid grid-cols-12 gap-5">
      <v-input placeholder="E-mail" class="col-span-12" />
      <v-input placeholder="Senha" class="col-span-12" />
      <v-button variant="principal" class="col-span-12">Entrar</v-button>
      <div class="flex justify-center col-span-12">
        Não possui uma conta?&nbsp;
        <NuxtLink to="/register" class="text-blue-600 underline">
          Cadastrar
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>
