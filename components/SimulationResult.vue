<template>
  <div class="flex flex-col items-center space-y-5">
    <div class="text-center mt-5">
      <h1 class="text-3xl font-bold text-gray-800 mb-5">Simulação</h1>
      <p class="text-lg px-6 font-medium text-gray-700 leading-snug">
        Abaixo é possivel conferir o valor da sua simulação, com base nas opções escolhidas na etapa anterior
      </p>
    </div>
    <p class="text-lg sm:text-2xl font-bold text-blue-500">{{result?.condicao?.text}}</p>
    <div class="space-y-3 flex flex-col items-center font-bold">
      <div>Opção 1: {{ result?.curso1?.text }}</div>
      <div class="flex space-x-5">
        <div class="w-56 bg-green-400 h-20 flex flex-col justify-center p-2 text-white items-center">
          <p class="text-2xl">{{ money(valor1) }}/mês</p>
        </div>
      </div>
    </div>
    <div class="space-y-3 flex flex-col items-center font-bold">
      <div>Opção 2: {{ result?.curso2?.text }}</div>
      <div class="flex space-x-5">
        <div class="w-56 bg-green-400 h-20 flex flex-col justify-center p-2 text-white items-center">
          <p class="text-2xl">{{ money(valor2) }}/mês</p>
        </div>
      </div>
    </div>
    <div>
      <v-button
        variant="principal-rounded"
        class="mx-auto mt-12"
        @click="$emit('next')"
      >
        Avançar
      </v-button>
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
    },
  },
  computed:{
    valor1(){
      if(this.result?.condicao?.cond === 0){
         return this.result?.curso1?.value / 4
      }
      if(this.result?.condicao?.cond === 1){
        return this.result?.curso1?.value / 2
      }
      if(this.result?.condicao?.cond === 2){
        return this.result?.curso1?.value / 2
      }
      return this.result?.curso1?.value
    },
    valor2(){
      if(this.result?.condicao?.cond === 0){
        return this.result?.curso2?.value / 4
      }
      if(this.result?.condicao?.cond === 1){
        return this.result?.curso2?.value / 2
      }
      if(this.result?.condicao?.cond === 2){
        return this.result?.curso2?.value / 2
      }
      return this.result?.curso2?.value
    }
  },
  methods:{
    money
  }
}
</script>

<style></style>
