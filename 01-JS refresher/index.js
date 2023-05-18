// 2 ways to copy an object in js:

const obj1 = { key: 'value' };
const obj1_copy = JSON.parse(JSON.stringify(originalObject));

// or:
const obj2 = { key: 'value' };
const obj2_copy = { ...originalObject };




// array methods :

// map:   [input1, input2, input3, input4] >> [output1,output2,output3,output4]
const numbers = [1,2,3,4]
const numbers2 = numbers.map(num=>{
    return num*2;
})


// filter
// The filter() method creates a __shallow__ copy of a portion of a given array, items are filtered down to just the elements that pass the test inside the function
// example: [input1, input2, input3, input4] >> [output1, output4]   here the input2 and input3 were filtered out.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

const array1 = [1, 2, 3, 4];

// Reduce 
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue   // initialValue is optional
);

// The concat() method is used to merge two or more arrays
const array3 = ['a', 'b', 'c'];
const array4 = ['d', 'e', 'f'];
const array5 = array3.concat(array4);

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place