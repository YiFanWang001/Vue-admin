<template>
  <div class="header">
    <h3>VueAdmin后台管理系统</h3>
    <div class="right">
      <div class="demo-basic--circle">
        <div class="block">
          <el-avatar
            :size="30"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
        </div>
      </div>
      <el-dropdown type="primary" @click="handleClick">
        <span>
          test<el-icon><ArrowDown /></el-icon
        ></span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.header {
  position: relative;
}
.right {
  position: absolute;
  top: 0;
  right: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h3 {
  text-align: center;
  line-height: 60px;
}
</style>
