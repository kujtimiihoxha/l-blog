export class AuthenticationService{
    constructor($auth,$window,$state,$log){
        'ngInject';
        this.$auth = $auth;
        this.$log = $log;
        this.$window = $window;
        this.$state = $state;
    }
    login(user) {
        this.$auth.login(user)
            .then((response) => {
                this.$auth.setToken(response.data);
                this.$state.go('admin.dashboard')
            })
            .catch(this.failed.bind(this));
    }
    register(user) {
        this.$auth.signup(user)
            .then((response) => {
                //remove this if you require email verification
                this.$auth.setToken(response.data);
                this.$state.go('admin.login')
            })
            .catch(this.failed.bind(this));
    }

    logout(){
        this.$auth.logout();
        this.$window.location.href = '/';
    }

    failed(response) {
        if (response.status === 422) {
            for (var error in response.data.errors) {
                this.$log.error(error);
            }
        }
    }
}

