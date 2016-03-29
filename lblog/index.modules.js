angular.module('lblog', [
    'lblog.run',
	'lblog.filters',
	'lblog.services',
	'lblog.components',
	'lblog.routes',
	'lblog.config',
	'lblog.partials',
	'lblog.default.partials'

]);

angular.module('lblog.run', []);
angular.module('lblog.routes', []);
angular.module('lblog.filters', []);
angular.module('lblog.services', []);
angular.module('lblog.config', []);
angular.module('lblog.components', [
	'ui.router', 'restangular', 'ngStorage', 'satellizer'
]);

