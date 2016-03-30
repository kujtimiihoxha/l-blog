<!doctype html>
<html ng-app="lblog.admin" ng-strict-di>
<style>
    html,body{height:100%;margin:0;padding:0}
</style>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screens width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="{!! elixir('admin/css/app.css') !!}">
    <link rel="stylesheet" href="{!! elixir('css/vendor.css') !!}">
    <title>LBlog | Admin</title>

    <!--[if lte IE 10]>
    <script type="text/javascript">document.location.href = '/unsupported-browser'</script>
    <![endif]-->
</head>
<body  class="hold-transition skin-blue sidebar-mini">

<div ui-view="layout"></div>
    <script src="{!! elixir('js/vendor.js') !!}"></script>
    <script src="{!! elixir('admin/js/partials.admin.js') !!}"></script>
    <script src="{!! elixir('admin/js/app.js') !!}"></script>

    @if ( env('APP_ENV') === 'local' )
    <script type="text/javascript">
        document.write('<script src="'+ location.protocol + '//' + (location.host.split(':')[0] || 'localhost') +':35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
    </script>
    @endif

</body>
</html>
