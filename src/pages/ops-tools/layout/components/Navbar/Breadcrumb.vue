<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'

const route = useRoute()

const routeMatched = computed(() => {
  return route?.matched.filter(item => item.meta && item.meta.title)
})
</script>

<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="item in routeMatched" :key="item.path" :to="{ path: item.path }">
        <el-icon :size="18">
          <iconify-icon :icon="item.meta.icon" />
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  :deep(.el-breadcrumb) {
    .el-breadcrumb__inner {
      display: inline-flex;
      align-items: center;
    }
  }

  .el-icon {
    margin-right: 6px;
  }
}
</style>
