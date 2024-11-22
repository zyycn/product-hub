<script setup lang="ts">
import Breadcrumb from './Breadcrumb.vue'
import Controller from './Controller.vue'
import { useAppStore } from '@/pages/ops-tools/store'

const store = useAppStore()
const { collapse } = storeToRefs(store)
</script>

<template>
  <div class="w-full flex flex-justify-between flex-items-center">
    <div class="flex flex-items-center">
      <el-icon
        :size="16"
        :class="{ 'transform-rotate-90deg': collapse }"
        class="mr-10px transform-rotate--90deg cursor-pointer"
        @click="store.setCollapse(!collapse)"
      >
        <iconify-icon icon="clarity:collapse-line" />
      </el-icon>

      <Breadcrumb />
    </div>

    <div class="flex flex-items-center">
      <Controller />
    </div>
  </div>
</template>
