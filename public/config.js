requirejs.config({
    baseUrl: '/scripts',
    paths: {
        jquery: '/bower_components/jquery/dist/jquery',
        underscore: '/bower_components/underscore/underscore',
        bootstrap: '/bower_components/bootstrap/dist/js/bootstrap',
        md5: '/bower_components/blueimp-md5/js/md5.min'
    },
    shim:{
        bootstrap:{
            deps: ['jquery']
        }
    }
});

//全局加载通用模块
//requirejs(['jquery', 'underscore', 'bootstrap']);