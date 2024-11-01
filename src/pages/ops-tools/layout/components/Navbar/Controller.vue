<script setup lang="ts">
import { useFullscreen, useDark, useToggle } from '@vueuse/core'

const { toggle, isFullscreen } = useFullscreen()

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="controller">
    <el-icon size="20" @click="toggle">
      <icon-MingcuteFullscreenLine v-if="!isFullscreen" />
      <icon-MingcuteFullscreenExitLine v-else />
    </el-icon>

    <el-icon size="20" @click="toggleDark()">
      <icon-MingcuteSunLine v-if="!isDark" />
      <icon-MingcuteMoonLine v-else />
    </el-icon>

    <el-avatar :size="36">
      <icon-IconParkSolidAvatar />
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
