/*Elixir Task
*copyrights to https://github.com/martinssipenko/laravel-elixir-ngHtml2Js
*/
var gulp = require('gulp'),
    ngHtml2Js = require('gulp-ng-html2js'),
    minifyHtml = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    concat = require('gulp-concat'),
    elixir = require('laravel-elixir'),
    _  = require('underscore'),
    Elixir = require('laravel-elixir');

elixir.extend('defaultNgHtml2Js', function(src, output, options) {

    var defaultOptions = {
        moduleName: 'lblog.default.partials',
        prefix: './views/default/'
    };

    options = _.extend(defaultOptions, options);

    var paths = new elixir.GulpPaths()
        .src(src || ['**/*.{htm,html}'], '')
        .output(output || Elixir.config.js.outputFolder, 'default.partials.js');
    new elixir.Task('ngHtml2Js', function() {

        return gulp.src(paths.src.path)
            .pipe(gulpIf(elixir.config.production, minifyHtml({
                empty: true,
                spare: true,
                quotes: true
            })))
            .pipe(ngHtml2Js(options))
            .pipe(concat(paths.output.name))
            .pipe(gulpIf(elixir.config.production, uglify()))
            .pipe(gulp.dest(paths.output.baseDir));
    })
    .watch(paths.src.path);
});
