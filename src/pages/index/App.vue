<script setup lang="ts">
import dayjs from 'dayjs'
import TEST from './components/TEST.vue'
</script>

<template>
  <div>
    <span>Hello World</span>

    <TEST />

    {{ dayjs().format('YYYY-MM-DD HH:mm:ss') }}
  </div>
</template>

<style scoped></style>
