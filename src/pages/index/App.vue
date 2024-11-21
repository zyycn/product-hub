<script setup lang="ts">
// eslint-disable-next-line no-undef
const pages = __APP_PAGES__.filter(item => !item.data?.hidden)

const createLink = (info: { name: string }) => {
  const appName = ''
  return `${window.location.protocol}//${window.location.host}${appName}/${info.name}.html#/`
}
</script>

<template>
  <div class="dev-page pos-relative box-border h-screen w-screen overflow-hidden px-30px pb-10px">
    <div class="flex flex-justify-start flex-items-center">
      <h3>PROJECT PAGES：</h3>
      <el-icon :size="22">
        <iconify-icon icon="twemoji:rocket"></iconify-icon>
      </el-icon>
    </div>
    <el-table class="pos-relative pos-z-2 border-rounded-10px text-12px" :data="pages" stripe size="large">
      <el-table-column label="页面名称">
        <template #default="{ row }">
          <div class="flex flex-items-center">
            <el-icon :size="22" class="mr-10px">
              <iconify-icon icon="openmoji:glowing-star" />
            </el-icon>
            <span>{{ row.data.title }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="页面地址" show-overflow-tooltip>
        <template #default="scope">
          <div class="flex flex-items-center">
            <el-icon :size="16" class="mr-5px">
              <iconify-icon icon="openmoji:high-voltage" />
            </el-icon>
            <a target="_blank" :href="createLink(scope.row)">
              {{ createLink(scope.row) }}
            </a>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.dev-page {
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
    background-color: #fffffb;
  }
}
</style>
