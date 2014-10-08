requirejs(['/config.js'], function(){
    requirejs(['underscore'], function(us){
        var odds = us.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
        console.log(odds);
    });
});