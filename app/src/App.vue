<template>
  <div class="app-wrapper">
    <Navbar />
    <router-view v-slot="{ Component, route }">
      <transition
        :name="route.meta.transition || 'fade'"
        mode="out-in"
        @before-leave="beforeLeave"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Navbar, Footer },
  methods: {
    beforeLeave(el) {
      el.style.transform = 'scale(1)'
      el.style.filter = 'brightness(1)'
    },
    enter(el) {
      el.style.opacity = '0'
      el.style.transform = 'scale(0.98) translateY(20px)'
      el.style.filter = 'brightness(0.8)'
      requestAnimationFrame(() => {
        el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        el.style.opacity = '1'
        el.style.transform = 'scale(1) translateY(0)'
        el.style.filter = 'brightness(1)'
      })
    },
    afterEnter(el) {
      el.style.transition = ''
      el.style.transform = ''
      el.style.filter = ''
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --navy-deep: #F2FDFF;
  --navy-mid: #FFFFFF;
  --navy-light: #DDFBFF;
  --ocean-teal: #006C92;
  --ocean-light: #008DB8;
  --coral-reef: #B88700;
  --coral-light: #FFD166;
  --sand: #3A2A1C;
  --sand-muted: #6F5A44;
  --slate-blue: #BDEBFF;
  --slate-muted: #3E97A5;
  --sunshine: #FFD166;
  --lime-leaf: #7BC950;
  --sky-bright: #74D4FF;
  --white: #FFFFFF;
  --glass-bg: rgba(255, 255, 255, 0.82);
  --glass-border: rgba(0, 169, 184, 0.18);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(255, 209, 102, 0.2), transparent 30rem),
    radial-gradient(circle at top right, rgba(0, 214, 201, 0.18), transparent 34rem),
    var(--navy-deep);
  color: var(--sand);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-wrapper {
  min-height: 100vh;
  position: relative;
}

/* Apple-like page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.97) translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

/* Global scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #E8FAFF;
}

::-webkit-scrollbar-thumb {
  background: var(--ocean-teal);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--ocean-light);
}

/* Selection styling */
::selection {
  background: var(--ocean-teal);
  color: var(--white);
}

/* Typography */
h1, h2, h3, h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.page-hero-content,
.hero-content {
  animation: smoothReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.page-hero-bg {
  animation: heroDrift 18s ease-in-out infinite alternate;
  will-change: transform;
}

.section-header,
.culture-intro,
.experience-content,
.quote-content,
.conservation-text {
  animation: smoothFloatIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.detail-facts,
.culture-card,
.experience-media,
.gallery-row img,
.next-card {
  animation: smoothReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.page-tag,
.section-tag,
.hero-badge {
  color: var(--sand) !important;
  background: rgba(255, 209, 102, 0.45) !important;
  border: 1px solid rgba(0, 108, 146, 0.18);
}

.btn-primary,
.btn-secondary,
.filter-tab,
.indicator,
.social-link {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.btn-primary:hover,
.btn-secondary:hover,
.filter-tab:hover,
.social-link:hover {
  transform: translateY(-2px);
}

.place-card,
.gallery-item,
.destination-card,
.activity-card,
.tip-item,
.feature,
.info-card,
.profile-card,
.preview-card,
.island-card,
.stat-item {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
}

@keyframes smoothReveal {
  from {
    opacity: 0;
    transform: translateY(28px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes smoothFloatIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroDrift {
  from {
    transform: scale(1.02) translate3d(0, 0, 0);
  }
  to {
    transform: scale(1.08) translate3d(-1.5%, -1%, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}

p {
  line-height: 1.7;
  color: var(--sand-muted);
}

/* Link styling */
a {
  text-decoration: none;
  color: inherit;
}

/* Image styling */
img {
  max-width: 100%;
  display: block;
}

/* Responsive font sizes */
@media (max-width: 768px) {
  h1 { font-size: 1.8rem !important; }
  h2 { font-size: 1.5rem !important; }
}

@media (min-width: 769px) and (max-width: 1024px) {
  h1 { font-size: 2.2rem !important; }
  h2 { font-size: 1.8rem !important; }
}

@media (min-width: 1025px) {
  h1 { font-size: 3rem !important; }
  h2 { font-size: 2rem !important; }
}
</style>
