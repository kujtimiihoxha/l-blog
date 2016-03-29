export function RoutesConfig($stateProvider, $urlRouterProvider) {
	'ngInject';

	var getAdminView = (viewName) => {
		return './views/admin/pages/' + viewName + '/' + viewName + '.page.html';
	};
	var getDefaultView = (viewName) => {
		return './views/default/pages/' + viewName + '/' + viewName + '.page.html';
	};

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('default', {
			abstract: true,
			views: {
				header: {
					templateUrl: getDefaultView('header')
				},
				footer: {
					templateUrl: getDefaultView('footer')
				},
				main: {}
			}
		})
		.state('admin',{
			abstract: true,
			data: {
				auth:true
			},
			views: {
				header: {
					templateUrl: getAdminView('header')
				},
				footer: {
					templateUrl: getAdminView('footer')
				},
				main: {}
			}
		})
		.state('default.landing', {
            url: '/',
            views: {
                'main@': {
                    templateUrl: getDefaultView('landing')
                }
            }
        })
		.state('default.test', {
			url: '/test',
			views: {
				'main@': {
					templateUrl: getDefaultView('landing')
				}
			}
		})
        .state('admin.dashboard', {
			url: '/lblog/dashboard',
			views: {
				'main@': {
					templateUrl: getAdminView('landing')
				}
			}
		})
		.state('default.login', {
			url: '/login',
			data: {},//{auth: true} would require JWT auth for this route
			views: {
				'main@': {
					templateUrl: getDefaultView('login')
				}
			}
		})
        .state('default.register', {
            url: '/register',
            data: {},//{auth: true} would require JWT auth for this route
            views: {
                'main@': {
                    templateUrl: getDefaultView('register')
                }
            }
        });
}
