(function(module) {
try {
  module = angular.module('lblog.admin.partials');
} catch (e) {
  module = angular.module('lblog.admin.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/admin/components/login-form/login-form.component.html',
    '\n' +
    '<form ng-submit="vm.login()">\n' +
    '	<div class="form-group has-feedback">\n' +
    '		<input type="email" class="form-control" placeholder="Email"  ng-model="vm.email">\n' +
    '		<span class="glyphicon glyphicon-envelope form-control-feedback"></span>\n' +
    '	</div>\n' +
    '	<div class="form-group has-feedback">\n' +
    '		<input type="password" class="form-control" placeholder="Password" ng-model="vm.password">\n' +
    '		<span class="glyphicon glyphicon-lock form-control-feedback"></span>\n' +
    '	</div>\n' +
    '	<div class="row">\n' +
    '		<div class="col-xs-8">\n' +
    '			<div class="checkbox">\n' +
    '				<label>\n' +
    '					<input type="checkbox" ng-model="vm.rememberMe"> Remember Me\n' +
    '				</label>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<!-- /.col -->\n' +
    '		<div class="col-xs-4">\n' +
    '			<button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>\n' +
    '		</div>\n' +
    '		<!-- /.col -->\n' +
    '	</div>\n' +
    '</form>');
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
  $templateCache.put('./views/admin/components/sideBar/sideBar.component.html',
    '\n' +
    '    <!--&lt;!&ndash; Inner sidebar &ndash;&gt;-->\n' +
    '    <!--<div class="sidebar">-->\n' +
    '        <!--&lt;!&ndash; user panel (Optional) &ndash;&gt;-->\n' +
    '        <!--<div class="user-panel">-->\n' +
    '            <!--<div class="pull-left image">-->\n' +
    '                <!--<img src="img/user2-160x160.jpg" class="img-circle" alt="User Image">-->\n' +
    '            <!--</div>-->\n' +
    '            <!--<div class="pull-left info">-->\n' +
    '                <!--<p>User Name</p>-->\n' +
    '            <!--</div>-->\n' +
    '        <!--</div>&lt;!&ndash; /.user-panel &ndash;&gt;-->\n' +
    '\n' +
    '        <!--&lt;!&ndash; Sidebar Menu &ndash;&gt;-->\n' +
    '        <!--<ul class="sidebar-menu">-->\n' +
    '            <!--&lt;!&ndash; Optionally, you can add icons to the links &ndash;&gt;-->\n' +
    '            <!--&lt;!&ndash;<li ui-sref-active="active" class="active" ng-repeat="item in vm.items" ng-if="!item.hasChildren"><a ui-sref="{{item.state}}"><span>{{item.title}}</span></a><</li>&ndash;&gt;-->\n' +
    '            <!--<li ui-sref-active="active" class="treeview" ng-repeat="item in vm.items" ng-if="item.hasChildren">-->\n' +
    '                <!--<a ><span>{{item.title}}</span>  &lt;!&ndash; <i class="fa fa-angle-left pull-right"></i> &ndash;&gt;</a>-->\n' +
    '                <!--<ul >-->\n' +
    '                    <!--<li ui-sref-active="active"  ng-repeat="sub in item.children" class="treeview-menu"><a ui-sref="{{sub.state}}">{{sub.title}}</a></li>-->\n' +
    '                <!--</ul>-->\n' +
    '            <!--</li>-->\n' +
    '        <!--</ul>&lt;!&ndash; /.sidebar-menu &ndash;&gt;-->\n' +
    '\n' +
    '    <!--</div>&lt;!&ndash; /.sidebar &ndash;&gt;-->\n' +
    '    <section class="sidebar">\n' +
    '        <!-- Sidebar user panel -->\n' +
    '        <div class="user-panel">\n' +
    '            <div class="pull-left image">\n' +
    '                <img src="/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n' +
    '            </div>\n' +
    '            <div class="pull-left info">\n' +
    '                <p>Alexander Pierce</p>\n' +
    '                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <ul class="sidebar-menu">\n' +
    '            <li class="header">MAIN NAVIGATION</li>\n' +
    '            <li ng-repeat="item in vm.items" ng-class="{treeview: item.hasChildren}">\n' +
    '                <a ui-sref="{{item.state}}">\n' +
    '                    <i class="{{item.icon}}"></i> <span>{{item.title}}</span>\n' +
    '                </a>\n' +
    '                <ul class="treeview-menu" ng-if="item.hasChildren">\n' +
    '                    <li ng-repeat="sub in item.children"><a  ui-sref="{{sub.state}}"><i  class="{{sub.icon}}"></i> {{sub.title}}</a></li>\n' +
    '                </ul>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '    </section>\n' +
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
    '			<label>Name</label>\n' +
    '			<input type="text" ng-model="vm.name">\n' +
    '	</div>\n' +
    '\n' +
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
    '	<button type="submit" class="RegisterForm-submit md-primary md-raised">Register</button>\n' +
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
    '<section class="content-header">\n' +
    '    <h1>\n' +
    '        Dashboard\n' +
    '    </h1>\n' +
    '\n' +
    '</section>\n' +
    '<section class="content body">\n' +
    '    This is the dashboard\n' +
    '</section><!-- /.content -->\n' +
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
  $templateCache.put('./views/admin/pages/defaultLayout/defaultLayout.page.html',
    '<div class="wrapper">\n' +
    '\n' +
    '\n' +
    '    <header ui-view="header"  class="main-header"></header>\n' +
    '\n' +
    '    <!-- =============================================== -->\n' +
    '\n' +
    '    <!-- Left side column. contains the sidebar -->\n' +
    '    <aside  ui-view="siteBar" class="main-sidebar">\n' +
    '        <!-- sidebar: style can be found in sidebar.less -->\n' +
    '        <!-- /.sidebar -->\n' +
    '    </aside>\n' +
    '\n' +
    '    <!-- =============================================== -->\n' +
    '\n' +
    '    <!-- Content Wrapper. Contains page content -->\n' +
    '    <div  class="content-wrapper">\n' +
    '        <div ui-view="main"></div>\n' +
    '    </div>\n' +
    '    <!-- /.content-wrapper -->\n' +
    '\n' +
    '    <footer  ui-view="footer" class="main-footer"></footer>\n' +
    '\n' +
    '    <!-- Control Sidebar -->\n' +
    '    <aside class="control-sidebar control-sidebar-dark">\n' +
    '        <!-- Create the tabs -->\n' +
    '        <ul class="nav nav-tabs nav-justified control-sidebar-tabs">\n' +
    '            <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>\n' +
    '\n' +
    '            <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>\n' +
    '        </ul>\n' +
    '        <!-- Tab panes -->\n' +
    '        <div class="tab-content">\n' +
    '            <!-- Home tab content -->\n' +
    '            <div class="tab-pane" id="control-sidebar-home-tab">\n' +
    '                <h3 class="control-sidebar-heading">Recent Activity</h3>\n' +
    '                <ul class="control-sidebar-menu">\n' +
    '                    <li>\n' +
    '                        <a href="javascript:void(0)">\n' +
    '                            <i class="menu-icon fa fa-birthday-cake bg-red"></i>\n' +
    '\n' +
    '                            <div class="menu-info">\n' +
    '                                <h4 class="control-sidebar-subheading">Langdon\'s Birthday</h4>\n' +
    '\n' +
    '                                <p>Will be 23 on April 24th</p>\n' +
    '                            </div>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="javascript:void(0)">\n' +
    '                            <i class="menu-icon fa fa-user bg-yellow"></i>\n' +
    '\n' +
    '                            <div class="menu-info">\n' +
    '                                <h4 class="control-sidebar-subheading">Frodo Updated His Profile</h4>\n' +
    '\n' +
    '                                <p>New phone +1(800)555-1234</p>\n' +
    '                            </div>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="javascript:void(0)">\n' +
    '                            <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>\n' +
    '\n' +
    '                            <div class="menu-info">\n' +
    '                                <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>\n' +
    '\n' +
    '                                <p>nora@example.com</p>\n' +
    '                            </div>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="javascript:void(0)">\n' +
    '                            <i class="menu-icon fa fa-file-code-o bg-green"></i>\n' +
    '\n' +
    '                            <div class="menu-info">\n' +
    '                                <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>\n' +
    '\n' +
    '                                <p>Execution time 5 seconds</p>\n' +
    '                            </div>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <!-- /.control-sidebar-menu -->\n' +
    '\n' +
    '                <h3 class="control-sidebar-heading">Tasks Progress</h3>\n' +
    '                <ul class="control-sidebar-menu">\n' +
    '                    <li>\n' +
    '                        <a href="javascript:void(0)">\n' +
    '                            <h4 class="control-sidebar-subheading">\n' +
    '                                Custom Template Design\n' +
    '                                <span class="label label-danger pull-right">70%</span>\n' +
    '                            </h4>\n' +
    '\n' +
    '                            <div class="progress progress-xxs">\n' +
    '                                <div class="progress-bar progress-bar-danger" style="width: 70%"></div>\n' +
    '                            </div>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="javascript:void(0)">\n' +
    '                            <h4 class="control-sidebar-subheading">\n' +
    '                                Update Resume\n' +
    '                                <span class="label label-success pull-right">95%</span>\n' +
    '                            </h4>\n' +
    '\n' +
    '                            <div class="progress progress-xxs">\n' +
    '                                <div class="progress-bar progress-bar-success" style="width: 95%"></div>\n' +
    '                            </div>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="javascript:void(0)">\n' +
    '                            <h4 class="control-sidebar-subheading">\n' +
    '                                Laravel Integration\n' +
    '                                <span class="label label-warning pull-right">50%</span>\n' +
    '                            </h4>\n' +
    '\n' +
    '                            <div class="progress progress-xxs">\n' +
    '                                <div class="progress-bar progress-bar-warning" style="width: 50%"></div>\n' +
    '                            </div>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="javascript:void(0)">\n' +
    '                            <h4 class="control-sidebar-subheading">\n' +
    '                                Back End Framework\n' +
    '                                <span class="label label-primary pull-right">68%</span>\n' +
    '                            </h4>\n' +
    '\n' +
    '                            <div class="progress progress-xxs">\n' +
    '                                <div class="progress-bar progress-bar-primary" style="width: 68%"></div>\n' +
    '                            </div>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <!-- /.control-sidebar-menu -->\n' +
    '\n' +
    '            </div>\n' +
    '            <!-- /.tab-pane -->\n' +
    '            <!-- Stats tab content -->\n' +
    '            <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>\n' +
    '            <!-- /.tab-pane -->\n' +
    '            <!-- Settings tab content -->\n' +
    '            <div class="tab-pane" id="control-sidebar-settings-tab">\n' +
    '                <form method="post">\n' +
    '                    <h3 class="control-sidebar-heading">General Settings</h3>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="control-sidebar-subheading">\n' +
    '                            Report panel usage\n' +
    '                            <input type="checkbox" class="pull-right" checked>\n' +
    '                        </label>\n' +
    '\n' +
    '                        <p>\n' +
    '                            Some information about this general settings option\n' +
    '                        </p>\n' +
    '                    </div>\n' +
    '                    <!-- /.form-group -->\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="control-sidebar-subheading">\n' +
    '                            Allow mail redirect\n' +
    '                            <input type="checkbox" class="pull-right" checked>\n' +
    '                        </label>\n' +
    '\n' +
    '                        <p>\n' +
    '                            Other sets of options are available\n' +
    '                        </p>\n' +
    '                    </div>\n' +
    '                    <!-- /.form-group -->\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="control-sidebar-subheading">\n' +
    '                            Expose author name in posts\n' +
    '                            <input type="checkbox" class="pull-right" checked>\n' +
    '                        </label>\n' +
    '\n' +
    '                        <p>\n' +
    '                            Allow the user to show his name in blog posts\n' +
    '                        </p>\n' +
    '                    </div>\n' +
    '                    <!-- /.form-group -->\n' +
    '\n' +
    '                    <h3 class="control-sidebar-heading">Chat Settings</h3>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="control-sidebar-subheading">\n' +
    '                            Show me as online\n' +
    '                            <input type="checkbox" class="pull-right" checked>\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '                    <!-- /.form-group -->\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="control-sidebar-subheading">\n' +
    '                            Turn off notifications\n' +
    '                            <input type="checkbox" class="pull-right">\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '                    <!-- /.form-group -->\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="control-sidebar-subheading">\n' +
    '                            Delete chat history\n' +
    '                            <a href="javascript:void(0)" class="text-red pull-right"><i class="fa fa-trash-o"></i></a>\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '                    <!-- /.form-group -->\n' +
    '                </form>\n' +
    '            </div>\n' +
    '            <!-- /.tab-pane -->\n' +
    '        </div>\n' +
    '    </aside>\n' +
    '    <!-- /.control-sidebar -->\n' +
    '    <!-- Add the sidebar\'s background. This div must be placed\n' +
    '         immediately after the control sidebar -->\n' +
    '    <div class="control-sidebar-bg"></div>\n' +
    '    <div class="login-page">\n' +
    '\n' +
    '    </div>\n' +
    '</div>');
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
    '    <a ui-sref="admin.dashboard" class="logo">\n' +
    '        <!-- LOGO -->\n' +
    '        L-Blog\n' +
    '    </a>\n' +
    '    <!-- Header Navbar: style can be found in header.less -->\n' +
    '    <nav class="navbar navbar-static-top" role="navigation">\n' +
    '        <!-- Sidebar toggle button-->\n' +
    '        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">\n' +
    '            <span class="sr-only">Toggle navigation</span>\n' +
    '            <span class="icon-bar"></span>\n' +
    '            <span class="icon-bar"></span>\n' +
    '            <span class="icon-bar"></span>\n' +
    '        </a>\n' +
    '        <!-- Navbar Right Menu -->\n' +
    '        <div class="navbar-custom-menu">\n' +
    '            <ul class="nav navbar-nav">\n' +
    '                <!-- Messages: style can be found in dropdown.less-->\n' +
    '                <li class="dropdown messages-menu">\n' +
    '                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n' +
    '                        <i class="fa fa-envelope-o"></i>\n' +
    '                        <span class="label label-success">4</span>\n' +
    '                    </a>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                        <li class="header">You have 4 messages</li>\n' +
    '                        <li>\n' +
    '                            <!-- inner menu: contains the actual data -->\n' +
    '                            <ul class="menu">\n' +
    '                                <li><!-- start message -->\n' +
    '                                    <a href="#">\n' +
    '                                        <div class="pull-left">\n' +
    '                                            <img src="/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n' +
    '                                        </div>\n' +
    '                                        <h4>\n' +
    '                                            Sender Name\n' +
    '                                            <small><i class="fa fa-clock-o"></i> 5 mins</small>\n' +
    '                                        </h4>\n' +
    '                                        <p>Message Excerpt</p>\n' +
    '                                    </a>\n' +
    '                                </li><!-- end message -->\n' +
    '                                ...\n' +
    '                            </ul>\n' +
    '                        </li>\n' +
    '                        <li class="footer"><a href="#">See All Messages</a></li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '                <!-- Notifications: style can be found in dropdown.less -->\n' +
    '                <li class="dropdown notifications-menu">\n' +
    '                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n' +
    '                        <i class="fa fa-bell-o"></i>\n' +
    '                        <span class="label label-warning">10</span>\n' +
    '                    </a>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                        <li class="header">You have 10 notifications</li>\n' +
    '                        <li>\n' +
    '                            <!-- inner menu: contains the actual data -->\n' +
    '                            <ul class="menu">\n' +
    '                                <li>\n' +
    '                                    <a href="#">\n' +
    '                                        <i class="ion ion-ios-people info"></i> Notification title\n' +
    '                                    </a>\n' +
    '                                </li>\n' +
    '                                ...\n' +
    '                            </ul>\n' +
    '                        </li>\n' +
    '                        <li class="footer"><a href="#">View all</a></li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '                <!-- Tasks: style can be found in dropdown.less -->\n' +
    '                <li class="dropdown tasks-menu">\n' +
    '                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n' +
    '                        <i class="fa fa-flag-o"></i>\n' +
    '                        <span class="label label-danger">9</span>\n' +
    '                    </a>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                        <li class="header">You have 9 tasks</li>\n' +
    '                        <li>\n' +
    '                            <!-- inner menu: contains the actual data -->\n' +
    '                            <ul class="menu">\n' +
    '                                <li><!-- Task item -->\n' +
    '                                    <a href="#">\n' +
    '                                        <h3>\n' +
    '                                            Design some buttons\n' +
    '                                            <small class="pull-right">20%</small>\n' +
    '                                        </h3>\n' +
    '                                        <div class="progress xs">\n' +
    '                                            <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">\n' +
    '                                                <span class="sr-only">20% Complete</span>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </a>\n' +
    '                                </li><!-- end task item -->\n' +
    '                                ...\n' +
    '                            </ul>\n' +
    '                        </li>\n' +
    '                        <li class="footer">\n' +
    '                            <a href="#">View all tasks</a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '                <!-- User Account: style can be found in dropdown.less -->\n' +
    '                <li class="dropdown user user-menu">\n' +
    '                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n' +
    '                        <img src="/img/user2-160x160.jpg" class="user-image" alt="User Image">\n' +
    '                        <span class="hidden-xs">Alexander Pierce</span>\n' +
    '                    </a>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                        <!-- User image -->\n' +
    '                        <li class="user-header">\n' +
    '                            <img src="/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n' +
    '                            <p>\n' +
    '                                Alexander Pierce - Web Developer\n' +
    '                                <small>Member since Nov. 2012</small>\n' +
    '                            </p>\n' +
    '                        </li>\n' +
    '                        <!-- Menu Body -->\n' +
    '                        <li class="user-body">\n' +
    '                            <div class="col-xs-4 text-center">\n' +
    '                                <a href="#">Followers</a>\n' +
    '                            </div>\n' +
    '                            <div class="col-xs-4 text-center">\n' +
    '                                <a href="#">Sales</a>\n' +
    '                            </div>\n' +
    '                            <div class="col-xs-4 text-center">\n' +
    '                                <a href="#">Friends</a>\n' +
    '                            </div>\n' +
    '                        </li>\n' +
    '                        <!-- Menu Footer-->\n' +
    '                        <li class="user-footer">\n' +
    '                            <div class="pull-left">\n' +
    '                                <a href="#" class="btn btn-default btn-flat">Profile</a>\n' +
    '                            </div>\n' +
    '                            <div class="pull-right">\n' +
    '                                <a href="#" class="btn btn-default btn-flat">Sign out</a>\n' +
    '                            </div>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '    </nav>\n' +
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
  $templateCache.put('./views/admin/pages/login/login.page.html',
    '<!--<div class="content-header">-->\n' +
    '<!--<h1>-->\n' +
    '<!--Login-->\n' +
    '<!--</h1>-->\n' +
    '\n' +
    '<!--</div>-->\n' +
    '<!--<div class="content body">-->\n' +
    '<!--<login-form></login-form>-->\n' +
    '<!--</div>&lt;!&ndash; /.content &ndash;&gt;-->\n' +
    '<div class="login-page">\n' +
    '    <div class="login-box">\n' +
    '        <div class="login-logo">\n' +
    '            <b>L</b>Blog\n' +
    '        </div>\n' +
    '        <!-- /.login-logo -->\n' +
    '        <div class="login-box-body">\n' +
    '            <p class="login-box-msg">Sign in to start your session</p>\n' +
    '\n' +
    '            <form action="../../index2.html" method="post">\n' +
    '                <div class="form-group has-feedback">\n' +
    '                    <input type="email" class="form-control" placeholder="Email">\n' +
    '                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>\n' +
    '                </div>\n' +
    '                <div class="form-group has-feedback">\n' +
    '                    <input type="password" class="form-control" placeholder="Password">\n' +
    '                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>\n' +
    '                </div>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-xs-8">\n' +
    '                        <div class="checkbox icheck">\n' +
    '                            <label>\n' +
    '                                <input type="checkbox"> Remember Me\n' +
    '                            </label>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <!-- /.col -->\n' +
    '                    <div class="col-xs-4">\n' +
    '                        <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>\n' +
    '                    </div>\n' +
    '                    <!-- /.col -->\n' +
    '                </div>\n' +
    '            </form>\n' +
    '\n' +
    '            <div class="social-auth-links text-center">\n' +
    '                <p>- OR -</p>\n' +
    '                <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using\n' +
    '                    Facebook</a>\n' +
    '                <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using\n' +
    '                    Google+</a>\n' +
    '            </div>\n' +
    '            <!-- /.social-auth-links -->\n' +
    '\n' +
    '            <a href="#">I forgot my password</a><br>\n' +
    '            <a href="register.html" class="text-center">Register a new membership</a>\n' +
    '\n' +
    '        </div>\n' +
    '        <!-- /.login-box-body -->\n' +
    '    </div>\n' +
    '</div>');
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
    '<div class="pull-right hidden-xs">\n' +
    '    <b>Version</b> 0.0.1\n' +
    '</div>\n' +
    '<strong>Copyright &copy; 2014-2015 <a href="http://kujtimhoxha.com">L-Blog</a>.</strong> All rights\n' +
    'reserved.');
}]);
})();

