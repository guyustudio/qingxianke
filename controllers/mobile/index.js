/**
 * 显示主页
 */
module.exports.showHomePage = function(req, res){
    res.render('mobile/index', { title: 'mobile' });
};