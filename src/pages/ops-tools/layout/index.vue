<script setup lang="ts">
import AppMain from './components/AppMain.vue'
import FooterBar from './components/FooterBar.vue'
import Navbar from './components/Navbar/index.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="layout">
    <el-container>
      <el-aside>
        <SideBar />
      </el-aside>
      <el-container>
        <el-header>
          <Navbar />
        </el-header>
        <el-scrollbar style="height: calc(100vh - 50px)">
          <el-main>
            <AppMain />
          </el-main>
          <el-footer>
            <FooterBar />
          </el-footer>
        </el-scrollbar>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.layout {
  .el-aside {
    width: auto !important;
    height: 100vh;
    overflow: hidden;
    border-right: 0.0625rem solid var(--el-menu-border-color);
  }

  .el-header {
    display: flex;
    align-items: center;
    height: 50px !important;
    border-bottom: 1px solid var(--el-menu-border-color);
  }

  .el-main {
    flex: initial;
    height: 100%;
    padding: 16px;
    padding-bottom: 0 !important;
    overflow: hidden;
    background-color: var(--background-deep);
  }

  .el-footer {
    background-color: var(--background-deep);
  }
}
</style>
