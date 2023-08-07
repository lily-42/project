<template>
  <div class="platform-info">
    <div class="info-item">
      <div class="progress-icon">
        <img src="../../../../public/progress.png" alt="" />
      </div>
      <div class="progress">
        <div class="message">
          <span class="title">短信数：</span>
          <el-progress :stroke-width="10" :percentage="50" status="exception" />
          <span class="number">1200条</span>
          <el-button color="#fd6500">充值</el-button>
        </div>
        <div class="message">
          <span class="title">网站空间：</span>
          <el-progress :stroke-width="10" :percentage="50" status="exception" />
          <span class="number">200G</span>
          <el-button color="#fd6500">扩容</el-button>
        </div>
      </div>
    </div>
    <div class="info-item"></div>
    <div class="class-data"></div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
.platform-info {
  width: 35%;
  height: 100%;
  padding: 40px 40px 50px;
  border-radius: 20px;
  background-color: $base-main-item-background;
  .info-item {
    display: flex;
    align-items: center;
    width: 100%;
    .progress-icon {
      width: 80px;
      height: 80px;
      border-radius: 80px;
      background-color: #ffefe5;
      padding: 24px;
      margin-right: 32px;
      img {
        width: 32px;
      }
    }
    .progress {
      flex: 1;
      line-height: 40px;
      .message {
        display: flex;
        align-items: center;
        .number {
          font-weight: 600;
        }
        .el-progress {
          width: 30%;
          margin-right: 10px;
          :deep(.el-progress__text) {
            display: none;
          }
        }
        .el-button {
          width: 46px;
          height: 26px;
          color: #ffffff;
          margin-left: 7%;
        }
      }
    }
  }
}
</style>
