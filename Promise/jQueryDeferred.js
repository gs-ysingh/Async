/**
 * Created by YSingh on 16/01/17.
 */
var promise = wait();
promise.done(showMsg);

function wait() {
    var name = "Yogesh";
    var deferred = $.Deferred();
    setTimeout(function () {
        deferred.resolve(name);
    }, 1000);
    return deferred.promise();
}

function showMsg(data) {
    console.log("Promise resolved and call back is called");
    console.log(data);
}