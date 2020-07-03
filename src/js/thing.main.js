require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        index: './thing/thing',
        cookie: './cookie'
    }
})
require(['index'], function(index) {
    index.render();
    index.buycar();
    index.localsearch();
})