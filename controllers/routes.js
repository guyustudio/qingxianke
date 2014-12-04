var crypto = require('crypto');

var api = require('./api')
var home = require('./pc/home');
var auth = require('./pc/auth');

var homeM = require('./mobile/home');

module.exports = function(app) {
    /**
     * 首页
     */
    app.get('/', function (req, res) {
        if(req.mobile){
            homeM.showHomePage(req, res);
        } else{
            home.showHomePage(req, res);
        }
    });

    /**
     * 注册登录模块
     */
    app.get('/auth/login', function (req, res){
        if(req.mobile){

        } else{
            auth.showLoginPage(req, res);
        }
    });

    /**
     * ajax统一路由
     */
    app.all('/api', function (req, res){
        api.handle(req, res);
    })

};

