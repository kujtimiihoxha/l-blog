angular.module('lblog.blog', [
    'lblog.blog.run',
	'lblog.blog.filters',
	'lblog.blog.services',
	'lblog.blog.components',
	'lblog.blog.routes',
	'lblog.blog.config',
	'lblog.blog.partials'
]);

angular.module('lblog.blog.run', []);
angular.module('lblog.blog.routes', []);
angular.module('lblog.blog.filters', []);
angular.module('lblog.blog.services', []);
angular.module('lblog.blog.config', []);
angular.module('lblog.blog.components', [
	'ui.router', 'restangular', 'ngStorage', 'satellizer'
]);

