//Загружаем пакеты в объекты, сохраняем ссылки на объекты в переменных
var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css');
    /*imageop = require('gulp-image-optimization'),*/
    /*,imagemin = require('gulp-imagemin'),*/
    /*pngquant = require('imagemin-pngquant');*/


//------------------------------------------
//------------------------------------------
gulp.task('html', function() {
    gulp.src('src/index.html') //Выберем файлы по нужному пути
        .pipe(rigger())
        .pipe(gulp.dest('build/'))
});

//------------------------------------------

gulp.task('sass', function() {
    gulp.src('src/style/main.scss')
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('build/style'))
});

//------------------------------------------

gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(rigger())
        .pipe(gulp.dest('build/js'))
});

//------------------------------------------

gulp.task('fonts', function() {
    gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('build/fonts'))
});

/*------------------------------------------*/

gulp.task('images', function() {
    gulp.src('src/images/*.*')
      /*  .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true
        }))*/

        .pipe(gulp.dest('build/images'))
});

/*------------------------------------------*/

gulp.task('build', [
    'html',
    'sass',
    'js',
    'fonts',
    'images'
]);

/*------------------------------------------*/