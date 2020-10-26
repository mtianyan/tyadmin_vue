<template>
  <div class="dashboard-container">
    <component :data="dataDict" :is="adminDashboard"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import { getDashboard } from '@/api/dashboard'

export default {
  name: 'Dashboard',
  components: { adminDashboard },
  data() {
    return {
      adminDashboard: adminDashboard,
      dataDict: {}
    }
  },
  created() {
    this.getDashboardData()
    // if (!this.roles.includes('admin')) {
    //   this.currentRole = 'editorDashboard'
    // }
  },
  methods: {
    getDashboardData() {
      getDashboard().then((res) => {
        if (res.data !== undefined) {
          this.dataDict = res.data.data
        }
      })
    },
  }
}
</script>
