(function(module) {
try {
  module = angular.module('lblog.admin.partials');
} catch (e) {
  module = angular.module('lblog.admin.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/admin/components/login-form/login-form.component.html',
    '<form ng-submit="vm.login()">\n' +
    '	<div>\n' +
    '			<label>Email</label>\n' +
    '			<input type="email" ng-model="vm.email">\n' +
    '	</div>\n' +
    '\n' +
    '	<div>\n' +
    '			<label>Password</label>\n' +
    '			<input type="password" ng-model="vm.password">\n' +
    '	</div>\n' +
    '\n' +
    '	<button type="submit" >Log in</button>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('lblog.admin.partials');
} catch (e) {
  module = angular.module('lblog.admin.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/admin/components/navigation/navigation.component.html',
    '<ul>\n' +
    '    <li  ng-repeat="item in vm.menu.items">\n' +
    '        <a ui-sref="{{item.state}}">{{item.title}}</a>\n' +
    '        <ul ng-if="item.children">\n' +
    '            <li ng-repeat="subMenu in item.children"> <a ui-sref="{{subMenu.state}}">{{subMenu.title}}</a> </li>\n' +
    '        </ul>\n' +
    '    </li>\n' +
    '</ul>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('lblog.admin.partials');
} catch (e) {
  module = angular.module('lblog.admin.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/admin/components/register-form/register-form.component.html',
    '<form ng-submit="vm.register()">\n' +
    '	<div>\n' +
    '		<md-input-container class="RegisterForm-inputContainer">\n' +
    '			<label>Name</label>\n' +
    '			<input type="text" ng-model="vm.name">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<div>\n' +
    '		<md-input-container class="RegisterForm-inputContainer">\n' +
    '			<label>Email</label>\n' +
    '			<input type="email" ng-model="vm.email">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<div>\n' +
    '		<md-input-container class="RegisterForm-inputContainer">\n' +
    '			<label>Password</label>\n' +
    '			<input type="password" ng-model="vm.password">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<md-button type="submit" class="RegisterForm-submit md-primary md-raised">Register</md-button>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('lblog.admin.partials');
} catch (e) {
  module = angular.module('lblog.admin.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/admin/pages/dashboard/dashboard.page.html',
    '<h1>Dashboard</h1>');
}]);
})();

(function(module) {
try {
  module = angular.module('lblog.admin.partials');
} catch (e) {
  module = angular.module('lblog.admin.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/admin/pages/footer/footer.page.html',
    '<footer>Admin Footer</footer>');
}]);
})();

(function(module) {
try {
  module = angular.module('lblog.admin.partials');
} catch (e) {
  module = angular.module('lblog.admin.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/admin/pages/header/header.page.html',
    '<header>Admin Header</header>\n' +
    '<navigation></navigation>');
}]);
})();

(function(module) {
try {
  module = angular.module('lblog.admin.partials');
} catch (e) {
  module = angular.module('lblog.admin.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/admin/pages/login/login.page.html',
    '<md-content class="Page-container">\n' +
    '    <div class="Login-formContainer" layout="column" layout-align="center center">\n' +
    '\n' +
    '        <h1 class="md-headline">Log in to your account</h1>\n' +
    '\n' +
    '        <login-form></login-form>\n' +
    '\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('lblog.admin.partials');
} catch (e) {
  module = angular.module('lblog.admin.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/admin/pages/register/register.page.html',
    '<md-content class="Page-container">\n' +
    '	<div flex="80" flex-offset="10">\n' +
    '		<div class="Register-formContainer" layout="column" layout-align="center center">\n' +
    '			<h1 class="md-headline">Create an account</h1>\n' +
    '\n' +
    '			<register-form></register-form>\n' +
    '\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</md-content>\n' +
    '');
}]);
})();
