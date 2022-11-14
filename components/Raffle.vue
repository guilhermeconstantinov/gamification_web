<template>
  <div>
    <div class="w-5/6 mx-auto text-center mt-10 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-5">Sorteio de prêmio</h1>

      <div class="border border-gray-100 py-6 pl-5 pr-2">
        <div class="h-96 overflow-y-auto pr-5 scrollbar">
          <h2 class="text-center text-lg font-medium mb-5">Termos de Uso</h2>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            bibendum, eros eu tincidunt pellentesque, leo leo congue ex, sed
            suscipit ante quam a nibh. Duis fermentum, lacus ut congue eleifend,
            augue risus interdum sapien, tempus egestas ante magna a quam. Etiam
            accumsan volutpat luctus. Vivamus laoreet suscipit diam, a feugiat
            massa bibendum et. Donec accumsan fringilla ultricies. Phasellus
            venenatis sapien a nisi accumsan, ac faucibus dolor imperdiet. Fusce
            fringilla sapien semper dapibus sagittis. Vivamus eleifend volutpat
            lectus. Donec cursus dictum justo eget fringilla. Curabitur sit amet
            ullamcorper diam, at auctor arcu. Integer nec consectetur leo.
            Integer lacinia lacus tortor, ut egestas risus sollicitudin in. Nunc
            tempor tincidunt risus, sed laoreet ipsum dapibus a. Sed dignissim
            augue ut nibh rutrum pharetra efficitur non nulla. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Praesent nunc nisi, mattis eu erat vel, varius laoreet
            ipsum. Pellentesque turpis erat, tempor et pretium in, venenatis vel
            lectus. Donec gravida purus vitae iaculis sodales. Nullam dui est,
            sagittis luctus semper et, lobortis id erat. Maecenas in tincidunt
            quam. Vestibulum sollicitudin diam non ligula dapibus, id placerat
            lorem interdum. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Sed sagittis odio nec
            euismod lacinia. Morbi volutpat nulla vel orci ullamcorper
            vestibulum. Suspendisse maximus dapibus dolor, a gravida risus
            feugiat quis. Aliquam erat volutpat. Integer mollis dapibus metus a
            eleifend. Quisque efficitur tellus vel est molestie aliquam. Fusce
            consequat nisi risus, eget sodales quam maximus non. Etiam in nulla
            placerat, condimentum risus vel, molestie ex. Proin nec lorem
            viverra, suscipit est id, ultrices lacus. Nullam quis sapien vel
            turpis eleifend ullamcorper ac a turpis. Integer malesuada cursus
            rutrum. Sed quis fringilla arcu, vel mattis justo. Duis imperdiet
            maximus diam ac hendrerit.
          </p>
        </div>
      </div>

      <div class="mt-5">
        <v-checkbox
          v-model="acceptTerms"
          wrapped
          label="Aceito os termos de uso"
        />
      </div>

      <v-button
        variant="principal-rounded"
        class="mx-auto mt-12"
        :disabled="loading || !acceptTerms"
        @click="submit"
      >
        <Icon v-if="loading" icon="loading" class="text-white w-5" />
        <span v-else>Avançar</span>
      </v-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      acceptTerms: false,
    }
  },
  computed: {
    qrcode() {
      if (this.$auth?.user?.access_codes[1]?.code) {
        return this.$auth?.user?.access_codes[1]?.code
      }
      return ''
    },
  },
  methods: {
    async submit() {
      this.loading = true
      try {
        await this.$services.user.generateNumber()
        await this.$auth.fetchUser()

        this.$emit('next', 6)
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style>
.scrollbar::-webkit-scrollbar {
  @apply w-2 bg-gray-200 rounded-full h-2;
}

.scrollbar::-webkit-scrollbar-thumb {
  @apply rounded-full bg-blue-500;
}
</style>
