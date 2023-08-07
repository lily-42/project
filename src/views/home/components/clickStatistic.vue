<template>
  <div class="hits">
    <div class="hit-data">
      <div class="title">点击量统计</div>
      <ul class="hit-items">
        <li class="hit-item" v-for="o in 3" :key="o">
          <div class="hit-icon">
            <img src="../../../../public/hit-icon.png" alt="" />
          </div>
          <p class="num">2000</p>
          <p>课程点击量</p>
        </li>
      </ul>
    </div>
    <el-divider border-style="dashed" direction="vertical"></el-divider>

    <div class="hit-detail">
      <div class="date-selector">
        <el-radio-group>
          <el-radio-button label="当天"></el-radio-button>
          <el-radio-button label="本周"></el-radio-button>
          <el-radio-button label="本月"></el-radio-button>
          <el-radio-button label="2022"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="content">
        <div class="button">
          <el-radio-group>
            <el-radio-button label="课程点击榜"></el-radio-button>
            <el-radio-button label="类别兴趣榜"></el-radio-button>
          </el-radio-group>
        </div>
        <ul class="list">
          <li v-for="o in 5" :key="o">
            <div class="list-title">
              <span class="serial-num">1</span>
              <span>课程名称</span>
            </div>
            <div class="list-data">点击量： 333333</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
.hits {
  display: flex;
  align-items: center;
  width: 100%;
  height: 366px;
  margin-top: 20px;
  border-radius: 20px;
  padding: 30px 20px;
  background-color: $base-main-item-background;
  .hit-data {
    width: 50%;
    height: 100%;
    .title {
      height: 24px;
    }
    .hit-items {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .hit-item {
        .hit-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          padding: 13px;
          background-color: #1192ff;
          img {
            width: 24px;
          }
        }
        .num {
          font-size: 18px;
          font-weight: 600;
          margin: 20px 0 15px 0;
        }
      }
    }
  }
  .el-divider {
    width: 1px;
    height: 210px;
  }
  .hit-detail {
    position: relative;
    width: 50%;
    height: 100%;
    .date-selector {
      position: absolute;
      top: 0;
      right: 0;

      height: 34px;
      .el-radio-button {
        width: 78px;
        :deep(.el-radio-button__inner) {
          width: 100%;
        }
      }
    }
    .content {
      display: flex;
      margin-top: 50px;
      margin-left: 80px;
      .button {
        width: 32px;
        height: 210px;
        border-radius: 32px;
        border: 1px solid #1192ff;
        margin-right: 38px;
        .el-radio-group {
          width: 100%;
          height: 100%;
          line-height: 100%;
          border-radius: 32px;
          flex-direction: column;
          .el-radio-button {
            height: 50%;
            line-height: 105px;
            border-radius: 32px;
            &:first-child {
              background-color: #1192ff;
              :deep(.el-radio-button__inner) {
                background-color: #1192ff;
                color: #ffffff;
              }
            }
          }
          :deep(.el-radio-button > .el-radio-button__inner) {
            padding: 5px;
            white-space: break-spaces !important;
            border: none;
            color: #1192ff;
          }
        }
      }
      .list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        li {
          display: flex;
          justify-content: space-between;
          .list-title {
            .serial-num {
              margin-right: 30px;
            }
          }
          .list-data {
            color: #1192ff;
          }
        }
      }
    }
  }
}
</style>
