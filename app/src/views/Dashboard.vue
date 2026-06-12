<template>
  <div class="dashboard">
    <!-- Hero Section with Cinematic Video -->
    <section class="hero">
      <div class="hero-bg" :style="{ backgroundImage: `url(${heroFallbackImage})` }">
        <video
          class="hero-video"
          :src="heroVideoUrl"
          title="Cinematic drone footage Kepulauan Seribu"
          autoplay
          muted
          loop
          playsinline
          aria-hidden="true"
        ></video>
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          <span>Eksplorasi Bahari Kepulauan Seribu</span>
        </div>
        <h1 class="hero-title">
          <span class="title-line">Wonderful Island</span>
          <span class="title-line accent">Kepulauan Seribu</span>
        </h1>
        <p class="hero-subtitle">
          Jelajahi pesona alam bahari yang menakjubkan, dari terumbu karang yang memukau
          hingga pantai berpasir putih yang mempesona — semuanya ada di depan mata Jakarta.
        </p>
        <div class="hero-actions">
          <router-link to="/destinasi-seribu" class="btn-primary">
            Jelajahi Destinasi
            <ArrowRight class="btn-arrow" :size="18" stroke-width="2" />
          </router-link>
          <router-link to="/galeri" class="btn-secondary">
            Lihat Galeri
          </router-link>
        </div>
        <div class="hero-stats">
        <div v-for="stat in heroStats" :key="stat.label" class="hero-stat">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
      <div class="hero-scroll">
        <div class="scroll-line"></div>
        <span>Gulir ke bawah</span>
      </div>
      <!-- Wave decoration -->
      <div class="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,72 L1440,120 L0,120 Z" fill="var(--navy-deep)" opacity="0.6"/>
          <path d="M0,80 C300,40 600,110 900,64 C1100,30 1300,90 1440,56 L1440,120 L0,120 Z" fill="var(--navy-deep)" opacity="0.8"/>
          <path d="M0,96 C240,72 480,108 720,84 C960,60 1200,104 1440,88 L1440,120 L0,120 Z" fill="var(--navy-deep)"/>
        </svg>
      </div>
    </section>

    <!-- Scroll Motion Photo -->
    <section class="scroll-photo-showcase" ref="motionPhotoSection">
      <div class="scroll-photo-layout">
        <div class="scroll-photo-copy">
          <span class="section-tag">Sudut Pulau</span>
          <h2>Jembatan Cinta yang Ikonik</h2>
          <p>
            Pemandangan laut terbuka, pasir putih, dan jalur kayu yang jadi salah satu
            wajah paling dikenal dari wisata Kepulauan Seribu.
          </p>
        </div>
        <div class="scroll-photo-window">
          <img
            :src="movingPhotoImage"
            alt="Jembatan Cinta Pulau Tidung"
            class="moving-scroll-photo"
            :style="{ transform: `translateX(${movingPhotoOffset}px) scale(1.04)` }"
          />
          <div class="scroll-photo-shade"></div>
          <div class="scroll-photo-caption">
            <span>Pulau Tidung</span>
            <strong>Kepulauan Seribu Selatan</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- Moving Island Strip -->
    <section class="photo-ticker" aria-label="Foto bergerak Kepulauan Seribu">
      <div class="ticker-track">
        <div
          v-for="(image, i) in tickerImagesLoop"
          :key="`${image}-${i}`"
          class="ticker-photo"
        >
          <img :src="image" alt="Suasana Kepulauan Seribu" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- Featured Islands Section -->
    <section class="featured">
      <div class="section-header">
        <span class="section-tag">Destinasi Unggulan</span>
        <h2>Pulau-Pulau Terkenal di Kepulauan Seribu</h2>
        <p>Temukan keindahan alam bahari yang telah dikenal hingga mancanegara</p>
      </div>
      <div class="island-cards">
        <article
          v-for="(island, i) in featuredIslandsData"
          :key="island.slug"
          class="island-card"
        >
          <div class="card-image">
            <img :src="island.mainImage" :alt="island.name" loading="lazy" draggable="false" />
          </div>
          <div class="card-content">
            <h3>{{ island.name }}</h3>
            <p>{{ island.shortDescription }}</p>
            <div class="card-meta">
              <span class="meta-item">
                <MapPin :size="15" stroke-width="2" />
                {{ island.location }}
              </span>
              <span class="meta-item">
                <Clock :size="15" stroke-width="2" />
                {{ island.duration }}
              </span>
            </div>
            <router-link
              class="card-link"
              :to="{ name: 'DestinasiDetail', params: { slug: island.slug } }"
            >
              Buka detail pulau
              <ArrowRight :size="16" stroke-width="2" />
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <!-- Nature Statistics -->
    <section class="stats">
      <div class="stats-grid">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="stat-item"
          :style="{ transitionDelay: `${i * 90}ms` }"
        >
          <div class="stat-number">{{ formatStatValue(stat, i) }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- Jabotabek Nature Preview -->
    <section class="jabotabek-preview">
      <div class="section-header">
        <span class="section-tag">Wisata Alam JABODETABEK</span>
        <h2>Keajaiban Alam di Sekitar Jakarta</h2>
        <p>Tanpa Depok — Temukan keindahan alam di Jakarta, Bogor, Tangerang, dan Bekasi</p>
      </div>
      <div class="preview-cards">
        <div
          v-for="(place, i) in jabotabekPlaces"
          :key="i"
          class="preview-card"
        >
          <img :src="place.image" :alt="place.name" loading="lazy" />
          <div class="preview-card-content">
            <h4>{{ place.name }}</h4>
            <span class="preview-location">{{ place.city }}</span>
          </div>
        </div>
      </div>
      <div class="section-cta">
        <router-link to="/wisata-alam" class="btn-primary">
          Lihat Semua Wisata Alam
          <ArrowRight class="btn-arrow" :size="18" stroke-width="2" />
        </router-link>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="quote-section">
      <div class="quote-bg-decoration">
        <div class="quote-leaf quote-leaf-1"></div>
        <div class="quote-leaf quote-leaf-2"></div>
      </div>
      <div class="quote-content">
        <div class="quote-mark">"</div>
        <p class="quote-text">
          Alam tidak pernah buru-buru, namun segalanya selalu tercapai.
        </p>
        <p class="quote-author">— Lao Tzu</p>
      </div>
    </section>
  </div>
</template>

<script>
import { ArrowRight, Clock, MapPin } from '@lucide/vue'
import { islandDestinations } from '../data/islands'

export default {
  name: 'Dashboard',
  components: { ArrowRight, Clock, MapPin },
  data() {
    return {
      heroVideoUrl: 'videos/pantai.mp4',
      heroFallbackImage: 'images/wonderful-island-hero.jpg',
      movingPhotoOffset: 0,
      displayedStats: [0, 0, 0, 0],
      statsAnimated: false,
      movingPhotoImage: 'images/2_Jembatan_Cinta_Ikon_Wisata_Pulau.png',
      heroStats: [
        { value: '110+', label: 'Pulau' },
        { value: '340+', label: 'Spesies Ikan' },
        { value: '45 km', label: 'Dari Jakarta' }
      ],
      stats: [
        { target: 110, suffix: '+', label: 'Pulau' },
        { target: 7, suffix: '', label: 'Pulau Berpenghuni' },
        { target: 45, suffix: ' km', label: 'Dari Jakarta' },
        { target: 340, suffix: '+', label: 'Spesies Ikan' }
      ],
      jabotabekPlaces: [
        { name: 'Hutan Mangrove PIK', city: 'Jakarta Utara', image: 'images/10_Hutan_Mangrove_PIK_di_Jakarta_Atouri.png' },
        { name: 'Taman Wisata Alam Angke Kapuk', city: 'Jakarta', image: 'images/3_Jakarta_Mangrove_Resort.png' },
        { name: 'Kebun Raya Bogor', city: 'Bogor', image: 'images/6_7_Rekomendasi_Kebun_Raya_di_Indonesia.png' },
        { name: 'Taman Nasional Halimun Salak', city: 'Bogor', image: 'images/4_6_Fakta_Menarik_Gunung_Halimun_Bagian.png' }
      ]
    }
  },
  computed: {
    featuredIslandsData() {
      return islandDestinations.slice(0, 4)
    },
    tickerImages() {
      return islandDestinations
        .flatMap((island) => [island.mainImage, island.thumbnails[0]])
        .slice(0, 10)
    },
    tickerImagesLoop() {
      return [...this.tickerImages, ...this.tickerImages]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.observeElements()
      this.updateMovingPhoto()
    })
    window.addEventListener('scroll', this.updateMovingPhoto, { passive: true })
    window.addEventListener('resize', this.updateMovingPhoto)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateMovingPhoto)
    window.removeEventListener('resize', this.updateMovingPhoto)
  },
  methods: {
    updateMovingPhoto() {
      const section = this.$refs.motionPhotoSection
      if (!section) return

      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const totalDistance = viewportHeight + rect.height
      const progress = (viewportHeight - rect.top) / totalDistance
      const clampedProgress = Math.min(1, Math.max(0, progress))
      const travel = window.innerWidth <= 768 ? 80 : 170

      this.movingPhotoOffset = Math.round((clampedProgress - 0.5) * travel)
    },
    formatStatValue(stat, index) {
      return `${this.displayedStats[index] || 0}${stat.suffix || ''}`
    },
    animateStats() {
      if (this.statsAnimated) return

      this.statsAnimated = true
      const duration = 1500
      const start = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        this.displayedStats = this.stats.map((stat) => Math.round(stat.target * eased))

        if (progress < 1) {
          requestAnimationFrame(tick)
        }
      }

      requestAnimationFrame(tick)
    },
    observeElements() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            if (entry.target.classList.contains('stat-item')) {
              this.animateStats()
            }
          }
        })
      }, { threshold: 0.1 })

      this.$el.querySelectorAll('.island-card, .stat-item, .preview-card').forEach(el => {
        observer.observe(el)
      })
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: max(100vw, 177.78vh);
  height: max(56.25vw, 100vh);
  border: 0;
  transform: translate(-50%, -50%) scale(1.08);
  pointer-events: none;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(0, 40, 50, 0.3) 0%, rgba(0, 60, 70, 0.15) 40%, rgba(0, 80, 100, 0.35) 100%),
    linear-gradient(90deg, rgba(0, 0, 0, 0.25) 0%, transparent 50%, rgba(0, 0, 0, 0.15) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  animation: heroFadeIn 1.2s ease-out;
}

