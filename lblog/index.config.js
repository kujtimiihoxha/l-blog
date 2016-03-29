import {RoutesConfig} from './config/routes.config';
import {SatellizerConfig} from './config/satellizer.config';

angular.module('lblog.config')
    .config(RoutesConfig)
	.config(SatellizerConfig);
