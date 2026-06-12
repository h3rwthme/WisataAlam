<template>
  <div class="destinasi-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-bg" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="page-hero-overlay"></div>
      </div>
      <div class="page-hero-content">
        <span class="page-tag">Kepulauan Seribu</span>
        <h1>Destinasi Bahari Jakarta</h1>
        <p>110 pulau eksotis dengan keindahan alam bawah laut yang memukau</p>
      </div>
    </section>

    <!-- Destination Overview -->
    <section class="destinations-overview">
      <router-link
        v-for="(island, i) in destinationCards"
        :key="island.slug"
        class="destination-card"
        :to="{ name: 'DestinasiDetail', params: { slug: island.slug } }"
        :style="{ transitionDelay: `${i * 70}ms` }"
      >
        <div class="destination-image">
          <img :src="island.mainImage" :alt="island.name" loading="lazy" />
          <span class="island-type">{{ island.type }}</span>
        </div>
        <div class="destination-content">
          <h2>{{ island.name }}</h2>
          <p>{{ island.shortDescription }}</p>
          <div class="destination-meta">
            <span>
              <MapPin :size="16" stroke-width="2" />
              {{ island.location }}
            </span>
            <span>
              <Clock :size="16" stroke-width="2" />
              {{ island.duration }}
            </span>
          </div>
          <div class="destination-action">
            Baca adat & budaya
            <ArrowRight :size="18" stroke-width="2" />
          </div>
        </div>
      </router-link>
    </section>

    <!-- Activities -->
    <section class="activities">
      <div class="section-header">
        <span class="section-tag">Aktivitas</span>
        <h2>Apa Saja yang Bisa Dilakukan?</h2>
      </div>
      <div class="activities-grid">
        <div
          v-for="(activity, i) in activities"
          :key="i"
          class="activity-card"
        >
          <div class="activity-icon">
            <component :is="activity.icon" :size="34" stroke-width="1.8" />
          </div>
          <h4>{{ activity.name }}</h4>
          <p>{{ activity.description }}</p>
        </div>
      </div>
    </section>

    <!-- Travel Tips -->
    <section class="tips">
      <div class="tips-content">
        <h3>Tips Berwisata ke Kepulauan Seribu</h3>
        <div class="tips-grid">
          <div v-for="(tip, i) in tips" :key="i" class="tip-item">
            <span class="tip-number">{{ String(i + 1).padStart(2, '0') }}</span>
            <p>{{ tip }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  BadgeDollarSign,
  ArrowRight,
  Camera,
  Clock,
  Fish,
  MapPin,
  Sailboat,
  ShieldCheck,
  Sunset,
  Waves
} from '@lucide/vue'
import { islandDestinations } from '../data/islands'

