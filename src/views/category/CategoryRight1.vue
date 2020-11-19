<template>
  <div>
    <ul class="right-content" >
      <li v-for="item in Subcategory3627">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <span>{{item.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getSubcategory3627} from "../../netword/categroy";
  export default {
    name: "Popular",
    data(){
      return{
        Subcategory3627:null
      }
    },
    created(){
      getSubcategory3627().then(res=>{
          this.Subcategory3627=res.data.list
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
