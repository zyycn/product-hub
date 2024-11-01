<script setup lang="ts">
import Breadcrumb from './Breadcrumb.vue'
import Controller from './Controller.vue'
import { useAppStore } from '@/pages/ops-tools/store'

const store = useAppStore()
const { collapse } = storeToRefs(store)
</script>

<template>
  <div class="navbar">
    <div class="left">
      <el-icon :class="{ 'el-icon--collapsed': collapse }" @click="store.setCollapse(!collapse)">
        <iconify-icon icon="clarity:collapse-line" />
      </el-icon>

      <Breadcrumb />
    </div>

    <div class="right">
      <Controller />
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .el-icon {
    margin-right: 20px;
    cursor: pointer;
    transform: rotateZ(-90deg);

    &--collapsed {
      transform: rotateZ(90deg);
    }
  }
}
</style>
