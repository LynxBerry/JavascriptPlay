// Does javascript have two dimension array?
var a = [2, 3, 4, 5, 6];
console.log(a.length);

a[8] = 89;
console.log(a.length);
a.push("-1");
console.log(a.length);


delete a[2];
console.log(a);
// i can never catch up with a.length
// because a.length increases in each loop
// for(var i = 0; i < a.length; i++) {
//     console.log(a[i]);
//    a.push("xx");
//}