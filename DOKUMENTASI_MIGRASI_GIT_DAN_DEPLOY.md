# Dokumentasi Migrasi Git dan Deploy GitHub Pages

## Ringkasan

Project Wonderful Island awalnya memiliki repository Git di dalam folder `app`. Setelah dicek, struktur tersebut kurang sesuai karena folder utama project sebenarnya adalah `Pulau Seribu`.

Repository kemudian dipindahkan ke root folder:

```text
Pulau Seribu/
├── .github/
├── app/
├── .gitignore
├── DOKUMENTASI_MIGRASI_GIT_DAN_DEPLOY.md
└── Laporan Script Utama Website.md
```

Dengan struktur ini, GitHub menyimpan seluruh folder `Pulau Seribu`, sementara aplikasi Vue tetap berada di dalam folder `app`.

## Kondisi Sebelum Dipindahkan

Sebelumnya Git berada di:

```text
Pulau Seribu/app/.git
```

Dampaknya:

- GitHub hanya membaca isi folder `app`.
- File dokumentasi di luar `app` tidak ikut masuk repository.
- Workflow deploy GitHub Pages berada di dalam `app/.github`.
- Struktur repository di GitHub tidak sama dengan struktur folder project lokal.

## Perubahan yang Dilakukan

Git di dalam folder `app` dihapus:

```text
Pulau Seribu/app/.git
```

Lalu repository baru dibuat di root:

```text
Pulau Seribu/.git
```

Remote GitHub tetap menggunakan repository:

```text
https://github.com/h3rwthme/WisataAlam.git
```

Branch utama tetap:

```text
main
```

Branch deploy GitHub Pages:

```text
gh-pages
```

## Workflow Deploy Baru

Workflow sekarang berada di root:

```text
Pulau Seribu/.github/workflows/deploy.yml
```

Karena aplikasi Vue berada di folder `app`, workflow diatur agar menjalankan command dari folder tersebut:

```yaml
defaults:
  run:
    working-directory: app
```

Install dependency menggunakan:

```bash
npm ci
```

Build project menggunakan:

```bash
npm run build
```

Hasil build yang dideploy:

```text
app/dist
```

Deploy dikirim ke branch:

```text
gh-pages
```

## Perbaikan Path Gambar dan Video

Masalah gambar yang kadang hilang terjadi karena beberapa path asset sebelumnya memakai slash depan:

```text
/images/...
/videos/...
```

Pada GitHub Pages project site, path seperti itu bisa terbaca dari root domain, bukan dari:

```text
https://h3rwthme.github.io/WisataAlam/
```

Maka semua path public asset diganti menjadi relative:

```text
images/...
videos/...
```

Contoh:

```js
heroVideoUrl: 'videos/pantai.mp4'
heroFallbackImage: 'images/wonderful-island-hero.jpg'
```

Untuk halaman dashboard, video hero juga diberi poster agar preview tidak terlihat kosong atau terlalu gelap:

```vue
<video
  class="hero-video"
  :src="heroVideoUrl"
  :poster="heroFallbackImage"
  autoplay
  muted
  loop
  playsinline
></video>
```

## Branch GitHub

Branch `main` berisi source code dengan root folder `Pulau Seribu`.

Commit terakhir `main`:

```text
d0a3fb7 - Improve hero media fallback
```

Branch `gh-pages` berisi hasil build untuk website live.

Commit terakhir `gh-pages`:

```text
17472f5
```

## Link Repository dan Website

Repository:

```text
https://github.com/h3rwthme/WisataAlam
```

Website live:

```text
https://h3rwthme.github.io/WisataAlam/
```

## Validasi yang Sudah Dilakukan

Build lokal berhasil:

```bash
npm run build
```

GitHub Actions deploy berhasil.

Asset gambar dan video dicek dari hasil build:

```text
asset_refs=42
asset_failures=0
```

Beberapa asset utama juga dicek langsung dan sudah mengembalikan status `200`:

```text
https://h3rwthme.github.io/WisataAlam/
https://h3rwthme.github.io/WisataAlam/images/wonderful-island-hero.jpg
https://h3rwthme.github.io/WisataAlam/images/10_Fun_Jumping_at_Jembatan_Cinta_Tidung.png
https://h3rwthme.github.io/WisataAlam/images/commons-harapan-aerial.jpg
https://h3rwthme.github.io/WisataAlam/videos/pantai.mp4
```

## Kesimpulan

Repository sekarang sudah benar berada di root folder `Pulau Seribu`, bukan di dalam `app`. Folder `app` tetap menjadi tempat aplikasi Vue, sedangkan folder root menyimpan konfigurasi GitHub Actions, dokumentasi, dan file pendukung lain.

Deploy GitHub Pages sudah berjalan dari branch `gh-pages`, dan path gambar/video sudah diperbaiki agar tidak hilang saat dibuka dari link GitHub Pages.