export default {
  name: 'DestinasiSeribu',
  components: { ArrowRight, BadgeDollarSign, Clock, MapPin },
  data() {
    return {
      heroImage: 'images/commons-harapan-aerial.jpg',
      activeThumb: {},
      islands: [
        {
          name: 'Pulau Tidung',
          type: 'Wisata Populer',
          description: 'Pulau Tidung adalah destinasi wisata paling populer di Kepulauan Seribu. Terdiri dari Pulau Tidung Besar dan Pulau Tidung Kecil yang dihubungkan oleh Jembatan Cinta sepanjang 800 meter. Jembatan ini adalah ikon wisata yang menawarkan pemandangan laut spektakuler dan spot foto yang tak terlupakan. Wisatawan dapat bersepeda santai, snorkeling di perairan jernih, atau sekadar menikmati angin laut sambil menunggu sunset.',
          highlights: [
            'Jembatan Cinta ikonik 800 meter',
            'Snorkeling dan diving terumbu karang',
            'Bersepeda keliling pulau',
            'Sunset dan sunrise terbaik',
            'Banana boat dan sofa boat'
          ],
          location: 'Kepulauan Seribu Selatan',
          travelTime: '2-3 jam dari Muara Angke',
          price: 'Rp 550.000 - 860.000/orang',
          mainImage: 'images/10_Fun_Jumping_at_Jembatan_Cinta_Tidung.png',
          thumbnails: [
            'images/2_Jembatan_Cinta_Ikon_Wisata_Pulau.png',
            'images/8_Jembatan_Cinta_Lokasi_Favorit_Pelancong.png',
            'images/4_Intip_Romantisme_Jembatan_Cinta_di.png'
          ]
        },
        {
          name: 'Pulau Pramuka',
          type: 'Ekowisata & Edukasi',
          description: 'Pulau Pramuka adalah pusat pemerintahan Kepulauan Seribu dan destinasi ekowisata unggulan. Pulau ini terkenal dengan penangkaran penyu sisik yang sangat langka. Pengunjung dapat belajar tentang konservasi penyu, melepas tukik ke laut, serta menikmati keindahan taman laut dengan snorkeling. Terdapat juga fasilitas penginapan dan warung lokal yang ramah wisatawan.',
          highlights: [
            'Penangkaran penyu sisik langka',
            'Melepas tukik ke laut',
            'Taman laut untuk snorkeling',
            'Pengamatan burung laut',
            'Mangrove tracking'
          ],
          location: 'Kepulauan Seribu Utara',
          travelTime: '2-3 jam dari Muara Angke',
          price: 'Rp 300.000 - 500.000/orang',
          mainImage: 'images/commons-pramuka-dermaga.jpg',
          thumbnails: [
            'images/commons-pulau-pramuka.jpg',
            'images/commons-pramuka-port-gate.jpg',
            'images/commons-pramuka-sea-urchin.jpg'
          ]
        },
        {
          name: 'Pulau Pari',
          type: 'Pantai & Snorkeling',
          description: 'Pulau Pari adalah surga pantai dengan Pasir Perawan yang sangat terkenal. Pantai ini memiliki pasir putih lembut dan air laut yang jernih berwarna toska. Terumbu karang yang masih alami menjadikannya spot snorkeling terbaik. Pulau ini juga memiliki fasilitas penelitian biota laut dari LIPI yang dapat dikunjungi wisatawan.',
          highlights: [
            'Pantai Pasir Perawan eksotis',
            'Snorkeling terumbu karang alami',
            'Water sport menyenangkan',
            'Penanaman bakau bersama',
            'Bersepeda keliling pulau'
          ],
          location: 'Kepulauan Seribu Selatan',
          travelTime: '1.5-2 jam dari Muara Angke',
          price: 'Rp 250.000 - 450.000/orang',
          mainImage: 'images/5_Pantai_Pasir_Perawan_Spot_Terbaik.png',
          thumbnails: [
            'images/7_Trip_Keren_Pesona_Pantai_Pasir_Perawan.png',
            'images/9_Pantai_Pasir_Perawan_Destinasi_Favorit.png',
            'images/3_Spot_Snorkeling_Bawah_Laut_Terbaik.png'
          ]
        },
        {
          name: 'Pulau Harapan',
          type: 'Taman Nasional & Diving',
          description: 'Pulau Harapan berada dalam zona Taman Nasional Kepulauan Seribu, menjadikannya destinasi dengan keanekaragaman hayati terlengkap. Terdapat ratusan spot terumbu karang yang indah untuk snorkeling dan diving. Biota laut yang melimpah termasuk berbagai jenis ikan tropis, penyu, dan terumbu karang berwarna-warni.',
          highlights: [
            'Ratusan spot terumbu karang',
            'Diving dan snorkeling premium',
            'Island hopping ke pulau kecil',
            'Fishing spot terbaik',
            'Penginapan tepi pantai'
          ],
          location: 'Kepulauan Seribu Utara',
          travelTime: '3-4 jam dari Muara Angke',
          price: 'Rp 350.000 - 600.000/orang',
          mainImage: 'images/commons-harapan-aerial.jpg',
          thumbnails: [
            'images/commons-harapan-transport.jpg',
            'images/commons-harapan-traditional-boat.jpg',
            'images/commons-harapan-boat.jpg'
          ]
        },
        {
          name: 'Pulau Bidadari',
          type: 'Sejarah & Resort',
          description: 'Pulau Bidadari adalah pulau bersejarah yang terletak paling dekat dengan Jakarta, hanya sekitar 15 km. Dahulu digunakan sebagai tempat peristirahatan Pangeran Jayakarta. Pulau ini memiliki benteng peninggalan Belanda yang masih berdiri kokoh. Dengan resort yang nyaman, pulau ini cocok untuk liburan singkat dari hiruk-pikuk kota.',
          highlights: [
            'Benteng Belanda bersejarah',
            'Resort tepi pantai nyaman',
            'Jarak terdekat dari Jakarta',
            'Kolam renang alami',
            'Watersport lengkap'
          ],
          location: 'Kepulauan Seribu Utara (15 km dari Jakarta)',
          travelTime: '20 menit dari Marina Ancol',
          price: 'Rp 550.000 - 1.450.000/orang',
          mainImage: 'images/commons-bidadari-beach.jpg',
          thumbnails: [
            'images/commons-bidadari-shore.jpg',
            'images/commons-bidadari-beach.jpg'
          ]
        },
        {
          name: 'Pulau Macan',
          type: 'Resort Eksklusif',
          description: 'Pulau Macan menawarkan pengalaman liburan mewah dengan konsep eco-resort. Villa-villa yang dibangun dari bahan alami dengan pemandangan laut langsung. Restoran organik, spa, dan berbagai aktivitas air tersedia. Pulau ini sempurna untuk bulan madu atau liburan keluarga yang mencari ketenangan dan privasi.',
          highlights: [
            'Eco-resort mewah',
            'Villa dengan pemandangan laut',
            'Restoran organik dan spa',
            'Kayaking dan snorkeling',
            'Suasana tenang dan private'
          ],
          location: 'Kepulauan Seribu Utara',
          travelTime: '1.5-2 jam dari Marina Ancol',
          price: 'Rp 1.500.000 - 3.000.000/orang',
          mainImage: 'images/8_Pulau_Macan_Resort_Kepulauan_Seribu.png',
          thumbnails: [
            'images/5_Pulau_Macan_Paket_Tour_Wisata_Pulau.png',
            'images/3_Paket_Wisata_Pulau_Macan_Eco_Village.png',
            'images/6_Pulau_Alam_Kotok_Pulau_Seribu_Resort.png'
          ]
        }
      ],
      activities: [
        { icon: Waves, name: 'Snorkeling & Diving', description: 'Jelajahi keindahan terumbu karang dan biota laut yang beragam di perairan jernih Kepulauan Seribu.' },
        { icon: Sailboat, name: 'Kayaking', description: 'Berlayar mengelilingi pulau-pulau kecil dengan kayak sambil menikmati pemandangan spektakuler.' },
        { icon: ShieldCheck, name: 'Konservasi Penyu', description: 'Kunjungi penangkaran penyu dan ikut serta dalam pelestarian satwa langka ini.' },
        { icon: Camera, name: 'Fotografi', description: 'Abadikan momen indah dengan latar pantai pasir putih, air jernih, dan sunset memukau.' },
        { icon: Fish, name: 'Memancing', description: 'Nikmati pengalaman memancing di spot terbaik dengan hasil tangkapan yang melimpah.' },
        { icon: Sunset, name: 'Sunset Cruise', description: 'Nikmati pemandangan sunset yang romantis dari atas kapal keliling pulau.' }
      ],
      tips: [
        'Pilih musim kemarau (April-Oktober) untuk cuaca terbaik dan laut yang tenang.',
        'Pesan tiket boat dari Muara Angke atau Marina Ancol minimal H-1.',
        'Bawa sunblock, topi, dan kacamata hitam untuk perlindungan dari sinar matahari.',
        'Jangan lupa bawa kamera underwater untuk mengabadikan keindahan bawah laut.',
        'Hormati lingkungan dengan tidak membuang sampah sembarangan dan tidak merusak terumbu karang.',
        'Bawa obat-obatan pribadi dan lotion anti-nyamuk untuk kenyamanan berwisata.'
      ]
    }
  },
  computed: {
    destinationCards() {
      return islandDestinations
    }
  },
  mounted() {
    this.observeElements()
  },
  methods: {
    setThumb(islandIndex, thumbIndex) {
      this.activeThumb = { ...this.activeThumb, [islandIndex]: thumbIndex }
      const island = this.islands[islandIndex]
      island.mainImage = island.thumbnails[thumbIndex]
    },
    observeElements() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      }, { threshold: 0.1 })

      document.querySelectorAll('.destination-card, .activity-card, .tip-item').forEach(el => {
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
  height: 60vh;
  min-height: 400px;
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
  background: rgba(13, 115, 119, 0.2);
  color: var(--ocean-light);
  padding: 0.4rem 1rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.page-hero-content h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--sand);
  margin-bottom: 0.75rem;
}

