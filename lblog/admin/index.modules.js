angular.module('lblog.admin', [
    'lblog.admin.run',
	'lblog.admin.filters',
	'lblog.admin.services',
	'lblog.admin.components',
	'lblog.admin.providers',
	'lblog.admin.routes',
	'lblog.admin.config',
	'lblog.admin.partials'
]);

angular.module('lblog.admin.run', []);
angular.module('lblog.admin.routes', []);
angular.module('lblog.admin.filters', []);
angular.module('lblog.admin.services', []);
angular.module('lblog.admin.config', []);
angular.module('lblog.admin.providers', []);
angular.module('lblog.admin.components', [
	'ui.router', 'restangular', 'ngStorage', 'satellizer'
]);

