<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="navbar-container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <span class="logo-mark" aria-hidden="true">
          <svg class="logo-emblem" viewBox="0 0 64 64" role="img">
            <defs>
              <linearGradient id="logoOceanGradient" x1="8" y1="8" x2="56" y2="58" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#00A7C7" />
                <stop offset="0.55" stop-color="#007EA7" />
                <stop offset="1" stop-color="#00516E" />
              </linearGradient>
              <linearGradient id="logoSunGradient" x1="37" y1="10" x2="53" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#FFE08A" />
                <stop offset="1" stop-color="#FFB703" />
              </linearGradient>
            </defs>
            <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#logoOceanGradient)" />
            <circle cx="45" cy="18" r="8" fill="url(#logoSunGradient)" />
            <path
              d="M12 42c7-4 13-4 20 0s13 4 20 0v6c-7 4-13 4-20 0s-13-4-20 0v-6Z"
              fill="#EAFBFF"
              opacity="0.95"
            />
            <path
              d="M18 36c5.5-7 16.5-9 25-3 2.5 1.8 4.5 2.4 7 2.6-7 3.7-19 4.6-32 .4Z"
              fill="#FFD166"
            />
            <path d="M31 23c1.8 4.5 1.2 9.2-2 14" stroke="#3A2A1C" stroke-width="3" stroke-linecap="round" />
            <path
              d="M32 23c-6-1.5-9 .2-12 4 5.8.8 9.8-.3 12-4Zm1-1c5-4.2 10-4.5 14-1-4.5 2.4-9.4 3.7-14 1Zm-1-1c-1.1-5.8 1.2-9.7 5.6-12.2.5 5.4-1.5 9.4-5.6 12.2Z"
              fill="#7BC950"
            />
          </svg>
        </span>
        <span class="logo-copy">
          <span class="logo-text">Wonderful Island</span>
          <span class="logo-subtitle">Kepulauan Seribu</span>
        </span>
      </router-link>

      <!-- Desktop Menu (Right Side) -->
      <div class="desktop-menu">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ 'active': $route.path === item.path }"
        >
          <component :is="item.icon" class="nav-icon" :size="16" stroke-width="2" />
          <span class="nav-label">{{ item.label }}</span>
          <div class="nav-indicator"></div>
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button class="mobile-toggle" @click="toggleMobileMenu" :class="{ 'active': mobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition name="mobile-slide">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <div class="mobile-menu-content">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="mobile-nav-link"
            :class="{ 'active': $route.path === item.path }"
            @click="closeMobileMenu"
          >
            <component :is="item.icon" class="mobile-nav-icon" :size="20" stroke-width="2" />
            <span class="mobile-nav-label">{{ item.label }}</span>
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import { Home, Images, Info, MapPinned, Trees } from '@lucide/vue'

export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false,
      mobileMenuOpen: false,
      menuItems: [
        { path: '/', label: 'Dashboard', icon: Home },
        { path: '/destinasi-seribu', label: 'Destinasi', icon: MapPinned },
        { path: '/wisata-alam', label: 'Wisata Alam', icon: Trees },
        { path: '/galeri', label: 'Galeri', icon: Images },
        { path: '/tentang', label: 'Tentang', icon: Info }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : ''
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
      document.body.style.overflow = ''
    }
  },
  watch: {
    $route() {
      this.closeMobileMenu()
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 2rem;
  height: 70px;
  display: flex;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: transparent;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px) saturate(1.8);
  -webkit-backdrop-filter: blur(20px) saturate(1.8);
  border-bottom: 1px solid var(--glass-border);
  height: 60px;
}

.navbar-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.35rem 0.85rem 0.35rem 0.35rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0 16px 36px rgba(0, 78, 98, 0.12);
  backdrop-filter: blur(18px) saturate(1.4);
  -webkit-backdrop-filter: blur(18px) saturate(1.4);
  text-decoration: none;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

.logo:hover {
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 20px 42px rgba(0, 108, 146, 0.18);
  transform: translateY(-1px);
}

.logo-mark {
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: linear-gradient(145deg, #FFFFFF, rgba(255, 255, 255, 0.25));
  box-shadow: 0 12px 26px rgba(0, 108, 146, 0.22);
  flex: 0 0 auto;
  transition: transform 0.3s ease;
}

.logo:hover .logo-mark {
  transform: rotate(-4deg) scale(1.04);
}

.logo-emblem {
  width: 100%;
  height: 100%;
  display: block;
}

.logo-copy {
  display: grid;
  gap: 0.05rem;
  line-height: 1.05;
}

.logo-text {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: var(--sand);
  letter-spacing: 0;
  transition: color 0.3s ease;
}

.logo-subtitle {
  color: var(--ocean-teal);
  font-size: 0.63rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.logo:hover .logo-text {
  color: var(--ocean-light);
}

/* Desktop Menu - Right Side */
.desktop-menu {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
}

.nav-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  color: var(--sand-muted);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  border-radius: 12px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.nav-link:hover {
  color: var(--sand);
  background: rgba(15, 118, 110, 0.08);
}

.nav-link.active {
  color: var(--ocean-teal);
  background: rgba(15, 118, 110, 0.1);
}

.nav-icon {
  opacity: 0.7;
  flex: 0 0 auto;
}

.nav-indicator {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 20px;
  height: 2px;
  background: var(--ocean-light);
  border-radius: 1px;
  transition: transform 0.3s ease;
}

.nav-link.active .nav-indicator {
  transform: translateX(-50%) scaleX(1);
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.mobile-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--sand);
  border-radius: 1px;
  transition: all 0.3s ease;
}

.mobile-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  color: var(--sand-muted);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 16px;
  transition: all 0.3s ease;
  min-width: 200px;
  justify-content: center;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: var(--sand);
  background: rgba(15, 118, 110, 0.12);
}

.mobile-nav-icon {
  flex: 0 0 auto;
}

/* Mobile Slide Transition */
.mobile-slide-enter-active,
.mobile-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.mobile-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.mobile-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    padding: 0 1rem;
    height: 60px;
  }

  .logo-text {
    font-size: 0.88rem;
  }

  .logo {
    gap: 0.55rem;
    padding-right: 0.65rem;
    border-radius: 16px;
  }

  .logo-mark {
    width: 40px;
    height: 40px;
    border-radius: 14px;
  }

  .logo-subtitle {
    font-size: 0.55rem;
  }

  .desktop-menu {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .navbar {
    padding: 0 1.5rem;
  }

  .nav-link {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }
}

@media (min-width: 1025px) {
  .navbar {
    padding: 0 3rem;
  }
}
</style>
