<template>
  <div class="re-container">
    <ul>
      <li v-for="item in recommend">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div class="tips">{{item.title}}</div>
        </a>
      </li>
      <li v-for="item in recommend">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div class="tips">{{item.title}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props:{
      recommend:Array
    }
  }
</script>

<style scoped>
  .re-container{
    margin-top: 20px;
  }
  .re-container ul{
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    list-style: none;
    flex-wrap: wrap;
  }
  .re-container ul li{
    width: 22%;
  }
  .re-container ul li img{
    width: 95%;
  }
  .tips{
    font-size: 12px;
  }
</style>
