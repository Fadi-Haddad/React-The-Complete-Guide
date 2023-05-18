// 2 ways to copy an object in js:

const obj1 = { key: 'value' };
const obj1_copy = JSON.parse(JSON.stringify(originalObject));

// or:
const obj2 = { key: 'value' };
const obj2_copy = { ...originalObject };

