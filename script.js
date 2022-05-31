import cloneDeep from 'lodash-es';

const objects = [{ 'a': 1 }, { 'b': 2 }];

const deep = cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false