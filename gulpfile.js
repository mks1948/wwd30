'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var     livereload = require('gulp-livereload');

sass.compiler = require('node-sass');

	

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
 
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'))
    .pipe(livereload());
});

gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch('app/sass/**/*.scss', ['sass']);
});

