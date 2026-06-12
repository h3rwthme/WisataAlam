<template>
  <div class="galeri-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-bg" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="page-hero-overlay"></div>
      </div>
      <div class="page-hero-content">
        <span class="page-tag">Koleksi Foto</span>
        <h1>Galeri Wonderful Island</h1>
        <p>Potret memukau alam bahari Jakarta & Kepulauan Seribu</p>
      </div>
    </section>

    <!-- Filter -->
    <section class="filter-section">
      <div class="filter-tabs">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-tab"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </section>

    <!-- Masonry Gallery -->
    <section class="gallery-section">
      <div class="masonry-grid">
        <div
          v-for="(photo, i) in filteredPhotos"
          :key="photo.src"
          class="gallery-item"
          :class="`item-${photo.size}`"
          @click="openLightbox(i)"
        >
          <img :src="photo.src" :alt="photo.title" loading="lazy" />
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h4>{{ photo.title }}</h4>
              <span>{{ photo.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <transition name="lightbox">
      <div v-if="lightboxOpen" class="lightbox">
        <button class="lightbox-close" @click="closeLightbox" aria-label="Tutup lightbox">
          <X :size="22" stroke-width="2" />
        </button>
        <button class="lightbox-nav prev" @click="prevPhoto" aria-label="Foto sebelumnya">
          <ChevronLeft :size="28" stroke-width="2" />
        </button>
        <button class="lightbox-nav next" @click="nextPhoto" aria-label="Foto berikutnya">
          <ChevronRight :size="28" stroke-width="2" />
        </button>
        <div class="lightbox-content" @click.stop>
          <img :src="currentPhoto.src" :alt="currentPhoto.title" />
          <div class="lightbox-info">
            <h3>{{ currentPhoto.title }}</h3>
            <p>{{ currentPhoto.description }}</p>
            <span class="lightbox-location">
              <MapPin :size="16" stroke-width="2" />
              {{ currentPhoto.location }}
            </span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ChevronLeft, ChevronRight, MapPin, X } from '@lucide/vue'

export default {
  name: 'Galeri',
  components: { ChevronLeft, ChevronRight, MapPin, X },
  data() {
    return {
      heroImage: 'images/4_Intip_Romantisme_Jembatan_Cinta_di.png',
      activeCategory: 'Semua',
      lightboxOpen: false,
      currentPhotoIndex: 0,
      categories: ['Semua', 'Pulau Seribu', 'Mangrove', 'Alam Jabotabek'],
      photos: [
        { src: 'images/10_Fun_Jumping_at_Jembatan_Cinta_Tidung.png', title: 'Jembatan Cinta Pulau Tidung', location: 'Pulau Tidung, Kepulauan Seribu', description: 'Jembatan ikonik sepanjang 800 meter yang menghubungkan Pulau Tidung Besar dan Kecil. Spot favorit untuk berfoto dan melompat ke laut.', category: 'Pulau Seribu', size: 'large' },
        { src: 'images/wonderful-island-hero.jpg', title: 'Pesona Alam Seribu', location: 'Kepulauan Seribu', description: 'Keindahan alam laut tropis di Teluk Jakarta.', category: 'Pulau Seribu', size: 'wide' },
        { src: 'images/5_Pantai_Pasir_Perawan_Spot_Terbaik.png', title: 'Pantai Pasir Perawan Pulau Pari', location: 'Pulau Pari, Kepulauan Seribu', description: 'Pantai dengan pasir putih lembut dan air laut jernih berwarna toska yang mempesona.', category: 'Pulau Seribu', size: 'normal' },
        { src: 'images/commons-bidadari-beach.jpg', title: 'Pantai Pulau Bidadari', location: 'Pulau Bidadari', description: 'Keindahan pasir putih dan laut biru di Pulau Bidadari yang bersejarah.', category: 'Pulau Seribu', size: 'wide' },
        { src: 'images/8_Pulau_Macan_Resort_Kepulauan_Seribu.png', title: 'Pulau Macan Eco Resort', location: 'Pulau Macan, Kepulauan Seribu', description: 'Villa-villa unik di atas air dengan konsep eco-friendly yang ramah lingkungan.', category: 'Pulau Seribu', size: 'normal' },
        { src: 'images/10_Hutan_Mangrove_PIK_di_Jakarta_Atouri.png', title: 'Hutan Mangrove PIK', location: 'Pantai Indah Kapuk, Jakarta Utara', description: 'Kawasan mangrove seluas 99.82 hektar dengan boardwalk kayu untuk menjelajahi ekosistem bakau.', category: 'Mangrove', size: 'large' },
        { src: 'images/commons-harapan-aerial.jpg', title: 'Panorama Harapan Udara', location: 'Pulau Harapan', description: 'Gugusan kepulauan Seribu Utara dilihat dari udara.', category: 'Pulau Seribu', size: 'normal' },
        { src: 'images/commons-pramuka-dermaga.jpg', title: 'Dermaga Pramuka', location: 'Pulau Pramuka', description: 'Aktivitas pagi hari di dermaga utama Pulau Pramuka.', category: 'Pulau Seribu', size: 'normal' },
        { src: 'images/6_7_Rekomendasi_Kebun_Raya_di_Indonesia.png', title: 'Kebun Raya Bogor', location: 'Bogor, Jawa Barat', description: 'Kebun raya tertua di Asia Tenggara dengan koleksi lebih dari 15.000 jenis tumbuhan.', category: 'Alam Jabotabek', size: 'normal' },
        { src: 'images/4_6_Fakta_Menarik_Gunung_Halimun_Bagian.png', title: 'Taman Nasional Gunung Halimun Salak', location: 'Bogor & Sukabumi, Jawa Barat', description: 'Taman nasional dengan keanekaragaman hayati tertinggi di Pulau Jawa.', category: 'Alam Jabotabek', size: 'wide' },
        { src: 'images/commons-harapan-traditional-boat.jpg', title: 'Perahu Nelayan Harapan', location: 'Pulau Harapan', description: 'Perahu nelayan tradisional yang bersandar di pelabuhan.', category: 'Pulau Seribu', size: 'normal' },
        { src: 'images/3_Curug_Cilember_Wisata_Alam_Serbaguna.png', title: 'Curug Cilember', location: 'Cisarua, Bogor', description: 'Kompleks 7 air terjun di lereng Gunung Salak dengan air jernih dan suasana hutan tropis.', category: 'Alam Jabotabek', size: 'normal' },
        { src: 'images/9_Pulau_Ayer_Resort_and_Cottages_Jakarta.png', title: 'Pulau Ayer dari Udara', location: 'Pulau Ayer, Kepulauan Seribu', description: 'Pemandangan pulau resort dari udara dengan cottage-cottage mengapung di atas air.', category: 'Pulau Seribu', size: 'large' },
        { src: 'images/1_Menyaksikan_Penangkaran_Penyu_di.png', title: 'Penangkaran Penyu Pulau Pramuka', location: 'Pulau Pramuka, Kepulauan Seribu', description: 'Pusat konservasi penyu sisik yang langka di Pulau Pramuka. Pengunjung dapat belajar dan melepas tukik ke laut.', category: 'Pulau Seribu', size: 'normal' },
        { src: 'images/4_Tips_Lengkap_Liburan_Keluarga_ke.png', title: 'Sunset Pantai Tanjung Pasir', location: 'Tangerang, Banten', description: 'Pemandangan sunset memukau di Pantai Tanjung Pasir dengan deretan kapal nelayan.', category: 'Alam Jabotabek', size: 'normal' },
        { src: 'images/commons-pramuka-sea-urchin.jpg', title: 'Bulu Babi', location: 'Pulau Pramuka', description: 'Bulu babi hitam di perairan dangkal Kepulauan Seribu.', category: 'Pulau Seribu', size: 'normal' },
        { src: 'images/2_Rekomendasi_Resort_Mewah_di_Kepulauan.png', title: 'Resort Mewah', location: 'Kepulauan Seribu', description: 'Pilihan resort eksklusif untuk liburan yang menenangkan.', category: 'Pulau Seribu', size: 'wide' },
        { src: 'images/6_Tempat_Snorkeling_Yang_Kece_Di_Wisata.png', title: 'Snorkeling di Pulau Harapan', location: 'Pulau Harapan, Kepulauan Seribu', description: 'Pengalaman snorkeling menyaksikan terumbu karang indah dan ikan-ikan warna-warni.', category: 'Pulau Seribu', size: 'normal' },
        { src: 'images/2_Pulau_Onrust_Permata_Masa_Lalu_Kepulauan.png', title: 'Pulau Onrust', location: 'Pulau Onrust', description: 'Pulau bersejarah dengan peninggalan era kolonial VOC Belanda.', category: 'Pulau Seribu', size: 'normal' },
        { src: 'images/10_Taman_Wisata_Alam_Angke_Kapuk_Jakarta.png', title: 'Gerbang Mangrove Angke', location: 'Pantai Indah Kapuk', description: 'Pintu masuk kawasan pelestarian alam Mangrove Angke Kapuk.', category: 'Mangrove', size: 'normal' },
        { src: 'images/1_Taman_Nasional_Gunung_Halimun_Salak.png', title: 'Kanopi Gunung Halimun', location: 'Gunung Halimun Salak', description: 'Pemandangan asri kanopi hutan hujan tropis di Taman Nasional Halimun Salak.', category: 'Alam Jabotabek', size: 'large' },
        { src: 'images/3_Jakarta_Mangrove_Resort.png', title: 'Jakarta Mangrove Resort', location: 'Pantai Indah Kapuk, Jakarta', description: 'Resort ekowisata dengan penginapan unik di atas air dan aktivitas kayaking.', category: 'Mangrove', size: 'normal' }
      ]
    }
  },
  computed: {
    filteredPhotos() {
      if (this.activeCategory === 'Semua') return this.photos
      return this.photos.filter(p => p.category === this.activeCategory)
    },
    currentPhoto() {
      return this.filteredPhotos[this.currentPhotoIndex] || this.photos[0]
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown)
    this.observeElements()
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    openLightbox(index) {
      this.currentPhotoIndex = index
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = ''
    },
    prevPhoto() {
      this.currentPhotoIndex = (this.currentPhotoIndex - 1 + this.filteredPhotos.length) % this.filteredPhotos.length
    },
    nextPhoto() {
      this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.filteredPhotos.length
    },
    handleKeydown(e) {
      if (!this.lightboxOpen) return
      if (e.key === 'Escape') this.closeLightbox()
      if (e.key === 'ArrowLeft') this.prevPhoto()
      if (e.key === 'ArrowRight') this.nextPhoto()
    },
    observeElements() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      }, { threshold: 0.05 })

      setTimeout(() => {
        this.$el.querySelectorAll('.gallery-item').forEach(el => {
          observer.observe(el)
        })
      }, 100)
    }
  },
  watch: {
    activeCategory() {
      // Re-observe when filter changes
      this.$nextTick(() => {
        this.observeElements()
      })
    }
  }
}
</script>

