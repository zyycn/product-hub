<script setup lang="ts">
const pages = __APP_PAGES__

const createLink = (info: { name: string }) => {
  const appName = ''
  return `${window.location.protocol}//${window.location.host}${appName}/${info.name}.html#/`
}
</script>

<template>
  <div class="dev-page">
    <div class="page-header">
      <h3 class="title">项目路由地图：</h3>
    </div>
    <el-table :data="pages" border>
      <el-table-column label="页面名称">
        <template #default="{ row }">
          {{ row.data.title }}
        </template>
      </el-table-column>
      <el-table-column label="页面地址" show-overflow-tooltip>
        <template #default="scope">
          <a target="_blank" :href="createLink(scope.row)">
            {{ createLink(scope.row) }}
          </a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.dev-page {
  padding: 10px 30px;
  overflow: hidden;
  font-family: 'Microsoft YaHei', sans-serif;

  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
