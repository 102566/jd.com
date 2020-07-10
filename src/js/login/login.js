let baseUrl = "http://localhost/jd.com";
define(['jquery', 'md5', 'cookie'], function($, md5, cookie) {
    "use strict";
    return {
        render: function() {
            $('#loginsubmit').on('click', function() {
                let login = cookie.get('login');
                console.log(login);
                if (login === 'true') {
                    alert('已登陆');
                    location.href = `${baseUrl}/src/html/index.html`;
                }
                let username = $('#loginname').val();
                let password = $('#nloginpwd').val();
                password = $.md5(password);
                console.log(password);
                $.ajax({
                    type: "post",
                    url: `${baseUrl}/interface/login.php`,
                    data: {
                        username: username,
                        password: password
                    },
                    dataType: "json",
                    success: function(res) {
                        if (res.has) {
                            alert('登陆成功');
                            location.href = `${baseUrl}/src/html/index.html`;
                        } else {
                            alert('账号密码错误,请重新输入');
                        }
                    }
                });
            })
        }
    }
})