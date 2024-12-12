<script setup lang="ts">
const pages = __APP_INFO__.PAGES.map(page => {
  return {
    ...page,
    iconLink: new URL(page.data?.icon, import.meta.url).href
  }
})
const createLink = (info: { name: string }) => {
  return new URL(`${info.name}.html#/`, window.location.href).href
}
</script>

<template>
  <div class="dev-page relative box-border h-screen w-screen overflow-hidden px-30 pb-10">
    <div class="flex items-center justify-start">
      <div class="my-14 ml-8 text-[22px] font-bold">PROJECT PAGES：</div>
      <el-icon :size="22">
        <iconify-icon icon="twemoji:sparkles" />
      </el-icon>
    </div>
    <el-table
      class="relative z-2 rounded-[10px] border border-solid border-[#f4f4f5] bg-[#fff]"
      :data="pages"
      stripe
      size="large"
    >
      <el-table-column label="页面名称">
        <template #default="{ row }">
          <div class="flex items-center">
            <el-icon :size="22" class="mr-10">
              <iconify-icon icon="openmoji:glowing-star" />
            </el-icon>
            <span>{{ row.data.title }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="页面地址" show-overflow-tooltip>
        <template #default="scope">
          <div class="flex items-center">
            <el-icon :size="16" class="mr-5">
              <iconify-icon icon="openmoji:high-voltage" />
            </el-icon>
            <el-link target="_blank" :href="createLink(scope.row)">
              {{ createLink(scope.row) }}
            </el-link>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.dev-page {
  --el-font-size-base: 12px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    content: '';
    background: url('@/pages/index/assets/imgs/texture.png');
  }

  .el-table {
    --el-table-bg-color: transparent;
    --el-bg-color: transparent;
    --el-border-color-lighter: transparent;
    --el-fill-color-light: transparent;
    --el-fill-color-lighter: transparent;
  }
}
</style>
