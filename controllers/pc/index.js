/**
 * 显示主页
 */
module.exports.showHomePage = function(req, res){
    res.render('pc/index', { title: 'PC', username: 'Jim'});
};