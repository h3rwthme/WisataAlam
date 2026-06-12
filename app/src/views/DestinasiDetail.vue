<template>
  <div v-if="island" class="destination-detail">
    <section class="detail-hero">
      <img :src="island.mainImage" :alt="island.name" class="detail-hero-image" />
      <div class="detail-hero-overlay"></div>
      <div class="detail-hero-content">
        <router-link to="/destinasi-seribu" class="back-link">
          <ArrowLeft :size="18" stroke-width="2" />
          Kembali ke destinasi
        </router-link>
        <span class="page-tag">{{ island.type }}</span>
        <h1>{{ island.name }}</h1>
        <p>{{ island.description }}</p>
      </div>
    </section>

    <section class="detail-facts">
      <div class="fact-card">
        <MapPin :size="24" stroke-width="2" />
        <span>Lokasi</span>
        <strong>{{ island.location }}</strong>
      </div>
      <div class="fact-card">
        <Clock :size="24" stroke-width="2" />
        <span>Perjalanan</span>
        <strong>{{ island.travelTime }}</strong>
      </div>
      <div class="fact-card">
        <BadgeDollarSign :size="24" stroke-width="2" />
        <span>Estimasi</span>
        <strong>{{ island.price }}</strong>
      </div>
    </section>

    <!-- NEW: Culture & History Section with Enhanced Layout -->
    <section class="culture-section">
      <div class="culture-header">
        <div class="culture-intro">
          <span class="section-tag">Adat & Sejarah</span>
          <h2>Jejak Budaya {{ island.name }}</h2>
          <p>{{ island.cultureIntro }}</p>
        </div>
        <div class="culture-ornament">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="var(--ocean-teal)" stroke-width="2" stroke-dasharray="6 6" opacity="0.3"/>
            <circle cx="50" cy="50" r="25" stroke="var(--coral-reef)" stroke-width="1.5" opacity="0.5"/>
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="var(--sand-muted)" stroke-width="1" opacity="0.2"/>
          </svg>
        </div>
      </div>

      <div class="culture-grid">
        <article v-for="(item, i) in island.culture" :key="item.title" class="culture-card">
          <div class="culture-icon">
            <component :is="getCultureIcon(i)" :size="26" stroke-width="1.8" />
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      </div>
    </section>

    <section class="experience-section">
      <div class="experience-media">
        <img :src="island.thumbnails[0]" :alt="`${island.name} pengalaman lokal`" />
        <div class="exp-badge">
          <Compass :size="24" />
          <span>Eksplorasi Lokal</span>
        </div>
      </div>
      <div class="experience-content">
        <span class="section-tag">Pengalaman Autentik</span>
        <h2>Yang Bisa Kamu Rasakan</h2>
        <ul>
          <li v-for="experience in island.localExperiences" :key="experience">
            <Sparkles :size="18" stroke-width="2" />
            {{ experience }}
          </li>
        </ul>
      </div>
    </section>

    <section class="detail-gallery">
      <div class="section-header">
        <span class="section-tag">Galeri Pulau</span>
        <h2>Suasana {{ island.name }}</h2>
      </div>
      <div class="gallery-row">
        <img
          v-for="image in island.thumbnails"
          :key="image"
          :src="image"
          :alt="island.name"
          loading="lazy"
        />
      </div>
    </section>

    <section class="next-destinations">
      <div class="section-header centered">
        <span class="section-tag">Jelajahi Lagi</span>
        <h2>Destinasi Pilihan Lainnya</h2>
      </div>
      <div class="next-list">
        <router-link
          v-for="item in otherIslands"
          :key="item.slug"
          :to="{ name: 'DestinasiDetail', params: { slug: item.slug } }"
          class="next-card"
        >
          <img :src="item.mainImage" :alt="item.name" loading="lazy" />
          <div class="next-card-overlay">
            <span>{{ item.name }}</span>
            <ArrowRight :size="16" stroke-width="2" />
          </div>
        </router-link>
      </div>
    </section>
  </div>

  <section v-else class="not-found">
    <h1>Destinasi tidak ditemukan</h1>
    <router-link to="/destinasi-seribu" class="btn-primary">Kembali ke destinasi</router-link>
  </section>
</template>

<script>
import { ArrowLeft, ArrowRight, BadgeDollarSign, Clock, MapPin, Sparkles, Users, History, Utensils, Anchor, Compass, HeartHandshake } from '@lucide/vue'
import { getIslandBySlug, islandDestinations } from '../data/islands'

export default {
  name: 'DestinasiDetail',
  components: { ArrowLeft, ArrowRight, BadgeDollarSign, Clock, MapPin, Sparkles, Users, Compass },
  computed: {
    island() {
      return getIslandBySlug(this.$route.params.slug)
    },
    otherIslands() {
      return islandDestinations.filter((item) => item.slug !== this.$route.params.slug).slice(0, 3)
    }
  },
  methods: {
    getCultureIcon(index) {
      const icons = [History, Users, Utensils, HeartHandshake, Anchor]
      return icons[index % icons.length]
    }
  }
}
</script>

<style scoped>
.destination-detail {
  background: var(--navy-deep);
}

.detail-hero {
  position: relative;
  min-height: 86vh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 7rem 2rem 5rem;
}

.detail-hero-image,
.detail-hero-overlay {
  position: absolute;
  inset: 0;
}

.detail-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.04);
}

