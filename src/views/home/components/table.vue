<template>
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
        <template #default>
          <el-button size="small" text type="primary">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup lang="ts">
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
</script>

<style scoped lang="scss">
.data-list {
  width: 100%;
  margin-top: 20px;
  border-radius: 20px;
  background-color: $base-main-item-background;
  padding: 30px 40px;
}
</style>
