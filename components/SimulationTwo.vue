<template>
  <div>
    <v-button variant="link" class="px-3 py-3" @click="$emit('back')">
      <Icon icon="arrow-left" class="w-6" />
    </v-button>

    <div class="space-y-5 py-6">
      <div class="text-center mt-5">
        <h1 class="text-3xl font-bold text-gray-800 mb-5">Simulação</h1>
        <p class="text-lg px-6 font-medium text-gray-700 leading-snug">
          Abaixo é possivel conferir o valor da sua simulação, com base nas
          opções escolhidas na etapa anterior
        </p>
      </div>

      <p class="text-center text-lg sm:text-2xl font-bold text-blue-500">
        {{ result?.condicao?.text }}
      </p>

      <div class="space-y-3 flex flex-col items-center font-bold">
        <div>Opção 1: {{ result?.curso1?.text }}</div>
        <div class="flex space-x-5">
          <div
            class="
              w-56
              bg-green-400
              h-20
              flex flex-col
              justify-center
              p-2
              text-white
              items-center
            "
          >
            <p class="text-2xl">{{ money(valor1) }}/mês</p>
          </div>
        </div>
      </div>
      <div class="space-y-3 flex flex-col items-center font-bold">
        <div>Opção 2: {{ result?.curso2?.text }}</div>
        <div class="flex space-x-5">
          <div
            class="
              w-56
              bg-green-400
              h-20
              flex flex-col
              justify-center
              p-2
              text-white
              items-center
            "
          >
            <p class="text-2xl">{{ money(valor2) }}/mês</p>
          </div>
        </div>
      </div>
      <div>
        <v-button
          variant="principal-rounded"
          class="mx-auto mt-12"
          :disabled="loading"
          @click="submit"
        >
          <Icon v-if="loading" icon="loading" class="text-white" />
          <span v-else>Avançar</span>
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
import { money } from '~/utils/func'
export default {
  props: {
    result: {
      type: Object,
      default: null,
      loading: false,
    },
  },
  computed: {
    valor1() {
      const vlrCurso = this.result?.curso1?.value
      const condicao = this.result?.condicao
      const div = [4, 2, 2]

      return vlrCurso / div[condicao?.cond]
    },
    valor2() {
      const vlrCurso = this.result?.curso2?.value
      const condicao = this.result?.condicao
      const div = [4, 2, 2]

      return vlrCurso / div[condicao?.cond]
    },
  },
  methods: {
    money,
    async submit() {
      this.loading = true

      try {
        await this.$services.user.simulation()
        this.$emit('next', 4)
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style></style>
