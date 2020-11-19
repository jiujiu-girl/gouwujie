<template>
  <div>
    <ul class="right-content" >
      <li v-for="item in Subcategory595">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <span>{{item.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getSubcategory595} from "../../netword/categroy";
  export default {
    name: "Popular",
    data(){
      return{
        Subcategory595:null
      }
    },
    created(){
      getSubcategory595().then(res=>{
          this.Subcategory595=res.data.list
          // console.log(this.List=res.data.list[0].title)
        }
      )
    }
  }
</script>

<style scoped>
  .right-content{
    width: 70%;
    position: absolute;
    top:50px;
    left:25vw;
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .right-content li{
    width: 45%;
    text-align: center;
    font-size: 12px;
    margin-bottom: 20px;
  }
  .right-content li img{
    width: 100%;
  }
</style>
