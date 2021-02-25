const gulp = require("gulp");
const concatCss = require("gulp-concat-css");
const cssNano = require("gulp-cssnano");
const sass = require("gulp-sass");

gulp.task("sass", function sassFunc() {
    return gulp
        .src("./main.scss")
        .pipe(sass())
        .pipe(concatCss("main.css"))
        .pipe(gulp.dest("./"));
});

gulp.task("minify", function minifyFunc() {
    return gulp.src("./main.css").pipe(cssNano()).pipe(gulp.dest("./"));
});

gulp.task("watch", function watchFunc() {
    gulp.watch("./main.scss", gulp.series("sass", "minify"));
});