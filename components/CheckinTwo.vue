<template>
  <div>
    <div class="text-center mt-5 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-5">
        Verifique seu whatsapp
      </h1>

      <Icon icon="checkin2" class="h-72 mx-auto px-4" />

      <p class="text-lg px-6 font-medium text-gray-700 leading-snug mb-6">
        Entre com o código de verificação que enviamos para o seu whatsapp
      </p>

      <div class="flex justify-center space-x-2">
        <v-input
          ref="code0"
          :value="code[0]"
          placeholder="0"
          variant="code"
          maxlength="1"
          @input="nextFocus(0, $event)"
          @focus="checkInitialFocus"
        />
        <v-input
          ref="code1"
          :value="code[1]"
          placeholder="0"
          variant="code"
          maxlength="1"
          @input="nextFocus(1, $event)"
          @focus="checkInitialFocus"
        />
        <v-input
          ref="code2"
          :value="code[2]"
          placeholder="0"
          variant="code"
          maxlength="1"
          @input="nextFocus(2, $event)"
          @focus="checkInitialFocus"
        />
        <v-input
          ref="code3"
          v-model="code[3]"
          placeholder="0"
          variant="code"
          maxlength="1"
          @focus="checkInitialFocus"
        />
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
export default {
  data() {
    return {
      loading: false,
      code: [],
    }
  },
  methods: {
    checkInitialFocus() {
      if (this.code && !this.code[0]) {
        this.$refs.code0.$el.focus()
      }
    },
    nextFocus(index, value) {
      if (value === '') {
        return
      }

      this.code[index] = value
      this.$refs['code' + (index + 1)].$el.focus()
    },
    async submit() {
      this.loading = true
      try {
        const code = { code: this.code.join('') }
        await this.$services.user.readValidationCode(code)
        this.$emit('next', 2)
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
