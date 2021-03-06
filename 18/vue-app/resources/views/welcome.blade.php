<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                font-family: 'Raleway', sans-serif;
            }
        </style>
    </head>
    <body>
        <div id="root">
            <ul>
                <li v-for="skill in skills">@{{ skill }}</li>
            </ul>
        </div>

        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.14/dist/vue.js"></script>
        <script src="/js/app.js"></script>
    </body>
</html>
