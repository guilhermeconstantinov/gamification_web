<template>
  <div>
    <NuxtLink :to="{ name: 'login' }">
      <div class="p-2">
        <Icon icon="arrow-left" class="w-6" />
      </div>
    </NuxtLink>

    <div class="px-4 py-12">
      <img src="~/assets/img/logo.png" class="w-64 mx-auto mb-10" />

      <form class="grid grid-cols-12 gap-5" @submit.prevent="register">
        <v-input-group
          class="col-span-12"
          :feedback="feedbackName"
          :variant="{ danger: feedbackName }"
        >
          <v-input
            v-model.trim="form.name"
            :variant="{ danger: feedbackName }"
            placeholder="Nome completo"
          />
        </v-input-group>

        <v-input-group
          class="col-span-12"
          :feedback="feedbackEmail"
          :variant="{ danger: feedbackEmail }"
        >
          <v-input
            v-model="form.email"
            :variant="{ danger: feedbackEmail }"
            placeholder="E-mail"
          />
        </v-input-group>

        <v-input-group
          class="col-span-12"
          :feedback="feedbackBirthdate"
          :variant="{ danger: feedbackBirthdate }"
        >
          <v-input
            v-model="form.birthdate"
            v-mask="'##/##/####'"
            :variant="{ danger: feedbackBirthdate }"
            placeholder="Data de nascimento"
          />
        </v-input-group>

        <v-input-group
          class="col-span-12"
          :feedback="feedbackPhone"
          :variant="{ danger: feedbackPhone }"
        >
          <v-input
            v-model="form.phone"
            v-mask="['(##) ####-####', '(##) #####-####']"
            :variant="{ danger: feedbackPhone }"
            placeholder="(00) 00000-0000"
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
            placeholder="Senha"
            type="password"
          />
        </v-input-group>

        <v-input-group
          class="col-span-12"
          :feedback="feedbackConfirmPassword"
          :variant="{ danger: feedbackConfirmPassword }"
        >
          <v-input
            v-model="form.confirmPassword"
            :variant="{ danger: feedbackConfirmPassword }"
            type="password"
            placeholder="Confirmar senha"
          />
        </v-input-group>

        <v-button variant="principal" class="col-span-12" :disabled="loading">
          <Icon v-if="loading" icon="loading" class="text-white" />
          <span v-else>Cadastrar</span>
        </v-button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import { validateDate } from '~/utils/validations'
export default {
  auth: 'guest',
  data() {
    return {
      loading: false,
      form: {
        name: '',
        email: '',
        phone: '',
        birthdate: '',
        password: '',
        confirmPassword: '',
      },
    }
  },
  computed: {
    feedbackName() {
      if (this.$v.form.name.$error && !this.$v.form.name.required) {
        return 'Campo obrigátorio*'
      }
      return ''
    },
    feedbackEmail() {
      if (this.$v.form.email.$error && !this.$v.form.email.required) {
        return 'Campo obrigátorio*'
      }

      if (this.$v.form.email.$error && !this.$v.form.email.email) {
        return 'E-mail inválido'
      }

      return ''
    },
    feedbackPhone() {
      if (this.$v.form.phone.$error && !this.$v.form.phone.required) {
        return 'Campo obrigátorio*'
      }

      if (this.$v.form.phone.$error && !this.$v.form.phone.minLength) {
        return 'Número de celular inválido*'
      }
      return ''
    },
    feedbackBirthdate() {
      if (this.$v.form.birthdate.$error && !this.$v.form.birthdate.required) {
        return 'Campo obrigátorio*'
      }
      if (
        this.$v.form.birthdate.$error &&
        !this.$v.form.birthdate.validateDate
      ) {
        return 'Data inválida*'
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
    feedbackConfirmPassword() {
      if (
        this.$v.form.confirmPassword.$error &&
        !this.$v.form.confirmPassword.required
      ) {
        return 'Campo obrigátorio*'
      }

      if (
        this.$v.form.confirmPassword.$error &&
        !this.$v.form.confirmPassword.sameAs
      ) {
        return 'Confirmação de senha precisa ser igual ao campo senha'
      }
      return ''
    },
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      phone: {
        required,
        minLength: minLength(14),
      },
      birthdate: {
        required,
        validateDate,
      },
      password: { required, minLength: minLength(6) },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('password'),
      },
    },
  },
  methods: {
    async register() {
      this.$v.form.$touch()

      if (this.$v.$invalid) {
        return
      }
      this.loading = true
      try {
        await this.$services.user.register(this.form)
        await this.$auth.loginWith('local', {
          data: { username: this.form.email, password: this.form.password },
        })
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        birthdate: '',
        password: '',
        confirmPassword: '',
      }
    },
  },
}
</script>
