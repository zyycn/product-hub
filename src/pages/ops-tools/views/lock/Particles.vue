<template>
  <VueParticles id="tsparticles" :options="options" />
</template>

<script lang="ts">
import configs from '@tsparticles/configs'
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

export default {
  components: {
    VueParticles: Particles(this:any, {
      init: async (engine: any) => {
        await loadSlim(engine)
      }
    })
  },
  data() {
    return {
      options: configs.bubble
    }
  },
  methods: {
    async particlesInit(engine: any) {
      await loadSlim(engine)
    }
  }
}
</script>

<style lang="scss" scoped></style>
