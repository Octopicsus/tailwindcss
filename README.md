### Page:
https://octopicsus.github.io/tailwindcss/

# Tailwind CSS

## Tips:

### Step-by-step:

index.html

node -v (checking node ver. or install nodejs.org)

npm init -y

npm install -D tailwindcss

(add file) .gitignore (inside: node_modules/)

npx tailwindcss init


(add in flie tailwind.config.js) ->
---------------------
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./**/*.{html,js}",
    "!./node_modules/**/*.*"],

}


(add in file styles.css) ->
---------------------
@tailwind base;
@tailwind components;
@tailwind utilities;
---------------------


(RUN) npx tailwindcss -i ./styles.css -0 ./result.css --watch

(add in html file tag link href=""result.css")

