// get packages fom ./node_modules
let gulp = require('gulp'),
  del = require('del'),
  rename = require('gulp-rename'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  browserify = require('browserify'),
  uglify = require('gulp-uglify-es').default,
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  cleanCss = require('gulp-clean-css'),
  browserSync = require('browser-sync').create();

let paths = {
  root: 'app/',
  dist: 'app/dist/'
};


// clean - delete contents from dist dir (not directory itself)
gulp.task('clean', done => {
  del([paths.dist + '**', '!' + paths.dist.substring(0, paths.dist.length - 1)]);
  done();
});

// styling - convert sass to css and minify css
gulp.task('sass', () => {
  return gulp.src(paths.root + 'app.style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(rename('app.style.min.css'))
    .pipe(cleanCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.reload({stream: true}));
});

// build-js - bundle all angularjs modules into one file and minify the file. output minified file to dist directory
gulp.task('build-js', () => {
  return browserify(paths.root + 'app.module.js', {debug: true})
    .bundle()
    .pipe(source('bundle.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist));
});

// browser sync - start server used for development
gulp.task('browserSync', () => {
  browserSync.init({
    server: {baseDir: './app'}
  });
});

// watch - watch for changes
gulp.task('watch', () => {
  gulp.watch(
    [paths.root + '**/*.js', '!' + paths.dist + '**/*.js'],
    gulp.series(['build-js', 'reload'])
  );
  gulp.watch(paths.root + '**/*.html', gulp.series(['reload']));
  gulp.watch(paths.root + '**/*.scss', gulp.series(['sass']));
});

// run watch and browserSync in parrallel
gulp.task('serve-and-watch', gulp.parallel(['browserSync', 'watch']));

// reload the browser (called when html or js files are changed)
gulp.task('reload', (done) => {
  browserSync.reload();
  done();
});


// DEV TASK
gulp.task('dev', gulp.series(['clean', 'sass', 'build-js', 'serve-and-watch']));