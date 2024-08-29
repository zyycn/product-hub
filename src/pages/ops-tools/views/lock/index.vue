<template>
  <div class="login">
    <!-- 背景 -->
    <!-- <Particles class="bg" /> -->
    <!-- 输入解锁密码 -->
    <el-form ref="form" size="large" :model="formData" :rules="formRules" @submit.native.prevent>
      <el-form-item prop="password">
        <el-input
          v-model="formData.password"
          placeholder="请输入密码，按回车键解锁"
          size="large"
          show-password
          @keyup.enter="login"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
// import Particles from './Particles.vue'

// import * as api from '@/pages/ops-tools/api/modules/index'

export default {
  components: {
    // Particles
  },
  data() {
    return {
      formData: {
        password: ''
      },
      formRules: {
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] },
          {
            trigger: ['blur'],
            validator: async (rule, value, callback) => {
              const isPass = await this.getPassword(value)
              if (!isPass) callback(new Error('嗯?'))

              callback()
            }
          }
        ]
      }
    }
  },
  created() {
    console.log(1111)
  },
  methods: {
    async login() {
      await this.$refs.form.validate()
      window.sessionStorage.setItem('password', this.formData.password)

      this.$nextTick(() => {
        this.$router.push({ path: '/' })
      })
    },
    async getPassword(password: string) {
      const { bean } = await api.getPassword({
        password
      })
      return bean
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  // 背景动画
  background: linear-gradient(180deg, #0c214e 0%, #0d2168 100%);

  .bg {
    position: fixed;
    inset: 0;
    z-index: 0;
  }

  .el-form {
    width: 40vw;
    margin-bottom: 100px;
  }
}
</style>
