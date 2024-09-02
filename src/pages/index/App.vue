<script setup lang="ts">
import { setRootFontSize } from '@/plugins/utils'

onMounted(() => {
  console.log(1111)
  setRootFontSize(1280, 1920)
})
</script>

<template>
  <div class="aaa">
    <input class="input" type="text" placeholder="请输入" />
    <div class="autoplacement-example">
      <div v-for="i in 10" :key="i" class="item"></div>
    </div>
  </div>
</template>

<style>
body {
  font-family: system-ui;
}

:root {
  --mainColor: #12345678;
}
</style>

<style lang="scss" scoped>
.aaa {
  font-family: system-ui;
  color: var(--mainColor);
  overflow-wrap: break-word;

  .input::placeholder {
    color: red;
  }

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

  // .autoplacement-example {
  //   display: grid;
  //   grid-template-rows: auto auto;
  //   grid-template-columns: 1fr 1fr;
  //   grid-gap: 20px;
  // }
}
</style>
