function *fooBar(x, y) {
    var test = yield x + y; // "helloWorld" is the evaluation of the whole yield expression.
    console.log(test);
}

var it = fooBar(5, 3);
console.log(it.next(10)); // 10 will be thrown away {value: 8, done: false}
console.log(it.next("HelloWorld")); // {value: undefined, done:true}

console.log("-----Separator Line------")
function *counterGen() {
    var i = 0;
    while (true) {
        yield ++i;
    }
}

var counter = counterGen();

for (let i = 0; i < 15 ; i++) {
    console.log(counter.next());
}


function *someGen() {
    var i = 0
    while (true) {
        yield asyncFunc(++i);
        console.log("logic continues");
    }
}

function asyncFunc(n) {
    console.log("I am in async.");
    setTimeout(function (){ 
        console.log("rabit");
        it2.next();
    },6000);
    return n*10;
}

var it2 = someGen();

console.log(it2.next());

console.log("place holder runner");