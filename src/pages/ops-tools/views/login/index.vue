<script setup lang="ts"></script>

<template>
  <div class="login">
    <div class="left">
      <div class="bg" />
      <div class="content">
        <img src="@/pages/ops-tools/assets/svg/1.svg" alt="icon" />
        <div>开箱即用的大型运维管理系统</div>
        <div>工程化、高性能、运维管理工具</div>
      </div>
    </div>
    <div class="right">
      <div class="login-content">
        <div class="login-title">
          <h1>欢迎回来 👋🏻</h1>
          <span>请输入您的帐户信息以开始您的旅程</span>
        </div>
        <el-form size="large">
          <el-form-item>
            <el-input placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
        <div class="login-option">
          <el-checkbox>记住密码</el-checkbox>
        </div>
        <div class="login-btn">
          <el-button type="primary" size="large">登录</el-button>
        </div>
      </div>
    </div>
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
      margin-top: -60px;

      img {
        height: 256px;
        animation: float 5s linear 0s infinite;
      }

      div:nth-child(2) {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 24px;
      }

      div:nth-child(3) {
        font-size: 14px;
      }
    }
  }

  .right {
    position: relative;
    flex: 1;
    background-color: var(--el-color-white);

    .login-content {
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(100% - 200px);
      padding: 10px;
      margin-top: -70px;
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

      .login-option {
        margin-bottom: 20px;
      }

      .login-btn {
        width: 100%;

        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>
