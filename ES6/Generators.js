/**
 * Created by YSingh on 16/01/17.
 */

function request(firstName, country) {
    var lastName = "Singh"
    if(country) {
        setTimeout(() => {
            it.next(firstName + " " + country);
        }, 1000);
    }
    else {
        setTimeout(() => {
            it.next(firstName + " " + lastName);
        }, 1000);
    }
    // Nothing is returned in this case
}

function *main() {
    var result1 = yield request("Yogesh");
    console.log(result1);
    var result2 = yield request(result1, "India");
    console.log(result2);
}

var it = main();
it.next();
console.log("get it all started");