/**
 * 显示主页
 */
module.exports.showHomePage = function(req, res){
    var user = {nick:'布谷', avatar:'/images/avatar.jpg'};
    var goods = [
        {
            desc:'保暖纤维动物靠垫 / 熊猫',
            picture: 'http://img.muji.com.cn/img/item/4547315015610_400.jpg',
            price: 88,
            owner: {
                avatar: 'http://img3.douban.com/icon/u45714329-2.jpg',
                nick: '小西'
            }
        },
        {
            desc:'空气净化器 MJ‐AP1CN',
            picture: 'http://img.muji.com.cn/img/item/4547315820665_400.jpg',
            price: 3900,
            owner: {
                avatar: 'http://img3.douban.com/icon/u48502570-1.jpg',
                nick: '义山'
            }
        },
        {
            desc:'棉条纹面巾套装 / 蓝色 / 34×85cm / 2条装',
            picture: 'http://img.muji.com.cn/img/item/4548076262800_400.jpg',
            price: 60,
            owner: {
                avatar: 'http://img3.douban.com/icon/u54857695-78.jpg',
                nick: '呢呀么呢呢酱'
            }
        },
        {
            desc:'中针距羊毛羊绒V领开衫',
            picture: 'http://img.muji.com.cn/img/item/4549337529632_400.jpg',
            price: 998,
            owner: {
                avatar: 'http://img3.douban.com/icon/u50819946-4.jpg',
                nick: 'Agile Star'
            }
        },
        {
            desc:'Klättermusen 攀山鼠 防水冲锋衣系列 男式 Skidbladner Jacket 魔船 3层Cutan®弹力冲锋衣 1036M',
            picture: 'http://ec8.images-amazon.com/images/I/71J5HY71C%2BL._SL1500_.jpg',
            price: 6988,
            owner: {
                avatar: 'http://img3.douban.com/icon/u26774430-3.jpg',
                nick: '混合物'
            }
        },
        {
            desc:'知乎选修课系列(创业+金融)(套装共2册) 平装',
            picture: 'http://ec4.images-amazon.com/images/I/61Z9nEzdhDL.jpg',
            price: 60,
            owner: {
                avatar: 'http://img3.douban.com/icon/u27950070-13.jpg',
                nick: '王小猴'
            }
        },
        {
            desc:'亚马逊Kindle Paperwhite电子书阅读器',
            picture: 'http://g-ec4.images-amazon.com/images/G/28/kindle/Pinot_Final/DP/feature-goesbeyondabook_CN_final_alt._V367875601_.jpg',
            price: 899,
            owner: {
                avatar: 'http://img3.douban.com/icon/u55796915-17.jpg',
                nick: ' lunaYA'
            }
        },{
            desc:'Sennheiser 森海塞尔 CX 300-II White 动感低音入耳式耳塞 白色(3.5mm插头 经典入耳CX300升级版) ',
            picture: 'http://ec4.images-amazon.com/images/I/61xb-%2BEA%2B2L._SL1500_.jpg',
            price: 399,
            owner: {
                avatar: 'http://img3.douban.com/icon/u4775649-26.jpg',
                nick: '糯米'
            }
        },{
            desc:'戴尔 酷睿i5 双核 4G 500G 14英寸 独立显卡',
            picture: 'http://pic6.58cdn.com.cn/p1/big/n_t0e5640313a9e98002c96f.jpg',
            price: 1600,
            owner: {
                avatar: 'http://img3.douban.com/icon/u68176697-1.jpg',
                nick: '青稞'
            }
        },
        {
            desc:'一台伊莱克斯二门大冰箱转让，成色很新，地址：虹口区嘉兴路',
            picture: 'http://pic1.58cdn.com.cn/mobile/big/n_s12537451623584218164.jpg',
            price: 780,
            owner: {
                avatar: 'http://img3.douban.com/icon/u50963662-72.jpg',
                nick: 'ゆきYuki'
            }
        },{
            desc:'全新maxmara羽绒服,38码黄金码,白菜出',
            picture: 'http://pic8.58cdn.com.cn/p1/big/n_t0f4919ee90d138002fc91.jpg',
            price: 1600,
            owner: {
                avatar: 'http://img3.douban.com/icon/u4711344-93.jpg',
                nick: '二〇子'
            }
        },
        {
            desc:'多功能仰卧起坐板,哑铃凳,25kg哑铃出售',
            picture: 'http://pic8.58cdn.com.cn/p1/big/n_t0f47f79f0588b8002fc26.jpg',
            price: 150,
            owner: {
                avatar: 'http://img3.douban.com/icon/u63090415-23.jpg',
                nick: '荒原尖叫'
            }
        }
    ];
    res.render('pc/home', {user:user, goods: goods});
};