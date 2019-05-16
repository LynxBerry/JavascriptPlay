/* #1 Test Function Declaration Order */
function MyFuncFirst() {
    MyFuncSecond(); // refer to the function declared at later time.
}

function MyFuncSecond() {
    console.log("This is MyFuncSecond.");
}

MyFuncFirst();
/* End of #1 */


/* #2 Further test by recursive invocation */
function MyFuncThird(n) {
    if (n == 0) return;
    console.log(n + ":");
    MyFuncFourth(n - 1);

}

function MyFuncFourth(m) {
    if (m == 0) return;
    console.log(m + "#");
    MyFuncThird(m - 1);
}

MyFuncThird(20);
/* End of #2 */

/* #3 Test the depth of stack */
function testStack(n) {
    console.log(n);
    testStack(n+1);
}

// testStack(1); // around 11811

/* End of #3 */


/* #4 Scope hoist: Use variable to hold function*/

/*
var panda = function test1(){
    monkey(); 
}

panda(); // monkey == undefined at this time.

var monkey = function test2(){
    console.log("monkey");
}
*/

/* End of #4 */

/* #5 Function Order Test */

function test1() {
    test2();
}

test1();

function test2() {
    console.log("test2");
}

/* End of #5 */

/** Function Declaration & Function Expression **/

var a = 10;

// IIFE:= Immediate Invoked Function Expression
(function someFunc() {
    console.log(a);
})();
