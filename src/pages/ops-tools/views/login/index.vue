<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const formData = reactive({
  username: '',
  password: ''
})
const formRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const inputType = ref('password')
const passwordRef = ref()
const handleToggleType = () => {
  passwordRef.value.blur()
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
  nextTick(() => {
    passwordRef.value.focus()
  })
}

const router = useRouter()
const submitLoading = ref(false)
const loginFormRef = ref()
const handleSubmit = async () => {
  await loginFormRef.value.validate()

  submitLoading.value = true
  setTimeout(() => {
    submitLoading.value = false
  }, 1000)

  router.push('/dashboard')
}

const isDark = useDark()
const toggleDark = () => {
  document.startViewTransition(() => {
    useToggle(isDark)()
  })
}
</script>

<template>
  <div class="login">
    <div class="left">
      <div class="bg" />
      <div class="content">
        <img src="@/pages/ops-tools/assets/svg/1.svg" alt="icon" />
        <div class="title">开箱即用的运维管理系统</div>
        <div class="tips">
          <p>
            这物件嘛，用过了都说还行，倒也无惊无喜，正如世间多数事物，看似平凡，却自有其一分可取
          </p>
          <p>-- 鲁迅</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="login-content">
        <div class="login-title">
          <h1>欢迎回来 👋🏻</h1>
          <span>请输入您的帐户信息以开始您的旅程</span>
        </div>
        <el-form ref="loginFormRef" :rules="formRules" :model="formData" size="large">
          <el-form-item prop="username">
            <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              ref="passwordRef"
              v-model="formData.password"
              :type="inputType"
              placeholder="请输入密码"
            >
              <template #suffix>
                <el-icon class="password-icon" :size="18" @click="handleToggleType">
                  <iconify-icon v-if="inputType === 'password'" icon="solar:eye-closed-linear" />
                  <iconify-icon v-else icon="solar:eye-linear" />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        <div class="login-option">
          <el-checkbox>记住密码</el-checkbox>
          <el-link type="primary">忘记密码?</el-link>
        </div>
        <div class="login-btn">
          <el-button type="primary" size="large" :loading="submitLoading" @click="handleSubmit">
            登录
          </el-button>
        </div>

        <div class="other-login">
          <el-divider>其它登陆方式</el-divider>
          <div class="other-login-icon">
            <el-icon :size="16">
              <iconify-icon icon="simple-icons:github" />
            </el-icon>
            <el-icon :size="16">
              <iconify-icon icon="simple-icons:google" />
            </el-icon>
            <el-icon :size="16">
              <iconify-icon icon="simple-icons:tencentqq" />
            </el-icon>
            <el-icon :size="16">
              <iconify-icon icon="simple-icons:wechat" />
            </el-icon>
          </div>
        </div>
      </div>
    </div>

    <div class="logo">
      <el-icon :size="40">
        <iconify-icon icon="unjs:undocs" />
      </el-icon>
      <span>OPS Tools</span>
    </div>

    <el-icon class="toggle-icon" :size="26" @click="toggleDark">
      <iconify-icon v-if="!isDark" icon="openmoji:sun" />
      <iconify-icon v-else icon="openmoji:star-and-crescent" />
    </el-icon>
  </div>
</template>

<style scoped lang="scss">
@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}

.login {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  user-select: none;

  .left {
    position: relative;
    flex-shrink: 0;
    width: 66%;
    height: 100%;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(154deg, #07070915 30%, #006be64d, #07070915 64%);
      filter: blur(100px);
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      margin-top: -55px;

      img {
        height: 256px;
        animation: float 5s linear 0s infinite;
        -webkit-user-drag: none;
      }

      .title {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 24px;
      }

      .tips {
        font-size: 14px;

        p {
          margin: 4px 0;
        }

        p:nth-child(2) {
          float: right;
          margin-right: -50px;
        }
      }
    }
  }

  .right {
    position: relative;
    flex: 1;
    background-color: var(--el-bg-color);

    .login-content {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 72%;
      padding: 10px;
      margin-top: -60px;
      transform: translate(-50%, -50%);

      .login-title {
        margin-bottom: 30px;
        font-size: 14px;

        h1 {
          margin: 6px 0;
        }

        span {
          color: var(--el-text-color-secondary);
        }
      }

      .password-icon {
        cursor: pointer;
      }

      .login-option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
      }

      .login-btn {
        width: 100%;

        .el-button {
          width: 100%;
        }
      }

      .other-login {
        :deep(.el-divider__text) {
          padding: 0 30px;
          font-size: 12px;
          color: var(--el-text-color-secondary);
        }

        .other-login-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;

          .el-icon {
            margin: 0 5px;
            color: var(--el-text-color-regular);
          }
        }
      }
    }
  }

  .toggle-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  .logo {
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
      font-size: 22px;
      font-weight: 500;
    }
  }
}
</style>
