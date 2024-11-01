<script setup lang="ts">
interface Route {
  name: string
  path: string
  meta: {
    title: string
    icon: string
  }
  children?: Route[]
  isHide?: boolean
}

defineProps({
  routes: {
    type: Array as PropType<Route[]>,
    default: () => []
  }
})
</script>

<template>
  <template v-for="(item, index) in routes">
    <el-sub-menu v-if="item.name && item.children" :key="'el-sub-menu' + index" :index="item.path">
      <template #title>
        <el-icon>
          <iconify-icon :icon="item.meta.icon" />
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <!-- 循环二级 -->
      <Menu :routes="item.children" />
    </el-sub-menu>

    <Menu v-else-if="item.children" :key="'el-sub-menu-children' + index" :routes="item.children" />

    <!-- 没有子菜单的 -->
    <el-menu-item v-else :key="'el-menu-item' + index" :popper-offset="20" :index="item.path">
      <el-icon>
        <iconify-icon :icon="item.meta.icon" />
      </el-icon>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
