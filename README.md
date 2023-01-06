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
