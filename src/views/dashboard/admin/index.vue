<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="12">
      <el-col v-for="(name,number) in data" :sm="24" :xs="24" :md="6" :xl="6" :lg="6" :style="{ marginBottom: '12px' }">
        <chart-card :title="name" :total="number">
          <el-tooltip slot="action" class="item" effect="dark" content="name" placement="top-start">
            <i class="el-icon-warning-outline" />
          </el-tooltip>
          <div>
            <mini-area />
          </div>
        </chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChartCard from '@/components/ChartCard'
import MiniArea from '@/components/MiniArea'

const barData = []
const barData2 = []
for (let i = 0; i < 12; i += 1) {
  barData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200
  })
  barData2.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200
  })
}

export default {
  name: 'DashboardAdmin',
  components: {
    ChartCard,
    MiniArea
  },
  props: {
    data: {}
  },
  data() {
    return {
      barData,
      barData2
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 12px;
  //background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

::v-deep .el-tabs__item {
  padding-left: 16px !important;
  height: 50px;
  line-height: 50px;
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
