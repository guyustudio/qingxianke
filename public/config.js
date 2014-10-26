requirejs.config({
    baseUrl: '/scripts',
    paths: {
        jquery: '/bower_components/jquery/dist/jquery',
        underscore: '/bower_components/underscore/underscore',
        bootstrap: '/bower_components/bootstrap/js/bootstrap'
    }
});

//全局加载通用模块
requirejs(['jquery', 'underscore', 'bootstrap']);