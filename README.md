## lecture 26 Named Exports

### export a variable

```
export let fname = 'Chandler';
export let lname = 'Bing';
```

### import a variable

```
import { fname, lname } from './ModuleB';
console.log(`${fname} ${lname}`);
```

### export alot of variables

```
// export many variable as a single object
let fname = 'Chandler';
let lname = 'Bing';
let age = 28;
let address = 'pakistan';

export { fname, lname, age, address };
```

### import alot of variables

```
import { fname, lname, age, address } from './ModuleB';
console.log(`${fname} ${lname} ${age} ${address}`);
```

### providing an alias at the import

use `as` keyword for aliases

```
// Providing alias use "as" keyword
import { fname as f, lname as l, age, address } from './ModuleB';
console.log(`${f} ${l} ${age} ${address}`);
```

### imports get hoisted in Modules

```
// imports get hoisted
console.log('Module A log 1');
import { fname as f, lname as l, age, address } from './ModuleB';
console.log('Module A log 2');
console.log(`${f} ${l} ${age} ${address}`);
```

This will give error `Import in body of module; reorder to top`

### imports cannot be changed except objects

```
// imports cannot be change except the objects
import { fname, lname, age, address, obj } from './ModuleB';
// let fname = 'idrees'; // not possible
obj.name = 'munir'; // this is possible as it is object
console.log(`${fname} ${lname} ${age} ${address} ${obj.name}`);
```

```
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
```

## lecture 27 Default Exports

### default export syntax

if we have one variable we can export it as `default`

```
/* lecture 27 Default Export */
let fname = "Aamir"
export default fname
```

### default import

1. so if we have default export and we want to import it. we don't need curly braces for defaults. also we can change the name of the imports. it is not necessary to be the same as in case of `Named Exports`

```
/* lecture 27 Default Exports */
// we can change name of default exports i.e here from fname -> firstName
import firstName from './ModuleB';
console.log(`${firstName}`);
```

2. we can alias the default imports also

```
// aliasing default imports
import { default as f } from './ModuleB';
console.log(`${f}`);
```

## lecture 28 Exporting Functions and Classes

### exporting functions

same as variables we can export functions also in ES6

```
/* lecture 28 Exporting Functions and Classes */
export function greet(message) {
  console.log(message);
}
```

import the function

```
/* lecture 28 Exporting Functions and Classes */
// import greet function from ModuleB
import { greet } from './ModuleB';
// invoke greet function with a message
greet('Hello world');
```

### exporting classes

same as variables and function add `export` keyword with class to export it

```
export class GreetMessage {
  constructor() {
    console.log('constructor');
  }
  greet() {
    console.log('Greet method in class');
  }
}
```

import is also the same as function

```
// import GreetMessage class
import { greet, GreetMessage } from './ModuleB';
greet('Hello world');
// instantiate GreetMessage class
let greetMessage = new GreetMessage();
// call method of the class
greetMessage.greet();
```

## lecture 29 Sets & Maps

### Set

a set is nothing but a list of values which are unique. the list cannot contain any duplicates. if ES5 we would do it like this

```
let mySet = Object.create(null)
mySet.id = true;
if(mySet.id){
  console.log("id exists")
}
```

if we use `mySet.id = 1` it will give us `id exists` but if we use `mySet.id = 0` it will not console anything. but zero can be an id. which means it is not correct implementation
so this was very confusing in ES5

### Map

a Map is nothing more than a collection of key value pair.so in ES5 we would do something like below

```
let myMap = Object.create(null);
myMap.name = "Chandler";
let val = myMap.name;
console.log(val);
```

this is fine if we have something like this.

```
myMap[100] = "Hello"
console.log(myMap["100"])
```

so if you notice if we have to console log `myMap[100]` the value 100 must be written in a string. why because Object properties can only be strings. so when we pass a number it will be coerced as a string. so the number 100 and string "100" both refers to the same property so this can be a huge problem.

### using objects as keys

let say we have 2 objects and pass those objects as properties like below

```
let ob1 = {}
let ob2 = {}
myMap[ob1] = "World"

console.log(myMap[ob1])  // World
console.log(myMap[ob2])  // World

console.log(ob1.toString()) // [Object Object]
console.log(ob2.toString()) // [Object Object]
```

in the above both will give us output as `World` which is strange this is because objects are converted to string as `[Object Object]` which is the same for both.
so as we can see we are surely missing a data structure for mapping values in ES5. so lets see what is changed in ES6
