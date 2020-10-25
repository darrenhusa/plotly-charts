const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

// try a wildcard for all js files!
// mix.js('resources/js/*.js', 'public/js');

mix.js('resources/js/chart-utilities.js', 'public/js');
mix.js('resources/js/bar-chart.js', 'public/js');
mix.js('resources/js/bar-chart-with-values.js', 'public/js');
mix.js('resources/js/grouped-bar-chart.js', 'public/js');
mix.js('resources/js/stacked-bar-chart.js', 'public/js');
mix.js('resources/js/100percent-stacked-bar-chart.js', 'public/js');

mix.copy('node_modules/plotly.js/dist/plotly.min.js/', 'public/js');
