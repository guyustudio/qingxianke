requirejs(['/config.js'], function(){
    requirejs(['jquery', 'md5'], function($, md5){
        $('#login').on('click', function(){
            var username = $('#username').val().trim();
            var password = $('#password').val().trim();
            $.get('/api?code=getSalt&username='+username, function(data){
                // 密码和盐第一次加密生成h1,  HMAC-MD5 HEX编码（16进制）
                var h1 = md5(password, data.content);
                var nonce = new Date().getTime();
                // h1和时间戳第二次加密生成h2
                var h2 = md5(h1, nonce);
                $.post('/api?code=login',{username: username, h2: h2, nonce: nonce}, function(data){
                    if(data.stat == 1){
                        window.location.href = '/';
                    }
                })
            })
        })
    })
});