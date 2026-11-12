/** VoxLearn - Tailwind derleme ayarı.
 * index.html'de yeni Tailwind sınıfı kullandıktan sonra tw.css'i yeniden üret:
 *   npx tailwindcss@3.4.17 -c tailwind.config.js -o tw.css --minify
 */
module.exports = {
  content: ['./index.html', './data/*.js'],
  safelist: [
    // Okuma Laboratuvarı lazer butonları sınıfı JS içinde birleştirerek üretiyor
    { pattern: /^(border|bg)-(blue|rose|emerald|amber)-500\/(50|20)$/ },
    { pattern: /^text-(blue|rose|emerald|amber)-300$/ },
    // Kelime Anatomisi kartları: `${c.title}/80`
    { pattern: /^text-(blue|sky|rose|emerald)-300\/80$/ },
  ],
  theme: { extend: {} },
  plugins: [],
};