.page-hero-content p {
  font-size: 1rem;
  color: var(--sand-muted);
}

/* Destination Overview */
.destinations-overview {
  max-width: 1180px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.destination-card {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  background: var(--navy-mid);
  border: 1px solid var(--glass-border);
  box-shadow: 0 18px 40px rgba(0, 169, 184, 0.1);
  opacity: 0;
  transform: translateY(28px);
  transition: transform 0.45s ease, opacity 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease;
}

.destination-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.destination-card:hover {
  border-color: rgba(0, 108, 146, 0.26);
  box-shadow: 0 24px 60px rgba(0, 108, 146, 0.12);
  transform: translateY(-8px);
}

.destination-image {
  position: relative;
  height: 230px;
  overflow: hidden;
}

.destination-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s ease;
}

.destination-card:hover .destination-image img {
  transform: scale(1.08);
}

.destination-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 35%, rgba(255, 255, 255, 0.92) 100%);
}

.destination-image .island-type {
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 1;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
}

.destination-content {
  padding: 1.35rem;
}

.destination-content h2 {
  color: var(--sand);
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
}

.destination-content p {
  font-size: 0.88rem;
  margin-bottom: 1rem;
}

.destination-meta {
  display: grid;
  gap: 0.45rem;
  margin-bottom: 1.1rem;
}

