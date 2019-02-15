var gulp = require('gulp');
var scss = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var imgagemin = require('gulp-imagemin');

gulp.task('scss',function(){
    gulp.src('sass/style.scss')
    .pipe(scss({includePaths: ['scss']}))
    .pipe(gulp.dest('css'));
});

gulp.task('minify-images',function(){
    gulp.src('images/*')
    .pipe(imgagemin())
    .pipe(gulp.dest('resized/*'))
});


gulp.task('browser-sync', function(){
    browserSync.init(['css/*.css'],{
        server:{
            baseDir:'./dist'
        }
    });
});

gulp.task('default',['scss','browser-sync','minify-images'],function(){
    gulp.watch('sass/*.scss',['scss']);
    gulp.watch('*.html').on('change', reload);
})

