<script setup lang="ts">
import AppMain from './components/AppMain.vue'
import BreadCrumb from './components/BreadCrumb.vue'
import FooterBar from './components/FooterBar.vue'
import Navbar from './components/Navbar.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="layout">
    <el-container>
      <el-aside>
        <el-scrollbar style="height: 100%">
          <SideBar />
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <Navbar />
        </el-header>
        <el-main>
          <BreadCrumb />
          <AppMain />
        </el-main>
        <el-footer>
          <FooterBar />
        </el-footer>
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
    overflow: hidden;
  }

  .el-main {
    flex: initial;
    overflow: hidden;
  }
}
</style>
