<template lang="pug">
  #app
    el-menu.index-main-menu(
      :default-active="'1'"
      class="el-menu-demo" 
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    )
      el-menu-item(index="/biz") 业务组件
      el-menu-item(index="/exp") 用户体验
      el-menu-item(index="/ele") Element拓展
    .main-container
      .left-container
        el-menu(
          :default-active="'1-1'"
          class="el-menu-vertical-demo"
          background-color="#eee"
        )
          el-menu-item(index="1-1") 首页
          el-menu-item(index="1-2") 管理
      .right-container
        router-view
</template>

<script>
export default {
  mounted(){}
}
</script>


<style lang="sass">
// 改写样式
.el-menu-demo.el-menu--horizontal.el-menu.index-main-menu
  padding: 0 250px

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
  width: 250px
  height: 100%
  background: #eee
  border-right: 1px solid #ccc
  .el-menu
    border: none
.right-container
  padding: 10px
  height: 100%
  background: #fff
</style>
