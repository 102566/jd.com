let baseUrl = "http://localhost/jd.com";
define(['jquery'], function($) {
    'use strict';
    return {
        tabs: function() {
            var _index;
            $('.cate_menu_item').on("mouseover", function() {
                $('.cate_part').css("display", "none");
                $(this).addClass('cate_menu_item_on');
                _index = $('.cate_menu_item').index(this);
                $('#J_popCtn').css("display", "block");
                $('#cate_item' + (_index + 1)).css("display", "block");
            })
            $('.cate_menu_item').on("mouseleave", function() {
                $(this).removeClass('cate_menu_item_on');
            })
            $('.fs_inner').on("mouseleave", function() {
                $('#J_popCtn').css("display", "none");
                $('#cate_item' + (_index + 1)).css("display", "none");
            })
            $('#key').on('focus', function() {
                $('#shelper').css('display', 'block');
            })
            $('#key').on('blur', function() {
                $('#shelper').css('display', 'none');
            })
        },
        render: function() {
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getall.php`,
                dataType: "json",
                success: function(res) {
                    console.log(res)
                }
            });
        }
    }
});