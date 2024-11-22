<script setup lang="ts">
import AppMain from './components/AppMain.vue'
import FooterBar from './components/FooterBar.vue'
import Navbar from './components/Navbar/index.vue'
import SideBar from './components/SideBar/index.vue'
</script>

<template>
  <el-container>
    <el-aside class="h-screen w-auto overflow-hidden b-r-1 border-r-color-[var(--el-menu-border-color)] b-r-solid">
      <SideBar />
    </el-aside>

    <el-container>
      <el-header class="h-50px flex flex-items-center b-b-1 border-b-color-[var(--el-menu-border-color)] b-b-solid">
        <Navbar />
      </el-header>

      <el-scrollbar class="h-[calc(100vh-50px)] bg-[var(--background-deep)]">
        <el-main class="h-full min-h-[calc(100vh-110px)] flex-initial overflow-hidden p-12px p-b-0">
          <AppMain />
        </el-main>

        <el-footer>
          <FooterBar />
        </el-footer>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.el-header {
  --el-header-padding: 0 15px;
}
</style>
