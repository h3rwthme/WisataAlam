<template>
  <div class="tentang-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-bg" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="page-hero-overlay"></div>
      </div>
      <div class="page-hero-content">
        <span class="page-tag">Tentang Kami</span>
        <h1>Mengenal Lebih Dekat</h1>
        <p>Website promosi wisata alam Jakarta & Kepulauan Seribu</p>
      </div>
    </section>

    <!-- About Website -->
    <section class="about-web">
      <div class="about-content">
        <div class="about-text">
          <h2>Tujuan Website</h2>
          <p>
            <strong>Wonderful Island</strong> dibangun dengan tujuan untuk mempromosikan
            dan melestarikan keindahan alam yang dimiliki oleh Jakarta dan sekitarnya,
            khususnya Kepulauan Seribu. Kami percaya bahwa keindahan alam bahari Jakarta
            yang menakjubkan perlu dikenal lebih luas oleh masyarakat, baik lokal maupun mancanegara.
          </p>
          <p>
            Melalui platform ini, kami berharap dapat menginspirasi lebih banyak orang untuk
            menghargai dan menjaga kelestarian alam, sekaligus mendukung pariwisata berkelanjutan
            yang memberikan manfaat bagi masyarakat pesisir.
          </p>
          <div class="about-features">
            <div class="feature">
              <Waves class="feature-icon" :size="30" stroke-width="1.8" />
              <h4>Promosi Wisata</h4>
              <p>Memperkenalkan destinasi alam terbaik Jakarta & Kepulauan Seribu</p>
            </div>
            <div class="feature">
              <ShieldCheck class="feature-icon" :size="30" stroke-width="1.8" />
              <h4>Konservasi</h4>
              <p>Mendukung pelestarian ekosistem mangrove dan biota laut</p>
            </div>
            <div class="feature">
              <Handshake class="feature-icon" :size="30" stroke-width="1.8" />
              <h4>Pemberdayaan</h4>
              <p>Mendukung ekonomi masyarakat pesisir melalui wisata berkelanjutan</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Student Profile -->
    <section class="profile-section">
      <div class="profile-container">
        <div class="section-header">
          <span class="section-tag">Profil</span>
          <h2>Mahasiswa & Pengembang</h2>
        </div>
        <div class="profile-card">
          <div class="profile-avatar">
            <div class="avatar-placeholder">
              <GraduationCap :size="70" stroke-width="1.7" />
            </div>
          </div>
          <div class="profile-info">
            <h3>Farkhan Abdilah</h3>
            <span class="profile-role">Mahasiswa & Web Developer</span>
            <div class="profile-details">
              <div class="profile-detail">
                <span class="detail-label">NIM</span>
                <span class="detail-value">2507411012</span>
              </div>
              <div class="profile-detail">
                <span class="detail-label">Program Studi</span>
                <span class="detail-value">Teknik Informatika</span>
              </div>
              <div class="profile-detail">
                <span class="detail-label">Kelas</span>
                <span class="detail-value">TI-2B</span>
              </div>
              <div class="profile-detail">
                <span class="detail-label">Mata Kuliah</span>
                <span class="detail-value">UAS Pemrograman Web</span>
              </div>
              <div class="profile-detail">
                <span class="detail-label">Email</span>
                <span class="detail-value">farkhan.abdilah.tik25@stu.pnj.ac.id</span>
              </div>
              <div class="profile-detail">
                <span class="detail-label">Fokus</span>
                <span class="detail-value">Web Development & UI/UX Design</span>
              </div>
            </div>
            <p class="profile-bio">
              Seorang mahasiswa Teknik Informatika kelas TI-2B yang memiliki passion dalam pengembangan
              web dan desain antarmuka. Website ini dibuat sebagai proyek UAS Pemrograman Web untuk mempromosikan
              keindahan alam Jakarta dan Kepulauan Seribu, serta untuk meningkatkan kesadaran akan
              pentingnya pelestarian lingkungan bahari Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Website Info -->
    <section class="web-info">
      <div class="info-container">
        <div class="section-header">
          <span class="section-tag">Informasi</span>
          <h2>Informasi Website</h2>
        </div>
        <div class="info-grid">
          <div class="info-card">
            <Calendar class="info-icon" :size="30" stroke-width="1.8" />
            <h4>Tanggal Rilis</h4>
            <p>Juni 2026</p>
          </div>
          <div class="info-card">
            <Zap class="info-icon" :size="30" stroke-width="1.8" />
            <h4>Teknologi</h4>
            <p>Vue.js 3, Vue Router, CSS3</p>
          </div>
          <div class="info-card">
            <Smartphone class="info-icon" :size="30" stroke-width="1.8" />
            <h4>Responsif</h4>
            <p>iPhone SE - iPad 14"</p>
          </div>
          <div class="info-card">
            <Palette class="info-icon" :size="30" stroke-width="1.8" />
            <h4>Desain</h4>
            <p>Light Theme Premium</p>
          </div>
          <div class="info-card">
            <Camera class="info-icon" :size="30" stroke-width="1.8" />
            <h4>Sumber Foto</h4>
            <p>Dokumentasi Resmi Wisata</p>
          </div>
          <div class="info-card">
            <Globe class="info-icon" :size="30" stroke-width="1.8" />
            <h4>Bahasa</h4>
            <p>Indonesia</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta">
      <div class="cta-content">
        <h2>Tertarik Berkolaborasi?</h2>
        <p>
          Kami terbuka untuk kerja sama dalam promosi wisata alam, konten edukasi,
          dan inisiatif pelestarian lingkungan. Hubungi kami untuk informasi lebih lanjut.
        </p>
        <div class="cta-buttons">
          <a href="mailto:farkhan.abdilah@student.ac.id" class="btn-primary">
            <Mail :size="18" stroke-width="2" />
            Kirim Email
          </a>
          <span class="btn-secondary">
            <MapPin :size="18" stroke-width="2" />
            Jakarta, Indonesia
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  Calendar,
  Camera,
  Globe,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  Palette,
  ShieldCheck,
  Smartphone,
  Waves,
  Zap
} from '@lucide/vue'

