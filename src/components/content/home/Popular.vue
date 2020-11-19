<template>
  <div>
    <ul class="pList" >
      <li v-for="item in pList">
        <a :href="item.link">
          <img :src="item.show.img" alt="">
          <span>{{item.title}}</span>
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
  import {getHomedata} from "../../../netword/home";
  export default {
    name: "Popular",
    data(){
      return{
        pList:null
      }
    },
    created(){
      getHomedata().then(res=>{
          this.pList=res.data.list
          // console.log(this.List=res.data.list[0].title)
        }
      )
    }
  }
</script>

<style scoped>
  .pList{
    width: 100%;
    display: flex;
    justify-content: space-around;
    list-style: none;
    flex-wrap: wrap;
  }
  .pList li{
    width: 45%;
  }
  .pList li img{
    width: 100%;
    border-radius: 5px;
    margin-top: 10px;
  }
  .pList li span{
    display: inline-block;
    width: 100%;
    font-size: 10px;
  }
</style>
