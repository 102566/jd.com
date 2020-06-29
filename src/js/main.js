requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        md5: './jquery.md5'
    }
})
require(['jquery'], function() {
        $('.cate_menu_item').hover(function() {
            let _index = $('.cate_menu_item').index(this);
            $('#J_phpCtn').css({
                display: "block"
            });
            $('#cate_item' + (_index + 1)).css({
                display: "block"
            })
        })
    },
    function() {
        $('#J_phpCtn').css({
            display: "none"
        });
        $('#cate_item' + (_index + 1)).css({
            display: "none"
        })
    }
)