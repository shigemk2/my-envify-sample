var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var envify = require("envify");

gulp.task('browserify', function(){
  var b = browserify({
    entries: ['./src/example.js']
  });
  b.transform(envify({
    NODE_ENV: 'development'
  }));
  return b.bundle()
    .pipe(source('example.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function() {
  gulp.start(['browserify']);
});
