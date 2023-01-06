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
