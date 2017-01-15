/**
 * Created by YSingh on 16/01/17.
 */
'use strict';

function example() {
    var name = "Yogesh";
    console.log("Sync code started");
    var promise = new Promise(function (resolve, reject) {
        console.log("Promise started");
        setTimeout(function () {
            console.log("Async activity");
            resolve(name);
        }, 1000);
    });

    promise.then(function (val) {
        console.log("Value after promise is resolved: " + val);
    }).catch(function () {
        console.log("Log any error message");
    });
    console.log("Sync code terminated");
}
example();