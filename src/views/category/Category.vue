<template>
  <div id="category">
    <NavBar class="home-nav">
      <template v-slot:center>商品分类</template>
    </NavBar>
    <ul class="left-nav">
      <li><router-link to="/category/categoryRight1" active-class="active" class="rLink">正在流行</router-link></li>
      <li><router-link to="/category/categoryRight2" active-class="active" class="rLink">裙子</router-link></li>
      <li><router-link to="f" active-class="active" class="rLink">裤子</router-link></li>
      <li><router-link to="c" active-class="active" class="rLink">上衣</router-link></li>
      <li><router-link to="x" active-class="active" class="rLink">男装</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import CategoryRight1 from "./CategoryRight1";
  import CategoryRight2 from "./CategoryRight2";
  export default {
    name: "Category",
    components:{
      NavBar,
      CategoryRight1,
      CategoryRight2
    }
  }
</script>

<style scoped>
  #category{
    display: flex;
  }
  .home-nav{color:#fff;background: var(--color-tint);position: fixed;top:0;left:0;right:0;z-index: 4;}
  .left-nav{
    width: 20vw;
    height: 100vh;
    margin-top: 44px;
    text-align: center;
    background: #f6f6f6;
    list-style: none;
    position: fixed;
    font-size: 10px;
  }
  .left-nav li,.rLink{
    width: 100%;
    line-height: 6vh;
  }
  .rLink{display: inline-block;}
  .active{background: #fff;color:#ff5777}
</style>
