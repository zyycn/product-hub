<script setup lang="ts">
interface Route {
  name: string
  path: string
  hidden?: boolean
  meta: {
    title?: string
    icon?: string
  }
  children?: Route[]
}

defineProps({
  routes: {
    type: Array as PropType<Route[]>,
    default: () => []
  }
})

const iconSize = 18
</script>

<template>
  <template v-for="(item, index) in routes">
    <template v-if="!item.hidden">
      <template v-if="item.children?.length">
        <el-sub-menu v-if="item.meta?.title" :key="'el-sub-menu' + index" :index="item.path">
          <template #title>
            <el-icon :size="iconSize">
              <iconify-icon :icon="item.meta.icon" />
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>

          <Menu :routes="item.children" />
        </el-sub-menu>

        <Menu v-else :key="'el-sub-menu-children' + index" :routes="item.children" />
      </template>

      <!-- No Children -->
      <el-menu-item v-else :key="'el-menu-item' + index" :popper-offset="20" :index="item.path">
        <el-icon :size="iconSize">
          <iconify-icon :icon="item.meta.icon" />
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </template>
</template>
