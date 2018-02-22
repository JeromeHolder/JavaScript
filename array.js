//Basic Array
var z = ['hello ', 'world'];
console.log(z[0] + z[1])

//Pushing
var myArray = [];
myArray.push('Apples');
myArray.push('Oranges');
var length = myArray.push('Pears');

console.log(myArray);
console.log(length);

//Popping
var lastElement = myArray.pop();
console.log(lastElement);
console.log(myArray);

//Splicing
myArray.splice(1, 0, 'Cherries', 'Kiwis');
console.log(myArray);