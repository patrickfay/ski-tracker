// get packages fom ./node_modules
let gulp = require('gulp');
let del = require('del');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify-es').default;
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();


// TODO - sourcemaps, browserfy, etc.
// will need to use browserfy for js files, then need to set scss org for proj

gulp.task('clean', () => {
  del(['dist']);
});

// styling - convert sass to css
gulp.task('sass', () => {
  return gulp.src('app/theme/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/theme/css'))
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



// DEV TASK
gulp.task('dev', gulp.parallel(['clean', 'sass', 'browserSync', 'watch']));


// BUILD TASK
// TODO - imp this ^