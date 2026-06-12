<template>
  <div class="wisata-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-bg" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="page-hero-overlay"></div>
      </div>
      <div class="page-hero-content">
        <span class="page-tag">JABODETABEK Tanpa Depok</span>
        <h1>Wisata Alam di Sekitar Jakarta</h1>
        <p>Temukan keajaiban alam dari Jakarta, Bogor, Tangerang, dan Bekasi</p>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="filter-section">
      <div class="filter-tabs">
        <button
          v-for="city in cities"
          :key="city"
          class="filter-tab"
          :class="{ active: activeFilter === city }"
          @click="activeFilter = city"
        >
          {{ city }}
        </button>
      </div>
    </section>

    <!-- Places Grid -->
    <section class="places-section">
      <div class="places-grid">
        <div
          v-for="(place, i) in filteredPlaces"
          :key="i"
          class="place-card"
          @mouseenter="hoveredCard = i"
          @mouseleave="hoveredCard = null"
        >
          <div class="place-image">
            <img :src="place.image" :alt="place.name" loading="lazy" />
            <div class="place-image-overlay"></div>
            <span class="place-badge">{{ place.city }}</span>
          </div>
          <div class="place-content">
            <h3>{{ place.name }}</h3>
            <p>{{ place.description }}</p>
            <div class="place-details">
              <div class="detail-item">
                <MapPin class="detail-icon" :size="17" stroke-width="2" />
                <span>{{ place.address }}</span>
              </div>
              <div class="detail-item">
                <Clock class="detail-icon" :size="17" stroke-width="2" />
                <span>{{ place.hours }}</span>
              </div>
              <div class="detail-item">
                <Ticket class="detail-icon" :size="17" stroke-width="2" />
                <span>{{ place.ticket }}</span>
              </div>
            </div>
            <div class="place-tags">
              <span v-for="(tag, t) in place.tags" :key="t" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Conservation Section -->
    <section class="conservation">
      <div class="conservation-content">
        <div class="conservation-text">
          <h2>Pelestarian Alam Jakarta</h2>
          <p>
            Jakarta dan sekitarnya memiliki berbagai kawasan konservasi yang berperan penting
            dalam menjaga keseimbangan ekosistem. Dari hutan mangrove yang melindungi pesisir
            dari abrasi hingga taman nasional yang menjadi rumah bagi ratusan spesies flora dan fauna.
          </p>
          <div class="conservation-stats">
            <div class="c-stat">
              <span class="c-number">99.82</span>
              <span class="c-unit">hektar</span>
              <span class="c-label">Hutan Mangrove PIK</span>
            </div>
            <div class="c-stat">
              <span class="c-number">113.357</span>
              <span class="c-unit">hektar</span>
              <span class="c-label">Taman Nasional Halimun Salak</span>
            </div>
          </div>
        </div>
        <div class="conservation-image">
          <img :src="conservationImage" alt="Konservasi Alam" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Clock, MapPin, Ticket } from '@lucide/vue'

