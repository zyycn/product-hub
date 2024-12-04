<script setup lang="ts">
import { useFullscreen, useDark, useToggle } from '@vueuse/core'

const { toggle, isFullscreen } = useFullscreen()

const isDark = useDark()
const toggleDark = () => {
  document.startViewTransition(() => {
    useToggle(isDark)()
  })
}
</script>

<template>
  <div class="flex items-center">
    <el-icon :size="28" @click="toggle">
      <iconify-icon v-if="!isFullscreen" icon="openmoji:toggle-button" />
      <iconify-icon v-else icon="openmoji:toggle-button-state-b" />
    </el-icon>

    <el-icon :size="24" @click="toggleDark">
      <iconify-icon v-if="!isDark" icon="openmoji:sun" />
      <iconify-icon v-else icon="openmoji:star-and-crescent" />
    </el-icon>

    <el-avatar class="ml-10px" :size="34" shape="square">
      <el-icon :size="34">
        <iconify-icon icon="openmoji:hacker-cat" />
      </el-icon>
    </el-avatar>
  </div>
</template>

<style scoped lang="scss">
.el-icon {
  margin: 0 5px;
  cursor: pointer;
}
</style>
