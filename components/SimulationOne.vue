<template>
  <div>
    <div class="py-8">
      <Icon icon="advantage" class="h-72 mx-auto px-4" />

      <div class="mt-5">
        <h1 class="text-3xl font-bold text-gray-800 mb-5 text-center">
          Simulação
        </h1>
        <p
          class="
            text-lg
            px-6
            font-medium
            text-gray-700
            leading-snug
            text-center
          "
        >
          A segunda etapa será o processo de simulação na plataforma, após a
          conclusão será possivel retirar um novo brinde
        </p>
        <div class="px-6 mt-5 space-y-5">
          <v-input-group
            :feedback="curso1Feedback"
            :variant="{ danger: curso1Feedback }"
          >
            <v-select
              v-model="form.selectCurso1"
              :options="options"
              placeholder="Selecione uma opção"
              :variant="{ danger: curso1Feedback }"
              value-attribute="id"
              text-attribute="text"
            />
          </v-input-group>
          <v-input-group
            :feedback="curso2Feedback"
            :variant="{ danger: curso2Feedback }"
          >
            <v-select
              v-model="form.selectCurso2"
              :options="options"
              placeholder="Selecione uma opção"
              :variant="{ danger: curso2Feedback }"
              value-attribute="id"
              text-attribute="text"
            />
          </v-input-group>
          <v-input-group
            :feedback="condicaoFeedback"
            :variant="{ danger: condicaoFeedback }"
          >
            <v-select
              v-model="form.selectCondicao"
              :options="options2"
              placeholder="Selecione uma opção"
              :variant="{ danger: condicaoFeedback }"
              value-attribute="cond"
              text-attribute="text"
            />
          </v-input-group>
        </div>
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
import { required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      form: {
        selectCurso1: null,
        selectCurso2: null,
        selectCondicao: null,
      },
      options: [
        { id: 0, text: 'Administração', value: 1558.04 },
        { id: 1, text: 'Biologia (Bacharelado)', value: 1558.04 },
        { id: 2, text: 'Biologia (Licenciatura)', value: 1558.04 },
        { id: 3, text: 'Biomedicina', value: 2021.3 },
        { id: 4, text: 'Contabilidade', value: 1558.04 },
        { id: 5, text: 'Economia', value: 1558.04 },
        { id: 6, text: 'Educação Física (Bacharelado)', value: 1558.04 },
        { id: 7, text: 'Educação Física (Licenciatura)', value: 1558.04 },
        { id: 8, text: 'Enfermagem', value: 1655.17 },
        { id: 9, text: 'Engenharia Civil', value: 2021.3 },
        { id: 10, text: 'Engenharia de Computação', value: 2021.3 },
        { id: 11, text: 'Engenharia de Produção', value: 2021.3 },
        { id: 12, text: 'Engenharia Elétrica', value: 2021.3 },
        { id: 13, text: 'Engenharia Mecânica', value: 2021.3 },
        { id: 14, text: 'Engenharia Química', value: 2021.3 },
        { id: 15, text: 'Estética (Bacharelado)', value: 1558.04 },
        { id: 16, text: 'Farmácia', value: 1825.36 },
        { id: 17, text: 'Fisioterapia', value: 1825.36 },
        { id: 18, text: 'Odontologia', value: 2580.73 },
        { id: 19, text: 'Pedagogia', value: 1094.79 },
        { id: 20, text: 'Psicologia', value: 1740.62 },
        { id: 21, text: 'Química (Bacharelado)', value: 1558.04 },
        { id: 22, text: 'Sistemas de Informação', value: 1558.04 },
      ],
      options2: [
        { cond: 0, text: 'Com Bolsa de 50% + Financiamento = 25%' },
        { cond: 1, text: 'Com Bolsa 50%' },
        { cond: 2, text: 'Sem Bolsa + Financiamento' },
      ],
    }
  },
  validations: {
    form: {
      selectCurso1: {
        required,
      },
      selectCurso2: {
        required,
      },
      selectCondicao: {
        required,
      },
    },
  },
  computed: {
    curso1Feedback() {
      if (
        this.$v.form.selectCurso1.$error &&
        !this.$v.form.selectCurso1.required
      ) {
        return 'Campo obrigatório'
      }
      return ''
    },
    curso2Feedback() {
      if (
        this.$v.form.selectCurso2.$error &&
        !this.$v.form.selectCurso2.required
      ) {
        return 'Campo obrigatório'
      }
      return ''
    },
    condicaoFeedback() {
      if (
        this.$v.form.selectCondicao.$error &&
        !this.$v.form.selectCondicao.required
      ) {
        return 'Campo obrigatório'
      }
      return ''
    },
  },
  methods: {
    submit() {
      const form = {
        curso1: this.options[this.form.selectCurso1],
        curso2: this.options[this.form.selectCurso2],
        condicao: this.options2[this.form.selectCondicao],
      }
      this.$v.$touch()
      if (this.$v.form.$invalid) {
        return
      }
      this.$emit('curso', form)
      this.$emit('next', 3.5)
    },
  },
}
</script>

<style></style>