export default {
  name: 'Tentang',
  components: {
    Calendar,
    Camera,
    Globe,
    GraduationCap,
    Handshake,
    Mail,
    MapPin,
    Palette,
    ShieldCheck,
    Smartphone,
    Waves,
    Zap
  },
  data() {
    return {
      heroImage: 'images/7_71_Pulau_seribu_4K_HD_Shutterstoc.png'
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

      document.querySelectorAll('.feature, .info-card, .profile-card').forEach(el => {
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
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--sand);
  margin-bottom: 0.75rem;
}

.page-hero-content p {
  color: var(--sand-muted);
  font-size: 0.95rem;
}

/* About Web */
.about-web {
  padding: 5rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.about-content h2 {
  font-size: 1.8rem;
  color: var(--sand);
  margin-bottom: 1.5rem;
  text-align: center;
}

.about-text > p {
  color: var(--sand-muted);
  line-height: 1.8;
  margin-bottom: 1rem;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.about-text strong {
  color: var(--ocean-light);
}

.about-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.feature {
  text-align: center;
  padding: 2rem;
  background: var(--navy-mid);
  border-radius: 16px;
  border: 1px solid var(--glass-border);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s ease;
}

.feature.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.feature-icon {
  color: var(--ocean-teal);
  margin-bottom: 1rem;
  display: inline-flex;
}

.feature h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: var(--sand);
  margin-bottom: 0.5rem;
}

.feature p {
  font-size: 0.85rem;
  color: var(--sand-muted);
  line-height: 1.6;
}

/* Profile Section */
.profile-section {
  padding: 4rem 2rem;
  background: var(--navy-mid);
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}

.profile-container {
  max-width: 800px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-tag {
  display: inline-block;
  background: rgba(13, 115, 119, 0.15);
  color: var(--ocean-light);
  padding: 0.4rem 1rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-size: 1.8rem;
  color: var(--sand);
}

.profile-card {
  background: var(--navy-deep);
  border-radius: 24px;
  border: 1px solid var(--glass-border);
  padding: 3rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: start;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.profile-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.profile-avatar {
  display: flex;
  justify-content: center;
}

.avatar-placeholder {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--ocean-teal), var(--slate-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid rgba(15, 118, 110, 0.12);
  color: var(--white);
}

.profile-info h3 {
  font-size: 1.5rem;
  color: var(--sand);
  margin-bottom: 0.3rem;
}

.profile-role {
  display: block;
  color: var(--ocean-light);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.profile-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.profile-detail {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.detail-label {
  font-size: 0.7rem;
  color: var(--slate-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  font-size: 0.85rem;
  color: var(--sand);
  font-weight: 500;
}

.profile-bio {
  font-size: 0.9rem;
  color: var(--sand-muted);
  line-height: 1.7;
}

/* Web Info */
.web-info {
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.info-container .section-header {
  margin-bottom: 3rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.info-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--navy-mid);
  border-radius: 16px;
  border: 1px solid var(--glass-border);
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(20px);
}

.info-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.info-card:hover {
  border-color: rgba(13, 115, 119, 0.3);
  transform: translateY(-5px);
}

.info-icon {
  color: var(--ocean-teal);
  margin-bottom: 0.75rem;
  display: inline-flex;
}

.info-card h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  color: var(--sand);
  margin-bottom: 0.3rem;
}

.info-card p {
  font-size: 0.8rem;
  color: var(--sand-muted);
}

/* Contact CTA */
.contact-cta {
  padding: 5rem 2rem;
  background: var(--navy-mid);
  border-top: 1px solid var(--glass-border);
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.cta-content h2 {
  font-size: 1.8rem;
  color: var(--sand);
  margin-bottom: 1rem;
}

.cta-content > p {
  color: var(--sand-muted);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  border-radius: 12px;
  background: var(--ocean-teal);
  color: var(--white);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn-primary:hover {
  background: var(--ocean-light);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(13, 115, 119, 0.3);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  border-radius: 12px;
  background: transparent;
  color: var(--sand);
  border: 1px solid rgba(23, 59, 56, 0.22);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(15, 118, 110, 0.08);
  border-color: rgba(15, 118, 110, 0.32);
}

/* Responsive */
@media (max-width: 768px) {
  .about-features {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .profile-card {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 1.5rem;
    text-align: center;
  }

  .profile-details {
    grid-template-columns: 1fr;
    text-align: left;
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .about-features {
    gap: 1.5rem;
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
