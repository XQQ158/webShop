<template>
  <div id="app">

        <!-- 顶部导航组件 -->
        <headertop></headertop>
        
        <!-- 导航条 -->
        <headernav></headernav>

        <!-- 主要区域容器 -->
        <el-main>
            <router-view></router-view>
        </el-main>
      <!-- 主要区域容器END -->
       
        <footerbottom></footerbottom>
  </div>
</template>

<script>
import headertop from "./views/public/header.vue";
import footerbottom from "./views/public/footer.vue";
import headernav from "./views/public/headernav.vue";
export default {
  
    components:{
        headertop,
        footerbottom,
        headernav
    }
}
</script>

<style lang="scss">

</style>
