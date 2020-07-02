require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        index: './login/login',
        md5: './jquery.md5'
    },
    shim: {
        md5: ['jquery']
    }
})
require(['index'], function(index) {
    index.render();
})