@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--coral-light);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-title {
  margin-bottom: 1.5rem;
}

.title-line {
  display: block;
  font-size: clamp(2rem, 6vw, 4rem);
  line-height: 1.1;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.title-line.accent {
  color: var(--coral-light);
  font-style: italic;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.25);
}

.hero-subtitle {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 2rem auto 0;
  max-width: 560px;
}

.hero-stat {
  padding: 0.8rem 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(16px);
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.15);
}

.hero-stat strong {
  display: block;
  color: var(--coral-light);
  font-size: 1.25rem;
}

.hero-stat span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, var(--ocean-teal), var(--ocean-light));
  color: var(--white);
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--coral-reef), var(--coral-light));
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(13, 115, 119, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-arrow {
  transform: translateX(4px);
}

.hero-scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), transparent);
}

/* Hero Wave Decoration */
.hero-wave {
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  z-index: 3;
  line-height: 0;
}

.hero-wave svg {
  width: 100%;
  height: 80px;
  display: block;
}

/* Scroll Motion Photo */
.scroll-photo-showcase {
  padding: 5rem 2rem;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 209, 102, 0.14), rgba(0, 214, 201, 0.12), var(--navy-mid));
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}

.scroll-photo-layout {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(240px, 0.8fr) minmax(0, 1.4fr);
  gap: 3rem;
  align-items: center;
}