(function(module) {
try {
  module = angular.module('lblog.admin.partials');
} catch (e) {
  module = angular.module('lblog.admin.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/admin/pages/side-bar/side-bar.page.html',
    '<side-bar></side-bar>');
}]);
})();

(function(module) {
try {
  module = angular.module('lblog.admin.partials');
} catch (e) {
  module = angular.module('lblog.admin.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/admin/pages/loginLayout/loginLayout.page.html',
    '\n' +
    '<div id=\'loginPage\' class="hold-transition skin-blue login-page">\n' +
    '    <div class=" login-box">\n' +
    '        <div class="login-logo">\n' +
    '           <b>L</b>Blog\n' +
    '        </div>\n' +
    '        <!-- /.login-logo -->\n' +
    '        <div class="login-box-body">\n' +
    '            <p class="login-box-msg">Sign in to start your session</p>\n' +
    '\n' +
    '            <login-form></login-form>\n' +
    '        </div>\n' +
    '        <!-- /.login-box-body -->\n' +
    '    </div>\n' +
    '</div>');
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
    '<div class="content-header">\n' +
    '	<h1>\n' +
    '		Register\n' +
    '	</h1>\n' +
    '\n' +
    '</div>\n' +
    '<div class="content body">\n' +
    '	<register-form></register-form>\n' +
    '</div><!-- /.content -->\n' +
    '');
}]);
})();
