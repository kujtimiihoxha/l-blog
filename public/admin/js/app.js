/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(4);

	__webpack_require__(6);

	__webpack_require__(11);

	__webpack_require__(14);

	__webpack_require__(21);

	__webpack_require__(25);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	angular.module('lblog.admin', ['lblog.admin.run', 'lblog.admin.filters', 'lblog.admin.services', 'lblog.admin.components', 'lblog.admin.constants', 'lblog.admin.providers', 'lblog.admin.routes', 'lblog.admin.config', 'lblog.admin.partials']);

	angular.module('lblog.admin.run', []);
	angular.module('lblog.admin.routes', []);
	angular.module('lblog.admin.filters', []);
	angular.module('lblog.admin.services', []);
	angular.module('lblog.admin.config', []);
	angular.module('lblog.admin.constants', []);
	angular.module('lblog.admin.providers', []);
	angular.module('lblog.admin.components', ['ui.router', 'restangular', 'ngStorage', 'satellizer']);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _state = __webpack_require__(3);

	angular.module('lblog.admin').provider('StateProvider', _state.StateProvider);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StateProvider = exports.StateProvider = ["$stateProvider", function StateProvider($stateProvider) {
	    'ngInject';

	    _classCallCheck(this, StateProvider);

	    this.$get = function () {
	        return {
	            addState: function addState(name, state) {
	                $stateProvider.state(name, state);
	            }
	        };
	    };
	}];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(5);

	angular.module('lblog.admin.run').run(_routes.RoutesRun);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	RoutesRun.$inject = ["$rootScope", "$state", "$auth"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RoutesRun = RoutesRun;
	function RoutesRun($rootScope, $state, $auth) {
	    'ngInject';

	    var deregisterationCallback = $rootScope.$on("$stateChangeStart", function (event, toState) {
	        if (toState.data && toState.data.auth) {
	            /*Cancel going to the authenticated state and go back to landing*/
	            if (!$auth.isAuthenticated()) {
	                event.preventDefault();
	                return $state.go('admin.login');
	            }
	        }
	        if (toState.name === "admin.login") {
	            if ($auth.isAuthenticated()) {
	                event.preventDefault();
	                return $state.go('admin.dashboard');
	            }
	            $rootScope.loginPage = true;
	        } else {
	            $rootScope.loginPage = false;
	        }
	    });
	    $rootScope.$on('$destroy', deregisterationCallback);
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _api = __webpack_require__(7);

	var _settingsApi = __webpack_require__(8);

	var _authentication = __webpack_require__(10);

	angular.module('lblog.admin.services').service('Api', _api.APIService).service('SettingsAPI', _settingsApi.SettingsAPIService).service('Auth', _authentication.AuthenticationService);

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var APIService = exports.APIService = ["Restangular", "$window", "$log", function APIService(Restangular, $window, $log) {
		'ngInject';
		//content negotiation

		_classCallCheck(this, APIService);

		var headers = {
			'Content-Type': 'application/json',
			'Accept': 'application/x.laravel.v1+json'
		};

		return Restangular.withConfig(function (RestangularConfigurer) {
			RestangularConfigurer.setBaseUrl('/api/').setDefaultHeaders(headers).setErrorInterceptor(function (response) {
				if (response.status === 422) {
					for (var error in response.data.errors) {
						$log.error(error);
					}
				}
			}).addFullRequestInterceptor(function (element, operation, what, url, headers) {
				var token = $window.localStorage.satellizer_token;
				if (token) {
					headers.Authorization = 'Bearer ' + token;
				}
			});
		});
	}];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SettingsAPIService = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _state = __webpack_require__(9);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SettingsAPIService = exports.SettingsAPIService = function () {
		// var StateProvider;

		SettingsAPIService.$inject = ["StateProvider"];
		function SettingsAPIService(StateProvider) {
			'ngInject';

			_classCallCheck(this, SettingsAPIService);

			this.StateProvider = StateProvider;
		}

		_createClass(SettingsAPIService, [{
			key: 'addAdminPage',
			value: function addAdminPage(title, stateName, menuTitle, role, url, view, controller, order, icon) {
				this.StateProvider.addState('admin.' + stateName, new _state.State(url, view, role, controller));
			}
		}, {
			key: 'addAdminPageSubMenu',
			value: function addAdminPageSubMenu(title, parentMenu, stateName, menuTitle, role, url, view, controller, order, icon) {

				this.StateProvider.addState('admin.' + stateName, new _state.State(url, view, controller));
			}
		}]);

		return SettingsAPIService;
	}();

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var State = exports.State = function State(url, view, role, controller) {
	    _classCallCheck(this, State);

	    return {
	        url: url,
	        data: {
	            role: role
	        },
	        views: {
	            'main@': {
	                template: view,
	                controller: controller,
	                controllerAs: 'vm'
	            }
	        }
	    };
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AuthenticationService = exports.AuthenticationService = function () {
	    AuthenticationService.$inject = ["$auth", "$window", "$state", "$log"];
	    function AuthenticationService($auth, $window, $state, $log) {
	        'ngInject';

	        _classCallCheck(this, AuthenticationService);

	        this.$auth = $auth;
	        this.$log = $log;
	        this.$window = $window;
	        this.$state = $state;
	    }

	    _createClass(AuthenticationService, [{
	        key: 'login',
	        value: function login(user) {
	            var _this = this;

	            this.$auth.login(user).then(function (response) {
	                _this.$auth.setToken(response.data);
	                _this.$state.go('admin.dashboard');
	            }).catch(this.failed.bind(this));
	        }
	    }, {
	        key: 'register',
	        value: function register(user) {
	            var _this2 = this;

	            this.$auth.signup(user).then(function (response) {
	                //remove this if you require email verification
	                _this2.$auth.setToken(response.data);
	                _this2.$state.go('admin.login');
	            }).catch(this.failed.bind(this));
	        }
	    }, {
	        key: 'logout',
	        value: function logout() {
	            this.$auth.logout();
	            this.$window.location.href = '/';
	        }
	    }, {
	        key: 'failed',
	        value: function failed(response) {
	            if (response.status === 422) {
	                for (var error in response.data.errors) {
	                    this.$log.error(error);
	                }
	            }
	        }
	    }]);

	    return AuthenticationService;
	}();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(12);

	var _satellizer = __webpack_require__(13);

	angular.module('lblog.admin.config').config(_routes.RoutesConfig).config(_satellizer.SatellizerConfig);

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RoutesConfig = RoutesConfig;
	function RoutesConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';

	    var getView = function getView(viewName) {
	        return './views/admin/pages/' + viewName + '/' + viewName + '.page.html';
	    };
	    $urlRouterProvider.otherwise('/');

	    $stateProvider.state('admin', {
	        abstract: true,
	        data: {
	            auth: true
	        },
	        views: {
	            layout: {
	                templateUrl: getView('defaultLayout'),
	                controller: function controller() {
	                    if (angular.isDefined($.AdminLTE.layout)) {
	                        $.AdminLTE.layout.fix();
	                    }
	                }
	            },
	            'header@admin': {
	                templateUrl: getView('header')
	            },
	            'siteBar@admin': {
	                templateUrl: getView('side-bar')
	            },
	            'footer@admin': {
	                templateUrl: getView('footer')
	            },
	            'main@admin': {}
	        }
	    }).state('admin.dashboard', {
	        url: '/',
	        views: {
	            'main@admin': {
	                templateUrl: getView('dashboard')
	            }
	        }
	    }).state('admin.test', {
	        url: '/test',
	        views: {
	            'main@admin': {
	                template: '\n                    <div class="content-header">\n                        <h1>\n                            Test Sub Menu\n                        </h1>\n                    </div>\n                    <div class="content body">\n                        This is a sub menu page\n                    </div><!-- /.content -->\n\n                    '
	            }
	        }
	    }).state('admin.logout', {
	        url: '/logout',

	        views: {
	            'main@admin': {
	                templateUrl: getView('dashboard'),
	                controller: ["Auth", function controller(Auth) {
	                    'ngInject';

	                    Auth.logout();
	                }]
	            }
	        }
	    }).state('admin.login', {
	        url: '/login',
	        data: {
	            auth: false
	        }, //{auth: true} would require JWT auth for this route
	        views: {
	            'layout@': {
	                templateUrl: getView('loginLayout')
	            },
	            'main@admin': {
	                templateUrl: getView('login')
	            }
	        }
	    }).state('admin.register', {
	        url: '/register',
	        data: {}, //{auth: true} would require JWT auth for this route
	        views: {
	            'main@admin': {
	                templateUrl: getView('register')
	            }
	        }
	    });
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	SatellizerConfig.$inject = ["$authProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SatellizerConfig = SatellizerConfig;
	function SatellizerConfig($authProvider) {
		'ngInject';

		$authProvider.httpInterceptor = function () {
			return true;
		};

		$authProvider.loginUrl = '/api/auth/login';
		$authProvider.signupUrl = '/api/auth/register';
		$authProvider.tokenRoot = 'data'; //compensates success response macro
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _capitalize = __webpack_require__(15);

	var _human_readable = __webpack_require__(16);

	var _truncate_characters = __webpack_require__(17);

	var _truncate_words = __webpack_require__(18);

	var _trust_html = __webpack_require__(19);

	var _ucfirst = __webpack_require__(20);

	angular.module('lblog.admin.filters').filter('capitalize', _capitalize.CapitalizeFilter).filter('humanReadable', _human_readable.HumanReadableFilter).filter('truncateCharacters', _truncate_characters.TruncatCharactersFilter).filter('truncateWords', _truncate_words.TruncateWordsFilter).filter('trustHtml', _trust_html.TrustHtmlFilter).filter('ucfirst', _ucfirst.UcFirstFilter);

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.CapitalizeFilter = CapitalizeFilter;
	function CapitalizeFilter() {
		return function (input) {
			return input ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}) : '';
		};
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HumanReadableFilter = HumanReadableFilter;
	function HumanReadableFilter() {
		return function humanize(str) {
			if (!str) {
				return '';
			}
			var frags = str.split('_');
			for (var i = 0; i < frags.length; i++) {
				frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
			}
			return frags.join(' ');
		};
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncatCharactersFilter = TruncatCharactersFilter;
	function TruncatCharactersFilter() {
		return function (input, chars, breakOnWord) {
			if (isNaN(chars)) {
				return input;
			}
			if (chars <= 0) {
				return '';
			}
			if (input && input.length > chars) {
				input = input.substring(0, chars);

				if (!breakOnWord) {
					var lastspace = input.lastIndexOf(' ');
					// Get last space
					if (lastspace !== -1) {
						input = input.substr(0, lastspace);
					}
				} else {
					while (input.charAt(input.length - 1) === ' ') {
						input = input.substr(0, input.length - 1);
					}
				}
				return input + '...';
			}
			return input;
		};
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncateWordsFilter = TruncateWordsFilter;
	function TruncateWordsFilter() {
		return function (input, words) {
			if (isNaN(words)) {
				return input;
			}
			if (words <= 0) {
				return '';
			}
			if (input) {
				var inputWords = input.split(/\s+/);
				if (inputWords.length > words) {
					input = inputWords.slice(0, words).join(' ') + '...';
				}
			}
			return input;
		};
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TrustHtmlFilter = TrustHtmlFilter;
	function TrustHtmlFilter($sce) {
		return function (html) {
			return $sce.trustAsHtml(html);
		};
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UcFirstFilter = UcFirstFilter;
	function UcFirstFilter() {
		return function (input) {
			if (!input) {
				return null;
			}
			return input.substring(0, 1).toUpperCase() + input.substring(1);
		};
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _loginForm = __webpack_require__(22);

	var _registerForm = __webpack_require__(23);

	var _sideBar = __webpack_require__(24);

	angular.module('lblog.admin.components').component('loginForm', _loginForm.LoginFormComponent).component('registerForm', _registerForm.RegisterFormComponent).component('sideBar', _sideBar.SideBarComponent);

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginFormController = function () {
		LoginFormController.$inject = ["Auth"];
		function LoginFormController(Auth) {
			'ngInject';

			_classCallCheck(this, LoginFormController);

			this.Auth = Auth;
			this.email = '';
			this.password = '';
		}

		_createClass(LoginFormController, [{
			key: 'login',
			value: function login() {
				var user = {
					email: this.email,
					password: this.password
				};
				this.Auth.login(user);
			}
		}]);

		return LoginFormController;
	}();

	var LoginFormComponent = exports.LoginFormComponent = {
		templateUrl: './views/admin/components/login-form/login-form.component.html',
		controller: LoginFormController,
		controllerAs: 'vm',
		bindings: {}
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RegisterFormController = function () {
		RegisterFormController.$inject = ["Auth"];
		function RegisterFormController(Auth) {
			'ngInject';

			_classCallCheck(this, RegisterFormController);

			this.Auth = Auth;
			this.name = '';
			this.email = '';
			this.password = '';
		}

		_createClass(RegisterFormController, [{
			key: 'register',
			value: function register() {
				var user = {
					name: this.name,
					email: this.email,
					password: this.password
				};
				this.Auth.register(user);
			}
		}]);

		return RegisterFormController;
	}();

	var RegisterFormComponent = exports.RegisterFormComponent = {
		templateUrl: './views/admin/components/register-form/register-form.component.html',
		controller: RegisterFormController,
		controllerAs: 'vm',
		bindings: {}
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SideBarController = function SideBarController(Menu) {
	    'ngInject';

	    //

	    _classCallCheck(this, SideBarController);

	    this.items = Menu.items;
	    console.log(Menu);
	};
	SideBarController.$inject = ["Menu"];

	var SideBarComponent = exports.SideBarComponent = {
	    templateUrl: './views/admin/components/sideBar/sideBar.component.html',
	    controller: SideBarController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _adminMenu = __webpack_require__(26);

	angular.module('lblog.admin.constants').constant('Menu', new _adminMenu.Menu());

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Menu = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _menuItem = __webpack_require__(27);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Menu = exports.Menu = function () {
	    function Menu() {
	        _classCallCheck(this, Menu);

	        this.items = [];
	        var dashboard = new _menuItem.MenuItem('Dashboard', null, 1, 'admin.dashboard');
	        dashboard.addSubMenu('test', 5, 'admin.test');
	        this.items.push(dashboard);
	        this.items.push(new _menuItem.MenuItem('Register', null, 2, 'admin.register'));
	        this.items.push(new _menuItem.MenuItem('Logout', null, 3, 'admin.logout'));
	    }

	    _createClass(Menu, [{
	        key: 'addMenuItem',
	        value: function addMenuItem(menuItem) {
	            this.items.push(menuItem);
	        }
	    }]);

	    return Menu;
	}();

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MenuItem = exports.MenuItem = function () {
	    function MenuItem(title, subMenus, order, state) {
	        _classCallCheck(this, MenuItem);

	        this.title = title;
	        this.order = order;
	        this.children = subMenus || [];
	        this.state = state;
	        this.hasChildren = false;
	    }

	    _createClass(MenuItem, [{
	        key: "addSubMenu",
	        value: function addSubMenu(title, order, state) {
	            this.hasChildren = true;
	            this.children.push({
	                title: title,
	                order: order,
	                state: state
	            });
	        }
	    }]);

	    return MenuItem;
	}();

/***/ }
/******/ ]);