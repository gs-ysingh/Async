/**
 * Created by YSingh on 16/01/17.
 */

//Uglier version of callback hell:
    setTimeout(function () {
        console.log("callback 1");
        setTimeout(function () {
            console.log("callback 2");
            setTimeout(function () {
                console.log("callback 3");
            }, 1000);
        }, 1000)
    }, 1000);

// A little clean version of call back:
var callBack3 = function () {
    console.log("callback 3");
};
var callBack2 = function () {
    console.log("callback 2");
    setTimeout(callBack3, 1000);
};
var callBack1 = function () {
    console.log("callback 1");
    setTimeout(callBack2, 1000);
};
setTimeout(callBack1, 1000);