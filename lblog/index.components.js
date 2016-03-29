import {LoginFormComponent} from './default/components/login-form/login-form.component';
import {RegisterFormComponent} from './default/components/register-form/register-form.component';

angular.module('lblog.components')
	.component('loginForm', LoginFormComponent)
	.component('registerForm', RegisterFormComponent);

