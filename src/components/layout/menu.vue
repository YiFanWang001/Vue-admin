<template>
  <div>
    <el-sub-menu :index="data.id + ''" v-if="data.children.length != 0">
      <template #title>
        <span> {{ data.title }}</span>
      </template>
      <MenuNav
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
      ></MenuNav>
    </el-sub-menu>
    <el-menu-item :index="data.path" v-else>
      <span> {{ data.title }}</span>
    </el-menu-item>
  </div>
</template>

<script setup>
import MenuNav from './menu.vue'
import { reactive, ref, defineProps } from 'vue'
const props = defineProps({
  data: Object
})
</script>

<style lang="scss" scoped></style>
