//1.concat-Merges two or more arrays into one
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log('concat:', arr3);

//2.every-Checks if every element in an array passes a test
let isBelowThreshold = arr1.every(value => value < 4);
console.log('every:', isBelowThreshold);

//3.fill-Fills all elements in an array with a static value
let filledArray = arr1.fill(0, 1, 3);
console.log('fill:', filledArray);
//4.find-Returns the value of the first element that satisfies the provided testing function
let found = arr1.find(value => value > 1);
console.log('find:', found);

//5.findIndex-Returns the index of the first element that satisfies the provided testing function
let foundIndex = arr1.findIndex(value => value > 1);
console.log('findIndex:', foundIndex);

//6.flat-Flattens a nested array
let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(2);
console.log('flat:', flatArray); 

//7.includes-Determines whether an array contains a certain element
let includesValue = arr1.includes(2);
console.log('includes:', includesValue);

//8.indexOf-Returns the first index at which a given element can be found
let indexOfValue = arr1.indexOf(0);
console.log('indexOf:', indexOfValue); 

//9.join-Joins all elements of an array into a string
let joinedString = arr1.join('-');
console.log('join:', joinedString);

//10.lastIndexOf-Returns the last index at which a given element can be found
let lastIndexOfValue = arr1.lastIndexOf(0);
console.log('lastIndexOf:', lastIndexOfValue);

//11. pop-Removes the last element from an array and returns that element
let lastElement = arr1.pop();
console.log('pop:', lastElement, arr1);

//12 push-Adds one or more elements to the end of an array and returns the new length of the array
let newLength = arr1.push(3);
console.log('push:', newLength, arr1); 

//13 reverse-Reverses the order of the elements in an array
let reversedArray = arr1.reverse();
console.log('reverse:', reversedArray); 

//14 unshift-Adds one or more elements to the beginning of an array and returns the new length of the array
newLength = arr1.unshift(4, 5);
console.log('unshift:', newLength, arr1); 

//15 shift-Removes the first element from an array and returns that element
let firstElement = arr1.shift();
console.log('shift:', firstElement, arr1); 

//16 slice-Returns a shallow copy of a portion of an array into a new array object
let slicedArray = arr1.slice(1, 3);
console.log('slice:', slicedArray);

//17 some-Tests whether at least one element in the array passes the test implemented by the provided function
let someValue = arr1.some(value => value > 2);
console.log('some:', someValue); 

//18 sort-Sorts the elements of an array in place and returns the sorted array
let unsortedArray = [3, 1, 4, 1, 5, 9];
let sortedArray = unsortedArray.sort((a, b) => a - b);
console.log('sort:', sortedArray);

//19 splice-Changes the contents of an array by removing or replacing existing elements and/or adding new elements
let splicedArray = arr1.splice(1, 1, 2, 3);
console.log('splice:', splicedArray, arr1); 

//20 toString-Returns a string representing the specified array and its elements
let arrayString = arr1.toString();
console.log('toString:', arrayString); 

//21 filter-Creates a new array with all elements that pass the test implemented by the provided function
let filteredArray = arr1.filter(value => value > 2);
console.log('filter:', filteredArray); 

//22 reduce-Executes a reducer function on each element of the array, resulting in a single output value
let sum = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('reduce:', sum);

//23 map-Creates a new array populated with the results of calling a provided function on every element in the calling array
let mappedArray = arr1.map(value => value * 2);
console.log('map:', mappedArray); 

//24 forEach-Executes a provided function once for each array element
console.log('forEach:');
arr1.forEach(value => console.log(value));
