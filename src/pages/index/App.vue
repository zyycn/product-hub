<script setup lang="ts">
const pages = __APP_PAGES__
</script>

<template>
  <div class="dev-page">
    <DataTable :value="pages" size="large">
      <Column field="name" header="目标页面名称"></Column>
      <Column header="Category">
        <template #body="{ data }">
          {{ data.data.title }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style lang="scss" scoped>
.dev-page {
  padding: 10px 50px;
  overflow: hidden;
  font-family: 'Microsoft YaHei', sans-serif;
}
</style>
