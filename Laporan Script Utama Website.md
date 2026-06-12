# Script Utama Singkat Website Wonderful Island

Catatan: script yang ditaruh di sini hanya potongan paling penting dari setiap halaman, bukan seluruh kode.

## 1. Dashboard

Yang paling mencolok dari output:
Hero video full screen, judul besar "Wonderful Island Kepulauan Seribu", tombol navigasi, statistik singkat, dan kartu destinasi unggulan.

Script utama:

```vue
<video
  class="hero-video"
  :src="heroVideoUrl"
  autoplay
  muted
  loop
  playsinline
></video>

<router-link to="/destinasi-seribu" class="btn-primary">
  Jelajahi Destinasi
</router-link>

<div v-for="stat in heroStats" :key="stat.label" class="hero-stat">
  <strong>{{ stat.value }}</strong>
  <span>{{ stat.label }}</span>
</div>

<article v-for="island in featuredIslandsData" :key="island.slug">
  <img :src="island.mainImage" :alt="island.name" />
  <h3>{{ island.name }}</h3>
  <p>{{ island.shortDescription }}</p>
</article>
```

Fungsi script:
Menampilkan video sebagai background utama, tombol menuju halaman destinasi, statistik pulau, dan daftar pulau unggulan.

Output:
Halaman awal terlihat seperti landing page wisata dengan video laut, tombol aksi, angka highlight, dan preview destinasi.

## 2. Destinasi Seribu

Yang paling mencolok dari output:
Hero gambar pulau dari udara dan kartu-kartu destinasi seperti Pulau Tidung, Pulau Pramuka, dan Pulau Pari.

Script utama:

```vue
<router-link
  v-for="island in destinationCards"
  :key="island.slug"
  class="destination-card"
  :to="{ name: 'DestinasiDetail', params: { slug: island.slug } }"
>
  <img :src="island.mainImage" :alt="island.name" />
  <span>{{ island.type }}</span>
  <h2>{{ island.name }}</h2>
  <p>{{ island.shortDescription }}</p>
</router-link>
```

```js
computed: {
  destinationCards() {
    return islandDestinations
  }
}
```

Fungsi script:
Mengambil data pulau dari `islandDestinations`, lalu menampilkannya menjadi kartu destinasi yang bisa diklik.

Output:
Muncul daftar destinasi Kepulauan Seribu. Saat kartu diklik, pengguna diarahkan ke halaman detail pulau.

## 3. Detail Destinasi

Yang paling mencolok dari output:
Halaman detail Pulau Tidung dengan gambar besar, informasi lokasi, waktu perjalanan, estimasi harga, adat dan sejarah, pengalaman lokal, galeri, dan rekomendasi pulau lain.

Script utama:

```js
computed: {
  island() {
    return getIslandBySlug(this.$route.params.slug)
  },
  otherIslands() {
    return islandDestinations
      .filter((item) => item.slug !== this.$route.params.slug)
      .slice(0, 3)
  }
}
```

```vue
<h1>{{ island.name }}</h1>
<p>{{ island.description }}</p>
<strong>{{ island.location }}</strong>
<strong>{{ island.travelTime }}</strong>
<strong>{{ island.price }}</strong>

<article v-for="item in island.culture" :key="item.title">
  <h3>{{ item.title }}</h3>
  <p>{{ item.body }}</p>
</article>
```

Fungsi script:
Mengambil data pulau sesuai `slug` URL, lalu menampilkan detail lengkap pulau, budaya, dan rekomendasi destinasi lain.

Output:
Setiap pulau punya halaman detail sendiri. Contohnya Pulau Tidung menampilkan informasi wisata, adat, sejarah, dan pengalaman lokal.

## 4. Wisata Alam

Yang paling mencolok dari output:
Hero gunung, tombol filter kota, dan kartu tempat wisata alam seperti Mangrove Angke Kapuk, Jakarta Mangrove Resort, dan Danau Archipelago.

Script utama:

```vue
<button
  v-for="city in cities"
  :key="city"
  :class="{ active: activeFilter === city }"
  @click="activeFilter = city"
>
  {{ city }}
</button>

<div v-for="place in filteredPlaces" :key="place.name" class="place-card">
  <img :src="place.image" :alt="place.name" />
  <h3>{{ place.name }}</h3>
  <p>{{ place.description }}</p>
</div>
```

