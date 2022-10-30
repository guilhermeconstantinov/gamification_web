<template>
  <div class="px-4 py-16">
    <img src="~/assets/img/logo.png" class="w-64 mx-auto mb-10" />

    <form class="grid grid-cols-12 gap-5" @submit.prevent="">
      <v-input
        v-model="form.username"
        placeholder="E-mail"
        class="col-span-12"
      />
      <v-input
        v-model="form.password"
        type="password"
        placeholder="Senha"
        class="col-span-12"
      />
      <v-button variant="principal" class="col-span-12" @click="login">
        Entrar
      </v-button>
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
export default {
  auth: 'guest',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', { data: this.form })
        this.$router.push({ name: 'index' })
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
