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
  <div class="controller">
    <el-icon size="20" @click="toggle">
      <iconify-icon v-if="!isFullscreen" icon="mingcute-fullscreen-line" />
      <iconify-icon v-else icon="mingcute-fullscreen-exit-line" />
    </el-icon>

    <el-icon size="20" @click="toggleDark">
      <iconify-icon v-if="!isDark" icon="line-md:sunny-outline" />
      <iconify-icon v-else icon="line-md:moon-simple" />
    </el-icon>

    <el-avatar :size="36">
      <iconify-icon icon="icon-park-solid:avatar" />
    </el-avatar>
  </div>
</template>

<style scoped lang="scss">
.controller {
  display: flex;
  align-items: center;

  .el-icon {
    margin: 0 5px;
    cursor: pointer;
  }

  .el-avatar {
    margin-left: 10px;
  }
}
</style>
