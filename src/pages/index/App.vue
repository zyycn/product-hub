<script setup lang="ts">
import { setRootFontSize } from '@/utils'

onMounted(() => {
  setRootFontSize(1280, 1920)
})
</script>

<template>
  <div class="aaa">
    <input class="input" type="text" placeholder="请输入" />
    <div class="autoplacement-example">
      <div v-for="i in 10" :key="i" class="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aaa {
  .autoplacement-example {
    display: flex;
    justify-content: space-between;

    .item {
      width: 100px;
      height: 100px;
      margin: 2px;
      background-color: #000;
    }
  }
}
</style>
