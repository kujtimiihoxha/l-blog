<!doctype html>
<html ng-app="lblog.admin" ng-strict-di>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="{!! elixir('css/vendor.css') !!}">
    <link rel="stylesheet" href="{!! elixir('admin/css/app.css') !!}">
    <title>Laravel Angular Material Starter</title>

    <!--[if lte IE 10]>
    <script type="text/javascript">document.location.href = '/unsupported-browser'</script>
    <![endif]-->
</head>
<body>

    <div ui-view="header"></div>
    <div ui-view="main"></div>
    <div ui-view="footer"></div>

    <script src="{!! elixir('js/vendor.js') !!}"></script>
    <script src="{!! elixir('admin/js/partials.admin.js') !!}"></script>
    <script src="{!! elixir('admin/js/app.js') !!}"></script>

    {{--livereload--}}
    @if ( env('APP_ENV') === 'local' )
    <script type="text/javascript">
        document.write('<script src="'+ location.protocol + '//' + (location.host.split(':')[0] || 'localhost') +':35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
    </script>
    @endif
</body>
</html>
