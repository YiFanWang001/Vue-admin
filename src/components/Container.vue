<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <Aside calss="aside"></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Aside from './layout/Aside.vue'
import Header from './layout/Header.vue'
import Main from './layout/Main.vue'
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #17b3a3;
  padding: 0;
}
.el-aside {
  width: 200px;
  height: 100vh;
}
</style>
