require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        index: './thing/thing'
    }
})
require(['index'], function(index) {
    index.render();
})