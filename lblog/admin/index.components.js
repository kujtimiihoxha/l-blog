import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';

angular.module('lblog.admin.components')
    .component('loginForm', LoginFormComponent)
    .component('registerForm', RegisterFormComponent);
