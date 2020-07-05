let baseUrl = "http://localhost/jd.com";
define(['jquery', 'md5'], function($, md5) {
    "use strict";
    return {
        render: function() {
            let pwsreg = /.{6,16}/;
            let phonereg = /^1[35789]\d{9}$/;
            $('#form-account').on('input', function() {
                let username = this.value;
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/verify.php`,
                    data: {
                        username: username,
                    },
                    dataType: "json",
                    success: function(res) {
                        if (res.msg === "用户名已存在") {
                            $('#form-account').siblings('span').css('color', 'red');
                        } else {
                            $('#form-account').siblings('span').css('color', 'green');
                        }
                        $('#form-account').siblings('span').html(res.msg);
                    }
                });
            })
            $('#form-pwd').on('input', function() {
                let flag = pwsreg.test(this.value);
                if (flag) {
                    $('#form-pwd').siblings('span').html('可以使用');
                    $('#form-pwd').siblings('span').css('color', 'green');
                } else {
                    $('#form-pwd').siblings('span').html('不符合规范');
                    $('#form-pwd').siblings('span').css('color', 'red');
                }
                if (this.value == $('#form-equalTopwd').val()) {
                    $('#form-equalTopwd').siblings('span').html('通过');
                    $('#form-equalTopwd').siblings('span').css('color', 'green');
                } else {
                    $('#form-equalTopwd').siblings('span').html('密码不一致');
                    $('#form-equalTopwd').siblings('span').css('color', 'red');
                }
            })
            $('#form-equalTopwd').on('input', function() {
                if (this.value == $('#form-pwd').val()) {
                    $('#form-equalTopwd').siblings('span').html('通过');
                    $('#form-equalTopwd').siblings('span').css('color', 'green');
                } else {
                    $('#form-equalTopwd').siblings('span').html('密码不一致');
                    $('#form-equalTopwd').siblings('span').css('color', 'red');
                }
            })
            $('#form-phone').on('input', function() {
                let flag = phonereg.test(this.value);
                if (flag) {
                    $('#form-phone').siblings('span').html('可以使用');
                    $('#form-phone').siblings('span').css('color', 'green');
                } else {
                    $('#form-phone').siblings('span').html('格式不符合规范');
                    $('#form-phone').siblings('span').css('color', 'red');
                }
            })
            $('#form-sex').on('input', function() {
                if (this.value == "男" | this.value == "女") {
                    $('#form-sex').siblings('span').html('通过');
                    $('#form-sex').siblings('span').css('color', 'green');
                } else {
                    $('#form-sex').siblings('span').html('are u sure?');
                    $('#form-sex').siblings('span').css('color', 'red');
                }
            })

            $('#form-register').on('click', function() {
                let username = $('#form-account').val();
                let password = $('#form-pwd').val();
                password = $.md5(password);
                let phone = $('#form-phone').val();
                let sex = $('#form-sex').val();
                let arr = Array.from($('#step2-wrap span'));
                console.log(arr);
                let aimFlag = 0;
                arr.forEach(elm => {
                    if ($(elm).css('color') == 'rgb(0, 128, 0)') {
                        aimFlag++;
                    }
                })
                if (aimFlag == 5) {
                    $.ajax({
                        type: "get",
                        url: `${baseUrl}/interface/setup.php`,
                        data: {
                            username: username,
                            password: password,
                            phone: phone,
                            sex: sex
                        },
                        dataType: "json",
                        success: function(res) {
                            if (res.has) {
                                alert('注册成功');
                                location.href = `${baseUrl}/src/html/login.html`;
                            } else {
                                alert('注册失败,请重新注册');
                                location.reload();
                            }
                        }
                    });
                } else {
                    alert('看看红色的字，我的哥');
                }
            })
        }
    }
})