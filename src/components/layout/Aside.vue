<template>
  <div class="app">
    <el-col>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        text-color="#fff"
        router
      >
        <MenuNav
          :data="item"
          v-for="(item, index) in data.list"
          :key="index"
        ></MenuNav>
      </el-menu>
    </el-col>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import MenuNav from './menu.vue'
import { useStore } from 'vuex'
const data = reactive({
  list: [],
  No_1: {
    children: [],
    icon: 'el-icon-s-home',
    id: 0,
    name: 'home',
    path: '/',
    title: '首页'
  }
})
const store = useStore()
const getlist = async () => {
  await store.dispatch('layout/menunav')
  data.list = store.state.layout.nav
  data.list.unshift(data.No_1)
  console.log(data.list)
}
getlist()
</script>

<style lang="scss" scoped>
div {
  width: 200px;
  background-color: rgb(84, 92, 100);
}
.app {
  height: 100vh;
}
</style>
