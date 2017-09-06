var p = new Promise(function (resolve, reject){
    console.log("inside Promise");
    setTimeout(function () { resolve(45);}, 2000);

});


p.then(function fulfilled(data){
    console.log("Hello Rabbit" + data);
});