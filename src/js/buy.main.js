require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        index: './buy/buy',
        cookie: './cookie'
    }
})
require(['index'], function(index) {
    index.render();
    index.localsearch();
})