const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss') //onde buscar os arquivos
        .pipe(sass({ outputStyle: 'compressed' })) //será comprimido
        .pipe(gulp.dest('./dist/css')); //pasta de destino
}



exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}