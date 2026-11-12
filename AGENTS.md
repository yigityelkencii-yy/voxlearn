# VoxLearn – çalışma notları (yapay zekâ editörleri ve geliştiriciler için)

Statik bir PWA. GitHub Pages `main` dalından yayınlar; derleme adımı yoktur, tek istisna aşağıdaki CSS.

## Dosyalar
- `index.html` – arayüz ve tüm uygulama mantığı (tek `<script>` bloğu).
- `data/words.js` – `allWords` (3.750 kelime). `index.html` bunu ana betikten önce yükler.
- `data/extras.js` – `COMPREHENSIVE_DICT`, `READING_VOCAB_EXTENSIONS`, `IDIOMS_DATA`.
- `tw.css` – önceden derlenmiş Tailwind CSS (CDN çalışma zamanı kaldırıldı).
- `sw.js` – service worker (network-first). Dosya eklersen `ASSETS_TO_CACHE`'e ekle, her yayında `CACHE_NAME` sürümünü artır.

## ÖNEMLİ: Tailwind sınıfı ekledikten sonra tw.css'i yeniden üret
`index.html` veya `data/*.js` içinde daha önce kullanılmamış bir Tailwind sınıfı (ör. `bg-teal-700`, `mt-[13px]`) kullanırsan o sınıf `tw.css`'te yoktur ve görünmez. Değişiklikten sonra çalıştır:

```bash
npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind.input.css -o tw.css
```

Sınıf adını JS'te parça parça birleştiriyorsan (`bg-${renk}-500`), olası tam adları `tailwind.config.js` içindeki `safelist`'e ekle.

`tw.css` bağlantısı `<head>` içinde özel `<style>` bloğundan SONRA gelmelidir; sırayı değiştirme.

## Kayıtlar
Tüm kullanıcı verisi `localStorage`'da `voxlearn_` / `vox_` önekli anahtarlarda durur. Yedek (v4) bu anahtarların tamamını `storage` alanına yazar; yeni anahtar eklerken bu öneklerden birini kullan ki yedeğe girsin.
