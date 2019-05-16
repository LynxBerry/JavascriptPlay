var y = "a"


function outside() {
    var x = 0;
    return function inner() {
        console.log(++x);
        y = y + "b";
        console.log(y);

    }
}


var runner = outside();

runner();
runner();
runner();

var runner2 = outside();
runner2();
runner2();
runner2();

function outsideBig(){
    var y = "c";
    return function outside() {
        var x = 0;
        return function inner() {
            console.log(++x);
            y = y + "b";
            console.log(y);
    
        }
    }

}

console.log("-----");

var runner3 = outsideBig()();
var runner4 = outsideBig()();
runner3();
runner3();

runner4();
runner4();

var z = [];
function wrapper() {
    var w1 = "w1";
    wrapper2();
    function wrapper2() {
        var w2 = "w2"
        wrapper3();
        function wrapper3() {
            var w3 = "w3"
            z.push(function() {
                w1 = w1 + "x";
                w2 = w2 + "x";
                w3 = w3 + "x";
                console.log(w1 + w2 + w3);
            })
            z.push(function() {
                w1 = w1 + "x";
                w2 = w2 + "x";
                w3 = w3 + "x";
                console.log(w1 + w2 + w3);
            })
        }
    }
}

wrapper();
//wrapper();

z[0]();
z[1]();