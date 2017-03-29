
var gulp = require('gulp'),
    sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');
var concat = require('gulp-concat');

var imagemin = require('gulp-imagemin');

gulp.task('min', function () {
  return gulp.src('img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('img/dist'))
});

gulp.task('sass', function () {
  return gulp.src('css/src/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('css'))
});

gulp.task('sprite', function() {
  var spriteData =
    gulp.src('img/sprites/src/*.*')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
    }));
  spriteData.img.pipe(gulp.dest('img/sprites/'));
  spriteData.css.pipe(gulp.dest('img/sprites/'));
});

var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('js/src/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js/'));
});
