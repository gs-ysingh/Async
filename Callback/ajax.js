/**
 * Created by YSingh on 16/01/17.
 */

//A version of call back using ajax request:

$.get("test.php", function () {
   $.get("abc.php", function () {
       $.get("pqr.php", function (error, data) {
            if(error) throw error; // No one catch this error as there is no call stack present
       });
   });
});