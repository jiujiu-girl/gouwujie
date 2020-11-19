import { createRouter, createWebHistory } from 'vue-router'
const Category=()=>import('@/views/category/Category')
const Home=()=>import('@/views/home/Home')
const Profile=()=>import('@/views/profile/Profile')
const ShopCart=()=>import('@/views/shopCart/ShopCart')
const Popular=()=>import('../components/content/home/Popular')
const NewStyle=()=>import('../components/content/home/NewStyle')
const Select=()=>import('../components/content/home/Select')
const CategoryRight1=()=>import('../views/category/CategoryRight1')
const CategoryRight2=()=>import('../views/category/CategoryRight2')

const routes = [
  {path:'',redirect:'/home/popular'},
  {path:'/home',component:Home,
    children:[
      {path:'',redirect:'/home/popular'},
      {
        path:'popular',
        name:'Popular',
        component:Popular
      },
      {
        path:'newStyle',
        name:'NewStyle',
        component:NewStyle
      },
      {
        path:'select',
        name:'Select',
        component:Select
      }
    ]

  },
  {
    path: '/category',
    component: Category,
    children: [
      {path: '', redirect: '/category/categoryRight1'},
      {
        path: 'categoryRight1',
        name: 'CategoryRight1',
        component: CategoryRight1
      },
      {
        path:'categoryRight2',
        name:'CategoryRight2',
        component:CategoryRight2
      },
    ]
  },
  {path:'/profile',component:Profile},
  {path:'/shopCart',component:ShopCart}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
