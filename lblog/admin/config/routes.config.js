export function RoutesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    var getView = (viewName) => {
        return './views/admin/pages/' + viewName + '/' + viewName + '.page.html';
    };
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('admin', {
            abstract: true,
            data: {
                auth: true
            },
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
        .state('admin.dashboard', {
            url: '/',
            views: {
                'main@': {
                    templateUrl: getView('dashboard')
                }
            }
        })
        .state('admin.logout', {
            url: '/logout',

            views: {
                'main@': {
                    templateUrl: getView('dashboard'),
                    controller: function (Auth) {
                        'ngInject';
                        Auth.logout();
                    }
                }
            }
    })
    .state('admin.login', {
            url: '/login',
            data: {
                auth: false
            },//{auth: true} would require JWT auth for this route
            views: {
                'main@': {
                    templateUrl: getView('login')
                }
            }
        })
    .state('admin.register', {
            url: '/register',
            data: {},//{auth: true} would require JWT auth for this route
            views: {
                'main@': {
                    templateUrl: getView('register')
                }
            }
        });
}
