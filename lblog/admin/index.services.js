import {APIService} from './services/api.service';
import {SettingsAPIService} from './services/settings.api.service';
import {AuthenticationService} from './services/authentication.service';

angular.module('lblog.admin.services')
	.service('Api', APIService)
	.service('SettingsAPI', SettingsAPIService)
	.service('Auth', AuthenticationService);
