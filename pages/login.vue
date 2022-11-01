<template>
  <div class="px-4 py-16">
    <img src="~/assets/img/logo.png" class="w-64 mx-auto mb-10" />

    <form class="grid grid-cols-12 gap-5" @submit.prevent="login">
      <v-input-group
        class="col-span-12"
        :feedback="feedbackUsername"
        :variant="{ danger: feedbackUsername }"
      >
        <v-input
          v-model="form.username"
          :variant="{ danger: feedbackUsername }"
          placeholder="E-mail"
        />
      </v-input-group>

      <v-input-group
        class="col-span-12"
        :feedback="feedbackPassword"
        :variant="{ danger: feedbackPassword }"
      >
        <v-input
          v-model="form.password"
          :variant="{ danger: feedbackPassword }"
          type="password"
          placeholder="Senha"
        />
      </v-input-group>

      <v-button variant="principal" class="col-span-12" :disabled="loading">
        <Icon v-if="loading" icon="loading" class="text-white" />
        <span v-else>Entrar</span>
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
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  auth: 'guest',
  data() {
    return {
      loading: false,
      form: {
        username: '',
        password: '',
      },
    }
  },
  validations: {
    form: {
      username: { required, email },
      password: { required, minLength: minLength(6) },
    },
  },
  computed: {
    feedbackUsername() {
      if (this.$v.form.username.$error && !this.$v.form.username.required) {
        return 'Campo obrigátorio*'
      }

      if (this.$v.form.username.$error && !this.$v.form.username.email) {
        return 'E-mail inválido'
      }

      return ''
    },
    feedbackPassword() {
      if (this.$v.form.password.$error && !this.$v.form.password.required) {
        return 'Campo obrigátorio*'
      }

      if (this.$v.form.password.$error && !this.$v.form.password.minLength) {
        return 'Precisa de pelo menos 6 dígitos'
      }

      return ''
    },
  },
  methods: {
    async login() {
      this.$v.form.$touch()

      if (this.$v.$invalid) {
        return
      }

      this.loading = true
      try {
        await this.$auth.loginWith('local', { data: this.form })
        this.$router.push({ name: 'index' })
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
