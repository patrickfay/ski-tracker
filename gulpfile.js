// get packages fom ./node_modules
let gulp = require('gulp');
let del = require('del');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify-es').default;
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();

let runSequence = require('run-sequence');


// TODO - sourcemaps, browserfy, etc.
// will need to use browserfy for concatenating js files, then uglify them. will then need to set scss org for proj

gulp.task('clean', done => {
  del(['dist']);
  done();
});

// TODO
// gulp.task('uglify', () => {
//   // use browserfy to combine all files (maybe call seperate task for this, or may just need to pipe all to here)
//   // uglify
//   // pipe to dist
//   // HOPEFULLY not too bad to finish this ish, just find right plugins and hopefully all is well, will need to make sure using browserfy properly but otherwiser should be aight
// });

// styling - convert sass to css
gulp.task('sass', () => {
  // return gulp.src('app/theme/scss/**/*.scss')
  return gulp.src('app/theme/scss/theme.scss')
    .pipe(sass())
    .pipe(rename('app.style.css'))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({stream: true}));
});

// browser sync - start server used for development
gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });
});

// watch - watch for changes
gulp.task('watch', () => {
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
  gulp.watch('app/theme/scss/**/*.scss', gulp.series(['sass']));
});

// run watch and browserSync in parrallel
gulp.task('serve-and-watch', gulp.parallel(['browserSync', 'watch']));

// DEV TASK
gulp.task('dev', gulp.series(['clean', 'sass', 'serve-and-watch']));


// DEPLOY TASK - TODO - need to imp this
// gulp.task('deploy', gulp.series(['clean', 'sass', etc.]))