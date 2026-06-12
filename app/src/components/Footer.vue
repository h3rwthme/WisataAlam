<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>Wonderful Island</h3>
        <p>Melestarikan dan mempromosikan keindahan alam Jakarta & Kepulauan Seribu untuk generasi mendatang.</p>
        <div class="footer-social">
          <a href="#" class="social-link" title="Instagram">
            <Camera :size="20" stroke-width="2" />
          </a>
          <a href="#" class="social-link" title="X">
            <Send :size="20" stroke-width="2" />
          </a>
          <a href="#" class="social-link" title="YouTube">
            <CirclePlay :size="21" stroke-width="2" />
          </a>
        </div>
      </div>
      <div class="footer-links">
        <div class="footer-column">
          <h4>Navigasi</h4>
          <router-link to="/">Dashboard</router-link>
          <router-link to="/destinasi-seribu">Destinasi</router-link>
          <router-link to="/wisata-alam">Wisata Alam</router-link>
          <router-link to="/galeri">Galeri</router-link>
        </div>
        <div class="footer-column">
          <h4>Destinasi Populer</h4>
          <router-link to="/destinasi-seribu">Pulau Tidung</router-link>
          <router-link to="/destinasi-seribu">Pulau Pramuka</router-link>
          <router-link to="/destinasi-seribu">Pulau Pari</router-link>
          <router-link to="/destinasi-seribu">Pulau Harapan</router-link>
        </div>
        <div class="footer-column">
          <h4>Kontak</h4>
          <span>Farkhan Abdilah</span>
          <span>NIM: 2507411012 — TI-2B</span>
          <span>farkhan.abdilah@student.ac.id</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Wonderful Island © 2026 — Farkhan Abdilah | TI-2B | UAS Pemrograman Web</p>
      <p class="media-credit">
        Media: YouTube embed dan Wikimedia Commons oleh Amelia Samulo, Naval Scene, Ranti Anisa, Rochelimit, Mujiyono SPt, Jorge Lascar.
      </p>
    </div>
  </footer>
</template>

<script>
import { Camera, CirclePlay, Send } from '@lucide/vue'

export default {
  name: 'Footer',
  components: { Camera, CirclePlay, Send }
}
</script>

<style scoped>
.footer {
  background: var(--navy-mid);
  border-top: 1px solid var(--glass-border);
  padding: 4rem 2rem 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  padding-bottom: 3rem;
}

.footer-brand h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: var(--sand);
  margin-bottom: 1rem;
}

.footer-brand p {
  color: var(--sand-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(15, 118, 110, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--ocean-teal);
  color: var(--white);
  transform: translateY(-3px);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--sand);
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-column a,
.footer-column span {
  display: block;
  color: var(--sand-muted);
  font-size: 0.85rem;
  margin-bottom: 0.7rem;
  transition: color 0.3s ease;
  cursor: pointer;
}

.footer-column a:hover {
  color: var(--ocean-light);
}

.footer-bottom {
  border-top: 1px solid var(--glass-border);
  padding: 1.5rem 0;
  text-align: center;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: var(--slate-muted);
}

.media-credit {
  margin-top: 0.35rem;
  font-size: 0.72rem !important;
  color: rgba(62, 151, 165, 0.82) !important;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .footer-content {
    gap: 2rem;
  }
}
</style>
