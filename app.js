var age = 20;
var pi = 3.1416;
var date = new Date();
var computeArea = function (l,w) {
        return l*w;
}

var name = "Margarita Niluag";

console.log('Age: ' + age);
console.log('Pi: ' + pi.toFixed(2));
console.log("Date and Time: " + date);
console.log("My Name: " + name);
console.log("Compute Area: " + computeArea(10,60));

var x = 1;
var y = null;
var waladiha = undefined;
    
    if(x)
        console.log('x is true');
    if(!y)
        console.log('y is not true');
    if(!waladiha)
        console.log('wala diha is undefine');
        
// ================ JSON Javascript Object Notation;

var jsonObject = {
      name: 'Margarita',
      lastname: 'Niluag',
      address: 'Tagbilaran'
};

console.log(jsonObject.name);
console.log(jsonObject.lastname);
console.log(jsonObject.address);
console.log(jsonObject);