class RegisterFormController {
	constructor($auth) {
		'ngInject';

		this.$auth = $auth;
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

		this.$auth.signup(user)
			.then((response) => {
				//remove this if you require email verification
				this.$auth.setToken(response.data);
			})
			.catch(this.failedRegistration.bind(this));
	}



	failedRegistration(response) {
		if (response.status === 422) {
			for (var error in response.data.errors) {
			}
		}}
}

export const RegisterFormComponent = {
	templateUrl: './views/default/components/register-form/register-form.component.html',
	controller: RegisterFormController,
	controllerAs: 'vm',
	bindings: {}
};
