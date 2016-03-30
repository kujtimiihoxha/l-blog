export function RoutesRun($rootScope, $state, $auth) {
    'ngInject';


    var deregisterationCallback =  $rootScope.$on("$stateChangeStart", function(event, toState) {
        if (toState.data && toState.data.auth) {
            /*Cancel going to the authenticated state and go back to landing*/
            if (!$auth.isAuthenticated()) {
                event.preventDefault();
                return $state.go('admin.login');
            }
        }
        if (toState.name === "admin.login") {
            if($auth.isAuthenticated()){
                event.preventDefault();
                return $state.go('admin.dashboard');
            }
            $rootScope.loginPage=true;
        }
        else {
            $rootScope.loginPage=false;
        }
    });
    $rootScope.$on('$destroy', deregisterationCallback)
}
