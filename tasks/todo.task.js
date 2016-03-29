var gulp  = require('gulp')
var shell = require('gulp-shell')
gulp.task('todo', shell.task([
    'mvn clean install',
]));

