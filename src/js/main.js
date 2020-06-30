requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        index: './index/index'
    }
})
require(['index'], function(index) {
    index.tabs();
    index.render();
})