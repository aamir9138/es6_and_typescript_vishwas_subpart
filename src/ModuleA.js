/* lecture 26 Named Exports */
// import { fname, lname, age, address } from './ModuleB';
// console.log(`${fname} ${lname} ${age} ${address}`);

// // Providing alias use "as" keyword
// import { fname as f, lname as l, age, address } from './ModuleB';
// console.log(`${f} ${l} ${age} ${address}`);

// // imports get hoisted
// console.log('Module A log 1');
// import { fname as f, lname as l, age, address } from './ModuleB';
// console.log('Module A log 2');
// console.log(`${f} ${l} ${age} ${address}`);

// imports cannot be change except the objects
import { fname, lname, age, address, obj } from './ModuleB';
// let fname = 'idrees'; // not possible
obj.name = 'munir'; // this is possible as it is object
console.log(`${fname} ${lname} ${age} ${address} ${obj.name}`);

const ModuleA = () => {
  return <div>ModuleA</div>;
};
export default ModuleA;