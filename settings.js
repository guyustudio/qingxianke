var settings = {};

//豆瓣OAuth2.0
settings.douban = {
    api_key: '0ce8ea407e9be02a26babec17bd3a07e',
    secret: 'e005d9f1bc0a249b'
};

//数据库相关配置
settings.dbOptions = {
    "connectionLimit": 10,
    "host" : "127.0.0.1",
    "database" : "qingxianke",
    "user" : "guyu",
    "password" : "test"
};

module.exports = settings;