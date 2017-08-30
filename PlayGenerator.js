function *fooBar(x, y) {
    var test = yield x + y; // "helloWorld" is the evaluation of the whole yield expression.
    console.log(test);
}

var it = fooBar(5, 3);
var res = it.next(10); // 10 will be thrown away {value: 8, done: false}
res = it.next("HelloWorld"); // {value: undefined, done:true}
console.log("Hello Panda");
