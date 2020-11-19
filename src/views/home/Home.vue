<template>
  <div class="home">
    <NavBar class="home-nav">
      <template v-slot:center>购物街</template>
    </NavBar>
    <SwiperA :banner="bannerList" class="swiper"></SwiperA>
    <Recommend :recommend="recommendList"></Recommend>
    <div class="content">
      <router-link to="/home/popular" active-class="active">流行</router-link>
      <router-link to="/home/newStyle" active-class="active">新款</router-link>
      <router-link to="/home/select" active-class="active">精选</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import {getHomeMultidata} from "../../netword/home";
  import SwiperA from "components/common/SwiperA";
  import Recommend from "components/content/Recommend";

  export default {
    name: "Home",
    components:{
      NavBar,
      SwiperA,
      Recommend,
    },
    data(){
      return{
        bannerList:null,
        recommendList:null,
      }
    },
    created() {
      getHomeMultidata().then(res=>{
        this.bannerList=res.data.banner.list
        this.recommendList=res.data.recommend.list
        }
      )
    }
  }
</script>

<style scoped>
  .home{margin-bottom: 70px}
  .swiper{margin-top: 44px;}
  .home-nav{color:#fff;background: var(--color-tint);position: fixed;top:0;left:0;right:0;z-index: 4;}
  /*.swiper-container img{width: 100%;}*/
  .active{color: #ff8198;border-bottom:2px solid #ff5777}
  .content{text-align: center;display: flex;justify-content: space-around;margin-top: 20px;font-size: 14px}
</style>
