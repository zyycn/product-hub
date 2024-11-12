<script setup lang="ts">
import dayjs from 'dayjs'
const year = dayjs().format('YYYY')
</script>

<template>
  <div class="footer-bar">
    <el-icon :size="20">
      <iconify-icon icon="openmoji:cup-with-straw"></iconify-icon>
    </el-icon>
    <span>Copyright ©{{ year }} OPS-Tools</span>
  </div>
</template>

<style scoped lang="scss">
.footer-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 12px;
}
</style>
