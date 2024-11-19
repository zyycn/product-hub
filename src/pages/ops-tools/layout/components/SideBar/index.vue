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
  <div class="sidebar">
    <div class="logo">
      <el-icon :size="32">
        <iconify-icon icon="unjs:undocs" />
      </el-icon>
      <span v-show="!collapse">OPS Tools</span>
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
  position: relative;
  box-sizing: border-box;
  height: 100%;
  padding-top: 40px;

  .logo {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 1;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 50px;
    overflow: hidden;
    font-size: 18px;
    font-weight: 600;
    color: var(--logo-color);
    transform: translateX(-50%);

    span {
      margin-right: 10px;
      margin-left: 10px;
      text-wrap: nowrap;
    }
  }

  :deep(.el-scrollbar) {
    height: calc(100vh - 40px);

    .is-vertical {
      right: 0 !important;
    }
  }
}
</style>
