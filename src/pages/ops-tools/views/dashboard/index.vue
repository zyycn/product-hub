<script setup lang="ts"></script>

<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <el-card shadow="never">
          <template #header>
            <el-icon :size="22">
              <iconify-icon icon="openmoji:hal-9000"></iconify-icon>
            </el-icon>
            <span>服务器信息</span>
          </template>
          <div class="content">
            <p>运行时间: 212d 3h 9m</p>
            <p>系统负载: 1min: 0.50 | 5min:0.17 | 15min:0.09</p>
            <p>OS: debian 12.7 (linux 5.10.0-15-arm64 aarch64)</p>
            <p>CPU: Neoverse-N1 * 4</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card shadow="never">
          <template #header>
            <el-icon :size="22">
              <iconify-icon icon="openmoji:card-file-box"></iconify-icon>
            </el-icon>
            <span>内存与存储</span>
          </template>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card shadow="never">
          <template #header>
            <el-icon :size="22">
              <iconify-icon icon="openmoji:wireless"></iconify-icon>
            </el-icon>
            <span>流量统计</span>
          </template>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.dashboard {
  :deep(.el-card__header) {
    display: flex;
    align-items: center;

    .el-icon {
      position: relative;
      top: 1px;
      margin-right: 8px;
    }
  }

  .content {
    font-size: 14px;

    p {
      margin: 0;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
