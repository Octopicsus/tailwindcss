/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./**/*.{html,js}",
    "!./node_modules/**/*.*"],

  theme: {
    extend: {
      backgroundImage: {
        'main-banner-img':"url('/tailwindcss/img/brand-img.png')",
        'card-01-img':"url('/tailwindcss/tailwindcss/img/img-01.png')",
        'card-02-img':"url('/tailwindcss/img/img-02.png')",
        'card-03-img':"url('/tailwindcss/img/img-03.png')",
        'card-04-img':"url('/tailwindcss/img/img-04.png')",
        'card-05-img':"url('/tailwindcss/img/img-05.png')",
        'sale-banner-img':"url('/tailwindcss/img/img-banner.png')",
        'app-banner-img':"url('/tailwindcss/img/mobile-app.png')",
      },

   
    },
  },
  plugins: [],
}

