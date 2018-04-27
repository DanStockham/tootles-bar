const gulp = require("gulp");
const cssNano = require("gulp-cssnano");
const postCss = require("gulp-postcss");
const notify = require("gulp-notify");
const autoprefixer = require("autoprefixer");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const gutil = require("gulp-util");
const pxToRem = require("postcss-pxtorem");
const cacheBuster = require("postcss-cachebuster");

const prodProcessors = [
  pxToRem({
    rootValue: 16,
    replace: true,
    mediaQuery: true
  }),
  cacheBuster({
    cssPath: "/assets",
    type: "mtime"
  })
];

gulp.task("css:post_build", () => {
  gutil.log(gutil.colors.blue("--> Making CSS Smaller "));
  gulp
    .src("src/styles/styles.scss")
    .pipe(sass().on("error", sassError))
    .pipe(postCss(prodProcessors))
    .pipe(
      cssNano({
        autoprefixer: {
          add: true
        },
        zindex: false
      })
    )
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest("public/"))
    .pipe(
      notify({
        title: "CSS",
        message: "CSS Built"
      })
    );
});

function sassError(err) {
  gutil.log(gutil.colors.bold.white.bgRed("\n \n [SASS] ERROR \n"));
  console.error("", err.message);
  return notify({
    title: "Sass Error",
    message: "Error on line " + err.line + " of " + err.file
  }).write(err);
}

gulp.task("build", ["css:post_build"], () => {
  gulp.src("gulpfile.js").pipe(
    notify({
      title: "Build Scripts",
      message: "Finished!"
    })
  );
});