<style scoped>
/* Page Hero */
.page-hero {
  position: relative;
  height: 50vh;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.page-hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(247, 251, 250, 0.95) 100%
  );
}

.page-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 2rem;
}

.page-tag {
  display: inline-block;
  background: rgba(13, 115, 119, 0.15);
  color: var(--ocean-teal);
  padding: 0.4rem 1.2rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1.2rem;
  border: 1px solid rgba(0, 108, 146, 0.2);
}

.page-hero-content h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--sand);
  margin-bottom: 0.75rem;
}

.page-hero-content p {
  color: var(--sand-muted);
  font-size: 1.1rem;
}

/* Filter */
.filter-section {
  padding: 2.5rem 2rem;
  display: flex;
  justify-content: center;
  background: var(--navy-mid);
  border-bottom: 1px solid var(--glass-border);
  position: sticky;
  top: 60px;
  z-index: 100;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
}

.filter-tabs {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-tab {
  padding: 0.7rem 1.4rem;
  border-radius: 100px;
  border: 1px solid var(--glass-border);
  background: var(--navy-deep);
  color: var(--sand-muted);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.filter-tab:hover {
  border-color: var(--ocean-teal);
  color: var(--ocean-teal);
  background: rgba(0, 108, 146, 0.05);
  transform: translateY(-2px);
}

.filter-tab.active {
  background: var(--ocean-teal);
  color: var(--white);
  border-color: var(--ocean-teal);
  box-shadow: 0 8px 20px rgba(0, 108, 146, 0.2);
}

/* Masonry Gallery */
.gallery-section {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 280px;
  gap: 1.5rem;
  grid-auto-flow: dense;
}

.gallery-item {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.gallery-item.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.gallery-item.item-large {
  grid-row: span 2;
  grid-column: span 1;
}

.gallery-item.item-wide {
  grid-column: span 2;
  grid-row: span 1;
}

@media (min-width: 1024px) {
  .masonry-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-item.item-wide {
    grid-column: span 1;
  }
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 40, 50, 0.9) 0%,
    rgba(0, 40, 50, 0.4) 40%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-info {
  transform: translateY(20px);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-item:hover .gallery-info {
  transform: translateY(0);
}

.gallery-info h4 {
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 0.35rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.gallery-info span {
  font-size: 0.85rem;
  color: var(--sunshine);
  font-weight: 600;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 20, 30, 0.95);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-content {
  max-width: 1000px;
  width: 100%;
  text-align: center;
  animation: lightboxPop 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes lightboxPop {
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.lightbox-content img {
  max-width: 100%;
  max-height: 65vh;
  object-fit: contain;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

.lightbox-info h3 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.lightbox-info p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto 1rem;
  line-height: 1.6;
}

.lightbox-location {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: var(--sunshine);
  font-weight: 600;
  padding: 0.5rem 1rem;
  background: rgba(255, 209, 102, 0.15);
  border-radius: 100px;
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close:hover {
  background: var(--coral-reef);
  transform: rotate(90deg);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-nav:hover {
  background: var(--ocean-teal);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-nav.prev {
  left: 2rem;
}

.lightbox-nav.next {
  right: 2rem;
}

/* Lightbox Transition */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .gallery-overlay {
    opacity: 1;
    background: linear-gradient(to top, rgba(0, 40, 50, 0.8) 0%, transparent 100%);
  }

  .gallery-info {
    transform: translateY(0);
  }

  .masonry-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 240px;
  }

  .gallery-item.item-large,
  .gallery-item.item-wide {
    grid-row: span 1;
    grid-column: span 1;
  }

  .lightbox-nav {
    width: 44px;
    height: 44px;
  }

  .lightbox-nav.prev {
    left: 0.5rem;
  }

  .lightbox-nav.next {
    right: 0.5rem;
  }

  .lightbox-close {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
}
</style>
