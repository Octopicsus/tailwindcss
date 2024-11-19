/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./**/*.{html,js}",
    "!./node_modules/**/*.*"],

  theme: {
    extend: {
      backgroundImage: {
        'main-banner-img':"url('/img/brand-img.png')",
        'card-01-img':"url('/img/img-01.png')",
        'card-02-img':"url('/img/img-02.png')",
        'card-03-img':"url('/img/img-03.png')",
        'card-04-img':"url('/img/img-04.png')",
        'card-05-img':"url('/img/img-05.png')",
        'sale-banner-img':"url('/img/img-banner.png')",
        'app-banner-img':"url('/img/mobile-app.png')",
      },

   
    },
  },
  plugins: [],
}

