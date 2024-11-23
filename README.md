# Proyek CI/CD dengan GitHub Actions

Proyek ini menerapkan **Continuous Integration (CI)** dan **Continuous Deployment (CD)** menggunakan **GitHub Actions**. Setiap kali ada perubahan pada branch `main`, pipeline akan dijalankan untuk memastikan kode diuji dan dideploy secara otomatis.

## Proses CI/CD

### 1. **Continuous Integration (CI)**

Setiap kali ada perubahan pada branch `main`, pipeline **CI** akan dijalankan secara otomatis. Berikut adalah tahapan yang dijalankan dalam pipeline CI:

- **Checkout kode**: Mengambil kode terbaru dari repository.
- **Setup Node.js**: Menyiapkan environment Node.js dengan versi yang sesuai.
- **Instal dependensi**: Menginstal semua dependensi yang dibutuhkan dengan perintah `npm install`.
- **Jalankan pengujian otomatis**: Menjalankan pengujian menggunakan **Jest** dengan perintah `npm test` untuk memastikan aplikasi berjalan dengan benar.

### 2. **Continuous Deployment (CD)**

Setelah pipeline **CI** berhasil, pipeline **CD** akan berjalan secara otomatis. Proses ini mencakup langkah-langkah berikut:

- **Build proyek**: Membuat aplikasi dengan perintah `npm run build` dan menyimpan hasilnya di folder `out`.
- **Deploy ke GitHub Pages**: Menggunakan action `peaceiris/actions-gh-pages@v3` untuk mengirim hasil build ke **GitHub Pages**.

GitHub Pages akan diaktifkan pada branch `gh-pages`, dan aplikasi dapat diakses melalui URL yang disediakan oleh GitHub.

### 3. **Link Hasil Deployment**

Setelah deployment selesai, aplikasi dapat diakses di GitHub Pages. Gunakan link berikut untuk mengakses hasil deployment:

[Link ke aplikasi di GitHub Pages](https://letsgobois24.github.io/ci-cd-21060122120016-elektro/)

**Catatan**: Gantilah `<username>` dan `<repository-name>` dengan nama pengguna dan nama repository GitHub kamu.

## Teknologi yang Digunakan

- **Node.js**: Versi 20
- **GitHub Actions**: Untuk mengautomasi pipeline CI/CD
- **Jest**: Untuk pengujian otomatis
- **GitHub Pages**: Untuk hosting aplikasi web
