<script setup lang="ts"></script>

<template>
  <div class="lock">
    <el-icon :size="120">
      <iconify-icon icon="mdi-account" />
    </el-icon>

    <el-card shadow="never">
      <div v-for="i in 100" :key="i">{{ i }}</div>
    </el-card>
  </div>
</template>
