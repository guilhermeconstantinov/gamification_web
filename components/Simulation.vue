<template>
  <div>
    <Icon icon="advantage" class="h-72 mx-auto px-4" />

    <div class="text-center mt-5">
      <h1 class="text-3xl font-bold text-gray-800 mb-5">Simulação</h1>
      <p class="text-lg px-6 font-medium text-gray-700 leading-snug">
        A primeira etapa será o processo de check-in na plataforma, para isso
        enviaremos um QR Code para seu whatsapp
      </p>
      <div class="px-6 mt-5 space-y-5">
        <v-select
          v-model="selectCurso1"
          :options="options"
          placeholder="Selecione uma opção"
          value-attribute="id"
          text-attribute="text"
        />
        <v-select
          v-model="selectCurso2"
          :options="options"
          placeholder="Selecione uma opção"
          value-attribute="id"
          text-attribute="text"
        />
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
</template>

<script>
export default {
  data() {
    return {
      selectCurso1: null,
      selectCurso2: null,
      options: [
        { id: 0, text: 'Administração', value: 'R$1450' },
        { id: 1, text: 'Biologia (Bacharelado)', value: 'R$1450' },
        { id: 2, text: 'Biologia (Licenciatura)', value: 'R$1450' },
        { id: 3, text: 'Biomedicina', value: 'R$1450' },
        { id: 4, text: 'Contabilidade', value: 'R$1450' },
        { id: 5, text: 'Economia', value: 'R$1450' },
        { id: 6, text: 'Educação Física (Bacharelado)', value: 'R$1450' },
        { id: 7, text: 'Educação Física (Licenciatura)', value: 'R$1450' },
        { id: 8, text: 'Enfermagem', value: 'R$1450' },
        { id: 9, text: 'Engenharia Civil', value: 'R$1450' },
        { id: 10, text: 'Engenharia de Computação', value: 'R$1450' },
        { id: 11, text: 'Engenharia de Produção', value: 'R$1450' },
        { id: 12, text: 'Engenharia Elétrica', value: 'R$1450' },
        { id: 13, text: 'Engenharia Mecânica', value: 'R$1450' },
        { id: 14, text: 'Engenharia Química', value: 'R$1450' },
        { id: 15, text: 'Estética (Bacharelado)', value: 'R$1450' },
        { id: 16, text: 'Farmácia', value: 'R$1450' },
        { id: 17, text: 'Fisioterapia', value: 'R$1450' },
        { id: 18, text: 'Odontologia', value: 'R$1450' },
        { id: 19, text: 'Pedagogia', value: 'R$1450' },
        { id: 20, text: 'Psicologia', value: 'R$1450' },
        { id: 21, text: 'Química (Bacharelado)', value: 'R$1450' },
        { id: 22, text: 'Sistemas de Informação', value: 'R$1450' },
      ],
    }
  },
  methods: {
    submit() {
      const form = {
        curso1: this.options[this.selectCurso1],
        curso2: this.options[this.selectCurso2],
      }
      this.$emit('curso', form)
      this.$emit('next')
    },
  },
}
</script>

<style></style>
