// get packages fom ./node_modules
let gulp = require('gulp');
let del = require('del');
let rename = require('gulp-rename');
let source = require('vinyl-source-stream');
let browserify = require('browserify');
let uglify = require('gulp-uglify-es').default;
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();

let runSequence = require('run-sequence');


// TODO - sourcemaps, browserfy, etc.
// will need to use browserfy for concatenating js files, then uglify them. will then need to set scss org for proj
// STEPS
// 1) use browserfy to bundle all modules and js files into one. output to dist/app.js or dist/bundle.js
// 2) uglify bundled files to dist/app.min.js or dist/bundle.min.js


gulp.task('clean', done => {
  del(['app/dist']);
  done();
});


gulp.task('browserify', () => {
  return browserify('app/app.module.js', {debug: true})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('app/dist/'));
});


// TODO
// gulp.task('uglify', () => {
//   // use browserfy to combine all files (maybe call seperate task for this, or may just need to pipe all to here)
//   // uglify
//   // pipe to dist
// });

// styling - convert sass to css
gulp.task('sass', () => {
  return gulp.src('app/app.style.scss')
    .pipe(sass())
    .pipe(rename('app.style.css'))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({stream: true}));
});

// browser sync - start server used for development
gulp.task('browserSync', () => {
  browserSync.init({
    server: {baseDir: './app'}
  });
});

// watch - watch for changes
gulp.task('watch', () => {
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
  gulp.watch('app/**/*.scss', gulp.series(['sass']));
});

// run watch and browserSync in parrallel
gulp.task('serve-and-watch', gulp.parallel(['browserSync', 'watch']));

// DEV TASK
gulp.task('dev', gulp.series(['clean', 'sass', 'browserify', 'serve-and-watch']));


// DEPLOY TASK - TODO - need to imp this
// gulp.task('deploy', gulp.series(['clean', 'sass', etc.]))