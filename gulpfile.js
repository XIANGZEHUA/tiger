var gulp = require('gulp');


var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var autoprefix = require('gulp-autoprefixer');
var concat = require('gulp-concat'); 

gulp.task('less',function(){
	gulp.src(['app/css/*.less'])
	  .pipe(less())
	  .pipe(autoprefix({
	  	browsers:['last 20 versions'],
	  	cascade:true
	  }))
	  .pipe(cleanCss())
	  .pipe(concat('index1.min.css'))
	  .pipe(gulp.dest('app/css/')) 
})


var connect = require('gulp-connect');
gulp.task('localhost',function(){
	connect.server({
		root:'app/',
		port:8090
	})
})

gulp.task('mywatch',function(){
	gulp.watch('app/css/*.less',['less']);
	
});

gulp.task('default',['mywatch','localhost','less']);

                                             



