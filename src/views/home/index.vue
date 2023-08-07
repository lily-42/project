<template>
  <div class="home">
    <!-- 常用快捷方式 -->
    <div class="common-shortcuts">
      <el-row :gutter="20">
        <el-col :span="2" v-for="o in 10" :key="o">
          <div class="col-item">
            <svg-icon
              class="svg-icon"
              width="40px"
              height="40px"
              name="personalization_settings"
            ></svg-icon>
            <span>新建考试</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 模块二 -->
    <div class="home-center">
      <div class="center-left">
        <div class="left-top">
          <!-- 总访问量  -->
          <div class="total-visits">
            <div class="circle">
              <div class="num">
                <span>9756</span>
                <el-icon color="#ffffff" size="18"><Top /></el-icon>
              </div>
              <span>总访问量</span>
            </div>
          </div>
          <!-- 访问量对比数据 -->
          <div class="comparative-data">
            <ul class="visits">
              <li class="day-visits visits-item" v-for="o in 3" :key="o">
                <div class="data">
                  <div class="num">9999</div>
                  <span>今日访问量比昨日</span>
                </div>
                <div class="increase-data">
                  <div class="arrow">
                    <el-icon color="#00c78e" size="18"><Top /></el-icon>
                  </div>
                  <span>+3%</span>
                </div>
              </li>
            </ul>
            <ul class="person-num">
              <li class="num-item" v-for="o in 3" :key="o">
                <div class="img">
                  <img src="../../../public/person-online.png" alt="" />
                </div>
                <span>在线人数：</span>
                <span class="num">1509</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="left-bottom">
          <div class="account-data data-item" v-for="item in 2" :key="item">
            <div class="img">
              <img src="../../../public/income.png" alt="" />
            </div>
            <div class="data">
              <el-row v-for="o in 2" :key="o">
                <el-col>
                  <div class="num-item2 num-item">
                    <p>5236</p>
                    <span>账号总数(激活)</span>
                  </div>
                </el-col>
                <el-col>
                  <div class="num-item2 num-item">
                    <p>5236</p>
                    <span>账号总数(激活)</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <PlatformInfo></PlatformInfo>
    </div>
    <!-- 点击量统计 -->
    <ClickStatistic></ClickStatistic>
    <!-- 项目统计 -->
    <ProjectStatistic></ProjectStatistic>
    <!-- table -->
    <Table></Table>
  </div>
</template>
<script setup lang="ts">
import Table from './components/table.vue'
import ProjectStatistic from './components/projectStatistic.vue'
import ClickStatistic from './components/clickStatistic.vue'
import PlatformInfo from './components/platformInfo.vue'
</script>

<style scoped lang="scss">
.home {
  font-size: 14px;
  .common-shortcuts {
    width: 100%;
    height: 154px;
    border-radius: 20px;
    background-color: $base-main-item-background;
    margin-bottom: 20px;
    .el-row {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      margin: 0 !important;
      .col-item {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .svg-icon {
          margin-bottom: 20px;
        }
      }
    }
  }
  .home-center {
    display: flex;
    width: 100%;
    height: 590px;
    .center-left {
      width: 65%;
      height: 100%;
      .left-top {
        display: flex;
        .total-visits {
          display: flex;
          justify-content: center;
          width: 30%;
          height: 352px;
          border-radius: 20px;
          background-color: #1192ff;
          margin-right: 20px;
          .circle {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 200px;
            margin-top: 40px;
            border-radius: 50%;
            border: 6px solid #88c9ff;
            color: #ffffff;
            .num {
              font-size: 30px;
              color: #ffffff;
              margin-bottom: 16px;
              font-weight: 600;
              .el-icon {
                margin-left: 10px;
              }
            }
          }
        }
        .comparative-data {
          width: 70%;
          .visits {
            display: flex;
            .visits-item {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              width: 33%;
              height: 228px;
              border-radius: 20px;
              background-color: $base-main-item-background;
              padding: 40px;
              margin-right: 20px;
              .data {
                .num {
                  font-size: 28px;
                  font-weight: 600;
                  margin-bottom: 14px;
                }
              }
              .increase-data {
                display: flex;
                align-items: center;
                color: #00c78e;
                font-size: 16px;
                font-weight: 600;
                .arrow {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 30px;
                  height: 30px;
                  border-radius: 10px;
                  background-color: #ddf3f0;
                  margin-right: 12px;
                }
              }
            }
          }
          .person-num {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 104px;
            margin-top: 20px;
            margin-right: 20px;
            border-radius: 20px;
            background-color: $base-main-item-background;
            .num-item {
              display: flex;
              align-items: center;
              .img {
                width: 32px;
                height: 32px;
                line-height: 32px;
                padding: 0 8px;
                border-radius: 32px;
                background-color: #e7f4ff;
                margin-right: 10px;
                img {
                  width: 16px;
                }
              }
              .num {
                font-size: 16px;
                font-weight: 600;
              }
            }
          }
        }
      }
      .left-bottom {
        display: flex;
        width: calc(100% - 20px);
        height: 218px;
        background-color: $base-main-item-background;
        margin-top: 20px;
        margin-right: 20px;
        border-radius: 20px;
        padding: 20px;
        .data-item {
          display: flex;
          width: 50%;
          .img {
            margin-right: 30px;
          }
          .data {
            display: flex;
            .el-row {
              display: flex;
              align-items: center;
              .num-item {
                p {
                  font-size: 18px;
                  font-weight: 600;
                  margin-bottom: 16px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