export default {
  name: 'WisataAlam',
  components: { Clock, MapPin, Ticket },
  data() {
    return {
      heroImage: 'images/4_6_Fakta_Menarik_Gunung_Halimun_Bagian.png',
      conservationImage: 'images/5_CURUG_7_CILEMBER_Website_Resmi_Desa.png',
      activeFilter: 'Semua',
      hoveredCard: null,
      cities: ['Semua', 'Jakarta', 'Bogor', 'Tangerang', 'Bekasi'],
      places: [
        {
          name: 'Taman Wisata Alam Mangrove Angke Kapuk',
          city: 'Jakarta',
          description: 'Kawasan hutan mangrove seluas 99.82 hektar di Jakarta Utara. Tempat wisata alam dengan berbagai jenis mangrove, spot pengamatan burung, dan fasilitas boardwalk untuk menjelajahi hutan bakau.',
          address: 'Jl. Garden House, Pantai Indah Kapuk, Jakarta Utara',
          hours: '08.00 - 18.00 WIB',
          ticket: 'Rp 30.000 - 35.000 (dewasa)',
          tags: ['Mangrove', 'Birdwatching', 'Edukasi', 'Fotografi'],
          image: 'images/10_Hutan_Mangrove_PIK_di_Jakarta_Atouri.png'
        },
        {
          name: 'Jakarta Mangrove Resort',
          city: 'Jakarta',
          description: 'Resort ekowisata mangrove dengan konsep sustainable tourism. Menyediakan penginapan unik di atas air, kayaking, dan edukasi konservasi mangrove untuk pengunjung.',
          address: 'Jl. Mualim Teko, Pantai Indah Kapuk, Jakarta Utara',
          hours: '08.00 - 17.30 WIB',
          ticket: 'Rp 25.000 - 30.000',
          tags: ['Resort', 'Kayaking', 'Mangrove', 'Penginapan'],
          image: 'images/3_Jakarta_Mangrove_Resort.png'
        },
        {
          name: 'Taman Mini Indonesia Indah - Danau Archipelago',
          city: 'Jakarta',
          description: 'Danau buatan yang dirancang menyerupai peta kepulauan Indonesia. Terdapat taman bermain air, perahu dayung, dan jogging track yang dikelilingi pepohonan rindang.',
          address: 'TMII, Cipayung, Jakarta Timur',
          hours: '06.00 - 16.00 WIB',
          ticket: 'Rp 10.000 - 25.000',
          tags: ['Danau', 'Rekreasi', 'Keluarga', 'Jogging'],
          image: 'images/6_Danau_Archipelago_Taman_Mini_Indonesia.png'
        },
        {
          name: 'Kebun Raya Bogor',
          city: 'Bogor',
          description: 'Kebun raya tertua di Asia Tenggara dengan koleksi lebih dari 15.000 jenis tumbuhan. Area seluas 87 hektar dengan pemandangan Gunung Gede-Pangrango yang memukau.',
          address: 'Jl. Ir. H. Juanda No.13, Bogor Tengah',
          hours: '08.00 - 16.00 WIB',
          ticket: 'Rp 15.000 - 25.000',
          tags: ['Botani', 'Sejarah', 'Fotografi', 'Keluarga'],
          image: 'images/6_7_Rekomendasi_Kebun_Raya_di_Indonesia.png'
        },
        {
          name: 'Taman Nasional Gunung Halimun Salak',
          city: 'Bogor',
          description: 'Taman nasional seluas 113.357 hektar dengan keanekaragaman hayati tertinggi di Jawa. Habitat badak jawa, owa jawa, dan ratusan spesies burung. Dilintasi oleh Sungai Citarum.',
          address: 'Kecamatan Kabandungan, Kabupaten Sukabumi & Bogor',
          hours: '24 jam (izin pendakian)',
          ticket: 'Rp 15.000 - 25.000',
          tags: ['Gunung', 'Trekking', 'Flora & Fauna', 'Air Terjun'],
          image: 'images/4_6_Fakta_Menarik_Gunung_Halimun_Bagian.png'
        },
        {
          name: 'Curug Cilember',
          city: 'Bogor',
          description: 'Kompleks 7 air terjun di lereng Gunung Salak dengan ketinggian berbeda-beda. Air jernih dikelilingi hutan tropis yang lebat. Cocok untuk trekking ringan dan camping.',
          address: 'Desa Jogjogan, Kecamatan Cisarua, Kabupaten Bogor',
          hours: '08.00 - 16.00 WIB',
          ticket: 'Rp 15.000 - 20.000',
          tags: ['Air Terjun', 'Trekking', 'Camping', 'Alam'],
          image: 'images/3_Curug_Cilember_Wisata_Alam_Serbaguna.png'
        },
        {
          name: 'Pantai Tanjung Pasir',
          city: 'Tangerang',
          description: 'Pantai populer di Teluk Jakarta dengan pemandangan sunset yang indah. Terdapat deretan warung seafood segar dan spot foto ikonik dengan latar jembatan dan kapal nelayan.',
          address: 'Tanjung Pasir, Teluknaga, Kabupaten Tangerang',
          hours: '06.00 - 18.00 WIB',
          ticket: 'Rp 10.000 - 15.000',
          tags: ['Pantai', 'Sunset', 'Seafood', 'Fotografi'],
          image: 'images/4_Tips_Lengkap_Liburan_Keluarga_ke.png'
        },
        {
          name: 'Pulau Untung Jawa',
          city: 'Tangerang',
          description: 'Pulau kecil di Kepulauan Seribu yang masuk wilayah Tangerang. Dikenal dengan pantai pasir putih dan terumbu karang yang indah untuk snorkeling. Suasana tenang dan autentik.',
          address: 'Pulau Untung Jawa, Kepulauan Seribu Selatan',
          hours: '08.00 - 17.00 WIB',
          ticket: 'Rp 15.000 (retribusi pulau)',
          tags: ['Pulau', 'Snorkeling', 'Pantai', 'Tenang'],
          image: 'images/2_Pantai_Tanjung_Pasir_Wisata_Tangerang.png'
        },
        {
          name: 'Taman Wisata Mekarsari',
          city: 'Bogor',
          description: 'Taman buah terbesar di Indonesia dengan koleksi lebih dari 4.800 jenis tanaman buah-buahan. Area rekreasi keluarga dengan danau, taman bermain, dan spot camping.',
          address: 'Jl. Raya Cileungsi - Jonggol KM.3, Cileungsi, Bogor',
          hours: '08.00 - 17.00 WIB',
          ticket: 'Rp 35.000 - 50.000',
          tags: ['Buah-buahan', 'Keluarga', 'Danau', 'Edukasi'],
          image: 'images/8_Wisata_Indah_Pantai_Tanjung_Pasir.png'
        }
      ]
    }
  },
  computed: {
    filteredPlaces() {
      if (this.activeFilter === 'Semua') return this.places
      return this.places.filter(p => p.city === this.activeFilter)
    }
  },
  mounted() {
    this.observeElements()
  },
  methods: {
    observeElements() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      }, { threshold: 0.1 })

      document.querySelectorAll('.place-card, .c-stat').forEach(el => {
        observer.observe(el)
      })
    }
  }
}
</script>

