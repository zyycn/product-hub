<script setup lang="ts">
import Breadcrumb from './Breadcrumb.vue'
import Controller from './Controller.vue'
import { useAppStore } from '@/pages/ops-tools/store'

const store = useAppStore()
const { collapse } = storeToRefs(store)
</script>

<template>
  <div class="flex w-full items-center justify-between">
    <div class="flex items-center">
      <el-icon
        :size="16"
        :class="{ 'rotate-90': collapse, '-rotate-90': !collapse }"
        class="mr-10 cursor-pointer"
        @click="store.setCollapse(!collapse)"
      >
        <iconify-icon icon="clarity:collapse-line" />
      </el-icon>

      <Breadcrumb />
    </div>

    <div class="flex items-center">
      <Controller />
    </div>
  </div>
</template>
