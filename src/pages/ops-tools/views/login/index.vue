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
  <div class="login h-screen w-screen flex select-none overflow-hidden">
    <div class="pos-relative h-100% w-66% flex-shrink-0">
      <div class="bg-gradient-154deg pos-absolute pos-left-none pos-top-none h-100% w-100% filter-blur-100px" />
      <div class="h-100% w-100% flex flex-col justify-center flex-items-center -mt-55px">
        <img class="user-drag-none animation-float h-256px" src="@/pages/ops-tools/assets/svg/1.svg" alt="icon" />
        <div class="m-10px text-24px">开箱即用的运维管理系统</div>
        <div class="text-14px">
          <p class="mx-4px my-0">
            这物件嘛，用过了都说还行，倒也无惊无喜，正如世间多数事物，看似平凡，却自有其一分可取
          </p>
          <p class="float-right flex flex-items-center -mr-55px">
            <span>-- 鲁迅</span>
            <iconify-icon icon="twemoji:zany-face" />
          </p>
        </div>
      </div>
    </div>
    <div class="pos-relative flex-1 bg-[var(--el-bg-color)]">
      <div class="pos-absolute pos-left-50% pos-top-50% w-72% transform-translate--50% px-10px py-10px -mt-60px">
        <div class="mb-30px text-14px">
          <h1 class="mx-6px">欢迎回来 👋🏻</h1>
          <span class="color-[var(--el-text-color-placeholder)]">请输入您的帐户信息以开始您的旅程</span>
        </div>
        <el-config-provider size="large">
          <el-form ref="loginFormRef" :rules="formRules" :model="formData">
            <el-form-item prop="username">
              <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input ref="passwordRef" v-model="formData.password" :type="inputType" placeholder="请输入密码">
                <template #suffix>
                  <el-icon class="cursor-pointer" :size="18" @click="handleToggleType">
                    <iconify-icon v-if="inputType === 'password'" icon="solar:eye-closed-linear" />
                    <iconify-icon v-else icon="solar:eye-linear" />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
          </el-form>
          <div class="mb-20px flex flex-justify-between flex-items-center">
            <el-checkbox>记住密码</el-checkbox>
            <el-link type="primary">忘记密码?</el-link>
          </div>
          <el-button class="w-100%" type="primary" :loading="submitLoading" @click="handleSubmit"> 登录 </el-button>
          <div class="other-login">
            <el-divider>其它登陆方式</el-divider>
            <div class="other-login-icon w-100% flex flex-justify-center flex-items-center">
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
        </el-config-provider>
      </div>
    </div>

    <div class="pos-absolute pos-left-15px pos-top-15px flex flex-items-center">
      <el-icon :size="40">
        <iconify-icon icon="unjs:undocs" />
      </el-icon>
      <span class="ml-10px text-22px font-500">OPS Tools</span>
    </div>

    <el-icon
      class="pos-absolute pos-right-10px pos-top-10px flex cursor-pointer flex-items-center"
      :size="26"
      @click="toggleDark"
    >
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
  .bg-gradient-154deg {
    background: linear-gradient(154deg, #07070915 30%, #006be64d, #07070915 64%);
  }

  .animation-float {
    animation: float 5s linear 0s infinite;
  }

  .user-drag-none {
    -webkit-user-drag: none;
  }

  .other-login {
    :deep(.el-divider__text) {
      padding: 0 30px;
      font-size: 12px;
      color: var(--el-text-color-secondary);
    }

    .other-login-icon {
      .el-icon {
        margin: 0 5px;
        color: var(--el-text-color-regular);
      }
    }
  }
}
</style>
