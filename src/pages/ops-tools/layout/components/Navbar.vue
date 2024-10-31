<script setup lang="ts">
import { useAppStore } from '@/pages/ops-tools/store'

const store = useAppStore()
const { collapse } = storeToRefs(store)
</script>

<template>
  <div class="navbar">
    <el-icon :class="{ 'el-icon--collapsed': collapse }" @click="store.setCollapse(!collapse)">
      <icon-ClarityCollapseLine />
    </el-icon>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  .el-icon {
    cursor: pointer;
    transform: rotateZ(-90deg);

    &--collapsed {
      transform: rotateZ(90deg);
    }
  }
}
</style>
