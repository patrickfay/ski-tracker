// get packages fom ./node_modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


// browser sync, tell where root of server should be
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
});

// styling
gulp.task('sass', () => {
  return gulp.src('app/theme/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/theme/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// DEV TASK
gulp.task('dev', gulp.series(['browserSync', 'sass']), () => {
  // watch for changes and run other tasks
  gulp.watch('app/theme/**/*.scss', gulp.series(['sass']));
});
