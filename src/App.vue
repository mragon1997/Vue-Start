<template lang="pug">
  #app
    //- 主导航
    el-menu.index-main-menu(
      :default-active="mainMenuActive"
      class="el-menu-demo" 
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    )
      hamburger(:isCollapse.sync="isCollapse")
      el-menu-item(index="biz" @click="handleMainMenuToggle('biz')") 业务组件
      el-menu-item(index="exp" @click="handleMainMenuToggle('exp')") 用户体验
      el-menu-item(index="ele" @click="handleMainMenuToggle('ele')") Element拓展  
    .main-container
      //- 左侧导航栏
      .left-container
        el-menu(
          :collapse="isCollapse"
          class="el-menu-vertical-demo"
          background-color="#eee"
          router
        )
          el-menu-item(v-for="(route, index) in currentSideRoutes" :key="index" :index="route.path" :class="{ 'is-active' : route.path === $route.path }")
            i.el-icon-menu
            span(slot="title") {{route.name}}
      //- 右侧内容区域
      .right-container
        transition(enter-active-class="animated fadeIn")
          router-view
</template>

<script>
import Hamburger from './components/Hamburger'
export default {
  components: {
    Hamburger
  },
  data() {
    return {
      mainMenuActive: 'biz', // 当前主路由
      currentSideRoutes: [],  // 当前二级路由组
      isCollapse: false // 侧边导航折叠状态
    }
  },
  watch: {
  },
  methods: {
    // 主菜单切换事件
    handleMainMenuToggle(mainMenu) {
      let me = this
      const Routes = me.$router.options.routes
      me.currentSideRoutes = _.filter(Routes, r => r.meta.parent === mainMenu)
      me.$router.push(me.currentSideRoutes[0].path)
    }
  },
  mounted() {
    let me = this
    me.handleMainMenuToggle('biz')
  }
}
</script>


<style lang="sass">
// 改写样式
.el-menu-demo.el-menu--horizontal.el-menu.index-main-menu
  padding: 0 250px

.el-menu-vertical-demo:not(.el-menu--collapse)
  width: 200px
  min-height: 400px

// 自定义样式
html,body
  height: 100%
#app
  height: 100%
  position: relative
.main-container
  position: absolute
  top: 60px
  right: 0
  bottom: 0
  left: 0
.left-container
  float: left
  height: 100%
  background: #eee
  border-right: 1px solid #ccc
  .el-menu
    border: none
.right-container
  padding: 20px
  height: 100%
  box-sizing: border-box
  overflow-x: hidden
  overflow-y: auto
  background: #fff
</style>