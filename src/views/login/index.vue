<template>
  <div class="login">
    <el-form class="login-form" ref="form" :model="form" :rules="rules" label-width="80px" label-position="top">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onSubmit" :loading="isLoginLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { login } from '@/services/user'
import { Form } from 'element-ui'

export default Vue.extend({
  name: 'LoginIndex',
  data () {
    return {
      form: {
        phone: '18201288771',
        password: '111111'
      },
      isLoginLoading: false,
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '请输入正确手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在6 到 18个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        // 1.表单验证
        await (this.$refs.form as Form).validate()

        // 登录按钮loading
        this.isLoginLoading = true

        // 2.验证通过 -> 提交表单
        const { data } = await login(this.form)
        console.log(data)
        this.$store.commit('setUser', data.content)
        // 3.处理请求结果
        if (data.state !== 1) {
          this.$message.error(data.message)
        } else {
          this.$router.push(this.$route.query.redirect as string || '/')
          this.$message.success(data.message)
        }
      } catch (error) {
        console.log(error)
      }
      this.isLoginLoading = false
    }
  }
})
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    width: 30%;
    min-width: 300px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
