<script setup lang="ts">
import dayjs from 'dayjs'

const year = dayjs().format('YYYY')
</script>

<template>
  <div class="h-full w-full flex flex-justify-center flex-items-center text-12px">
    <el-icon :size="20">
      <iconify-icon icon="openmoji:cup-with-straw"></iconify-icon>
    </el-icon>
    <span>Copyright ©{{ year }} OPS Tools</span>
  </div>
</template>
