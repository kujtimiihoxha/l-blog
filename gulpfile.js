var elixir = require('laravel-elixir');
require('./tasks/angular.blog.task.js');
require('./tasks/angular.admin.task.js');
require('./tasks/bower.task.js');
require('./tasks/partials.admin.task.js');
require('./tasks/partials.blog.task.js');
require('./tasks/todo.task.js');
require('laravel-elixir-livereload');
require('laravel-elixir-karma');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    var assets = [
        'public/js/vendor.js',
        'public/css/vendor.css',
        'public/admin/js/app.js',
        'public/admin/js/partials.admin.js',
        'public/admin/css/app.css',
        'public/blog/js/partials.blog.js',
        'public/blog/js/app.js',
        'public/blog/css/app.css'
    ],
        karmaJsDir = [
            'public/js/vendor.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/ng-describe/dist/ng-describe.js',
            'public/admin/js/partials.admin.js',
            'public/admin/js/app.js',
            'public/blog/js/partials.blog.js',
            'public/blog/js/app.js',
            'tests/angular/**/*.spec.js'
        ];

    mix
        .bower()
        .angularBlog('./lblog/blog/','public/blog/js')
        .angularAdmin('./lblog/admin/','public/admin/js')
        .partialsAdmin('./lblog/admin/**/*.html','public/admin/js')
        .partialsBlog('./lblog/blog/**/*.html','public/blog/js')
        .less('./lblog/admin/**/*.less', 'public/admin/css')
        .less('./lblog/blog/**/*.less', 'public/blog/css')
        .version(assets)
        .livereload('public/build/rev-manifest.json', {
            liveCSS: true
        })
        .karma({
            jsDir: karmaJsDir
        })
});
