/**
 * Created by YSingh on 16/01/17.
 */

//How to create promise

var promise = $.ajax({
   "url": "test.php"
});
promise.done(function () {

});
promise.fail(function () {

});

//Multiple promise complete:

var promise1 = $.ajax({
    "url": "test.php"
});

var promise2 = $.ajax({
    "url": "test2.php"
});

$.when(promise1, promise2, function (data) {

});



