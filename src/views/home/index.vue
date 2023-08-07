<template>
  <div class="home">
    <!-- 常用快捷方式 -->
    <div class="common-shortcuts">
      <el-row :gutter="20">
        <el-col :span="2" v-for="(o, index) in 10" :key="o">
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
            <div class="visits">
              <div class="day-visits visits-item">
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
              </div>
              <div class="week-visits visits-item">
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
              </div>
              <div class="month-visits visits-item">
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
              </div>
            </div>
            <div class="person-num">
              <div class="num-item">
                <div class="img">
                  <img src="../../../public/person-online.png" alt="" />
                </div>
                <span>在线人数：</span>
                <span class="num">1509</span>
              </div>
              <div class="num-item">
                <div class="img">
                  <img src="../../../public/person-online.png" alt="" />
                </div>
                <span>在线人数：</span>
                <span class="num">1509</span>
              </div>
              <div class="num-item">
                <div class="img">
                  <img src="../../../public/person-online.png" alt="" />
                </div>
                <span>在线人数：</span>
                <span class="num">1509</span>
              </div>
            </div>
          </div>
        </div>
        <div class="left-bottom">
          <div class="account-data data-item">
            <div class="img">
              <img src="../../../public/income.png" alt="" />
            </div>
            <div class="data">
              <el-row>
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
              <el-row>
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
          <div class="icome-data data-item">
            <div class="img">
              <img src="../../../public/income.png" alt="" />
            </div>
            <div class="data">
              <el-row>
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
              <el-row>
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
      <div class="center-right">
        <div class="right-item">
          <div class="progress-icon">
            <img src="../../../public/progress.png" alt="" />
          </div>
          <div class="progress">
            <div class="message">
              <span class="title">短信数：</span>
              <el-progress
                :stroke-width="10"
                :percentage="50"
                status="exception"
              />
              <span class="number">1200条</span>
              <el-button color="#fd6500">充值</el-button>
            </div>
            <div class="message">
              <span class="title">网站空间：</span>
              <el-progress
                :stroke-width="10"
                :percentage="50"
                status="exception"
              />
              <span class="number">200G</span>
              <el-button color="#fd6500">扩容</el-button>
            </div>
          </div>
        </div>
        <div class="right-item"></div>
        <div class="class-data"></div>
      </div>
    </div>
    <!-- 点击量统计 -->
    <div class="hits">
      <div class="hit-data">
        <div class="title">点击量统计</div>
        <div class="hit-items">
          <div class="hit-item">
            <div class="hit-icon">
              <img src="../../../public/hit-icon.png" alt="" />
            </div>
            <p class="num">2000</p>
            <p>课程点击量</p>
          </div>
          <div class="hit-item">
            <div class="hit-icon">
              <img src="../../../public/hit-icon.png" alt="" />
            </div>
            <p class="num">2000</p>
            <p>课程点击量</p>
          </div>
          <div class="hit-item">
            <div class="hit-icon">
              <img src="../../../public/hit-icon.png" alt="" />
            </div>
            <p class="num">2000</p>
            <p>课程点击量</p>
          </div>
        </div>
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
    <!-- 数据统计 -->
    <div class="statistics">
      <div class="project-statistics">
        <div class="title-row">
          <span class="title">学习项目统计</span>
          <span>2022-01-01 - 2022-12-31</span>
        </div>
        <p class="pie-title">学习项目统计</p>
        <div id="myChart" :style="{ height: '330px' }"></div>
      </div>
      <div class="person-statistics">人员统计</div>
    </div>
    <!-- table -->
    <div class="data-list">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{
          background: '#f1f4fb',
          color: '#97aec1',
          fontWeight: '500',
        }"
      >
        <el-table-column fixed prop="serialNum" label="序号" width="150" />
        <el-table-column
          fixed
          prop="projectName"
          label="学习项目名称"
          width="150"
        />
        <el-table-column prop="endTime" label="项目结束时间" />
        <el-table-column prop="studentNum" label="学员总数" />
        <el-table-column prop="completedNum" label="已完成人数" />
        <el-table-column prop="notStudyNum" label="未学习人数" />
        <el-table-column prop="learningNum" label="学习中人数" />
        <el-table-column prop="operate" label="操作">
          <template #default="scope">
            <el-button size="small" text type="primary">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue'

