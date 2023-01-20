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

## lecture 29 Sets & Maps in ES5

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

## lecture 30 Sets ES6

so in ES6 we can create a set with a `new` keyword as `let mySet = new Set()`. and then we can add items to it using `.add()` with it as below.

```
let mySet = new Set();
mySet.add("Hello");
mySet.add(1);
```

then we can check the size of it using `.size`. as below

```
let mySet = new Set();
mySet.add("Hello");
mySet.add(1);
console.log(mySet.size)  // 2 as two items
```

also in case of objects it will not convert objects type to strings as previously. so a new item will be added for each object. so each object will be unique

```
let mySet = new Set();
let obj1 = {}
let obj2 = {}

mySet.add("Hello");
mySet.add(1);
mySet.add(obj1);
mySet.add(obj2);

console.log(mySet.size)  // 4 as four items added
```

we can initialize Sets with arrays while defining the sets as below

```
let newSet = new Set([1,2,2,3,3,3,4,4])
console.log(newSet.size) // 4 because four unique items
```

we can do chaining on `add()` methods on Sets

```
let chainSet = new Set().add("hello").add("World")
console.log(chainSet.size) // 2
```

if we want to check the existence of a value in a set we use `.has()` method

```
let newSet = new Set([1,2,2,3,3,3,4,4])
console.log(newSet.has(2)) // true
console.log(newSet.has(5)) // false
```

and to delete a value we use `.delete()`

```
console.log(newSet.delete(1)) // 3 because one item is now deleted
```

## lecture 31 WeakSets

The sets we did in previous lecture are in a why strong sets. because it store reference of the objects. a WeakSet is pretty much the same the only of it is that we can avoid memory leaks.

with normal sets what we can have is.

```
let mySet = new Set()
let key = {}
mySet.add(key)
console.log(mySet.size)
key = null
console.log(mySet.size)
key = [...mySet][0]
```

with weak sets

```
let set = new WeakSet()
let key = {}
set.add(key)
console.log(set.has(key)) // true
key = null // we can no more further check even the reference is removed. we have to put our faith on Javascript engine
```

## lecture 32 Maps

in ES6 Maps is an ordered list of key value pairs. in Maps both the key and value can be of any type. unlike ES5 where key has to be ony a string.

to create a Map we have to new it.

```
let myMap = new Map();
```

to add values we use `.set()`

```
let myMap = new Map();
myMap.set("fname", "chandler")
myMap.set("age", 30)
```

and to access the values we use `.get()` on the key

```
let myMap = new Map();
myMap.set("fname", "chandler")
myMap.set("age", 30)
console.log(myMap.get("fname")) // chandler
```

we can use objects as keys in Maps

```
let myMap = new Map();
myMap.set("fname", "chandler")
myMap.set("age", 30)

let ob1 = {}
let ob2 = {}

myMap.set(ob1, 10)
myMap.set(ob2, 50)

console.log(myMap.get(ob1)) // 10
```

to check the key,value pair numbers we can use `.size`

```
console.log(myMap.size) // 4
```

we can also check if a key is present in a Map.

```
console.log(myMap.has("fname")) // true
```

we can also delete a key value pair using its key

```
myMap.delete("fname")
console.log(myMap.has("fname")) // false because now deleted
console.log(myMap.size) // 3 size now reduced to 3
```

if we use `.clear()` all the key value pairs will be deleted

```
myMap.clear()
console.log(myMap.has("fname")) // false
console.log(myMap.size) // 0
```

## lecture 33 Iterating over Maps

Scratch js was use for this lecture. which I was not able to install.

we can use arrays to initialize a Map.

```
let myMap = new Map([
  ["fname", "Aamir"],
  ["lname", "Muhammad"]
])
```

we can iterate over the Map using `for of` loop over `myMap.keys()` and `myMap.values()` to access the keys and values

```
let myMap = new Map([
  ["fname", "Aamir"],
  ["lname", "Muhammad"]
])

for (let key of myMap.keys()){
  console.log(key)
}

for (let value of myMap.values()){
  console.log(value)
}
```

we can also loop over the `myMap.entries()`

```
let myMap = new Map([
  ["fname", "Aamir"],
  ["lname", "Muhammad"]
])

for (let entry of myMap.entries()){
  console.log(`${entry[0]} -> ${entry[1]}`)
}
```

also we can destructure the entries

```
let myMap = new Map([
  ["fname", "Aamir"],
  ["lname", "Muhammad"]
])

for (let [key,value] of myMap.entries()){
  console.log(`${key} -> ${value}`)
}
```

## lecture 34 forEach

first we discuss forEach on a simple array which was there in ES5.

```
let myArray = [2,4,6,8]
myArray.forEach(arrayFunction);

function arrayFunction(element, index, array){
  console.log(`arr[${index}] = ${element}`)
  // arr[0] = 2
  // arr[1] = 4
  // arr[2] = 6
  // arr[3] = 8
  console.log(myArray === array) // true
}
```

forEach on Maps introduced in ES6. in mapFunction `value` will be first than `key`

```
  // forEach on Maps
  let myMap = new Map([
    ['fname', 'Aamir'],
    ['lname', 'Muhammad'],
  ]);
  myMap.forEach(mapFunction);

  function mapFunction(value, key, map) {
    console.log(`${key} -> ${value}`);
    // fname -> Aamir
    // lname -> Muhammad
    // true
    console.log(myMap === map); // true
  }
```

forEach on sets is also introduced in ES6. but the `key` and `value` here is the same thing

```
  // forEach on Sets
  let mySet = new Set([2, 'aa', 7, 9]);
  mySet.forEach(setFunction);

  function setFunction(value, key, set) {
    console.log(`${key} -> ${value}`);
    // 2 -> 2
    // aa -> aa
    // 7 -> 7
    console.log(mySet === set); // true
  }
```

## lecture 35 WeakMaps

In ES6 WeakMaps do exist. we can set a value using an object also and get that value. and when object is assigned a null value we can no more access the value.

```
  /* lecture 35 WeakMaps */
  let myMap = new WeakMap();
  let ob1 = {};
  myMap.set(ob1, 'Hello World');
  console.log(myMap.get(ob1)); // Hello World
  ob1 = null // no more access possible
```
