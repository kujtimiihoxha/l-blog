class LoginFormController {
	constructor($auth) {
		'ngInject';

		this.$auth = $auth;

		this.email = '';
		this.password = '';
	}

	login() {
		var user = {
			email: this.email,
			password: this.password
		};

		this.$auth.login(user)
			.then((response) => {
				this.$auth.setToken(response.data);
			})
			.catch(this.failedLogin.bind(this));
	}

	failedLogin(response) {
		if (response.status === 422) {
			for (var error in response.data.errors) {
				return this.ToastService.error(response.data.errors[error][0]);
			}
		}
	}
}

export const LoginFormComponent = {
	templateUrl: './views/default/components/login-form/login-form.component.html',
	controller: LoginFormController,
	controllerAs: 'vm',
	bindings: {}
}
