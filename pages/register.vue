<template>
  <div>
    <NuxtLink to="/">
      <div class="p-2">
        <Icon icon="arrow-left" class="w-8" />
      </div>
    </NuxtLink>

    <div class="px-4 py-12">
      <img src="~/assets/img/logo.png" class="w-64 mx-auto mb-10" />

      <form class="grid grid-cols-12 gap-5">
        <v-input placeholder="Nome completo" class="col-span-12" />
        <v-input placeholder="E-mail" class="col-span-12" />
        <v-datepicker placeholder="Data de nascimento" class="col-span-12" />
        <v-input placeholder="(00) 00000-0000" class="col-span-12" />
        <v-input placeholder="Senha" class="col-span-12" />
        <v-input placeholder="Confirmar senha" class="col-span-12" />
        <v-button variant="principal" class="col-span-12">Cadastrar</v-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>
