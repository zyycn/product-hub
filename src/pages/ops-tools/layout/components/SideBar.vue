<script setup lang="ts">
import { useAppStore } from '@/pages/ops-tools/store'

const store = useAppStore()
const { collapse } = storeToRefs(store)
</script>

<template>
  <div class="side-bar">
    <div class="logo">
      <el-icon :size="32">
        <icon-LogosApostrophe />
      </el-icon>
      <span v-show="!collapse">OPS-Tools</span>
    </div>
    <el-scrollbar>
      <el-menu default-active="1" :collapse="collapse" popper-class="menu-popper">
        <el-sub-menu index="1">
          <template #title>
            <el-icon size="17">
              <icon-PajamasOverview />
            </el-icon>
            <span>概览</span>
          </template>
          <el-menu-item index="1-1">
            <el-icon size="17"> <icon-CarbonWorkspace /></el-icon>
            <template #title>工作台</template>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="11">
          <template #title>
            <el-icon size="17">
              <icon-PajamasOverview />
            </el-icon>
            <span>概览</span>
          </template>
          <el-menu-item index="1-11">
            <el-icon size="17"> <icon-CarbonWorkspace /></el-icon>
            <template #title>工作台</template>
          </el-menu-item>
        </el-sub-menu>
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
.side-bar {
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
      --el-menu-base-level-padding: 6px;

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

        .el-sub-menu__title {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .el-sub-menu.is-active {
        color: var(--menu-item-active-color);
        background-color: var(--menu-item-active-background-color);
      }
    }
  }
}
</style>
