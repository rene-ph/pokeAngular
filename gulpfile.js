var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    open = require('gulp-open'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload');
 
gulp.task('webserver', function() {
  connect.server();
});


gulp.task('sass', function () {
  return gulp
	    .src('assets/sass/*.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('assets/css'))
	    .pipe(livereload());
});


gulp.task('runApp', function(){
  var options = {
    uri: 'http://localhost:8080',
    app: 'chrome'
  };
  gulp.src(__filename)
  .pipe(open(options));
});


gulp.task('watch', function() {
	  livereload.listen();
    gulp.watch('assets/sass/*.scss', ['sass'])
});

 
gulp.task('serve', ['webserver','sass','runApp','watch']);