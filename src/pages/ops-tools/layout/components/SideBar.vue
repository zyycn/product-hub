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
            <el-icon size="16">
              <icon-PajamasOverview />
            </el-icon>
            <span>概览</span>
          </template>
          <el-menu-item index="1-1">
            <el-icon size="16"> <icon-CarbonWorkspace /></el-icon>
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

  max-height: calc(100vh - 7px);
  overflow: scroll;
  scrollbar-width: none;

  .el-menu-item {
    box-sizing: border-box;
    margin: 4px 7px !important;
    overflow: hidden !important;
    border-radius: 5px;

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
  height: 100%;

  .logo {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    font-size: 18px;
    font-weight: bold;

    span {
      margin-left: 10px;
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
      --el-menu-base-level-padding: 8px;

      width: 224px;

      .el-sub-menu__title,
      .el-menu-item {
        margin: 4px 7px !important;
        overflow: hidden !important;
        color: var(--menu-item-color);
        border-radius: 5px;

        .el-sub-menu__icon-arrow {
          margin-right: 4px;
        }

        &:first-child {
          margin-top: 0 !important;
        }

        &:last-child {
          margin-bottom: 0 !important;
        }
      }

      .el-sub-menu.is-active .el-sub-menu__title {
        color: var(--menu-item-active-color);
      }

      .el-menu-item.is-active {
        color: var(--menu-item-active-color);
        background-color: var(--menu-item-active-background-color);
      }
    }

    .el-sub-menu__title,
    .el-menu-item {
      .el-icon {
        transition: transform 0.25s;
      }

      &:hover {
        .el-icon {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
