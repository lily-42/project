<template>
  <div class="login-wrap">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login-form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎来到虚拟世界,嘻嘻</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              show-password
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login-btn"
              type="primary"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElNotification } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { getTime } from '@/utils/time'
let useStore = useUserStore()
let $router = useRouter()
let loading = ref(false)
let loginForms = ref()

let loginForm = reactive({
  username: '',
  password: '',
})

const login = async () => {
  // 表单全部校验通过后发送请求
  await loginForms.value.validate()

  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    $router.push('/')
    ElNotification({
      type: 'success',
      title: `${getTime()}好`,
      message: '欢迎回来！',
    })
    loading.value = false
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
    loading.value = false
  }
}

const validatorUserName = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}
const validatorPassword = (rule: any, value: any, callback: any) => {
  console.log('rule', rule)
  console.log('value', value)
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}

// 定义表单校验需要配置对象
const rules = {
  username: [{ trigger: 'change', validator: validatorUserName }],
  password: [
    {
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
}
</script>

<style lang="scss" scoped>
.login-wrap {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login-form {
    position: relative;
    top: 30vh;
    width: 80%;
    padding: 40px;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;

    h1 {
      font-size: 40px;
      color: #ffffff;
    }

    h2 {
      margin: 20px 0;
      font-size: 20px;
      color: #ffffff;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>
