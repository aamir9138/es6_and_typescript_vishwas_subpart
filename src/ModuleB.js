/* lecture 26 Name Exports */

// // exporting variable
// export let fname = 'Chandler';
// export let lname = 'Bing';

// // export many variable as a single object
// let fname = 'Chandler';
// let lname = 'Bing';
// let age = 28;
// let address = 'pakistan';

// export { fname, lname, age, address };

// // imports get hoisted
// let fname = 'Chandler';
// let lname = 'Bing';
// let age = 28;
// let address = 'pakistan';
// console.log('Module B Log');
// export { fname, lname, age, address };

// const ModuleB = () => {
//   return <div>ModuleB</div>;
// };

// export default ModuleB;

// exports as object can be change at the import side
let fname = 'Chandler';
let lname = 'Bing';
let age = 28;
let address = 'pakistan';
let obj = {
  name: 'aamir',
};
console.log('Module B Log');
export { fname, lname, age, address, obj };

const ModuleB = () => {
  return <div>ModuleB</div>;
};

export default ModuleB;
