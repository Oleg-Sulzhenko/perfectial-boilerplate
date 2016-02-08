'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),

    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'); // or BrowserSync  ?


    //gulp-sourcemaps

    //gulp-imagemin
    //gulp-svgmin

    //gulp-uglify for js
    //gulp-concat

    //gulp-webstandards ?
    //sprite ?






gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('sass', function() {
  var statick = gulp.src('./css/sass/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer('last 20 versions'))
      .pipe(gulp.dest('./css'))
      .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch('css/sass/**/*.*',['sass']);
});



gulp.task('default', ['connect', 'sass', 'watch']);