.scroll-photo-copy h2 {
  color: var(--sand);
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.scroll-photo-copy p {
  max-width: 420px;
  font-size: 0.95rem;
}

.scroll-photo-window {
  position: relative;
  min-height: 420px;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid var(--glass-border);
  background: var(--navy-light);
  box-shadow: 0 24px 60px rgba(23, 59, 56, 0.14);
}

/* Moving Photo Ticker */
.photo-ticker {
  overflow: hidden;
  padding: 1.4rem 0;
  background: linear-gradient(90deg, rgba(0, 108, 146, 0.12), rgba(255, 209, 102, 0.18), rgba(0, 214, 201, 0.12));
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}

.ticker-track {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: tickerMove 32s linear infinite;
}

.photo-ticker:hover .ticker-track {
  animation-play-state: paused;
}

.ticker-photo {
  width: 260px;
  height: 150px;
  overflow: hidden;
  border-radius: 22px;
  border: 4px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 18px 38px rgba(0, 169, 184, 0.14);
}

.ticker-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes tickerMove {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 0.5rem));
  }
}

.moving-scroll-photo {
  width: calc(100% + 220px);
  height: 420px;
  margin-left: -110px;
  object-fit: cover;
  will-change: transform;
  transition: transform 0.16s linear;
}

.scroll-photo-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.68) 0%,
    transparent 42%,
    rgba(255, 255, 255, 0.35) 100%
  );
  pointer-events: none;
}

.scroll-photo-caption {
  position: absolute;
  left: 1.25rem;
  bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: var(--sand);
}

.scroll-photo-caption span {
  color: var(--ocean-light);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.scroll-photo-caption strong {
  font-size: 1rem;
  font-weight: 600;
}

/* Featured Section */
.featured {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-tag {
  display: inline-block;
  background: rgba(255, 209, 102, 0.38);
  color: var(--sand);
  padding: 0.4rem 1rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: var(--sand);
  margin-bottom: 0.75rem;
}

.section-header p {
  color: var(--sand-muted);
  font-size: 0.95rem;
  max-width: 500px;
  margin: 0 auto;
}

.island-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.island-card {
  display: block;
  background: var(--navy-mid);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--glass-border);
  box-shadow: 0 18px 40px rgba(0, 108, 146, 0.08);
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.45s ease, transform 0.45s ease;
  opacity: 0;
  transform: translateY(30px);
}

.island-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.island-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 50px rgba(0, 108, 146, 0.14);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.5s ease;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
}

