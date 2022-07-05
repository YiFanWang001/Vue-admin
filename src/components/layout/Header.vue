<template>
  <div class="header">
    <h3>VueAdmin后台管理系统</h3>
    <div class="right">
      <div class="demo-basic--circle">
        <div class="block">
          <el-avatar :size="30" :src="data.list.avatar" />
        </div>
      </div>
      <el-dropdown type="primary">
        <span>
          {{ data.list.username }}<el-icon><ArrowDown /></el-icon
        ></span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="signout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import { removeAllItem } from '@/utils/storage'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const data = reactive({
  list: {}
})
const signout = () => {
  removeAllItem()
  router.push('/login')
}
const Avatar = async () => {
  await store.dispatch('layout/avatar')
  data.list = store.state.layout.name
  console.log(data.list)
}
Avatar()
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
