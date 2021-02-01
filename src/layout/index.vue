<template>
  <el-container>
  <el-aside width="200px">
    <layout-aside></layout-aside>
  </el-aside>
  <el-container>
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>

</template>

<script lang='ts'>
import Vue from 'vue'
import LayoutAside from './components/layout-aside.vue'
import LayoutHeader from './components/lauout-header.vue'
export default Vue.extend({
  name: 'LayoutIndex',
  components: {
    LayoutAside,
    LayoutHeader
  }
})
</script>

<style lang='scss' scoped>
.el-container {
  min-height: 100vh;
}

.el-aside {
  background-color: #d3dce6;
}

.el-header {
  background-color: #fff;
}

.el-main {
  background-color: #e9eef3;
}
</style>