.destination-meta span,
.destination-action {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.destination-meta span {
  color: var(--sand-muted);
  font-size: 0.78rem;
}

.destination-action {
  color: var(--coral-reef);
  font-size: 0.86rem;
  font-weight: 700;
}

/* Islands Detail */
.islands-detail {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.island-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 5rem;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.7s ease;
}

.island-detail.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.island-detail.island-reverse {
  direction: rtl;
}

.island-detail.island-reverse > * {
  direction: ltr;
}

.island-media {
  position: relative;
}

.island-gallery {
  position: sticky;
  top: 100px;
}

.island-main-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 1rem;
  transition: all 0.5s ease;
}

.island-thumbnails {
  display: flex;
  gap: 0.75rem;
}

.island-thumbnails img {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.island-thumbnails img.active,
.island-thumbnails img:hover {
  opacity: 1;
  border-color: var(--ocean-teal);
}

.island-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.island-header h2 {
  font-size: 1.8rem;
  color: var(--sand);
}

.island-type {
  background: rgba(232, 145, 95, 0.15);
  color: var(--coral-reef);
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
}

.island-desc {
  color: var(--sand-muted);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.island-highlights {
  margin-bottom: 1.5rem;
}

.island-highlights h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  color: var(--sand);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.island-highlights ul {
  list-style: none;
}

.island-highlights li {
  padding: 0.4rem 0;
  color: var(--sand-muted);
  font-size: 0.9rem;
  position: relative;
  padding-left: 1.2rem;
}

.island-highlights li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--ocean-light);
}

.island-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1.2rem;
  background: var(--navy-mid);
  border-radius: 16px;
  border: 1px solid var(--glass-border);
}

.fact {
  text-align: center;
}

.fact-icon {
  display: block;
  color: var(--ocean-teal);
  margin-bottom: 0.3rem;
  margin-left: auto;
  margin-right: auto;
}

.fact-label {
  display: block;
  font-size: 0.7rem;
  color: var(--slate-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.2rem;
}

.fact-value {
  display: block;
  font-size: 0.8rem;
  color: var(--sand);
  font-weight: 600;
}

/* Activities */
.activities {
  padding: 4rem 2rem;
  background: var(--navy-mid);
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}

.activities-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.activity-card {
  background: var(--navy-deep);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(30px);
}

.activity-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.activity-card:hover {
  border-color: rgba(13, 115, 119, 0.3);
  transform: translateY(-5px);
}

.activity-icon {
  width: 58px;
  height: 58px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: rgba(15, 118, 110, 0.1);
  color: var(--ocean-teal);
  margin-bottom: 1rem;
}

.activity-card h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: var(--sand);
  margin-bottom: 0.5rem;
}

.activity-card p {
  font-size: 0.85rem;
  color: var(--sand-muted);
  line-height: 1.6;
}

/* Tips */
.tips {
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.tips-content h3 {
  font-size: 1.5rem;
  color: var(--sand);
  text-align: center;
  margin-bottom: 2rem;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.tip-item {
  display: flex;
  gap: 1rem;
  padding: 1.2rem;
  background: var(--navy-mid);
  border-radius: 12px;
  border: 1px solid var(--glass-border);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}

.tip-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.tip-number {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--ocean-light);
  line-height: 1;
}

.tip-item p {
  font-size: 0.85rem;
  color: var(--sand-muted);
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .island-detail {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .island-detail.island-reverse {
    direction: ltr;
  }

  .island-gallery {
    position: relative;
    top: 0;
  }

  .island-main-image {
    height: 250px;
  }

  .island-facts {
    grid-template-columns: 1fr;
  }

  .page-hero {
    height: 50vh;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .island-detail {
    gap: 2rem;
  }
}
</style>
