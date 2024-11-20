<script setup lang="ts">
import { cloneDeep } from 'lodash-es'
import Menu from './Menu.vue'
import { useAppStore } from '@/pages/ops-tools/store'
import router from '@/pages/ops-tools/router'

const routes = cloneDeep(router.options.routes)

const store = useAppStore()
const { collapse } = storeToRefs(store)

const avtiveRoute = computed(() => {
  return useRoute()
})
</script>

<template>
  <div class="sidebar pos-relative box-border h-full p-t-40px">
    <div class="logo">
      <el-icon :size="32">
        <iconify-icon icon="unjs:undocs" />
      </el-icon>
      <span v-show="!collapse" class="mx-10px text-nowrap">OPS Tools</span>
    </div>
    <el-scrollbar>
      <el-menu
        class="menu-popper"
        :collapse="collapse"
        :default-active="avtiveRoute.path"
        :popper-offset="15"
        popper-class="menu-popper"
        router
      >
        <Menu :routes="routes" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss">
@mixin el-menu {
  --el-menu-item-height: 42px;
  --el-menu-sub-item-height: 42px;
  --el-menu-base-level-padding: 10px;
  --el-menu-level-padding: 15px;

  box-sizing: border-box;
  padding: 8px;
  border-right: none;
  border-radius: 5px;

  .el-sub-menu__title,
  .el-menu-item {
    margin-top: 4px;
    color: var(--menu-item-color);
    border-radius: 8px;

    .iconify {
      transition: transform 0.25s;
    }

    &:hover {
      .iconify {
        transform: scale(1.2);
      }
    }

    .el-sub-menu__icon-arrow {
      margin-right: 4px;
    }

    span {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .el-sub-menu.is-active > .el-sub-menu__title {
    color: var(--menu-item-active-color);
  }

  .el-menu-item.is-active {
    color: var(--menu-item-active-color);
    background-color: var(--menu-item-active-background-color);
  }

  &.el-menu--collapse {
    width: 60px;

    .el-sub-menu {
      border-radius: 8px;
    }

    .el-sub-menu.is-active {
      color: var(--menu-item-active-color);
      background-color: var(--menu-item-active-background-color);
    }
  }
}

.menu-popper {
  &.el-menu {
    @include el-menu;

    &:not(.el-menu--collapse) {
      width: 224px;
    }
  }

  &.el-popper .el-menu {
    @include el-menu;

    .el-menu-item:first-child {
      margin-top: 0;
    }

    width: 224px;
  }
}
</style>

<style scoped lang="scss">
.sidebar {
  .logo {
    --at-apply: 'pos-absolute pos-left-50% pos-top-0 pos-z-1 h-50px flex transform-translate-x--50% flex-items-center overflow-hidden text-18px color-[var(--logo-color)] font-600';
  }

  :deep(.el-scrollbar) {
    height: calc(100vh - 40px);

    .is-vertical {
      right: 0 !important;
    }
  }
}
</style>
