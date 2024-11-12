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
        <iconify-icon icon="svg-spinners:wind-toy" />
      </el-icon>
      <span v-show="!collapse">OPS-Tools</span>
    </div>
    <el-scrollbar>
      <el-menu
        :collapse="collapse"
        :default-active="avtiveRoute.path"
        popper-class="menu-popper"
        router
      >
        <Menu :routes="routes" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss">
.menu-popper {
  --el-menu-item-height: 42px;
  --el-menu-base-level-padding: 6px;

  max-height: calc(100vh - 7px);
  margin: 0 4px;
  overflow: scroll;
  scrollbar-width: none;

  .el-menu-item {
    overflow: hidden !important;
    border-radius: 8px;

    &.is-active {
      color: var(--menu-item-active-color);
      background-color: var(--menu-item-active-background-color);
    }

    &:first-child {
      margin-top: 0 !important;
    }

    &:last-child {
      margin-bottom: 0 !important;
    }
  }
}
</style>

<style scoped lang="scss">
.sidebar {
  position: relative;
  box-sizing: border-box;
  height: 100%;
  padding: 0 8px;
  padding-top: 60px;

  .logo {
    position: absolute;
    top: 0;
    left: 50%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 60px;
    overflow: hidden;
    font-size: 18px;
    font-weight: 600;
    color: var(--logo-color);
    transform: translateX(-50%);

    span {
      margin-left: 10px;
      text-wrap: nowrap;
    }
  }

  :deep(.el-scrollbar) {
    height: calc(100vh - 60px);

    .is-vertical {
      right: 0 !important;
    }
  }

  :deep(.el-menu) {
    --el-menu-item-height: 42px;
    --el-menu-sub-item-height: 42px;

    border-right: none;

    &:not(.el-menu--collapse) {
      --el-menu-base-level-padding: 5px;

      width: calc(224px - 16px);
    }

    .el-sub-menu__title,
    .el-menu-item {
      margin: 4px 0 !important;
      overflow: hidden !important;
      color: var(--menu-item-color);
      border-radius: 8px;

      .el-icon {
        transition: transform 0.25s;
      }

      &:hover {
        .el-icon {
          transform: scale(1.2);
        }
      }

      .el-sub-menu__icon-arrow {
        margin-right: 4px;
      }

      &:first-child {
        margin-top: 0 !important;
      }
    }

    .el-sub-menu.is-active .el-sub-menu__title {
      color: var(--menu-item-active-color);
    }

    .el-menu-item.is-active {
      color: var(--menu-item-active-color);
      background-color: var(--menu-item-active-background-color);
    }

    &.el-menu--collapse {
      width: 50px;

      .el-sub-menu {
        border-radius: 8px;
      }

      .el-sub-menu__title,
      .el-menu-tooltip__trigger {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .el-sub-menu.is-active {
        color: var(--menu-item-active-color);
        background-color: var(--menu-item-active-background-color);
      }
    }
  }
}
</style>
