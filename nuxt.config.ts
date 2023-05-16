export default defineNuxtConfig({
  // 実行モードをSPAにする
  ssr: false,
  // UI framework用のCSSの参照パス
  css: [
    "quasar/dist/quasar.prod.css",
    "@quasar/extras/material-icons/material-icons.css",
    "@quasar/extras/fontawesome-v6/fontawesome-v6.css",
  ],
});
