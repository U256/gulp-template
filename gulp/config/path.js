import { basename, resolve } from 'path'

const rootFolder = basename(resolve())
const buildFolder = './prod'
const srcFolder = './src'

const pathList = {
   build: {
      js: `${buildFolder}/js/`,
      img: `${buildFolder}/img/`,
      svg: `${buildFolder}/svg/`,
      svgOriginal: `${buildFolder}/svg/svgOriginal/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      files: `${buildFolder}/files/`,
      fonts: `${buildFolder}/fonts/`,
   },
   src: {
      js: `${srcFolder}/js/app.js`,
      img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      svg: `${srcFolder}/svg/**/*.svg`,
      scss: `${srcFolder}/scss/style.scss`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
      fonts: `${srcFolder}/fonts/**/*.{woff,woff2}`,
   },
   watch: {
      js: `${srcFolder}/js/**/*.js`,
      img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg,webp,ico}`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      files: `${srcFolder}/files/**/*.*`,
   },
   buildFolder,
   srcFolder,
   rootFolder,
   ftp: '',
}

export default pathList
