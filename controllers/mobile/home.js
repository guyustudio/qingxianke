/**
 * 显示主页
 */
module.exports.showHomePage = function(req, res){
    res.render('mobile/home', { title: 'mobile' });
};