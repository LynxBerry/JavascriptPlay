function wrapper(){
    var j = 0;    
    return [funcFactory(), funcFactory];
    function funcFactory() {
        var i = 0;
        return function () {
            console.log(++i);
            console.log(++j);

        }

    }

}


//wrapper();
wrapper2 = wrapper();
var runner = wrapper2[0]
var runner2 = wrapper2[1]();

runner();
runner();
runner();
runner();


runner2();
runner2();
runner2();

