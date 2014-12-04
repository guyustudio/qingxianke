var crypto = require('crypto');
/**
 * ajax统一路由
 * @param req.qurey.code 接口名称
 * 返回数据格式 {content:内容, stat:状态(success为1,其余为负数), msg:描述}

 状态码定义：
 1       success

 -10 ~ -100 全局通用错误
     -10至-19接口相关错误
         -10      接口未定义
         -11      未提供此接口

 -100 ~ -200 登陆模块
    -101     密码错误
 */
module.exports.handle = function(req, res) {
    var map = [];
    // 获取salt
    map['getSalt'] = function(req, res){
        global.db.exec(('select * from user where username="'+req.query.username+'"'), function(err, data){
            res.send(genSuccessRes(data[0].salt));
        });
    };

    // 登陆操作
    map['login'] = function(req, res){
        var username = req.body.username;
        var h2Client = req.body.h2;
        var nonce = req.body.nonce;
        global.db.exec(('select * from user where username="'+username+'"'), function(err, data){
            var h2Server = crypto.createHmac('md5', nonce).update(data[0].password).digest('hex');
            if(h2Client == h2Server){
                res.send(genSuccessRes('登陆成功'));
            } else{
                res.send(genFailRes({h2Client: h2Client, h2Server: h2Server}, -101, '密码错误'));
            }
        });
    };

    if(req.query.code){
        var action = map[req.query.code];
        if(action){
            action(req, res);
        } else{
            res.send(genFailRes(null, -11, '未提供此接口'));
        }
    } else{
        res.send(genFailRes(null, -10, '接口名未定义'));
    }
}

//封装成功的返回json
function genSuccessRes(data){
    return {content: data, stat: 1, msg: 'success'};
}

//封装失败的返回json
function genFailRes(data, stat, msg){
    return {content: data, stat: stat, msg: msg};
}