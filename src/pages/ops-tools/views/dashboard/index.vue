<script setup lang="ts">
import tips from '@/utils/slack-off-tips'
</script>

<template>
  <div class="dashboard">
    <el-row>
      <el-col :span="24">
        <el-card class="welcome" shadow="never">
          <div class="content">
            <div class="avatar">
              <el-icon :size="50">
                <iconify-icon icon="openmoji:hacker-cat" />
              </el-icon>
            </div>
            <div class="tips">
              <span>{{ tips[0] }}</span>
              <span>{{ tips[1] }} {{ tips[2] }} {{ tips[3] }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7">
        <el-card class="server" shadow="never">
          <template #header>
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
            <span>内存与存储</span>
          </template>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card shadow="never">
          <template #header>
            <span>流量统计</span>
          </template>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.dashboard {
  :deep(.el-card) {
    width: 100%;
    height: 100%;

    .el-card__header {
      display: flex;
      align-items: center;

      .el-icon {
        position: relative;
        top: 1px;
        margin-right: 8px;
      }
    }
  }

  .el-row {
    margin-bottom: 15px;
  }

  .welcome {
    .content {
      display: flex;
      align-items: center;

      .avatar {
        margin-right: 15px;
      }

      .tips {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        span:nth-child(1) {
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: bold;
        }

        span:nth-child(2) {
          font-size: 14px;
          color: var(--el-text-color-secondary);
        }
      }
    }
  }

  .server {
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
}
</style>
