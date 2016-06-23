var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();




//编译sass
gulp.task('sass', function(){
    return gulp.src('src/sass/*.scss')
        .pipe(plugins._plumber())
        .pipe(plugins.rubySass())
        .pipe(gulp.dest('src/css'));

});

//压缩css
gulp.task('css', function(){
    return gulp.src('src/css/*.css')
        .pipe(plugins.plumber())
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename('*.min.css'))
        .pipe(gulp.dest('dist/css'));
});

//压缩js
gulp.task('js', function(){
   return gulp.src(['src/controller/*.js', 'src/directive/*.js', 'src/filters/*.js', 'src/services/*.js'])
       .pipe(plugins.plumber())
       .pipe(plugins.uglify())
       .pipe(plugins.concat('app.min.js'))
       .pipe(gulp.dest('dist/js'));
});

//压缩image
gulp.task('images', function(){
    return gulp.src('src/images/**')
        .pipe(plugins._plumber())
        .pipe(plugins.imagemin())
        .pipe(gulp.dest('dist/images'));
});

//压缩html
gulp.task('html', function(){
     return gulp.src('src/index.html')
         .pipe(gulp.dest('dist/index.html'));
});

//移动文件
gulp.task('move', function(){
   gulp.src();
});

//设置监听
gulp.task('watch', function(){
      gulp.watch('src/sass/*.scss', function(event){
          gulp.run('sass')
      });

    gulp.watch('src/css/*.css', function(event){
        gulp.run('css');
    });
    //gulp.watch('src/css/*.css', function(event){
    //    gulp.run('css');
    //});


});

//清除生成文件
gulp.task('clean', function(){
   return gulp.src('/dist')
       .pipe(plugins.clean());
});


gulp.task('default', ['sass', 'js', 'css', 'move', 'images']);