module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        //'@':'src,
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'netword':'@/netword',
        /*'router':'@/router',
        'store':'@/store',*/
        'views':'@/views'
      }
    }
  }
}