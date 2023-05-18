const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss') //onde buscar os arquivos
        .pipe(sass({ outputStyle: 'compressed' })) //será comprimido
        .pipe(gulp.dest('./dist/css')); //pasta de destino
}

function images() {
    return gulp.src('./src/images/**/*') //onde buscar os arquivos
        .pipe(imagemin()) //será comprimido
        .pipe(gulp.dest('./dist/images')); //pasta de destino
}

exports.default = gulp.parallel(styles, images);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}