<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
let value1 = ref(true)
</script>

<template>
  <div class="lock">
    <h1>锁屏</h1>

    <el-icon :size="120">
      <icon-mdi-account />
    </el-icon>

    <el-switch
      v-model="value1"
      size="large"
      inline-prompt
      active-text="是"
      inactive-text="否"
      @change="toggleDark"
    />
  </div>
</template>
