# NumberArray

An Typescript/Javascript class which contains and manipulates an array of numbers.  
It has properties that describe the numbers, such as `max`, `min`, `sum`, `average`,  
and `product`.

## Constructor
```ts
constructor(data? = []) // 'data' is assigned to this.data .
```

You can reset the array by accessing the class `.data` property:
```ts
this.data = [1,2,3,4];
```  

## Properties
<details>
<summary>view properties</summary>

```ts
data : number[]  // the actual array

length : number // length of this.data

max: number (read-only) // highest number in the array.

min: number (read-only) // lowest number in the array.

difference: number (read-only) // difference between max and min.

sum: number (read-only)

average: number (read-only)

product: number (read-only)

median: number (read-only)

areOrdered: boolean (read-only) // true if numbers are in ascending order.

isEmpty : boolean (read-only)

notEmpty : boolean (read-only)

copy : this (read-only)
    // a copy of the instance, containing an independent copy of this.data 
    // that can be manipulated separately.

className : string (read-only)
```
</details>


## Methods
<details>
<summary>view methods</summary>

```ts
allInRange(range: [min, max]): boolean
    // Example: this.data = [10,13,20,22,25]
    // this.allInRange([13, 20]); // --> false
    // this.allInRange([10, 25]); // --> true

order(): void
    // puts numbers in this.data in ascending order.

shuffle(): void
    // randomizes the order of numbers in this.data .

set(newArray): void
    // Changes value of this.data to newArray without breaking its memory reference.
    // So if there are copies of this.data, the copies will be updated as well.

append(values): this
    // attaches values to end of this.data.

prepend(values): this
    // attaches values to beginning of this.data.

moveByIndex(currentIndex, newIndex): this
    // moves an item, identified by currentIndex, to newIndex.
    // Both currentIndex and newIndex can be negative or positive.

forEach(iterationFunction): void
    // Behaves same as Array.forEach()
    // iterationFunction = function(currentValue, currentIndex?, entireArray?): any

asString(glue? = ', '): string
    // Does same thing as Array.join()
```
NOTICE:  For all the methods below, any parameter called `value` cannot be an object,   
and any parameter called `values` cannot contain an object.   
This does not include arrays. Arrays are OK, as long as they don't contain objects.
```ts
has(value): boolean
    // returns true if this.data contains `value`.

hasAll(values): boolean
    // returns true if this.data contains every value in `values`.

hasAny(values): boolean
    // returns true if this.data contains at least 1 value in `values`.

hasAdjacent(values): boolean
    // returns true if this.data contains exact sequence of `values`.
    // Example: if this.data is [10,1,2,3,11], then this.hasAdjacent([1,2,3]) 
    // returns true.

startsWith(values): boolean
    // returns true if this.data starts with exact sequence of `values`.
    // always returns false if `values` contains object.

endsWith(values): boolean
    // returns true if this.data ends with exact sequence of `values`.
    // always returns false if `values` contains object.

matches(values): boolean
    // returns true if this.data matches `values` exactly.
    
firstIndexOf(value): number
    // returns index of first instance of `value` found in this.data
    
lastIndexOf(value): number
    // returns index of last instance of `value` found in this.data
    
indexesOf(value): number[]
    // returns indexes of every instance of `value` found in this.data
```

For the next 3 methods:  
`testFunction` is a callback with same signature as callback passed to  
`Array.filter()` :  
`testFunction(item, index?, theArray?): boolean`  
If `item` passes a test, `testFunction` returns true.
```ts
allPass(testFunction): boolean
    // returns true if all items pass test.

anyPass(testFunction): boolean
    // returns true if at least 1 item passes.

indexesThatPass(testFunction): number[]
    // returns indexes of items that pass test.
``` 
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
```ts
protected   _createGetterAndOrSetterForEach(
                  propertyNames: string[],
                  configuration: IGetterSetterConfiguration
            ) : void
     /*********************
     Use this method when you have a bunch of properties that need getter and/or 
     setter functions that all do the same thing. You pass in an array of string 
     names of those properties, and the method attaches the same getter and/or 
     setter function to each property.
     IGetterSetterConfiguration is this object:
     {
         get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function,
             // get_setterFunction takes the property name as first argument and 
             // returns the setter function.  The setter function must take one 
             // parameter and return void.
     
         get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function
             // get_getterFunction takes the property name as first argument and 
             // returns the getter function.  The getter function must return something.
     }
     *********************/ 
   
   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _errorIfPropertyHasNoValue(
                property: string, // can contain dot-notation, i.e., 'property.subproperty'
                propertyNameInError? = ''
            ) : void
    // If value of this[property] is undefined or null, it triggers fatal error:
    // `The property "${propertyNameInError}" has no value.`
```
</details>


## Usage Examples
```ts
let numbers = new NumberArray([1,2,3,4,5,6,7,8,9,10]);
console.log(numbers.sum); // console: '55'
console.log(numbers.average); // console: '5.5'
console.log(numbers.median); // console: '5.5'
console.log(numbers.difference); // console: '9'
console.log(numbers.areOrdered); // console: 'true'
console.log(numbers.allInRange([100, 200])); // console: 'false'
console.log(numbers.endsWith([9, 10])); // console: 'true'
```

## Inheritance Chain

NumberArray<--[PublicArrayContent](https://github.com/writetome51/public-array-content#publicarraycontent)<--[PublicArrayContainer](https://github.com/writetome51/public-array-container#publicarraycontainer)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)

## Installation

You must have npm installed first. Then, in the command line:

    npm install @writetome51/number-array

## Loading
```ts
// if using TypeScript:
import { NumberArray } from '@writetome51/number-array';
// if using ES5 JavaScript:
var NumberArray = require('@writetome51/number-array').NumberArray;
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
