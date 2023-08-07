<template>
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
</template>
<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue'
let myChart: any

onMounted(() => {
  myChart = echarts.init(document.getElementById('myChart'))
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
      formatter: (name: string) => {
        let data = option.series[0].data
        let total = 0
        let tarValue = 0
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
</style>
