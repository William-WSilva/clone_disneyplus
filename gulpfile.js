const gulp = require("gulp"); // importação gulp
const sass = require("gulp-sass")(require("sass")); // importação sass

// função para compilar arquivos de scss para css
function styles(){
    return gulp.src("./src/styles/*scss") // capturar os arquivos
    .pipe(sass({outputStyle: "compressed"})) // stilo de saída dos arquivos css serão comprimidos
    .pipe(gulp.dest("./dist/css")) // endereço destino dos arquivos de saída
}


exports.default = styles;

// função para compilar arquivos em tempo real
exports.watch = function(){
    gulp.watch("./src/styles/*scss", gulp.parallel(styles)) // ao alterar os arquivos scss > executa styles()
}