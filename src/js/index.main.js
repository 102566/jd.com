require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        index: './index/index',
        cookie: './cookie'
    }
})
require(['index'], function(index) {
    index.tabs();
    index.render();
    index.slider();
    index.slider_1();
    index.slider_2();
    index.buycar();
    index.overflowList();
    index.slider_3();
})