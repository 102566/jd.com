requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        md5: './jquery.md5'
    }
})
require(['jquery'], function($) {
    var _index;
    $('.cate_menu_item').on("mouseover", function() {
        $('.cate_part').css("display", "none");
        _index = $('.cate_menu_item').index(this);
        $('#J_popCtn').css("display", "block");
        $('#cate_item' + (_index + 1)).css("display", "block");
    })

    $('.fs_inner').on("mouseleave", function() {
        $('#J_popCtn').css("display", "none");
        $('#cate_item' + (_index + 1)).css("display", "none");
    })
})