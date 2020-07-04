let baseUrl = "http://localhost/jd.com";

define(['jquery', 'cookie'], function($, cookie) {
    'use strict';
    return {
        render: function() {
            let shop = cookie.get('shop');
            if (shop) {

                shop = JSON.parse(shop);

                let idlist = shop.map(elm => elm.id).join();
                $('.number').html(shop.length);
                $('.amount-sum>em').html(shop.length);
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/buy.php`,
                    data: {
                        idlist: idlist
                    },
                    dataType: "json",
                    success: function(res) {
                        let str = ''
                        let sumnum;
                        let addup = 0;
                        res.forEach(elm => {
                            let pic = JSON.parse(elm.pic);
                            shop.forEach(function(elem) {
                                if (elem.id == elm.id) {
                                    sumnum = elem.num;
                                }
                            });
                            addup += sumnum * elm.price;
                            str += `
                            <div class="item-single  item-item  item-selected " j oversea="false" sid="1343" cid="9711" style="z-index: auto;">
                            <div class="item-form">
                                <div class="cell p-checkbox">
                                    <div class="cart-checkbox">
                                        <!--单品-->
                                        <input p-type="46318765895_1" type="checkbox" name="checkItem" value="46318765895_1" checked="checked" class="jdcheckbox" id="asdfgh${elm.id}">
                                        <label for="" class="checked">勾选商品</label>
                                        <span class="line-circle"></span>
                                    </div>
                                </div>
                                <div class="cell p-goods">
                                    <div class="goods-item">
                                        <div class="p-img">
                                            <a href="//item.jd.com/46318765895.html" target="_blank" class="J_zyyhq_46318765895" pnc="false" pncs="">
                                                <img alt="${elm.title}" clstag="clickcart|keycount|xincart|cart_sku_pic" src="${baseUrl}/src/${pic[0].src}">
                                            </a>
                                        </div>
                                        <div class="item-msg">
                                            <div class="p-name">
                                                <a clstag="clickcart|keycount|xincart|cart_sku_name" href="//item.jd.com/46318765895.html" target="_blank">${elm.title}</a>
                                            </div>
                                            <div class="p-extend p-extend-new">
                                                <span class="promise" _yanbao="yanbao_46318765895_" _service="service_46318765895_" isproduct="1"><i class="jd-service-icon"></i><a data-tips="选服务" class="ftx-03 jd-service" href="#none">选服务</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cell p-props p-props-new">
                                    <div class="props-txt" title="杏色">杏色</div>
                                    <div class="props-txt" title="L">L</div>
                                </div>
                                <div class="cell p-price p-price-new 
                                                                                                                ">
                                    <p class="plus-switch">
                                        <strong>￥${(+elm.price).toFixed(2)}</strong>
                                    </p>
                                    <div>
                                        <div class="clr"></div>
                                    </div>
                                    <p class="mt5" jj="">
                                    </p>
                                    <p class="mt5" bt=""></p>
                                </div>
                                <div class="cell p-quantity">
                                    <!--单品-->
                                    <div class="quantity-form">
                                        <a href="javascript:void(0);" clstag="clickcart|keycount|xincart|cart_num_down" class="decrement " id="asdf${elm.id}">-</a>
                                        <input autocomplete="off" type="text" class="itxt" value="${sumnum}" minnum="1" maxnum="${elm.num}">
                                        <a href="javascript:void(0);" clstag="clickcart|keycount|xincart|cart_num_up" class="increment " id="asd${elm.id}">+</a>
                                    </div>
                                    <div class="ac ftx-03 quantity-txt" _stock="stock_46318765895">还剩${elm.num}件</div>
                                </div>
                                <div class="cell p-sum">
                                    <strong>￥${(elm.price*sumnum).toFixed(2)}</strong>
                                </div>
                                <div class="cell p-ops">
                                    <!--单品-->
                                    <a id="asdfg${elm.id}" class="cart-remove" href="javascript:void(0);" ob="false">删除</a>
                                    <a href="javascript:void(0);" class="cart-follow" id="follow_10148555_46318765895_1" clstag="clickcart|keycount|xincart|cart_sku_guanzhu" ob="false">移到我的关注</a>
                                </div>
                            </div>
                            <div class="item-extra mb10">


                                <!-- 落地配服务 -->
                            </div>
                            <div class="item-line"></div>

                        </div>
                            
                            `
                        });
                        $('.item-list').append(str);
                        $('.sumPrice>em').text(`${addup}`);
                    }
                });
                $('.item-list').on('click', '.jdcheckbox', function() {
                    if (this.checked) {
                        let all = (+$('.sumPrice>em').html());
                        let sum = (+$(this).parents('.item-form').children('.p-sum').children('strong').text().slice(1));
                        let res = all + sum;
                        let appSum = $('.amount-sum>em').html();
                        appSum++;
                        $('.amount-sum>em').html(appSum);
                        $('.sumPrice>em').html(res);
                    } else {
                        let all = (+$('.sumPrice>em').html());
                        let sum = (+$(this).parents('.item-form').children('.p-sum').children('strong').text().slice(1));
                        let res = all - sum;
                        let appSum = $('.amount-sum>em').html();
                        appSum--;
                        $('.amount-sum>em').html(appSum);
                        $('.sumPrice>em').html(res);
                    }
                })
                $('#toggle-checkboxes_up').on('click', function() {
                    let res = 0;
                    if (this.checked) {
                        Array.from($('.jdcheckbox')).forEach(elm => {
                            elm.checked = this.checked;
                        })
                        console.log($('.p-sum>strong'));
                        Array.from($('.p-sum>strong')).forEach(elm => {
                            res += (+elm.innerHTML.slice(1))
                        })
                        $('.sumPrice>em').html(res);
                        $('.amount-sum>em').html(shop.length);
                    }
                })
                $('.item-list').on('click', '.increment', function() {
                    let _id = this.id.replace(/asd/, '');
                    let _flag = $(this).parents('.p-quantity').siblings('.p-checkbox').children('.cart-checkbox').children('input')[0].checked;
                    let num = (+$(this).siblings('.itxt').val());
                    let nummax = (+$(this).siblings('.itxt').attr('maxnum'));
                    let res = 0;
                    if (num < nummax) {
                        num++;
                    }
                    let _price = $(this).parents('.p-quantity').siblings('.p-price').children('p').children('strong').html().slice(1)
                    let _lastPrice = _price * num;
                    $(this).siblings('.itxt').val(num);


                    $(this).parents('.p-quantity').siblings('.p-sum').children('strong').html('￥' + _lastPrice + ".00");
                    Array.from($('.p-sum>strong')).forEach(elm => {
                        res += (+elm.innerHTML.slice(1))
                    })
                    if (_flag) {
                        $('.sumPrice>em').html(res);
                    }
                    shop.forEach(elm => {
                        if (elm.id == _id) {
                            elm.num = num;
                        }
                    })
                    cookie.set('shop', JSON.stringify(shop), 1)
                })
                $('.item-list').on('click', '.decrement', function() {

                    let _id = this.id.replace(/asdf/, '');
                    let num = (+$(this).siblings('.itxt').val());
                    let _price = $(this).parents('.p-quantity').siblings('.p-price').children('p').children('strong').html().slice(1)
                    let res = 0;
                    if (num > 1) {
                        num--;
                    }
                    let _lastPrice = _price * num;
                    let _flag = $(this).parents('.p-quantity').siblings('.p-checkbox').children('.cart-checkbox').children('input')[0].checked;
                    $(this).parents('.p-quantity').siblings('.p-sum').children('strong').html('￥' + _lastPrice + ".00");

                    $(this).siblings('.itxt').val(num);


                    Array.from($('.p-sum>strong')).forEach(elm => {
                        res += (+elm.innerHTML.slice(1))
                    })
                    if (_flag) {
                        $('.sumPrice>em').html(res);
                    }
                    shop.forEach(elm => {
                        if (elm.id == _id) {
                            elm.num = num;
                        }
                    })
                    cookie.set('shop', JSON.stringify(shop), 1)
                })

                $('.item-list').on('click', '.cart-remove', function() {
                    let _id = this.id.replace(/asdfg/, '');
                    let flag = confirm('确定吗');
                    let _shop = [];
                    let res = 0;
                    if (flag) {
                        $(this).parents('.item-single').remove();
                        shop.forEach(elm => {
                            if (elm.id != _id) {
                                _shop.push(elm);
                            }
                        })
                        cookie.set('shop', JSON.stringify(_shop), 1)
                    }
                    Array.from($('.p-sum>strong')).forEach(elm => {
                        res += (+elm.innerHTML.slice(1))
                    })
                    $('.sumPrice>em').html(res);
                    location.reload();
                })

                $('.item-list').on('input', '.itxt', function() {
                    let num = (+$(this).val());
                    let nummax = $(this).attr('maxnum');
                    let res = 0;
                    let _flag = $(this).parents('.p-quantity').siblings('.p-checkbox').children('.cart-checkbox').children('input')[0].checked;
                    if (num > nummax) {
                        num = nummax;
                        $(this).val(nummax);
                    }
                    if (num < 1) {
                        num = 1;
                        $(this).val(1);
                    }
                    let _price = $(this).parents('.p-quantity').siblings('.p-price').children('p').children('strong').html().slice(1);
                    let _lastPrice = _price * num;
                    $(this).parents('.p-quantity').siblings('.p-sum').children('strong').html('￥' + _lastPrice + ".00");
                    Array.from($('.p-sum>strong')).forEach(elm => {
                        res += (+elm.innerHTML.slice(1))
                    })
                    if (_flag) {
                        $('.sumPrice>em').html(res);
                    }
                })

                $('.cleaner-opt').on('click', function() {
                    let flag = confirm('确定吗');
                    let _shop = [];
                    let res = 0;
                    if (flag) {
                        $(this).parents('.item-single').remove();
                        cookie.set('shop', JSON.stringify(_shop), 1)
                    }
                    location.reload();
                    Array.from($('.p-sum>strong')).forEach(elm => {
                        res += (+elm.innerHTML.slice(1))
                    })
                    $('.sumPrice>em').html(res);
                })

                $('#cart-floatbar .jdcheckbox').on('click', function() {
                    let res = 0;
                    if (this.checked) {
                        Array.from($('.jdcheckbox')).forEach(elm => {
                            elm.checked = this.checked;
                        })
                        Array.from($('.p-sum>strong')).forEach(elm => {
                            res += (+elm.innerHTML.slice(1))
                        })
                        $('.sumPrice>em').html(res);
                        $('.amount-sum>em').html(shop.length);
                    }
                })

                $('#cart-floatbar .remove-batch').on('click', function() {
                    let arr = [];
                    let flag = confirm('确定删除吗');
                    if (flag) {
                        Array.from($('.jdcheckbox')).forEach(elm => {
                            if (elm.checked) {
                                let id = elm.id.replace(/asdfgh/, '');
                                arr.push(id);
                            }
                        })
                        let arr1 = arr.splice(1, 4);
                        let _shop = [];
                        shop.forEach(elm => {
                            let j = 0;
                            arr1.forEach(value => {
                                if (value == elm.id) {
                                    j++;
                                }
                            })
                            if (j == 0) {
                                _shop.push(elm);
                            }
                        })
                        cookie.set('shop', JSON.stringify(_shop), 1);
                        location.reload();
                    }
                })
            }
        },
        localsearch: function() {
            $('.itxt').on('input', function() {
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

            $('#shelper').on('click', '.qsx', function() {
                console.log(1);
                location.href = `${baseUrl}/src/html/thing.html?id=${this.id}`;
            })
            $('.button').on('click', function() {
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/search.php`,
                    data: {
                        inf: $('.itxt').val()
                    },
                    dataType: "json",
                    success: function(res) {
                        if (res.data != '没有数据') {
                            res.forEach(elm => {
                                location.href = `${baseUrl}/src/html/thing.html?id=${elm.id};`
                            })
                        } else {
                            $('.itxt').val('没有数据');
                        }
                    }
                });
            })

            function fade() {
                $('#shelper').css('display', 'none');
            }
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
        }
    }
})