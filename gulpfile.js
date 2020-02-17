// get packages fom ./node_modules
let gulp = require('gulp');
let del = require('del');
let rename = require('gulp-rename');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');
let browserify = require('browserify');
let uglify = require('gulp-uglify-es').default;
let sourcemaps = require('gulp-sourcemaps');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();


let paths = {
  root: 'app/',
  dist: 'app/dist/'
};


// clean - delete contents from dist dir (not direcotry itself)
gulp.task('clean', done => {
  del([paths.dist + '**', '!app/dist']);
  done();
});

// browserify-min  - bundle all angularjs modules into one file and minify the file. output minified file to dist directory
gulp.task('browserify-min', () => {
  return browserify(paths.root + 'app.module.js', {debug: true})
    .bundle()
    .pipe(source('bundle.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist));
});

// styling - convert sass to css
gulp.task('sass', () => {
  return gulp.src(paths.root + 'app.style.scss')
    .pipe(sass())
    .pipe(rename('app.style.css'))
    .pipe(gulp.dest(paths.root))
    .pipe(browserSync.reload({stream: true}));
});

// browser sync - start server used for development
gulp.task('browserSync', () => {
  browserSync.init({
    server: {baseDir: './app'}
  });
});

function reload(done) {
  browserSync.reload();
  done();
}

// watch - watch for changes
gulp.task('watch', () => {
  gulp.watch(paths.root + '**/*.html', reload);
  gulp.watch(paths.root + '**/*.js', reload);
  gulp.watch(paths.root + '**/*.scss', gulp.series(['sass']));
});

// run watch and browserSync in parrallel
gulp.task('serve-and-watch', gulp.parallel(['browserSync', 'watch']));

// DEV TASK
gulp.task('dev', gulp.series(['clean', 'sass', 'browserify-min', 'serve-and-watch']));


// DEPLOY TASK - TODO - need to imp this
// gulp.task('deploy', gulp.series(['clean', 'sass', etc.]))