const
    gulp= require('gulp'),
    pug=require('gulp-pug'),
    sass=require('gulp-sass'),
    cssnano=require('gulp-cssnano'),
    autoprefixer= require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    pump= require('pump'),
    imagenmin=require('gulp-imagemin'),
    browser= require('browser-sync').create();


//Servidor
gulp.task('default',['pug','sass','comprime-js','optimizar-imagenes'],()=>{
    browser.init({
        server:"./public" /*Directorio incial de la App*/
    });
    gulp.watch("src/pug/**/*.pug",['pug']).on('change', browser.reload);
    gulp.watch("src/scss/**/*.scss",['sass']).on('change',browser.reload);
    gulp.watch("src/dist/js/*.js",['comprime-js']).on('change',browser.reload);
    gulp.watch("src/dist/img/*",['optimizar-imagenes'])
    gulp.watch("public/*.html").on('change', browser.reload);

});

gulp.task('pug', ()=>{
    return gulp.src('src/pug/*.pug')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('./public/'))
});

gulp.task('sass', ()=>{
   return gulp.src('src/scss/**/*.scss')
       .pipe(sass())
       .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: true
       }))
       //.pipe(cssnano()) //Comprimelo
       .pipe(gulp.dest('public/css'))
       .pipe(browser.stream()); //para recargar
});

//Comprimir JavaScript
gulp.task('comprime-js', (cb)=>{
   pump([
       gulp.src('src/dist/js/*.js'),
       uglify(),
       gulp.dest('public/js')
   ],
      cb
   );
});

/*Optimizar imagen*/
gulp.task('optimizar-imagenes',()=>{
   gulp.src('src/dist/img/*')
       .pipe(imagenmin())
       .pipe(gulp.dest('public/img'))
});