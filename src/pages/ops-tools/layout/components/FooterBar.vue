<script setup lang="ts">
import dayjs from 'dayjs'
const year = dayjs().format('YYYY')
</script>

<template>
  <div class="footer-bar">Copyright ©{{ year }} OPS-Tools</div>
</template>

<style scoped lang="scss">
.footer-bar {
  width: 100%;
  margin: 10px 0;
  font-size: 12px;
  text-align: center;
}
</style>
