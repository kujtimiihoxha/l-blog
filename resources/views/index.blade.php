<!doctype html>
<html ng-app="lblog.blog" ng-strict-di>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="{!! elixir('css/vendor.css') !!}">
    <link rel="stylesheet" href="{!! elixir('blog/css/app.css') !!}">
    {{--Begin Theme CSS--}}
    @if (file_exists(public_path('themes/lblog-first/css/vendor.css')))
        <link rel="stylesheet" href="{!! asset('themes/lblog-first/css/vendor.css') !!}">
    @endif
    @if (file_exists(public_path('themes/lblog-first/css/app.css')))
        <link rel="stylesheet" href="{!! asset('themes/lblog-first/css/app.css') !!}">
    @endif
    {{--End Theme CSS--}}
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
    {{--Begin Theme JS--}}
    @if (file_exists(public_path('themes/lblog-first/js/vendor.js')))
        <script src="{!! asset('themes/lblog-first/js/vendor.js') !!}"></script>
    @endif
    @if(file_exists(public_path('themes/lblog-first/js/partials.js')))
        <script src="{!! asset('themes/lblog-first/js/partials.js') !!}"></script>
    @endif
    @if(file_exists(public_path('themes/lblog-first/js/app.js')))
        <script src="{!! asset('themes/lblog-first/js/app.js') !!}"></script>
    @endif
    {{--End Theme JS--}}
    <script src="{!! elixir('blog/js/partials.blog.js') !!}"></script>
    <script src="{!! elixir('blog/js/app.js') !!}"></script>
    {{--livereload--}}
    @if ( env('APP_ENV') === 'local' )
    <script type="text/javascript">
        document.write('<script src="'+ location.protocol + '//' + (location.host.split(':')[0] || 'localhost') +':35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
    </script>
    @endif
</body>
</html>
