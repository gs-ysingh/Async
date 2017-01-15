/**
 * Created by YSingh on 16/01/17.
 */


var promise = new Promise((resolve, reject) => {
    let name = "Yogesh";
    setTimeout(()=> {
        resolve(name);
    }, 1000);
});

promise.then(data => {
    console.log(data);
});
