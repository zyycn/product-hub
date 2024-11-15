<template>
  <el-config-provider v-bind="config">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

const config = {
  locale: zhCn,
  button: {
    autoInsertSpace: true
  },
  message: {
    max: 3,
    grouping: true
  }
}
</script>
