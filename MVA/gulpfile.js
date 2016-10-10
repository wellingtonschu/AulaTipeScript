var gulp = require('gulp');
var tsc = require('gulp-typescript');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['compiler', 'reload', 'watch']);

gulp.task('compiler', function(){
    var tsconfig = tsc.createProject('tsconfig.json')
    return gulp.src('MVA/*.ts')
                .pipe(tsc(tsconfig))
                .pipe(gulp.dest('lib'));
});

gulp.task('watch', function(){
    return gulp.watch('MVA/*.tsc', ['compiler', 'reload']);
})

gulp.task('reload', function(){
    nodemon({ script: 'MVA/lib/index.js'});
});