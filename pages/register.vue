<template>
  <div>
    <v-button variant="blank" @click="back">
      <div class="p-2">
        <Icon icon="arrow-left" class="w-6" />
      </div>
    </v-button>

    <div class="px-4 py-12">
      <img src="~/assets/img/logo.png" class="w-64 mx-auto mb-10" />

      <form @submit.prevent="next">
        <div v-if="step === 1" class="grid grid-cols-12 gap-5">
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

          <v-input-group
            class="col-span-12"
            :feedback="feedbackGender"
            :variant="{ danger: feedbackGender }"
          >
            <v-select
              v-model="form.gender"
              placeholder="Selecione um gênero"
              :variant="{ danger: feedbackGender }"
              :options="options"
            />
          </v-input-group>
        </div>

        <div v-if="step == 2" class="grid grid-cols-12 gap-5">
          <div class="col-span-12">
            <h2 class="text-2xl font-medium">Questionário</h2>
          </div>

          <v-input-group class="col-span-12 py-5">
            <h2>Você está cursando o ensino médio?</h2>
            <div class="mt-5">
              <v-radio
                v-model="form2.highSchool"
                wrapped
                label="Sim"
                :value="true"
                name="educationLevel"
              />

              <v-radio
                v-model="form2.highSchool"
                wrapped
                label="Não"
                :value="false"
                name="educationLevel"
              />
            </div>
          </v-input-group>

          <v-input-group class="col-span-12">
            <h2>Você está cursando qual ano do ensino médio?</h2>
            <div class="mt-5">
              <v-radio
                v-model="form2.schoolYear"
                wrapped
                :disabled="!form2.highSchool"
                label="Primeiro ano"
                :value="1"
                name="schoolYear"
              />

              <v-radio
                v-model="form2.schoolYear"
                wrapped
                :disabled="!form2.highSchool"
                label="Segundo ano"
                :value="2"
                name="schoolYear"
              />

              <v-radio
                v-model="form2.schoolYear"
                wrapped
                :disabled="!form2.highSchool"
                label="Terceiro ano"
                :value="3"
                name="schoolYear"
              />

              <v-radio
                v-model="form2.schoolYear"
                wrapped
                label="Não estou no ensino médio"
                :value="4"
                name="schoolYear"
              />
            </div>
          </v-input-group>

          <v-input-group class="col-span-12">
            <h2>Você possui interesse em fazer um curso superior?</h2>
            <div class="mt-5">
              <v-radio
                v-model="form2.undergraduateProgram"
                wrapped
                label="Sim"
                :value="true"
                name="undergraduateProgram"
              />

              <v-radio
                v-model="form2.undergraduateProgram"
                wrapped
                label="Não"
                :value="false"
                name="undergraduateProgram"
              />
            </div>
          </v-input-group>

          <div
            v-if="$v.form2.$error"
            class="col-span-12 py-5 bg-red-400 text-center text-white"
          >
            Responda todas as perguntas para continuar
          </div>
        </div>

        <v-button variant="principal" class="w-full mt-10" :disabled="loading">
          <Icon v-if="loading" icon="loading" class="text-white w-5" />
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
      step: 1,
      form: {
        name: '',
        email: '',
        phone: '',
        birthdate: '',
        password: '',
        confirmPassword: '',
        gender: null,
      },
      form2: {
        highSchool: null,
        schoolYear: null,
        undergraduateProgram: null,
      },
      options: [
        { text: 'Masculino', value: 'M' },
        { text: 'Feminino', value: 'F' },
        { text: 'Outros', value: 'O' },
      ],
    }
  },
  computed: {
    feedbackGender() {
      if (this.$v.form.gender.$error && !this.$v.form.gender.required) {
        return 'Campo obrigátorio*'
      }
      return ''
    },
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
      gender: {
        required,
      },
      password: { required, minLength: minLength(6) },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('password'),
      },
    },
    form2: {
      highSchool: { required },
      schoolYear: { required },
      undergraduateProgram: { required },
    },
  },
  methods: {
    async register() {
      this.loading = true
      try {
        const body = {
          ...this.form,
          high_school: this.form2.highSchool,
          school_year:
            this.form2.schoolYear === 4 ? null : this.form2.schoolYear,
          undergraduate_program: this.form2.undergraduateProgram,
        }

        await this.$services.user.register(body)
        await this.$auth.loginWith('local', {
          data: { username: this.form.email, password: this.form.password },
        })
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    async next() {
      this.$v.form.$touch()

      if (this.$v.form.$invalid) {
        return
      }

      if (this.step === 1) {
        this.step++
        return
      }

      this.$v.form2.$touch()

      if (this.$v.form2.$invalid) {
        return
      }

      await this.register()
    },
    back() {
      this.step--
      if (this.step === 0) {
        this.$router.push({ name: 'login' })
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
