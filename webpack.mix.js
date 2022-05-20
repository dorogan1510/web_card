let mix = require('laravel-mix')

mix.js('src/js/index.js', 'public/js').sass('src/sass/style.scss', 'public/css')

var browserSync = require('browser-sync').create()

browserSync.init({
    watch: true,
    server: '../web_card',
})
