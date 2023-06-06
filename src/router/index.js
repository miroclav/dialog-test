import { createRouter, createWebHashHistory } from 'vue-router'
import Gallery from '@/views/Gallery.vue'
import Slider from '@/views/Slider.vue'


const routes = [
  {
    path: '/',
    name: 'gallery',
    component: Gallery,
  },
  {
    path: '/slider',
    name: 'slider',
    component: Slider,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
