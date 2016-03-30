(function(module) {
try {
  module = angular.module('lblog.blog.partials');
} catch (e) {
  module = angular.module('lblog.blog.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/blog/pages/footer/footer.page.html',
    '<footer>Footer</footer>');
}]);
})();

(function(module) {
try {
  module = angular.module('lblog.blog.partials');
} catch (e) {
  module = angular.module('lblog.blog.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/blog/pages/header/header.page.html',
    '<header>Header</header>');
}]);
})();

(function(module) {
try {
  module = angular.module('lblog.blog.partials');
} catch (e) {
  module = angular.module('lblog.blog.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/blog/pages/landing/landing.page.html',
    '<h1>landing</h1>');
}]);
})();
