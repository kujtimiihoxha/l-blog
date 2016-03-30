class LoginFormController {
	constructor(Auth) {
		'ngInject';

		this.Auth = Auth;
		this.email = '';
		this.password = '';
	}
	login(){
		var user = {
			email : this.email,
			password : this.password
		};
		this.Auth.login(user);
	}
}

export const LoginFormComponent = {
	templateUrl: './views/admin/components/login-form/login-form.component.html',
	controller: LoginFormController,
	controllerAs: 'vm',
	bindings: {}
};
