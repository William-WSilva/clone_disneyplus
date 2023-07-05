const gulp = require("gulp"); // importação gulp
const sass = require("gulp-sass")(require("sass")); // importação sass
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

// função para compilar arquivos de scss para css
function styles(){
    return gulp.src("./src/styles/*.scss") // capturar os arquivos
    .pipe(sass({outputStyle: "compressed"})) // stilo de saída dos arquivos css serão comprimidos
    .pipe(gulp.dest("./dist/css")) // endereço destino dos arquivos de saída ( pasta criada automatica)
}

// função para compilar arquivos de scss para css
function images(){
    return gulp.src("./src/images/**/*") // capturar todos arquivos de imagens em pastas
    .pipe(imagemin()) // função de conpressão das imagens
    .pipe(gulp.dest("./dist/images")) // endereço destino dos arquivos de saída ( pasta criada automatica)
}

function scripts(){
    return gulp.src("./src/scripts/*.js") // capturar todos arquivos .js da pasta
    .pipe(uglify()) // compilar arquivos .js
    .pipe(gulp.dest("./dist/scripts")); // endereço destino dos arquivos de saída ( pasta criada automatica)
}

exports.default = gulp.parallel(styles, images, scripts);

// função para compilar arquivos em tempo real
exports.watch = function(){
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles)); // ao alterar os arquivos .scss > executa styles()
    gulp.watch("./src/scripts/*.js", gulp.parallel(scripts)); // ao alterar os arquivos .js > executa scripts()
}