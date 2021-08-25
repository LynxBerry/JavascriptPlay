
var p = new Promise(function(resolve, reject){
    //throw "123";

    setTimeout(function(){
        //throw "254";
        resolve(72);
    },1000)
    //resolve(45);
    
    //reject("helloworld");
});



p.then(function fulfill(data){
    console.log("rabit1" + data);
},function reject(err){
    throw err;
    console.log("rabit2" + err);

}).catch(function handle(err){
    console.log("rabit3" + err);
    var p = new Promise(function (resolve, reject) {
        console.log("inside Promise");
        setTimeout(function () { resolve(45);}, 2000);
    });
});


p.then(function fulfilled(data) {
    console.log("Hello Rabbit" + data);
});