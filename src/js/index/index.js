let baseUrl = "http://localhost/jd.com";
define(['jquery', 'cookie'], function($, cookie) {
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
        },
        slider: function() {
            let step = 590;
            let first_x = 0;
            let _index = 0;
            let timer;
            $('.sliderBannerWrapper .slider_control_prev').on('click', prev);
            $('.sliderBannerWrapper .slider_control_next').on('click', next);

            $('.sliderBannerWrapper').hover(function() {
                stop();
            }, function() {
                main();
            })
            $('.focus__main .slider_indicators_btn').on('click', function() {
                _index = $('.focus__main .slider_indicators_btn').index(this);
                first_x = _index * -step,
                    $('.sliderBannerWrapper .slider_control_prev').siblings('.slider_list').children('.slider_wrapper').animate({
                        left: first_x
                    }, 400);
                $(this).addClass('slider_indicators_btn_active');
                $(this).siblings().removeClass('slider_indicators_btn_active');
            })


            function prev() {
                if (first_x == -4720) {
                    _index = 0;
                    $('.sliderBannerWrapper .slider_control_prev').siblings('.slider_list').children('.slider_wrapper').stop(true, true);
                    first_x = 0;
                    $('.sliderBannerWrapper .slider_control_prev').siblings('.slider_list').children('.slider_wrapper').css("left", first_x);
                }
                _index++;
                first_x -= step;
                $('.sliderBannerWrapper .slider_control_prev').siblings('.slider_list').children('.slider_wrapper').animate({
                    left: first_x + ''
                }, 400);
                if (_index == 8) {
                    $('.sliderBannerWrapper .slider_indicators_btn').removeClass('slider_indicators_btn_active');
                    $($('.sliderBannerWrapper .slider_indicators_btn')[0]).addClass('slider_indicators_btn_active');
                } else {
                    $('.sliderBannerWrapper .slider_indicators_btn').removeClass('slider_indicators_btn_active');
                    $($('.sliderBannerWrapper .slider_indicators_btn')[_index]).addClass('slider_indicators_btn_active');
                }
            }

            function next() {
                if (first_x == 0) {
                    _index = 8;
                    $(this).siblings('.slider_list').children('.slider_wrapper').stop(true, true)
                    first_x = -4720;
                    $(this).siblings('.slider_list').children('.slider_wrapper').css("left", first_x);
                }
                _index--;
                first_x += step;
                $(this).siblings('.slider_list').children('.slider_wrapper').animate({
                    left: first_x + ''
                }, 400);
                $('.sliderBannerWrapper .slider_indicators_btn').removeClass('slider_indicators_btn_active');
                $($('.sliderBannerWrapper .slider_indicators_btn')[_index]).addClass('slider_indicators_btn_active');
            }

            function stop() {
                clearInterval(timer);
                // $('.sliderBannerWrapper .slider_control_prev').siblings('.slider_list').children('.slider_wrapper').stop(true, true);
            }

            function main() {
                timer = setInterval(prev, 2666);
            }
            main();
        },
        slider_1: function() {
            let timer;
            let _index = 1;
            $('.sliderRecommend>.slider_control_prev').on('click', prev);
            $('.sliderRecommend>.slider_control_next').on('click', next);
            $('.sliderRecommend .focus-slider__item').hover(stop, start);


            function prev() {
                if (_index == 2) {
                    _index = -1;
                }
                _index++;
                $('.sliderRecommend .slider_item').animate({ opacity: 0 }, 10);
                $($('.sliderRecommend .slider_item')[_index]).animate({ opacity: 1 }, 500);
            }

            function next() {
                if (_index == 0) {
                    _index = 3;
                }
                _index--;
                $('.sliderRecommend .slider_item').animate({ opacity: 0 }, 10);
                $($('.sliderRecommend .slider_item')[_index]).animate({ opacity: 1 }, 500);
            }

            function start() {
                timer = setInterval(prev, 6000);
            }

            function stop() {
                clearInterval(timer);
            }
            start();
        },
        slider_2: function() {
            let step = 800;
            let Xsite = -800;
            let timer;
            $('.seckill-list .slider_control_prev').on('click', prev);
            $('.seckill-list .slider_control_next').on('click', next);
            $('.seckill-list .slider_list').hover(stop, start);

            function prev() {
                if (Xsite == -4800) {
                    Xsite = -800;
                    // $('.seckill-list .slider_control_prev').siblings('.slider_list').children('.slider_wrapper').stop(true, true);
                    $('.seckill-list .slider_control_prev').siblings('.slider_list').children('.slider_wrapper').css('left', Xsite);
                }
                Xsite -= step;
                $('.seckill-list .slider_control_prev').siblings('.slider_list').children('.slider_wrapper').animate({ left: Xsite }, 800);
            }

            function next() {
                if (Xsite == -800) {
                    Xsite = -4800;
                    // $('.seckill-list .slider_control_prev').siblings('.slider_list').children('.slider_wrapper').stop(true, true);
                    $('.seckill-list .slider_control_prev').siblings('.slider_list').children('.slider_wrapper').css('left', Xsite);
                }
                Xsite += step;
                $('.seckill-list .slider_control_prev').siblings('.slider_list').children('.slider_wrapper').animate({ left: Xsite }, 800);
            }

            function start() {
                timer = setInterval(prev, 10000);
            }

            function stop() {
                clearInterval(timer);
            }
            start();
        },
        buycar: function() {
            let shop = cookie.get('shop');
            let username = cookie.get('username');
            if (shop) {
                shop = JSON.parse(shop);
                $('.cw-icon .ci-count').html(shop.length);
            }
            if (username) {
                $('#ttbar-login .link-login').html('你好,' + username);
                $('#ttbar-login .link-login').removeAttr('href');
            }
        },
        overflowList: function() {
            let timer;
            let i = 0;

            function move() {
                timer = setInterval(prev, 20)
            }

            function prev() {
                i--;
                if (i == -2850) {
                    i = 0;
                }
                $('.goods-list').css({
                    left: i,
                })
            }

            function stop() {
                clearInterval(timer);
            }
            move();
            $('.nice-goods__recommends').hover(stop, move);
        },
        slider_3: function() {
            let index = 0;
            let left = -65;
            let step = 130;
            let timer;
            $('.core2 .slider_control_prev').on('click', prev);
            $('.core2 .slider_control_next').on('click', next);
            $('.core2 .slider_list').hover(stop, start);

            function prev() {
                if (left == -975) {
                    left = -65;
                    $('.core2 .slider_wrapper').css('left', left)
                    index = 0;
                }
                index++;
                left -= step;
                $('.newArrival_item').removeClass('slider_active');
                $('.newArrival_item').removeClass('slider_prev');
                $('.newArrival_item').removeClass('middleSlide');
                $($('.newArrival_item')[index - 1]).addClass('slider_prev');
                $($('.newArrival_item')[index]).addClass('slider_active');
                $($('.newArrival_item')[index + 1]).addClass('slider_active');
                $($('.newArrival_item')[index + 2]).addClass('slider_active');
                $($('.newArrival_item')[index + 1]).addClass('middleSlide');
                $('.core2 .slider_wrapper').animate({
                    left: left
                }, 400)
            }

            function next() {
                if (left == -65) {
                    left = -975;
                    $('.core2 .slider_wrapper').css('left', left)
                    index = 7;
                }
                index--;
                left += step;
                $('.newArrival_item').removeClass('slider_active');
                $('.newArrival_item').removeClass('slider_prev');
                $('.newArrival_item').removeClass('middleSlide');
                $($('.newArrival_item')[index - 1]).addClass('slider_prev');
                $($('.newArrival_item')[index]).addClass('slider_active');
                $($('.newArrival_item')[index + 1]).addClass('slider_active');
                $($('.newArrival_item')[index + 2]).addClass('slider_active');
                $($('.newArrival_item')[index + 1]).addClass('middleSlide');
                $('.core2 .slider_wrapper').animate({
                    left: left
                }, 400)
            }

            function start() {
                timer = setInterval(prev, 3000);
            }

            function stop() {
                clearInterval(timer);
            }
            start();
        },
        tab_head: function() {
            $('.grid_c1 .tab_head_item').hover(function() {
                $('.grid_c1 .tab_head_item').removeClass('active');
                $(this).addClass('active');
            }, function() {
                $('.grid_c1 .tab_head_item').removeClass('active');
            })
            $('#J_top .tab_head_item').hover(function() {
                $('#J_top .tab_head_item').removeClass('active');
                $(this).addClass('active');
            }, function() {
                $('#J_top .tab_head_item').removeClass('active');
            })
            $('.more2 .feed-tab__item').hover(function() {
                $('.more2 .feed-tab__item').removeClass('feed-tab__item--active ');
                $(this).addClass('feed-tab__item--active ');
            }, function() {
                $('.more2 .feed-tab__item').removeClass('feed-tab__item--active ');
            })

        },
        slider_4: function() {
            let flag = false;
            let step = 180;
            let left = -180;
            let timer;
            $($('.seckill-brand .slider_indicators_btn')[0]).on('click', next)
            $($('.seckill-brand .slider_indicators_btn')[1]).on('click', prev)
            $('.seckill-brand').hover(stop, start);

            function prev() {
                if (!flag) {
                    flag = !flag;
                    if (left == -540) {
                        left = -180;
                        $('.seckill-brand .slider_wrapper').css('left', left);
                    }
                    $('.seckill-brand .slider_indicators_btn').removeClass('slider_indicators_btn_active')
                    $($('.seckill-brand .slider_indicators_btn')[Number(flag)]).addClass('slider_indicators_btn_active');
                    left -= step;
                    $('.seckill-brand .slider_wrapper').animate({
                        left: left
                    }, 600)
                }
            }

            function next() {
                if (flag) {
                    flag = !flag;
                    if (left == -180) {
                        left = -540;
                        $('.seckill-brand .slider_wrapper').css('left', left);
                    }
                    $('.seckill-brand .slider_indicators_btn').removeClass('slider_indicators_btn_active')
                    $($('.seckill-brand .slider_indicators_btn')[Number(flag)]).addClass('slider_indicators_btn_active');
                    left += step;
                    $('.seckill-brand .slider_wrapper').animate({
                        left: left
                    }, 600)
                }

            }

            function auto() {
                flag = !flag;
                if (left == -540) {
                    left = -180;
                    $('.seckill-brand .slider_wrapper').css('left', left);
                }

                $('.seckill-brand .slider_indicators_btn').removeClass('slider_indicators_btn_active')
                $($('.seckill-brand .slider_indicators_btn')[Number(flag)]).addClass('slider_indicators_btn_active');
                left -= step;
                $('.seckill-brand .slider_wrapper').animate({
                    left: left
                }, 600)
            }

            function start() {
                timer = setInterval(auto, 2000)
            }

            function stop() {
                clearInterval(timer);
            }

            start();
        },
        seckill: function() {
            getTimer();

            function getTimer() {
                let now = new Date(),
                    year = now.getFullYear(),
                    months = now.getMonth(),
                    day = now.getDate(),
                    hour = now.getHours();
                let aim;
                if (hour >= 16) {
                    aim = new Date(year, months, day + 1, 16, 0, 0);
                } else {
                    aim = new Date(year, months, day, 16, 0, 0);
                }
                let num = aim.getTime() - now.getTime(),
                    newhour = parseInt(num / (1000 * 60 * 60)),
                    newminutes = parseInt(num % (1000 * 60 * 60) / (1000 * 60)),
                    newsecond = parseInt(num % (1000 * 60 * 60) % (1000 * 60) / 1000);
                if (newhour < 10) {
                    newhour = '0' + newhour;
                }
                if (newminutes < 10) {
                    newminutes = '0' + newminutes;
                }
                if (newsecond < 10) {
                    newsecond = '0' + newsecond;
                }
                $($('.timmer__unit')[0]).html(newhour);
                $($('.timmer__unit')[1]).html(newminutes);
                $($('.timmer__unit')[2]).html(newsecond);
            }
            let timer1 = setInterval(getTimer, 1000);
        },
        search: function() {
            $('.text').on('input', function() {
                $.ajax({
                    type: "get",
                    url: `https://dd-search.jd.com/?terminal=pc&newjson=1&ver=2&zip=1&key=${this.value}&pvid=4b5c107c56374c78b92a1da7bf43c8d7&t=1593757909618&curr_url=www.jd.com%2F&callback=callback`,
                    dataType: "jsonp",
                    jsonpCallback: 'callback',
                    success: function(res) {
                        console.log(res);
                        let str = ''
                        res.forEach((elm, index) => {
                            if (index == res.length - 1) {
                                null;
                            } else {
                                str += `<li id="d_0" suggest-pos="1.his.0" title="${elm.key}" onclick="$o.clickItem(this)" history="1">
                            <div class="search-item" style="color:#005AA0">${elm.key}</div>
                            <div class="search-count">搜索历史</div>
                             </li>`;
                            }
                        })
                        str += `<li class="close" onclick="$o.del(event)">全部删除</li>`;
                        $('#shelper').html(str);
                    }
                });
            });
        },
        localsearch: function() {
            $('.text').on('input', function() {
                // $('#key').on('focus', function() {
                $('#shelper').css('display', 'block');
                // })
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/search.php`,
                    data: {
                        inf: this.value
                    },
                    dataType: "json",
                    success: function(res) {
                        if (res.data != '没有数据') {
                            let str = ''
                            res.forEach((elm, index) => {
                                str += `<li class="qsx" id="${elm.id}" title="${elm.title}" history="1">
                            <div class="search-item" style="color:#005AA0">${elm.title}</div>
                            <div class="search-count">搜索历史</div>
                            </li>`;
                            })
                            str += `<li class="close" onclick="$o.del(event)">全部删除</li>`;
                            $('#shelper').html(str);

                        }
                    }
                });
            })
            $('#key').on('blur', function() {
                setTimeout(fade, 1000);
            })

            $('.form').on('click', '.qsx', function() {
                console.log(1);
                location.href = `${baseUrl}/src/html/thing.html?id=${this.id}`;
            })
            $('.button').on('click', function() {
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/search.php`,
                    data: {
                        inf: $('.text').val()
                    },
                    dataType: "json",
                    success: function(res) {
                        if (res.data != '没有数据') {
                            res.forEach(elm => {
                                location.href = `${baseUrl}/src/html/thing.html?id=${elm.id};`
                            })
                        } else {
                            $('.text').val('没有数据');
                        }
                    }
                });
            })

            function fade() {
                $('#shelper').css('display', 'none');
            }
        }
    }
});