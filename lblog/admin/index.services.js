import {APIService} from './services/api.service';
import {SettingsService} from './services/settings.service';
import {AuthenticationService} from './services/authentication.service';

angular.module('lblog.admin.services')
	.service('Api', APIService)
	.service('Settings', SettingsService)
	.service('Auth', AuthenticationService);
