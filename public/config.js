requirejs.config({
    baseUrl: '/scripts',
    paths: {
        jquery: '/bower_components/jquery/dist/jquery.min',
        underscore: '/bower_components/underscore/underscore'
    }
});

//全局加载通用模块
requirejs(['jquery', 'underscore']);