var index = require('./pc/index');
var auth = require('./pc/auth');

var indexM = require('./mobile/index');

module.exports = function(app) {
    /**
     * 首页
     */
    app.get('/', function (req, res) {
        if(req.mobile){
            indexM.showHomePage(req, res);
        } else{
            index.showHomePage(req, res);
        }
    });

    /**
     * 注册登录模块
     */
    app.get('/auth/login', function(req, res){
        if(req.mobile){

        } else{
            auth.showLoginPage(req, res);
        }
    })

};