```js
computed: {
  filteredPlaces() {
    if (this.activeFilter === 'Semua') return this.places
    return this.places.filter(p => p.city === this.activeFilter)
  }
}
```

Fungsi script:
Memfilter daftar wisata alam berdasarkan kota yang dipilih pengguna.

Output:
Saat tombol Jakarta, Bogor, Tangerang, atau Bekasi diklik, kartu wisata yang tampil akan berubah sesuai kota tersebut.

## 5. Galeri

Yang paling mencolok dari output:
Hero galeri, filter kategori, susunan foto masonry, dan gambar yang bisa dibuka lebih besar dalam lightbox.

Script utama:

```vue
<button
  v-for="cat in categories"
  :key="cat"
  :class="{ active: activeCategory === cat }"
  @click="activeCategory = cat"
>
  {{ cat }}
</button>

<div
  v-for="(photo, i) in filteredPhotos"
  :key="photo.src"
  class="gallery-item"
  @click="openLightbox(i)"
>
  <img :src="photo.src" :alt="photo.title" />
</div>
```

```js
computed: {
  filteredPhotos() {
    if (this.activeCategory === 'Semua') return this.photos
    return this.photos.filter(p => p.category === this.activeCategory)
  }
},
methods: {
  openLightbox(index) {
    this.currentPhotoIndex = index
    this.lightboxOpen = true
  }
}
```

Fungsi script:
Memfilter foto berdasarkan kategori dan membuka foto dalam tampilan lightbox saat gambar diklik.

Output:
Galeri menampilkan foto wisata dalam grid. Pengguna bisa memilih kategori dan memperbesar foto.

## 6. Tentang

Yang paling mencolok dari output:
Hero "Mengenal Lebih Dekat", bagian tujuan website, tiga kartu fitur, profil mahasiswa, informasi website, dan tombol kontak.

Script utama:

```vue
<section class="about-web">
  <h2>Tujuan Website</h2>
  <p>
    <strong>Wonderful Island</strong> dibangun untuk mempromosikan
    dan melestarikan keindahan alam Jakarta dan Kepulauan Seribu.
  </p>
</section>

<div class="profile-info">
  <h3>Farkhan Abdilah</h3>
  <span>Mahasiswa & Web Developer</span>
  <span>NIM: 2507411012</span>
  <span>Kelas: TI-2B</span>
</div>
```

```js
mounted() {
  this.observeElements()
}
```

Fungsi script:
Menampilkan tujuan website, fitur utama, profil pembuat, dan menjalankan animasi saat elemen masuk ke layar.

Output:
Halaman Tentang menjelaskan identitas website, tujuan pembuatan, profil mahasiswa, teknologi, dan kontak.

## 7. Navbar

Yang paling mencolok dari output:
Menu navigasi selalu muncul di atas halaman dan menandai halaman yang sedang aktif.

Script utama:

```vue
<router-link
  v-for="item in menuItems"
  :key="item.path"
  :to="item.path"
  class="nav-link"
  :class="{ active: $route.path === item.path }"
>
  {{ item.label }}
</router-link>
```

```js
menuItems: [
  { path: '/', label: 'Dashboard' },
  { path: '/destinasi-seribu', label: 'Destinasi' },
  { path: '/wisata-alam', label: 'Wisata Alam' },
  { path: '/galeri', label: 'Galeri' },
  { path: '/tentang', label: 'Tentang' }
]
```

Fungsi script:
Membuat menu navigasi dari data array agar link halaman lebih mudah dikelola.

Output:
Navbar menampilkan menu Dashboard, Destinasi, Wisata Alam, Galeri, dan Tentang.

## 8. Footer

Yang paling mencolok dari output:
Footer menampilkan nama website, navigasi cepat, destinasi populer, kontak, dan identitas tugas.

Script utama:

```vue
<footer class="footer">
  <h3>Wonderful Island</h3>
  <router-link to="/">Dashboard</router-link>
  <router-link to="/destinasi-seribu">Destinasi</router-link>
  <router-link to="/wisata-alam">Wisata Alam</router-link>
  <router-link to="/galeri">Galeri</router-link>
  <span>Farkhan Abdilah</span>
  <span>NIM: 2507411012 - TI-2B</span>
</footer>
```

Fungsi script:
Menampilkan informasi tambahan website dan link navigasi pada bagian bawah halaman.

Output:
Setiap halaman memiliki footer yang berisi identitas website, navigasi cepat, dan kontak pembuat.