.island-card:hover .card-image img {
  transform: scale(1.06);
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  font-size: 1.2rem;
  color: var(--sand);
  margin-bottom: 0.75rem;
}

.card-content p {
  font-size: 0.85rem;
  color: var(--sand-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: var(--slate-muted);
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 1rem;
  color: var(--coral-reef);
  font-size: 0.82rem;
  font-weight: 700;
  width: fit-content;
  border-radius: 999px;
  padding: 0.45rem 0.7rem;
  background: rgba(255, 209, 102, 0.24);
  transition: background 0.25s ease, transform 0.25s ease;
}

.card-link:hover {
  background: rgba(255, 209, 102, 0.4);
  transform: translateX(2px);
}

.card-link:hover svg {
  transform: translateX(4px);
}

.card-link svg {
  transition: transform 0.3s ease;
}

/* Stats Section */
.stats {
  padding: 4rem 2rem;
  background:
    radial-gradient(circle at top left, rgba(255, 209, 102, 0.22), transparent 22rem),
    var(--navy-mid);
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}

.stats-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat-item {
  position: relative;
  padding: 1.35rem 1rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(0, 108, 146, 0.12);
  box-shadow: 0 18px 45px rgba(58, 42, 28, 0.08);
  text-align: center;
  opacity: 0;
  transform: translateY(22px) scale(0.97);
  overflow: hidden;
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
}

.stat-item::after {
  content: '';
  position: absolute;
  inset: auto -20% -58% -20%;
  height: 85%;
  background: radial-gradient(circle, rgba(0, 141, 184, 0.12), transparent 68%);
  transform: translateY(24px);
  transition: transform 0.8s ease;
}

.stat-item.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.stat-item.animate-in::after {
  transform: translateY(0);
}

.stat-item:hover {
  box-shadow: 0 22px 54px rgba(0, 108, 146, 0.14);
  transform: translateY(-4px) scale(1.01);
}

.stat-number {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--ocean-teal);
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--sand);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

/* Jabotabek Preview */
.jabotabek-preview {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.preview-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.preview-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 280px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s ease;
}

.preview-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.preview-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.preview-card:hover img {
  transform: scale(1.08);
}

.preview-card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.94), transparent);
}

.preview-card-content h4 {
  font-size: 1rem;
  color: var(--sand);
  margin-bottom: 0.25rem;
}

.preview-location {
  font-size: 0.8rem;
  color: var(--ocean-light);
}

.section-cta {
  text-align: center;
}

/* Quote Section */
.quote-section {
  position: relative;
  padding: 7rem 2rem;
  text-align: center;
  background:
    linear-gradient(135deg, rgba(0, 108, 146, 0.06) 0%, rgba(255, 209, 102, 0.1) 50%, rgba(0, 214, 201, 0.06) 100%),
    var(--navy-mid);
  border-top: 1px solid var(--glass-border);
  overflow: hidden;
}

.quote-bg-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.quote-leaf {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 40% 60% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.06;
}

.quote-leaf-1 {
  top: -40px;
  right: -60px;
  background: var(--ocean-teal);
  animation: leafFloat1 12s ease-in-out infinite alternate;
}

.quote-leaf-2 {
  bottom: -50px;
  left: -70px;
  background: var(--coral-light);
  animation: leafFloat2 15s ease-in-out infinite alternate;
}

@keyframes leafFloat1 {
  from { transform: rotate(0deg) scale(1); }
  to { transform: rotate(15deg) scale(1.15); }
}

@keyframes leafFloat2 {
  from { transform: rotate(-10deg) scale(1.1); }
  to { transform: rotate(5deg) scale(1); }
}

.quote-content {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}

.quote-mark {
  font-family: 'Poppins', serif;
  font-size: 6rem;
  line-height: 0.5;
  color: var(--ocean-teal);
  opacity: 0.15;
  margin-bottom: 1rem;
}

.quote-text {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  color: var(--sand);
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.quote-author {
  color: var(--slate-muted);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    min-height: 500px;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    max-width: 280px;
    margin-top: 1.4rem;
  }

  .ticker-photo {
    width: 210px;
    height: 126px;
  }

  .scroll-photo-showcase {
    padding: 3rem 1rem;
  }

  .scroll-photo-layout {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  .scroll-photo-copy h2 {
    font-size: 1.6rem;
  }

  .scroll-photo-window {
    min-height: 280px;
  }

  .moving-scroll-photo {
    width: calc(100% + 120px);
    height: 280px;
    margin-left: -60px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .featured,
  .jabotabek-preview {
    padding: 3rem 1rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }

  .hero-wave svg {
    height: 50px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
