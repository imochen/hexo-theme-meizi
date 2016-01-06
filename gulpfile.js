var gulp = require('gulp');
var sass = require('gulp-ruby-sass'); //sass编译
var minifyCss = require('gulp-minify-css'); //css压缩
var autoprefixer = require('gulp-autoprefixer'); //自动补全前缀
var uglify = require('gulp-uglify'); //js压缩
var htmlmin = require('gulp-htmlmin'); //html压缩
var path = require('path'); //path


var conf = {
	src : {
		css : './source/_css/**/*',
		js : './source/_js/*.js',
		fonts : './source/_fonts/**/*',
		images : './source/_images/**/*'
	},
	dest : {
		css : './source/static/css',
		js : './source/static/js',
		fonts : './source/static/fonts',
		images : './source/static/images',
	}
}


gulp.task('css',function(){
	return sass( conf.src.css )
		.pipe(autoprefixer({
			browsers: ['last 7 versions','> 5%'],
		}))
		.pipe(minifyCss())
		.pipe( gulp.dest(conf.dest.css) );
});

gulp.task('js',function(){
	return gulp.src( conf.src.js )
		.pipe(uglify())
        .pipe(gulp.dest( conf.dest.js ))
});

gulp.task('img',function(){
	return gulp.src( conf.src.images )
		.pipe( gulp.dest(conf.dest.images) );
});

gulp.task('fonts',function(){
	return gulp.src( conf.src.fonts )
		.pipe( gulp.dest(conf.dest.fonts) );
});

gulp.task('watch',['css','img','js','fonts'],function(){
	gulp.watch( conf.src.css , ['css']);
	gulp.watch( conf.src.images , ['img']);
	gulp.watch( conf.src.fonts , ['fonts']);
	gulp.watch( conf.src.js , ['js']);
});