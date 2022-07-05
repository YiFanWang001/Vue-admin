<template>
  <div>
    <div class="form">
      <el-form
        ref="ruleFormRef"
        :model="data.ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="data.ruleForm.username" type="text" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="data.ruleForm.password" type="password" />
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="data.ruleForm.code" type="text" class="img" />
          <img
            :src="store.state.login.img"
            alt=""
            class="Verification"
            @click="token"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const data = reactive({
  ruleForm: {
    password: '',
    username: 'tset',
    code: ''
  },
  img: ''
})
const rules = reactive({
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
  code: [{ required: true, message: '验证码不能为空', trigger: 'blur' }]
})
const getlist = async () => {
  await store.dispatch('login/getlogin')
  data.img = store.state.login.img
}
const token = () => {
  getlist()
}
getlist()
const resetForm = () => ({})
</script>

<style lang="scss" scoped>
.el-input {
  width: 300px;
}
.img {
  width: 140px;
}
.Verification {
  width: 120px;
  height: 33px;
}
.form {
  width: 500px;
  height: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
