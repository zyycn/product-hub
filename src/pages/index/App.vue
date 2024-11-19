<script setup lang="ts">
// eslint-disable-next-line no-undef
const pages = __APP_PAGES__

const createLink = (info: { name: string }) => {
  const appName = ''
  return `${window.location.protocol}//${window.location.host}${appName}/${info.name}.html#/`
}
</script>

<template>
  <div class="dev-page box-border h-screen w-screen overflow-hidden px-30px py-10px">
    <div class="flex flex-justify-between flex-items-center">
      <h3>项目路由地图：</h3>
    </div>
    <el-table class="border-rounded-10px text-12px" :data="pages" stripe border size="large">
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
  background: linear-gradient(154deg, #07070915 30%, #006be64d, #07070915 64%);
}
</style>