.detail-hero-overlay {
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.78) 42%, rgba(255, 255, 255, 0.22) 100%),
    linear-gradient(180deg, transparent 45%, var(--navy-deep) 100%);
}

.detail-hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  animation: fadeUp 1s ease-out;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.back-link,
.page-tag,
.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  font-weight: 700;
}

.back-link {
  color: var(--ocean-teal);
  margin-bottom: 1.4rem;
  padding: 0.5rem 1rem;
  background: rgba(15, 118, 110, 0.08);
  border-radius: 100px;
  transition: all 0.3s ease;
}

.back-link:hover {
  background: rgba(15, 118, 110, 0.15);
  transform: translateX(-5px);
}

.page-tag,
.section-tag {
  background: rgba(255, 209, 102, 0.42);
  color: var(--sand);
  padding: 0.45rem 1.2rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid rgba(0, 108, 146, 0.15);
}

.detail-hero h1 {
  color: var(--sand);
  font-size: clamp(2.4rem, 7vw, 5.8rem);
  line-height: 0.95;
  margin: 1.2rem 0;
  text-shadow: 0 4px 20px rgba(255, 255, 255, 0.8);
}

.detail-hero p {
  max-width: 680px;
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--sand-muted);
}

.detail-facts {
  max-width: 1080px;
  margin: -3rem auto 0;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.fact-card,
.culture-card,
.next-card {
  background: var(--navy-mid);
  border: 1px solid var(--glass-border);
  box-shadow: 0 18px 40px rgba(0, 169, 184, 0.08);
}

.fact-card {
  min-height: 140px;
  border-radius: 24px;
  padding: 1.5rem;
  display: grid;
  align-content: center;
  gap: 0.5rem;
  color: var(--ocean-teal);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.fact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 22px 50px rgba(0, 108, 146, 0.12);
}

.fact-card span {
  color: var(--slate-muted);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.fact-card strong {
  color: var(--sand);
  font-size: 1rem;
}

.culture-section,
.experience-section,
.detail-gallery,
.next-destinations {
  max-width: 1120px;
  margin: 0 auto;
  padding: 6rem 2rem 0;
}

.culture-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
  gap: 2rem;
}

.culture-intro {
  max-width: 700px;
}

.culture-intro p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--sand-muted);
}

.culture-ornament {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  animation: spin 30s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.culture-intro h2,
.experience-content h2,
.section-header h2 {
  color: var(--sand);
  font-size: clamp(2rem, 4vw, 3.2rem);
  margin: 1.2rem 0;
  letter-spacing: -1px;
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.culture-card {
  border-radius: 24px;
  padding: 2rem;
  transition: transform 0.4s ease;
  position: relative;
  overflow: hidden;
}

.culture-card::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(0, 214, 201, 0.05), transparent 70%);
  border-radius: 50%;
  transform: translate(30%, -30%);
}

.culture-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 108, 146, 0.25);
}

.culture-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 108, 146, 0.08);
  color: var(--ocean-teal);
  margin-bottom: 1.5rem;
}

.culture-card h3 {
  color: var(--sand);
  font-size: 1.15rem;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.culture-card p {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--sand-muted);
}

.experience-section {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
  margin-top: 2rem;
}

.experience-media {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  min-height: 480px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.1);
}

.exp-badge {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 1.5rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--ocean-teal);
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.experience-media img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.experience-section:hover .experience-media img {
  transform: scale(1.08);
}

.experience-content ul {
  display: grid;
  gap: 1rem;
  list-style: none;
  margin-top: 2rem;
}

.experience-content li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.8);
  color: var(--sand);
  font-weight: 600;
  border: 1px solid rgba(0, 108, 146, 0.08);
  transition: all 0.3s ease;
}

.experience-content li:hover {
  background: var(--white);
  transform: translateX(10px);
  border-color: rgba(0, 108, 146, 0.2);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.experience-content li svg {
  color: var(--coral-reef);
  flex: 0 0 auto;
}

.section-header.centered {
  text-align: center;
}

.gallery-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}

.gallery-row img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 14px 30px rgba(0,0,0,0.08);
  transition: transform 0.5s ease;
}

.gallery-row img:hover {
  transform: translateY(-10px);
}

.next-destinations {
  padding-bottom: 7rem;
}

.next-list {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.next-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  height: 220px;
  display: block;
}

.next-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 50px rgba(0, 108, 146, 0.15);
}

.next-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.next-card:hover img {
  transform: scale(1.1);
}

.next-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 20, 30, 0.85) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.5rem;
  color: var(--white);
}

.next-card-overlay span {
  font-size: 1.2rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.not-found {
  min-height: 70vh;
  display: grid;
  place-items: center;
  padding: 6rem 2rem;
  text-align: center;
}

.btn-primary {
  display: inline-flex;
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 14px;
  background: var(--ocean-teal);
  color: var(--white);
  font-weight: 700;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background: var(--ocean-light);
}

@media (max-width: 900px) {
  .detail-hero {
    min-height: 76vh;
  }

  .detail-hero-overlay {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.92) 70%, var(--navy-deep) 100%);
  }

  .detail-facts,
  .experience-section,
  .gallery-row,
  .next-list {
    grid-template-columns: 1fr;
  }

  .culture-header {
    flex-direction: column;
  }

  .culture-ornament {
    display: none;
  }

  .detail-facts {
    margin-top: -2rem;
  }

  .experience-media,
  .experience-media img {
    min-height: 320px;
    height: 320px;
  }
}
</style>
