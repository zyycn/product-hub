<script setup lang="ts">
const route = useRoute()
const routeMatched = computed(() => {
  return route?.matched.filter(item => item.meta && item.meta.title)
})
</script>

<template>
  <div class="breadcrumb">
    <el-breadcrumb>
      <transition-group name="breadcrumb" appear>
        <el-breadcrumb-item v-for="item in routeMatched" :key="item.path" :to="{ path: item.path }">
          <el-icon :size="18">
            <iconify-icon :icon="item.meta.icon" />
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  :deep(.el-breadcrumb) {
    .el-breadcrumb__inner {
      display: flex;
      align-items: center;
      font-size: 14px;
    }
  }

  .el-icon {
    margin-right: 6px;
  }
}
</style>