const tableData = [
  {
    serialNum: '1',
    projectName: '项目一',
    endTime: '2016-05-03',
    studentNum: '44',
    completedNum: '22',
    notStudyNum: '1000',
    learningNum: '11',
    operate: '详情',
  },
  {
    serialNum: '2',
    projectName: '项目一',
    endTime: '2016-05-03',
    studentNum: '44',
    completedNum: '22',
    notStudyNum: '1000',
    learningNum: '11',
    operate: '详情',
  },
  {
    serialNum: '3',
    projectName: '项目一',
    endTime: '2016-05-03',
    studentNum: '44',
    completedNum: '22',
    notStudyNum: '1000',
    learningNum: '11',
    operate: '详情',
  },
  {
    serialNum: '4',
    projectName: '项目一',
    endTime: '2016-05-03',
    studentNum: '44',
    completedNum: '22',
    notStudyNum: '1000',
    learningNum: '11',
    operate: '详情',
  },
  {
    serialNum: '5',
    projectName: '项目一',
    endTime: '2016-05-03',
    studentNum: '44',
    completedNum: '22',
    notStudyNum: '1000',
    learningNum: '11',
    operate: '详情',
  },
  {
    serialNum: '6',
    projectName: '项目一',
    endTime: '2016-05-03',
    studentNum: '44',
    completedNum: '22',
    notStudyNum: '1000',
    learningNum: '11',
    operate: '详情',
  },
  {
    serialNum: '7',
    projectName: '项目一',
    endTime: '2016-05-03',
    studentNum: '44',
    completedNum: '22',
    notStudyNum: '1000',
    learningNum: '11',
    operate: '详情',
  },
]

onMounted(() => {
  let myChart = echarts.init(document.getElementById('myChart'))
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      top: '30%',
      left: '75%',
      itemGap: 20,
      itemWidth: 10, // 设置宽度
      itemHeight: 10, // 设置高度
      icon: 'circle',
      formatter: (name) => {
        let data = option.series[0].data
        let total = 0
        let tarValue
        for (let i = 0; i < data.length; i++) {
          total += data[i].value
          if (data[i].name == name) {
            tarValue = data[i].value
          }
        }
        let v = tarValue + '人'
        //计算出百分比
        let p = Math.round((tarValue / total) * 100) + '%'
        return `${name}  ${v}  ${p}`
        //name是名称，v是数值
      },
    },
    color: ['#1192ff', '#00c78e', '#ff7170', '#fabb00'],
    series: [
      {
        name: '直播课',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
          normal: {
            show: true,
            position: 'center',
            color: '#4c4a4a',
            formatter: '{total|' + 2000 + '}' + '\n\r' + '{active|学习项目数}',
            rich: {
              total: {
                fontSize: 26,
                fontWeight: 600,
                fontFamily: '微软雅黑',
                color: '#000000',
              },
              active: {
                fontFamily: '微软雅黑',
                fontSize: 12,
                color: '#333333',
                lineHeight: 30,
              },
            },
          },
          emphasis: {
            //中间文字显示
            show: true,
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 76, name: '进行中' },
          { value: 86, name: '已结束' },
          { value: 28, name: '已作废' },
          { value: 10, name: '未开始' },
        ],
      },
    ],
  }
  // 绘制图表
  myChart.setOption(option)
})

window.onresize = () => {
  myChart.resize()
}
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
            // font-size: 14px;
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
    .center-right {
      width: 35%;
      height: 100%;
      padding: 40px 40px 50px;
      border-radius: 20px;
      background-color: $base-main-item-background;
      .right-item {
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
  }
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
  .statistics {
    display: flex;
    width: 100%;
    height: 586px;
    margin-top: 20px;
    border-radius: 20px;
    background-color: $base-main-item-background;
    padding: 30px 20px;
    .project-statistics {
      width: 50%;
      .title-row {
        span {
          font-size: 12px;
        }
        .title {
          font-weight: 600;
          font-size: 16px;
          margin-right: 30px;
        }
      }
      .pie-title {
        font-size: 14px;
        margin-top: 32px;
        font-weight: 600;
        margin-bottom: 80px;
      }
    }
    .person-statistics {
    }
  }
  .data-list {
    width: 100%;
    // height: 520px;
    margin-top: 20px;
    border-radius: 20px;
    background-color: $base-main-item-background;
    padding: 30px 40px;
  }
}
</style>
