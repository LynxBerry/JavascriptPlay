var testObj = {
    title: "Star Wars",
    year: "1983",
    fullName: function test() { return this.title + this.year}
}

console.log(testObj);
console.log(testObj.fullName());

var testObj2 = {
    title: "batman",
    year: "1997",
    __init: function __init() {
        this.fullName = this.title + this.year;
        return this;
    }
}.__init();

console.log(testObj2);