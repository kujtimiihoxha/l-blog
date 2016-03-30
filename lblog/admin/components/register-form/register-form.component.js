class RegisterFormController {
	constructor(Auth) {
		'ngInject';

		this.Auth = Auth;
		this.name = '';
		this.email = '';
		this.password = '';
	}

	register() {
		var user = {
			name: this.name,
			email: this.email,
			password: this.password
		};
		this.Auth.register(user);
	}
}

export const RegisterFormComponent = {
	templateUrl: './views/admin/components/register-form/register-form.component.html',
	controller: RegisterFormController,
	controllerAs: 'vm',
	bindings: {}
};
