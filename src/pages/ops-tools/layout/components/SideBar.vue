<script setup lang="ts">
import { useAppStore } from '@/pages/ops-tools/store'

const store = useAppStore()
const { collapse } = storeToRefs(store)
</script>

<template>
  <el-menu default-active="1" :collapse="collapse">
    <el-sub-menu index="2-1">
      <template #title>
        <el-icon>
          <icon-CarbonWorkspace />
        </el-icon>
        <span>工作台</span>
      </template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item v-for="i in 40" :key="i" :index="i.toString()">选项{{ i }}</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">
      <el-icon> <icon-CarbonWorkspace /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
.el-menu {
  overflow: hidden !important;
  border-right: none;

  &:not(.el-menu--collapse) {
    width: 224px;

    .collapse {
      padding: 0 4px;
      text-align: right;
    }
  }
}
</style>
