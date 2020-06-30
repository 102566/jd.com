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
                    var str = ''
                    res.forEach(element => {
                        let data = JSON.parse(element.pic);
                        console.log(element);
                        console.log(data);
                        // console.log(data.pic);
                        str += `
                        <li class="more2_item more2_item_good hover-on ">
                            <span class="more2_item_gdot "></span>
                            <a class="more2_lk " href="${baseUrl}/src/html/thing.html?id=${element.id}" target="_blank ">
                                <div class="lazyimg lazyimg_loaded more2_img ">
                                    <img src="${baseUrl}/src/${data[0].src}" class="lazyimg_img " alt=${element.title}>
                                </div>
                                <div class="more2_info ">
                                    <p class="more2_info_name ">${element.title}</p>
                                    <div class="more2_info_price more2_info_price_plus more2_info_price_newcomer ">
                                        <div class="mod_price ">
                                            <i>¥</i>
                                            <span class="more2_info_price_txt ">${element.price}<span class="more2_info_price_txt-decimal ">.00</span></span>
                                        </div>
                                        <div class="more2_price_plus ">
                                            <div class="more2_discount ">券</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="more2_item_hover ">
                                    <div class="more2_item_delete " clstag="h|keycount||feed|01#pd_001-b " title="不喜欢 "></div>
                                    <div class="more2_item_hd " title=" ">
                                        <div class="more2_item_btn more2_btn_find enable " clstag="h|keycount||feed|01#pd_001-c ">
                                            <i class="more2_btn_icon "></i>
                                            <span>找相似</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        `;
                    });
                    $('.more2_list').html(str);
                }
            });
        }
    }
});