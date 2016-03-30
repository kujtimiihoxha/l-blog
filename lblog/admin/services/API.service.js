export class APIService {
	constructor(Restangular, $window,$log) {
		'ngInject';
		//content negotiation
		var headers = {
			'Content-Type': 'application/json',
			'Accept': 'application/x.laravel.v1+json'
		};

		return Restangular.withConfig(function(RestangularConfigurer) {
			RestangularConfigurer
				.setBaseUrl('/api/')
				.setDefaultHeaders(headers)
				.setErrorInterceptor(function(response) {
					if (response.status === 422) {
						for (var error in response.data.errors) {
							$log.error(error);
						}
					}
				})
				.addFullRequestInterceptor(function(element, operation, what, url, headers) {
					var token = $window.localStorage.satellizer_token;
					if (token) {
						headers.Authorization = 'Bearer ' + token;
					}
				});
		});
	}
}
