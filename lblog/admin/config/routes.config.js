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
                layout:{
                    templateUrl: getView('defaultLayout'),
                    controller: function () {
                        if(angular.isDefined($.AdminLTE.layout)) {
                              $.AdminLTE.layout.fix();
                        }
                    }
                },
                'header@admin': {
                    templateUrl: getView('header')
                },
                'siteBar@admin': {
                    templateUrl: getView('side-bar')
                },
                'footer@admin': {
                    templateUrl: getView('footer')
                },
                'main@admin': {}
            }
        })
        .state('admin.dashboard', {
            url: '/',
            views: {
                'main@admin': {
                    templateUrl: getView('dashboard')
                }
            }
        })
        .state('admin.test', {
            url: '/test',
            views: {
                'main@admin': {
                    template:`
                    <div class="content-header">
                        <h1>
                            Test Sub Menu
                        </h1>
                    </div>
                    <div class="content body">
                        This is a sub menu page
                    </div><!-- /.content -->

                    `
                }
            }
        })
        .state('admin.logout', {
            url: '/logout',

            views: {
                'main@admin': {
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
                'layout@':{
                    templateUrl: getView('loginLayout')
                },
                'main@admin': {
                    templateUrl: getView('login')
                }
            }
        })
    .state('admin.register', {
            url: '/register',
            data: {},//{auth: true} would require JWT auth for this route
            views: {
                'main@admin': {
                    templateUrl: getView('register')
                }
            }
        });
}