<style scoped>
/* Page Hero */
.page-hero {
  position: relative;
  height: 55vh;
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
    rgba(255, 255, 255, 0.5) 0%,
    rgba(247, 251, 250, 0.92) 100%
  );
}

.page-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 2rem;
  max-width: 700px;
}

.page-tag {
  display: inline-block;
  background: rgba(232, 145, 95, 0.15);
  color: var(--coral-reef);
  padding: 0.4rem 1rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.page-hero-content h1 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--sand);
  margin-bottom: 0.75rem;
}

.page-hero-content p {
  color: var(--sand-muted);
  font-size: 0.95rem;
}

/* Filter */
.filter-section {
  padding: 2rem;
  display: flex;
  justify-content: center;
  background: var(--navy-mid);
  border-bottom: 1px solid var(--glass-border);
  position: sticky;
  top: 60px;
  z-index: 10;
}

.filter-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-tab {
  padding: 0.6rem 1.2rem;
  border-radius: 100px;
  border: 1px solid var(--glass-border);
  background: transparent;
  color: var(--sand-muted);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.filter-tab:hover {
  border-color: var(--ocean-teal);
  color: var(--sand);
}

.filter-tab.active {
  background: var(--ocean-teal);
  color: var(--white);
  border-color: var(--ocean-teal);
}

/* Places Grid */
.places-section {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.places-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.place-card {
  background: var(--navy-mid);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--glass-border);
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(30px);
}

.place-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.place-card:hover {
  transform: translateY(-5px);
  border-color: rgba(13, 115, 119, 0.3);
  box-shadow: 0 15px 30px rgba(23, 59, 56, 0.14);
}

.place-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.place-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.place-card:hover .place-image img {
  transform: scale(1.08);
}

.place-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.92), transparent);
}

.place-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(10px);
  color: var(--ocean-light);
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  font-size: 0.7rem;
  font-weight: 600;
}

.place-content {
  padding: 1.5rem;
}

.place-content h3 {
  font-size: 1.1rem;
  color: var(--sand);
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.place-content > p {
  font-size: 0.85rem;
  color: var(--sand-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.place-details {
  margin-bottom: 1rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--sand-muted);
  margin-bottom: 0.4rem;
}

.detail-icon {
  flex: 0 0 auto;
  color: var(--ocean-teal);
  margin-top: 0.08rem;
}

.place-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  background: rgba(13, 115, 119, 0.1);
  color: var(--ocean-light);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 500;
}

/* Conservation */
.conservation {
  padding: 5rem 2rem;
  background: var(--navy-mid);
  border-top: 1px solid var(--glass-border);
}

.conservation-content {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.conservation-text h2 {
  font-size: 1.8rem;
  color: var(--sand);
  margin-bottom: 1rem;
}

.conservation-text > p {
  color: var(--sand-muted);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.conservation-stats {
  display: flex;
  gap: 2rem;
}

.c-stat {
  text-align: center;
  padding: 1.5rem;
  background: var(--navy-deep);
  border-radius: 16px;
  border: 1px solid var(--glass-border);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}

.c-stat.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.c-number {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--ocean-light);
}

.c-unit {
  display: block;
  font-size: 0.75rem;
  color: var(--slate-muted);
  margin-bottom: 0.3rem;
}

.c-label {
  display: block;
  font-size: 0.75rem;
  color: var(--sand-muted);
}

.conservation-image img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .places-grid {
    grid-template-columns: 1fr;
  }

  .conservation-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .filter-section {
    top: 0;
    position: relative;
  }

  .page-hero {
    height: 45vh;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .places-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .conservation-content {
    gap: 2rem;
  }
}
</style>
