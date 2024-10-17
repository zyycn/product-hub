<template>
  <VueParticles id="tsparticles" :options="options" />
</template>

<script lang="ts">
import configs from '@tsparticles/configs'
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

export default {
  components: {
    VueParticles: Particles(this, {
      init: async engine => {
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
    async particlesInit(engine) {
      await loadSlim(engine)
    }
  }
}
</script>
