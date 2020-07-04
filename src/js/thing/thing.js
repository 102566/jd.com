let baseUrl = "http://localhost/jd.com";


define(['jquery', 'cookie'], function($, cookie) {
    "use strict";
    return {
        render: function() {
            let id = location.search.split('=')[1];
            let num1;
            let step = 290;
            let flag = true;
            let addnum = parseInt($('.buy-num').val());
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/thing.php?id=${id}`,
                dataType: "json",
                success: function(res) {
                    let pic = JSON.parse(res.pic);
                    num1 = res.num;
                    let str = `
            <div class="preview-wrap">
                <div class="preview" id="preview">
                    <div id="spec-n1" class="jqzoom main-img" data-big="1" clstag="shangpin|keycount|product|mainpic_fz">
                        <ul class="preview-btn J-preview-btn">
                        </ul>
                        <img id="spec-img" width="350" alt="${res.title}" src="${baseUrl}/src/${pic[10].src}" >
                        <i></i>
                        <div id="belt"></div>
                        <div class="jqZoomPup" style="width: 236.25px;height: 236.25px;top:25px;left: 62.5px;z-index:-1;">&nbsp</div>
                    </div>

                    <div class="zoomdiv" style="width: 540px; height: 540px; display: none;"><img class="bigimg" style="position:absolute;"src="${baseUrl}/src/${pic[15].src}"></div>

                    <div class="spec-list" clstag="shangpin|keycount|product|lunbotu_2">
                        <a id="spec-forward" href="javascript:;" class="arrow-prev disabled"><i class="sprite-arrow-prev"></i></a>
                        <a id="spec-backward" href="javascript:;" class="arrow-next "><i class="sprite-arrow-next"></i></a>
                        <div id="spec-list" class="spec-items">
                            <ul class="lh" style="position:relative;left:0px;">
                                <li class="img-hover"><img alt="${res.title}" src="${baseUrl}/src/${pic[2].src}" data-url="${baseUrl}/src/${pic[10].src}" id = "${baseUrl}/src/${pic[15].src}" data-img="1" width="50" height="50"></li>
                                <li class=""><img alt="${res.title}" src="${baseUrl}/src/${pic[3].src}" data-url="${baseUrl}/src/${pic[11].src}" id = "${baseUrl}/src/${pic[16].src}" data-img="1" width="50" height="50"></li>
                                <li class=""><img alt="${res.title}" src="${baseUrl}/src/${pic[4].src}" data-url="${baseUrl}/src/${pic[12].src}" id = "${baseUrl}/src/${pic[17].src}" data-img="1" width="50" height="50"></li>
                                <li class=""><img alt="${res.title}" src="${baseUrl}/src/${pic[5].src}" data-url="${baseUrl}/src/${pic[13].src}" id = "${baseUrl}/src/${pic[18].src}" data-img="1" width="50" height="50"></li>
                                <li class=""><img alt="${res.title}" src="${baseUrl}/src/${pic[6].src}" data-url="${baseUrl}/src/${pic[14].src}" id = "${baseUrl}/src/${pic[19].src}" data-img="1" width="50" height="50"></li>
                                <li class=""><img alt="${res.title}" src="${baseUrl}/src/${pic[2].src}" data-url="${baseUrl}/src/${pic[10].src}" id = "${baseUrl}/src/${pic[15].src}" data-img="1" width="50" height="50"></li>
                                <li class=""><img alt="${res.title}" src="${baseUrl}/src/${pic[3].src}" data-url="${baseUrl}/src/${pic[11].src}" id = "${baseUrl}/src/${pic[16].src}" data-img="1" width="50" height="50"></li>
                                <li class=""><img alt="${res.title}" src="${baseUrl}/src/${pic[4].src}" data-url="${baseUrl}/src/${pic[12].src}" id = "${baseUrl}/src/${pic[17].src}" data-img="1" width="50" height="50"></li>
                                <li class=""><img alt="${res.title}" src="${baseUrl}/src/${pic[5].src}" data-url="${baseUrl}/src/${pic[13].src}" id = "${baseUrl}/src/${pic[18].src}" data-img="1" width="50" height="50"></li>
                                <li class=""><img alt="${res.title}" src="${baseUrl}/src/${pic[6].src}" data-url="${baseUrl}/src/${pic[14].src}" id = "${baseUrl}/src/${pic[19].src}" data-img="1" width="50" height="50"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="preview-info">
                        <div class="left-btns">
                            <a class="follow J-follow" data-id="61671923409" href="#none" clstag="shangpin|keycount|product|guanzhushangpin_2">
                                <i class="sprite-follow-sku"></i><em>关注</em>
                            </a>
                            <a class="share J-share" href="#none" clstag="shangpin|keycount|product|share_2">
                                <i class="sprite-share"></i><em>分享</em>
                            </a>
                        </div>
                        <div class="right-btns">
                            <a class="report-btn" href="//jubao.jd.com/index.html?skuId=61671923409" target="_blank" clstag="shangpin|keycount|product|jubao">举报</a>
                        </div>
                    </div>

                </div>
            </div>
            <div class="itemInfo-wrap">
                <div class="sku-name">
                    ${res.title}</div>
                <div class="news">
                    <div class="item hide" id="p-ad" clstag="shangpin|keycount|product|slogana" data-hook="hide" title="全国包邮品质保证赠送运费险（偏远地区除外）" style="display: block;">全国包邮品质保证赠送运费险（偏远地区除外）</div>
                    <div class="item hide" id="p-ad-phone" clstag="shangpin|keycount|product|sloganb" data-hook="hide"></div>
                </div>

                <div class="summary summary-first">
                    <div class="summary-price-wrap">
                        <div class="summary-price J-summary-price">
                            <div class="dt">京 东 价</div>
                            <div class="dd">
                                <span class="p-price"><span>￥</span><span class="price J-p-61671923409">${res.price}</span></span>
                                <a class="notice J-notify-sale" data-type="1" data-sku="61671923409" href="#none" clstag="shangpin|keycount|product|jiangjia_2">降价通知</a>
                                <div class="fans-price J-fans-price hide" style="display: none;">
                                    <span class="p-price-fans">
                                        <span class="price J-p-f-61671923409"></span>
                                    </span>
                                    <img src="../img/xq7.png" alt="fans" class="fans-icon">
                                    <span class="text">关注店铺，即享粉丝价</span>
                                </div>

                                <!-- 高端品 限时特惠start，这段代码中的样式，是需要改的，请前端同学定义样式。还有用js代码，完成对应的需求 -->
                                <span class="J-xsth-sale" style="display: none;">
                                        <a href="#none" class="J-xsth-panel" clstag="shangpin|keycount|product|xianshitehui">限时特惠<s class="s-arrow">&gt;</s></a>
                                        <i class="sprite-question"></i>
                                    </span>
                                <!-- 高端品 限时特惠end -->


                                <div class="plus-price J-plus-price hide" style="display: none;">
                                    <span class="p-price-plus">
                                            <span class="price J-p-p-61671923409"></span>
                                    </span>
                                    <a class="plus-icon-linkwrap" clstag="shangpin|keycount|product|plusicon" href="//plus.jd.com/index" target="_blank"><img src="../img/xq8.png" alt="plus" class="plus-icon"></a>
                                    <span class="text"><strong>PLUS会员</strong>专享价</span>
                                    <a clstag="shangpin|keycount|product|whatisplus" href="//plus.jd.com/index" target="_blank">现在开通PLUS会员享限时特惠 &gt;&gt;</a>
                                </div>
                                <div class="firm-price J-firm-price hide" style="display: none;">
                                    <span class="p-price-firm">
                                        <span class="price J-p-f-61671923409"></span>
                                    </span>
                                    <img src="../img/xq9.png" alt="企业价" class="firm-icon">
                                </div>
                                <div class="user-price J-user-price hide" style="display: none;">
                                    <span class="p-price-user">
                                            <span class="price J-p-s-61671923409"></span>
                                    </span>
                                    <img src="../img/xq10.png" alt="sam's" class="sam-icon">

                                    <span class="text">您购买此商品可享受专属价</span>

                                    <i class="sprite-question"></i>
                                </div>
                            </div>
                        </div>

                        <!-- 分期用分区价格展示需求 start -->
                        <!-- 分期用分区价格展示需求 end -->

                        <div class="summary-info J-summary-info clearfix">
                            <div id="comment-count" class="comment-count item fl" clstag="shangpin|keycount|product|pingjiabtn_2">
                                <p class="comment">累计评价</p>
                                <a class="count J-comm-61671923409" href="#none">0</a>
                            </div>
                        </div>
                        <div id="summary-quan" class="li p-choose hide" clstag="shangpin|keycount|product|lingquan">
                            <div class="dt">优 惠 券</div>
                            <div class="dd">
                                <dl> <dt class="fl"></dt>
                                    <dd class="lh">
                                        <a class="J-open-tb" href="#none"> <span class="quan-item" title="仅可购买锦铭家居日用专营店商品 有效期2020-06-26至2020-08-01">                                    <s></s><b></b>                                        <span class="text">满1000减100</span> </span>
                                        </a>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div id="J-summary-top" class="summary-top" clstag="shangpin|keycount|product|cuxiao">
                            <div id="summary-promotion" class="summary-promotion" data-hook="hide">
                                <div class="dt">促　　销</div>
                                <div class="dd J-prom-wrap p-promotions-wrap">
                                    <div class="p-promotions">
                                        <ins id="prom-mbuy" data-url="https://cd.jd.com/qrcode?skuId=61671923409&amp;location=3&amp;isWeChatStock=2"></ins>
                                        <ins id="prom-car-gift"></ins>
                                        <ins id="prom-gift" clstag="shangpin|keycount|product|zengpin_1" style="display: none;"></ins>
                                        <ins id="prom-fujian" clstag="shangpin|keycount|product|fujian_1"></ins>
                                        <ins id="prom"></ins>
                                        <ins id="prom-one">            <div class="J-prom">                <div class="prom-item" data-code="19">                        <em class="hl_red_bg">多买优惠</em>                    <em class="hl_red">满1件，总价打9折；满2件，总价打8.50折，包邮（限中国内地）</em>                    <a href="//mall.jd.com/index-947533.html" clstag="shangpin|keycount|product|多买优惠" target="_blank">详情 <s class="s-arrow">&gt;&gt;</s>                    </a>                 </div>            </div></ins>
                                        <ins id="prom-phone"></ins>
                                        <ins id="prom-phone-jjg"></ins>
                                        <ins id="prom-tips"></ins>
                                        <ins id="prom-quan"></ins>
                                        <div class="J-prom-more view-all-promotions" data-hook="hide" style="visibility: hidden;">
                                            <span class="prom-sum">展开促销</span>
                                            <a href="#none" class="view-link"><i class="sprite-arr-close"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="summary p-choose-wrap">

                    <div id="summary-support" class="li hide" style="display: none;">
                        <div class="dt">增值业务</div>
                        <div class="dd">
                            <ul class="choose-support lh">
                            </ul>
                        </div>
                    </div>

                    <div class="summary-stock" clstag="shangpin|keycount|product|quyuxuanze_2">
                        <div class="dt">配 送 至</div>
                        <div class="dd">
                            <div class="store clearfix">
                                <div class="stock-address">
                                    <div id="area1" class="ui-area-wrap ui-area-oversea-mode">
                                        <div class="ui-area-text-wrap">
                                            <!--展示内容主体-->
                                            <div class="ui-area-text" data-id="15-1158-1224-56291" title="浙江宁波市慈溪市白沙路街道">浙江宁波市慈溪市白沙路街道</div>
                                            <!--显示被选中的地区--><b></b>
                                            <!--小箭头-->
                                        </div>
                                        <div class="ui-area-content-wrap ui-area-w-max" style="left: 0px;">
                                            <!--弹出内容主体-->
                                            <div class="ui-area-tab"><a class="ui-switchable-item" data-id="15" title="浙江"><em>浙江</em><i></i></a><a class="ui-switchable-item" data-id="1158" title="宁波市"><em>宁波市</em><i></i></a><a class="ui-switchable-item" data-id="1224" title="慈溪市"><em>慈溪市</em><i></i></a>
                                                <a class="ui-switchable-item ui-area-current" data-id="56291" title="白沙路街道"><em>白沙路街道</em><i></i></a>
                                            </div>
                                            <!--省市区选择标签-->
                                            <div class="ui-area-content">
                                                <div style="display: none;" class="ui-switchable-panel" data-index="0">
                                                    <ul class="ui-area-content-list">
                                                        <li><a data-id="1" href="javascript:void(0)">北京</a></li>
                                                        <li><a data-id="2" href="javascript:void(0)">上海</a></li>
                                                        <li><a data-id="3" href="javascript:void(0)">天津</a></li>
                                                        <li><a data-id="4" href="javascript:void(0)">重庆</a></li>
                                                        <li><a data-id="5" href="javascript:void(0)">河北</a></li>
                                                        <li><a data-id="6" href="javascript:void(0)">山西</a></li>
                                                        <li><a data-id="7" href="javascript:void(0)">河南</a></li>
                                                        <li><a data-id="8" href="javascript:void(0)">辽宁</a></li>
                                                        <li><a data-id="9" href="javascript:void(0)">吉林</a></li>
                                                        <li><a data-id="10" href="javascript:void(0)">黑龙江</a></li>
                                                        <li><a data-id="11" href="javascript:void(0)">内蒙古</a></li>
                                                        <li><a data-id="12" href="javascript:void(0)">江苏</a></li>
                                                        <li><a data-id="13" href="javascript:void(0)">山东</a></li>
                                                        <li><a data-id="14" href="javascript:void(0)">安徽</a></li>
                                                        <li class="ui-area-current"><a data-id="15" href="javascript:void(0)">浙江</a></li>
                                                        <li><a data-id="16" href="javascript:void(0)">福建</a></li>
                                                        <li><a data-id="17" href="javascript:void(0)">湖北</a></li>
                                                        <li><a data-id="18" href="javascript:void(0)">湖南</a></li>
                                                        <li><a data-id="19" href="javascript:void(0)">广东</a></li>
                                                        <li><a data-id="20" href="javascript:void(0)">广西</a></li>
                                                        <li><a data-id="21" href="javascript:void(0)">江西</a></li>
                                                        <li><a data-id="22" href="javascript:void(0)">四川</a></li>
                                                        <li><a data-id="23" href="javascript:void(0)">海南</a></li>
                                                        <li><a data-id="24" href="javascript:void(0)">贵州</a></li>
                                                        <li><a data-id="25" href="javascript:void(0)">云南</a></li>
                                                        <li><a data-id="26" href="javascript:void(0)">西藏</a></li>
                                                        <li><a data-id="27" href="javascript:void(0)">陕西</a></li>
                                                        <li><a data-id="28" href="javascript:void(0)">甘肃</a></li>
                                                        <li><a data-id="29" href="javascript:void(0)">青海</a></li>
                                                        <li><a data-id="30" href="javascript:void(0)">宁夏</a></li>
                                                        <li><a data-id="31" href="javascript:void(0)">新疆</a></li>
                                                        <li><a data-id="52993" href="javascript:void(0)">港澳</a></li>
                                                        <li><a data-id="32" href="javascript:void(0)">台湾</a></li>
                                                        <li><a data-id="84" href="javascript:void(0)">钓鱼岛</a></li>
                                                        <li><a data-id="53283" href="javascript:void(0)">海外</a></li>
                                                    </ul>
                                                </div>
                                                <div style="display: none;" class="ui-switchable-panel" data-index="1">
                                                    <ul class="ui-area-content-list">
                                                        <li class="ui-area-current"><a data-id="1158" href="javascript:void(0)">宁波市</a></li>
                                                        <li><a data-id="1273" href="javascript:void(0)">衢州市</a></li>
                                                        <li><a data-id="1280" href="javascript:void(0)">丽水市</a></li>
                                                        <li><a data-id="1290" href="javascript:void(0)">台州市</a></li>
                                                        <li><a data-id="1298" href="javascript:void(0)">舟山市</a></li>
                                                        <li><a data-id="1213" href="javascript:void(0)">杭州市</a></li>
                                                        <li><a data-id="1233" href="javascript:void(0)">温州市</a></li>
                                                        <li><a data-id="1243" href="javascript:void(0)">嘉兴市</a></li>
                                                        <li><a data-id="1250" href="javascript:void(0)">湖州市</a></li>
                                                        <li><a data-id="1255" href="javascript:void(0)">绍兴市</a></li>
                                                        <li><a data-id="1262" href="javascript:void(0)">金华市</a></li>
                                                    </ul>
                                                </div>
                                                <div style="display: none;" class="ui-switchable-panel" data-index="2">
                                                    <ul class="ui-area-content-list">
                                                        <li><a data-id="46341" href="javascript:void(0)">北仑区</a></li>
                                                        <li class="ui-area-current"><a data-id="1224" href="javascript:void(0)">慈溪市</a></li>
                                                        <li><a data-id="1226" href="javascript:void(0)">奉化区</a></li>
                                                        <li class="long-area"><a data-id="4253" href="javascript:void(0)">高新科技开发区</a></li>
                                                        <li><a data-id="3412" href="javascript:void(0)">海曙区</a></li>
                                                        <li><a data-id="46344" href="javascript:void(0)">江北区</a></li>
                                                        <li><a data-id="3413" href="javascript:void(0)">江东区</a></li>
                                                        <li><a data-id="1227" href="javascript:void(0)">宁海县</a></li>
                                                        <li><a data-id="1228" href="javascript:void(0)">象山县</a></li>
                                                        <li><a data-id="46343" href="javascript:void(0)">鄞州区</a></li>
                                                        <li><a data-id="46345" href="javascript:void(0)">余姚市</a></li>
                                                        <li><a data-id="46342" href="javascript:void(0)">镇海区</a></li>
                                                    </ul>
                                                </div>
                                                <div class="ui-switchable-panel ui-switchable-panel-selected" data-index="3">
                                                    <ul class="ui-area-content-list">
                                                        <li class="ui-area-current"><a data-id="56291" href="javascript:void(0)">白沙路街道</a></li>
                                                        <li><a data-id="46479" href="javascript:void(0)">长河镇</a></li>
                                                        <li><a data-id="51589" href="javascript:void(0)">城区</a></li>
                                                        <li><a data-id="46480" href="javascript:void(0)">崇寿镇</a></li>
                                                        <li><a data-id="46488" href="javascript:void(0)">慈东工业区</a></li>
                                                        <li><a data-id="46481" href="javascript:void(0)">附海镇</a></li>
                                                        <li><a data-id="46473" href="javascript:void(0)">观海卫镇</a></li>
                                                        <li><a data-id="56292" href="javascript:void(0)">古塘街道</a></li>
                                                        <li><a data-id="46489" href="javascript:void(0)">杭州湾新区</a></li>
                                                        <li class="long-area"><a data-id="59395" href="javascript:void(0)">慈溪市农垦场</a></li>
                                                        <li><a data-id="59396" href="javascript:void(0)">慈溪市林场</a></li>
                                                        <li><a data-id="46477" href="javascript:void(0)">横河镇</a></li>
                                                        <li><a data-id="56290" href="javascript:void(0)">浒山街道</a></li>
                                                        <li><a data-id="46482" href="javascript:void(0)">匡堰镇</a></li>
                                                        <li><a data-id="56289" href="javascript:void(0)">坎墩街道</a></li>
                                                        <li><a data-id="46474" href="javascript:void(0)">龙山镇</a></li>
                                                        <li><a data-id="46483" href="javascript:void(0)">桥头镇</a></li>
                                                        <li><a data-id="46475" href="javascript:void(0)">胜山镇</a></li>
                                                        <li><a data-id="46484" href="javascript:void(0)">天元镇</a></li>
                                                        <li><a data-id="46476" href="javascript:void(0)">逍林镇</a></li>
                                                        <li><a data-id="46485" href="javascript:void(0)">新浦镇</a></li>
                                                        <li><a data-id="46486" href="javascript:void(0)">掌起镇</a></li>
                                                        <li><a data-id="46487" href="javascript:void(0)">周巷镇</a></li>
                                                        <li><a data-id="56288" href="javascript:void(0)">宗汉街道</a></li>
                                                        <li><a data-id="46478" href="javascript:void(0)">庵东镇</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!--地区内容-->
                                        </div>
                                    </div>
                                </div>
                                <div id="store-prompt" class="store-prompt"><strong>有货</strong></div>
                                <div class="J-promise-icon promise-icon fl promise-icon-more" clstag="shangpin|keycount|product|promisefw_2" style="display: block;">
                                    <div class="fl">支持</div>
                                    <div class="services" id="ns_services">
                                        <div><a target="_blank" title="送运费险" href="//help.jd.com/user/issue/list-429.html" clstag="shangpin|keycount|product|promisefw_2">送运费险</a></div>
                                    </div>
                                </div>
                                <div class="J-dcashDesc dcashDesc fl">免运费 <a title="了解配送费收取标准" href="//help.jd.com/user/issue/109-188.html" target="_blank"><i class="sprite-question"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div id="summary-supply" class="li">
                        <div class="dt">　　</div>
                        <div class="dd">
                            <div id="summary-service" class="summary-service" clstag="shangpin|keycount|product|fuwu_2">由<a href="//mall.jd.com/index-947533.html" target="_blank" clstag="shangpin|keycount|product|bbtn" class="hl_red">锦铭家居日用专营店</a>负责发货, 并提供售后服务. </div>
                        </div>
                    </div>
                    <div id="summary-weight" class="li" style="display:none">
                        <div class="dt">重　　量</div>
                        <div class="dd"></div>
                    </div>
                    <div class="SelfAssuredPurchase li" id="J_SelfAssuredPurchase" style="display:none;"></div>
                    <div class="summary-line"></div>

                    <div id="choose-attrs">
                        <div id="choose-attr-1" class="li p-choose" data-type="颜色" data-idx="0">
                            <div class="dt ">选择颜色 </div>
                            <div class="dd">
                                <div class="item" data-sku="61671923405" data-value="1.0米餐边柜" title="1.0米餐边柜">
                                    <b></b>
                                    <a href="#none" clstag="shangpin|keycount|product|yanse-1.0米餐边柜">
                                        <img data-img="1" src="${baseUrl}/src/${pic[2].src}" width="40" height="40" alt="1.0米餐边柜"><i>红</i>
                                    </a>
                                </div>
                                <div class="item" data-sku="61671923406" data-value="1.2米餐边柜" title="1.2米餐边柜">
                                    <b></b>
                                    <a href="#none" clstag="shangpin|keycount|product|yanse-1.2米餐边柜">
                                        <img data-img="1" src="${baseUrl}/src/${pic[3].src}" width="40" height="40" alt="1.2米餐边柜"><i>绿</i>
                                    </a>
                                </div>
                                <div class="item" data-sku="61671923407" data-value="1.6米餐边柜" title="1.6米餐边柜">
                                    <b></b>
                                    <a href="#none" clstag="shangpin|keycount|product|yanse-1.6米餐边柜">
                                        <img data-img="1" src="${baseUrl}/src/${pic[4].src}" width="40" height="40" alt="1.6米餐边柜"><i>蓝</i>
                                    </a>
                                </div>
                                <div class="item" data-sku="61671923408" data-value="2.0米餐边柜" title="2.0米餐边柜">
                                    <b></b>
                                    <a href="#none" clstag="shangpin|keycount|product|yanse-2.0米餐边柜">
                                        <img data-img="1" src="${baseUrl}/src/${pic[5].src}" width="40" height="40" alt="2.0米餐边柜"><i>黑</i>
                                    </a>
                                </div>
                                <div class="item  selected" data-sku="61671923409" data-value="2.4米餐边柜" title="2.4米餐边柜">
                                    <b></b>
                                    <a href="#none" clstag="shangpin|keycount|product|yanse-2.4米餐边柜">
                                        <img data-img="1" src="${baseUrl}/src/${pic[6].src}" width="40" height="40" alt="2.4米餐边柜"><i>白</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="choose-results" class="li" style="display:none">
                            <div class="dt">已选择</div>
                            <div class="dd"></div>
                        </div>
                    </div>


                    <div id="choose-luodipei" class="choose-luodipei li" style="display:none">
                        <div class="dt">送装服务</div>
                        <div class="dd"></div>
                    </div>
                    <div id="choose-suits" class="li choose-suits" style="display:none">
                        <div class="dt">套　　装</div>
                        <div class="dd clearfix"></div>
                    </div>
                    <div id="choose-gift" class="choose-gift li" style="display: none;">
                        <div class="dt">搭配赠品</div>
                        <div class="dd clearfix">
                            <div class="gift J-gift" clstag="shangpin|keycount|product|dapeizengpin">
                                <i class="sprite-gift J-popup"></i><span class="gift-tips">选择搭配赠品(共<em>0</em>个)</span>
                            </div>
                            <!--choosed-->
                            <div class="J-gift-selected hide">
                                <div class="gift choosed J-gift-choosed"></div>
                                <a href="#none" class="gift-modify J-popup" clstag="shangpin|keycount|product|zengpin-genggai">更改</a>
                            </div>
                        </div>
                    </div>
                    <div id="choose-serviceF" class="li" style="display:none;">
                        <div class="dt">京东服务</div>
                        <div class="dd"></div>
                    </div>
                    <div id="choose-service" class="li" data-hook="hide" style="display: block;">
                        <div class="dt" data-yb="new_yb_server">增值保障</div>
                        <div class="dd">
                            <div class="service-type-yb clearfix">
                                <div class="yb-item-cat">
                                    <div class="yb-item"> <img class="icon" src="../img/xq16.png"> <span class="name">2年全保换新</span> <span class="price">￥469</span> <i class="arrow-icon"></i>
                                        <div class="after"></div>
                                    </div>
                                    <div class="more-item">
                                        <ul>
                                            <li data-sku="65398370039">
                                                <div class="title" title="厂保故障免费修 意外损坏4折换新"> <span class="choose-btn" clstag="shangpin|keycount|product|jingdongfuwu_65398370039">                                            <i class="sprite-checkbox"></i><span class="name">2年全保换新</span><span class="price">￥469</span>                                                    </span> <a href="//item.jd.com/65398370039.html" target="_blank" class="detail-more" clstag="shangpin|keycount|product|jingdongfuwu_xiangqing">详情<s class="s-arrow">&gt;&gt;</s></a> </div>
                                            </li>
                                            <li data-sku="65398328736">
                                                <div class="title" title="厂保故障免费修 意外损坏4折换新"> <span class="choose-btn" clstag="shangpin|keycount|product|jingdongfuwu_65398328736">                                            <i class="sprite-checkbox"></i><span class="name">1年全保换新</span><span class="price">￥299</span>                                                    </span> <a href="//item.jd.com/65398328736.html" target="_blank" class="detail-more" clstag="shangpin|keycount|product|jingdongfuwu_xiangqing">详情<s class="s-arrow">&gt;&gt;</s></a> </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="yb-item-cat">
                                    <div class="yb-item"> <img class="icon" src="../img/xq17.png"> <span class="name">3年上门修</span> <span class="price">￥49</span> <i class="arrow-icon"></i>
                                        <div class="after"></div>
                                    </div>
                                    <div class="more-item">
                                        <ul>
                                            <li data-sku="44221607968">
                                                <div class="title" title="含人工八百+材料八百 上门修"> <span class="choose-btn" clstag="shangpin|keycount|product|jingdongfuwu_44221607968">                                            <i class="sprite-checkbox"></i><span class="name">3年上门修</span><span class="price">￥49</span>                                                    </span> <a href="//item.jd.com/44221607968.html" target="_blank" class="detail-more" clstag="shangpin|keycount|product|jingdongfuwu_xiangqing">详情<s class="s-arrow">&gt;&gt;</s></a> </div>
                                            </li>
                                            <li data-sku="44218971769">
                                                <div class="title" title="含人工五百+材料五百 上门修"> <span class="choose-btn" clstag="shangpin|keycount|product|jingdongfuwu_44218971769">                                            <i class="sprite-checkbox"></i><span class="name">3年上门修</span><span class="price">￥25</span>                                                    </span> <a href="//item.jd.com/44218971769.html" target="_blank" class="detail-more" clstag="shangpin|keycount|product|jingdongfuwu_xiangqing">详情<s class="s-arrow">&gt;&gt;</s></a> </div>
                                            </li>
                                            <li data-sku="44217990328">
                                                <div class="title" title="含人工三百+材料三百 上门修"> <span class="choose-btn" clstag="shangpin|keycount|product|jingdongfuwu_44217990328">                                            <i class="sprite-checkbox"></i><span class="name">3年上门修</span><span class="price">￥12</span>                                                    </span> <a href="//item.jd.com/44217990328.html" target="_blank" class="detail-more" clstag="shangpin|keycount|product|jingdongfuwu_xiangqing">详情<s class="s-arrow">&gt;&gt;</s></a> </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="service-tips"> <a href="#none"><i class="sprite-question"></i></a>
                                    <div class="tips">
                                        <div class="sprite-arrow"></div>
                                        <div class="content">
                                            <dl>
                                                <dd>增值保障是指凡在京东购买商品或服务的消费者，在保障期间内遇到无论是正常使用中的问题还是意外事故，即可享受增值保障服务。保障内容包括：延长保修、只换不修、意外保护、服务保障。覆盖家电、手机数码、电脑办公、汽车用品、服饰家居等商品。</dd>
                                            </dl>
                                            <p>增值保障服务，只能提供增值税普通电子发票，如有疑问，请与<a href="//chat.jd.com/pop/chat?shopId=162403" target="_blank">在线客服</a>联系</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="choose-baitiao" class="li choose-baitiao" style="display:none"></div>
                    <div id="choose-jincai" class="li choose-jincai" style="display:none">
                        <div class="dt">企业金采</div>
                        <div class="dd">
                            <div class="jincai-list J-jincai-list">
                                <div class="item">
                                    <a href="#none">先采购，后付款</a>
                                </div>
                                <div class="bt-info-tips">
                                    <a class="J-bt-tips question icon fl" href="#none">　</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="summary-line"></div>
                    <div id="choose-btns" class="choose-btns clearfix">
                        <div class="choose-amount " clstag="shangpin|keycount|product|goumaishuliang_2">
                            <div class="wrap-input">
                                <input class="text buy-num" onkeyup="setAmount.modify('#buy-num');" id="buy-num" value="1" data-max="200">
                                <a class="btn-reduce disabled" href="#none" data-disabled="1">-</a>
                                <a class="btn-add" href="#none" data-disabled="1">+</a>
                            </div>
                        </div>
                        <div  id="InitCartUrl" class="btn-special1 btn-lg" target="_blank">加入购物车</div>
                    </div>
                    <div id="local-tips" class="summary-tips hide" style="display: none;">
                        <div class="dt">本地活动</div>
                        <div class="dd">
                            <ol class="tips-list clearfix"></ol>
                        </div>
                    </div>
                    <div id="summary-tips" class="summary-tips" clstag="shangpin|keycount|product|wenxintishi_2">
                        <div class="dt">温馨提示</div>
                        <div class="dd">
                            <ol class="tips-list clearfix">
                                <li class="local-txt">·支持7天无理由退货</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div id="track" class="track">
                <div class="extra-trigger">
                    <a href="#none"><i class="sprite-extra"></i>更多商品信息</a>
                </div>
                <div class="extra">
                    <div class="track-tit">
                        <h3>看了又看</h3>
                        <span></span>
                    </div>
                    <div class="track-con" data-rid="902029" style="position: relative; width: 150px; height: 564px; overflow: hidden;">
                        <ul clstag="shangpin|keycount|product|kanleyoukan_2" style="position: absolute; width: 150px; height: 2820px; top: 0px; left: 0px;">
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=61823261901$index=0$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=9631c1829b5d7b44d0f064b9a054d40b072ecf7f" data-push="1" style="float: left;">
                                <a target="_blank" title="2020流行窗帘遮光北欧简约卧室客厅飘窗网红成品高档大气美式轻奢 咖色 5.0米布帘一套/双开（适用于2.0米轨长2." href="//item.jd.com/61823261901.html"> <img height="150" width="150" alt="2020流行窗帘遮光北欧简约卧室客厅飘窗网红成品高档大气美式轻奢 咖色 5.0米布帘一套/双开（适用于2.0米轨长2." src="${baseUrl}/src/${pic[7].src}">
                                    <div>2020流行窗帘遮光北欧简约卧室客厅飘窗网红成品高档大气美式轻奢 咖色 5.0米布帘一套/双开（适用于2.0米轨长2.</div>
                                    <p class="J-p-61823261901">￥1062.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=61823222241$index=1$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=6f43c1d8a495bf82dd0e5233565d3e37613e08df" data-push="2" style="float: left;">
                                <a target="_blank" title="【成品套餐】新款欧式大气客厅窗帘双层豪华窗幔成品卧室定制纱帘 有凤来仪-黄 12个花位/4米布＋纱适合1.8－2.2的杆长" href="//item.jd.com/61823222241.html"> <img height="150" width="150" alt="【成品套餐】新款欧式大气客厅窗帘双层豪华窗幔成品卧室定制纱帘 有凤来仪-黄 12个花位/4米布＋纱适合1.8－2.2的杆长" src="${baseUrl}/src/${pic[8].src}">
                                    <div>【成品套餐】新款欧式大气客厅窗帘双层豪华窗幔成品卧室定制纱帘 有凤来仪-黄 12个花位/4米布＋纱适合1.8－2.2的杆长</div>
                                    <p class="J-p-61823222241">￥1780.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=60561648649$index=2$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=4106404331048da3c022a864bb9da4eed0a124b3" data-push="3" style="float: left;">
                                <a target="_blank" title="不锈钢手纸盒卫生间厕所纸巾盒免打孔卷纸筒抽纸厕纸盒防水置物架 150mm白色（免打孔）" href="//item.jd.com/60561648649.html"> <img height="150" width="150" alt="不锈钢手纸盒卫生间厕所纸巾盒免打孔卷纸筒抽纸厕纸盒防水置物架 150mm白色（免打孔）" src="${baseUrl}/src/${pic[9].src}">
                                    <div>不锈钢手纸盒卫生间厕所纸巾盒免打孔卷纸筒抽纸厕纸盒防水置物架 150mm白色（免打孔）</div>
                                    <p class="J-p-60561648649">￥114.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=61646884235$index=3$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=e65ff02cf27749683139f8a3ec2488d975ac6df9" data-push="4" style="float: left;">
                                <a target="_blank" title="大理石餐桌椅组合家用现代简约折叠方桌变圆桌北欧圆形可伸缩餐桌 1.2米餐桌【不带转盘】" href="//item.jd.com/61646884235.html"> <img height="150" width="150" alt="大理石餐桌椅组合家用现代简约折叠方桌变圆桌北欧圆形可伸缩餐桌 1.2米餐桌【不带转盘】" src="../img/xq21.jpg">
                                    <div>大理石餐桌椅组合家用现代简约折叠方桌变圆桌北欧圆形可伸缩餐桌 1.2米餐桌【不带转盘】</div>
                                    <p class="J-p-61646884235">￥5495.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=60687741488$index=4$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=99da28b752e14764de113662044ff339623fd297" data-push="5" style="float: left;">
                                <a target="_blank" title="雨衣雨裤套装男骑行电动摩托车防暴雨雨衣女单人加厚分体雨衣 黑色（双帽檐） M" href="//item.jd.com/60687741488.html"> <img height="150" width="150" alt="雨衣雨裤套装男骑行电动摩托车防暴雨雨衣女单人加厚分体雨衣 黑色（双帽檐） M" src="../img/xq22.jpg">
                                    <div>雨衣雨裤套装男骑行电动摩托车防暴雨雨衣女单人加厚分体雨衣 黑色（双帽檐） M</div>
                                    <p class="J-p-60687741488">￥268.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=62825953941$index=5$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=ebf0802257c2012b56e37e722559aa8b0af05ce6" data-push="6" style="float: left;">
                                <a target="_blank" title="金丝楠木小方凳矮凳椅子实木凳子写字凳换鞋凳家用洗脚小板凳 金丝楠小方凳28x28x26cm" href="//item.jd.com/62825953941.html"> <img height="150" width="150" alt="金丝楠木小方凳矮凳椅子实木凳子写字凳换鞋凳家用洗脚小板凳 金丝楠小方凳28x28x26cm" src="../img/xq23.jpg">
                                    <div>金丝楠木小方凳矮凳椅子实木凳子写字凳换鞋凳家用洗脚小板凳 金丝楠小方凳28x28x26cm</div>
                                    <p class="J-p-62825953941">￥1014.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=42042292668$index=6$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=3efb69898b42a11bc5f10f5618959efe0fbe9bb0" data-push="7" style="float: left;">
                                <a target="_blank" title="新款首发蒙娜丽莎新款十字绣十字绣线绣客厅竖版富贵吉祥孔雀简约满绣印花丝线简单 图片色 品质棉线中格/3股70X130厘米送工具免费补线" href="//item.jd.com/42042292668.html"> <img height="150" width="150" alt="新款首发蒙娜丽莎新款十字绣十字绣线绣客厅竖版富贵吉祥孔雀简约满绣印花丝线简单 图片色 品质棉线中格/3股70X130厘米送工具免费补线" src="../img/xq24.jpg">
                                    <div>新款首发蒙娜丽莎新款十字绣十字绣线绣客厅竖版富贵吉祥孔雀简约满绣印花丝线简单 图片色 品质棉线中格/3股70X130厘米送工具免费补线</div>
                                    <p class="J-p-42042292668">￥245.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=60300563016$index=7$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=2af291d8e102021750e7153af75149afbce7f874" data-push="8" style="float: left;">
                                <a target="_blank" title="2020新品保温水壶4升5l户外5000ml保温杯超大容量车载旅行热水瓶大号便携3 3.6L经典黑" href="//item.jd.com/60300563016.html"> <img height="150" width="150" alt="2020新品保温水壶4升5l户外5000ml保温杯超大容量车载旅行热水瓶大号便携3 3.6L经典黑" src="../img/xq25.jpg">
                                    <div>2020新品保温水壶4升5l户外5000ml保温杯超大容量车载旅行热水瓶大号便携3 3.6L经典黑</div>
                                    <p class="J-p-60300563016">￥364.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=61823554480$index=8$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=c5aef50cf876be319d1abf9cdba44c444cf93e07" data-push="9" style="float: left;">
                                <a target="_blank" title="客厅卧室窗帘成品遮光雪尼尔简约现代欧式地中海北欧新款风格定制 DF-蓝布（含帘头造型） 2米宽*2.7米高(一片)" href="//item.jd.com/61823554480.html"> <img height="150" width="150" alt="客厅卧室窗帘成品遮光雪尼尔简约现代欧式地中海北欧新款风格定制 DF-蓝布（含帘头造型） 2米宽*2.7米高(一片)" src="../img/xq26.jpg">
                                    <div>客厅卧室窗帘成品遮光雪尼尔简约现代欧式地中海北欧新款风格定制 DF-蓝布（含帘头造型） 2米宽*2.7米高(一片)</div>
                                    <p class="J-p-61823554480">￥505.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=60306211118$index=9$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=3af17adff7b840ae30fc1969dc345de0a299083" data-push="10" style="float: left;">
                                <a target="_blank" title="2020新品英国双层玻璃杯茶水分离泡茶杯保温杯男大容量便携过滤水杯 绅士黑（双层玻璃款）" href="//item.jd.com/60306211118.html"> <img height="150" width="150" alt="2020新品英国双层玻璃杯茶水分离泡茶杯保温杯男大容量便携过滤水杯 绅士黑（双层玻璃款）" src="../img/xq27.jpg">
                                    <div>2020新品英国双层玻璃杯茶水分离泡茶杯保温杯男大容量便携过滤水杯 绅士黑（双层玻璃款）</div>
                                    <p class="J-p-60306211118">￥388.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=60296021607$index=10$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=2e4ee33758b3332818d4be2c3ac22563fe7302d1" data-push="11" style="float: left;">
                                <a target="_blank" title="护童儿童学习桌椅套装可升降学生写字桌儿童课桌儿童学习书桌书架 普通版粉+矫正器" href="//item.jd.com/60296021607.html"> <img height="150" width="150" alt="护童儿童学习桌椅套装可升降学生写字桌儿童课桌儿童学习书桌书架 普通版粉+矫正器" src="../img/xq28.jpg">
                                    <div>护童儿童学习桌椅套装可升降学生写字桌儿童课桌儿童学习书桌书架 普通版粉+矫正器</div>
                                    <p class="J-p-60296021607">￥346.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=61619564276$index=11$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=178aa85d2f2d58799143785e7c6bad66326f9989" data-push="12" style="float: left;">
                                <a target="_blank" title="进门客厅玄关柜带鱼缸酒柜屏风隔断柜间厅柜双面鞋柜门厅装饰柜 522A# 组装" href="//item.jd.com/61619564276.html"> <img height="150" width="150" alt="进门客厅玄关柜带鱼缸酒柜屏风隔断柜间厅柜双面鞋柜门厅装饰柜 522A# 组装" src="../img/xq29.jpg">
                                    <div>进门客厅玄关柜带鱼缸酒柜屏风隔断柜间厅柜双面鞋柜门厅装饰柜 522A# 组装</div>
                                    <p class="J-p-61619564276">￥6726.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=61719628136$index=12$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=7d5ef51cedd2d7dd6f61a70c3b0d0608c8adaff8" data-push="13" style="float: left;">
                                <a target="_blank" title="北欧实木头层牛皮皮艺真皮沙发床沙发客厅整装沙发组合家具可折叠 一字型130cm-单位-普通款-1个腰枕 1.8米-2米" href="//item.jd.com/61719628136.html"> <img height="150" width="150" alt="北欧实木头层牛皮皮艺真皮沙发床沙发客厅整装沙发组合家具可折叠 一字型130cm-单位-普通款-1个腰枕 1.8米-2米" src="../img/xq30.jpg">
                                    <div>北欧实木头层牛皮皮艺真皮沙发床沙发客厅整装沙发组合家具可折叠 一字型130cm-单位-普通款-1个腰枕 1.8米-2米</div>
                                    <p class="J-p-61719628136">￥6702.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=61749115197$index=13$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=6b741e024d7b4ae495b71e2ab892997122c35695" data-push="14" style="float: left;">
                                <a target="_blank" title="九鱼图十字绣2020新款绣小件挂件客厅卧室线绣满绣简约现代简单绣 57X57厘米【丝线】满绣 3股线绣" href="//item.jd.com/61749115197.html"> <img height="150" width="150" alt="九鱼图十字绣2020新款绣小件挂件客厅卧室线绣满绣简约现代简单绣 57X57厘米【丝线】满绣 3股线绣" src="../img/xq31.jpg">
                                    <div>九鱼图十字绣2020新款绣小件挂件客厅卧室线绣满绣简约现代简单绣 57X57厘米【丝线】满绣 3股线绣</div>
                                    <p class="J-p-61749115197">￥220.00</p>
                                </a>
                            </li>
                            <li data-clk="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902029$src=rec$action=1$reqsig=8211d0477520f7e7460b8209d04e0c4f5a0a7dcd$enb=1$sku=61671923409$p=902029$pin=$uuid=2549545790$csku=66368626815$index=14$st=0$adcli=$expid=0$mexpid=$im=$rid=482474876051260042$ver=1$sig=420c7df14796d6d9bcd5f5069aad98fa7e2bbda6" data-push="15" style="float: left;">
                                <a target="_blank" title="越南实木筷子进口黄花梨贝壳筷子无漆无蜡防霉筷子家用高档10双装 V.TRAC （越南黄花梨筷）10双" href="//item.jd.com/66368626815.html"> <img height="150" width="150" alt="越南实木筷子进口黄花梨贝壳筷子无漆无蜡防霉筷子家用高档10双装 V.TRAC （越南黄花梨筷）10双" src="../img/xq32.jpg">
                                    <div>越南实木筷子进口黄花梨贝壳筷子无漆无蜡防霉筷子家用高档10双装 V.TRAC （越南黄花梨筷）10双</div>
                                    <p class="J-p-66368626815">￥330.00</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="track-more">
                        <a href="#none" class="J-prev sprite-up">上翻</a>
                        <a href="#none" class="J-next sprite-down">下翻</a>
                    </div>
                </div>
            </div>

                    `
                    $('.product-intro').html(str);
                }
            });

            $('.product-intro').on('click', '.btn-add', function() {
                if (addnum < num1) {
                    addnum++;
                }
                $('.buy-num').val(addnum);
                if (addnum > 1) {
                    $('.btn-reduce').removeClass('disabled');
                }
            })

            $('.product-intro').on('click', '.btn-reduce', function() {
                if (addnum > 1) {
                    addnum--;
                }
                $('.buy-num').val(addnum);
                if (addnum == 1) {
                    $('.btn-reduce').addClass('disabled');
                }
            });


            $('.product-intro').on('click', '.btn-lg', function() {
                $(this).css('position', 'relative');
                let aimX = $('#shopping-amount').offset().left;
                let aimY = $('#shopping-amount').offset().top;
                let shop = cookie.get('shop');
                let product = {
                    id: id,
                    num: addnum
                }
                if (shop) {
                    shop = JSON.parse(shop);
                    if (shop.some(elm => elm.id == id)) {
                        shop.forEach(elm => {
                            elm.id == id ? elm.num = addnum : null;
                        })
                    } else {
                        shop.push(product)
                    }
                } else {
                    shop = [];
                    shop.push(product);
                }
                cookie.set('shop', JSON.stringify(shop), 1);

                let _fly = document.createElement('i');
                $(_fly).addClass('ci-count');
                $(this).append($(_fly));
                $(_fly).css({
                    'position': 'absolute',
                    'left': '0px',
                    'top': '0px',
                    'width': '50px',
                    'height': '50px',
                    'backgroundColor': '#c81623',
                    'border-radius': '7px 7px 7px 0',
                    'fontSize': '5px',
                    'zIndex': 999,
                });
                let oldX = $(_fly).offset().left;
                let oldY = $(_fly).offset().top;
                aimX = aimX - oldX;
                aimY = aimY - oldY;
                let nowX = 0;
                let nowY = 0;
                let smallStep = 1.634;
                let _initSize = 120;
                let timer = setInterval(function() {
                    _initSize -= 0.6;
                    smallStep -= 0.02;
                    nowX += 4;
                    nowY -= (4 + smallStep);
                    if (nowY <= aimY && nowX >= aimX) {
                        $(_fly).remove('i');
                        $('.cw-icon .ci-count').html(shop.length);
                        clearInterval(timer);
                    }
                    if (nowX > aimX) {
                        nowX -= 4;
                    }
                    if (nowY < aimY) {
                        nowY += (4 + smallStep);
                    }
                    console.log($('#spec-img').attr('src'));
                    $(_fly).css({
                        'position': 'absolute',
                        'left': nowX,
                        'top': nowY - 20,
                        'width': _initSize,
                        'height': _initSize,
                        'backgroundColor': '#c81623',
                        'background-image': 'url(' + $('.img-hover img').attr('src') + ')',
                        'background-size': '100%',
                        'background-repeat': 'no-repeat',
                        'background-position': 'center',
                        'border-radius': '50%',
                        'fontSize': '5px',
                        'zIndex': 999,
                    });
                }, 1)
            })

            $('.product-intro').on('mousemove', '.main-img', function(evt) {
                let bigX = evt.pageX - $('.main-img').offset().left;
                let bigY = evt.pageY - $('.main-img').offset().top;
                let boxX = bigX - 118;
                let boxY = bigY - 118;
                if (boxX < 0) {
                    boxX = 0;
                }
                if (boxX > 113.75) {
                    boxX = 113.75;
                }
                if (boxY < 0) {
                    boxY = 0;
                }
                if (boxY > 113.75) {
                    boxY = 113.75;
                }
                $('.jqZoomPup').css({
                    left: boxX,
                    top: boxY
                });
                $('.zoomdiv>.bigimg').css({
                    left: -boxX * 2.5,
                    top: -boxY * 2.5
                })
            })
            $('.product-intro').on('mouseover', '.main-img', function() {
                $('.zoomdiv').css({
                    display: 'block',
                })
                $('.jqZoomPup').css({
                    'z-index': 1
                });
            })
            $('.product-intro').on('mouseout', '.main-img', function() {
                $('.zoomdiv').css({
                    display: 'none',
                })
                $('.jqZoomPup').css({
                    'z-index': -1
                });
            })
            $('.product-intro').on('mouseover', '#spec-list img', function() {
                $(this).parent().siblings().removeClass('img-hover');
                $(this).parent().addClass('img-hover');
                let _src = $(this).attr('data-url');
                let __src = $(this).attr('id');
                $(this).parents('.spec-list').siblings('#spec-n1').children('img').attr('src', _src);
                $(this).parents('.spec-list').siblings('.zoomdiv').children('img').attr('src', __src);
            })

            $('.product-intro').on('click', '.sprite-arrow-next', function() {
                $(this).parent().addClass('disabled');
                $(this).parent().siblings().removeClass('disabled');
                if (flag) {
                    flag = !flag;
                    let left = parseInt($('#spec-list .lh').css('left'));
                    left -= step;
                    $('#spec-list .lh').animate({
                        left: left
                    })
                }

            })
            $('.product-intro').on('click', '.sprite-arrow-prev', function() {
                $(this).parent().addClass('disabled');
                $(this).parent().siblings().removeClass('disabled');
                if (flag == false) {
                    flag = !flag;
                    let left = parseInt($('#spec-list .lh').css('left'));
                    left += step;
                    $('#spec-list .lh').animate({
                        left: left
                    })
                }

            })
        },
        buycar: function() {
            let shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                $('.cw-icon .ci-count').html(shop.length);
            }
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

            $('#shelper').on('click', '.qsx', function() {
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
        },
    }
})