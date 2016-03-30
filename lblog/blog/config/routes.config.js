export function RoutesConfig($stateProvider, $urlRouterProvider) {
	'ngInject';

	var getView = (viewName) => {
		return './views/blog/pages/' + viewName + '/' + viewName + '.page.html';
	};

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('default', {
			abstract: true,
			views: {
				header: {
					templateUrl: getView('header')
				},
				footer: {
					templateUrl: getView('footer')
				},
				main: {}
			}
		})
		.state('default.landing', {
            url: '/',
            views: {
                'main@': {
                    templateUrl: getView('landing')
                }
            }
        });
}
