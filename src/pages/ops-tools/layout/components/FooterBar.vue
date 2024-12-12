<script setup lang="ts">
import dayjs from 'dayjs'

const year = dayjs().format('YYYY')
</script>

<template>
  <div class="flex h-full w-full items-center justify-center text-[12px]">
    <el-icon :size="20">
      <iconify-icon icon="openmoji:cup-with-straw"></iconify-icon>
    </el-icon>
    <span class="relative top-1">Copyright ©{{ year }} OPS Tools</span>
  </div>
</template>
