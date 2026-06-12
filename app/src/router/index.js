import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import DestinasiDetail from '../views/DestinasiDetail.vue'
import DestinasiSeribu from '../views/DestinasiSeribu.vue'
import WisataAlam from '../views/WisataAlam.vue'
import Galeri from '../views/Galeri.vue'
import Tentang from '../views/Tentang.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard, meta: { transition: 'slide-right' } },
  { path: '/destinasi-seribu', name: 'DestinasiSeribu', component: DestinasiSeribu, meta: { transition: 'slide-left' } },
  { path: '/destinasi-seribu/:slug', name: 'DestinasiDetail', component: DestinasiDetail, meta: { transition: 'slide-left' } },
  { path: '/wisata-alam', name: 'WisataAlam', component: WisataAlam, meta: { transition: 'slide-left' } },
  { path: '/galeri', name: 'Galeri', component: Galeri, meta: { transition: 'slide-left' } },
  { path: '/tentang', name: 'Tentang', component: Tentang, meta: { transition: 'slide-left' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
