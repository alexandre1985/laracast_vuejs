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
        </style>
    </head>
    <body>
        <div id="app">
            {{-- <input type="text" v-model="coupon"> --}}
            {{-- <input type="text" :value="coupon" @input="coupon = $event.target.value"> --}}

            <coupon v-model="coupon">
        </div>

        <script src="/js/vendor.js"></script>
        <script src="/js/app.js"></script>
    </body>
</html>
