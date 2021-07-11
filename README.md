# ako-prototypes
###### Some Useful Prototypes For Every JS lover


## Array Prototypes
- **distinct**: Distincs Base Array
 - param `Function` **func**
 - returns `Array`
 ```javascript
 /* Normal Array */
 var arr = [1,2,2,2,3,4,5];
 arr.distinct(); // [1,2,3,4,5]
 
 /* Array of Objects */
 var arr = [{a:1,b:1}, {a:2,b:2}, {a:1,b:3}];
 arr.distinct(x => x.a) // [{a:1,b:1}, {a:2,b:2}]
 ```
- **shuffle**: Shuffle Order Base Array
 - returns `Array`
 ```javascript
 var arr = [0,1,2,3,4,5,6,7,8,9];
 arr.shuffle(); // [1,3,5,2,0,6,4,7,9,8]
 arr.shuffle(); // [9,2,6,3,0,8,1,5,7,4]
 ```
- **pickRandom**: Takes One Of Elements In Base Array By Random
 - returns `* | null`
 ```javascript
 var arr = [0,1,2,3,4,5,6,7,8,9];
 arr.pickRandom(); // 3
 arr.pickRandom(); // 8
 ``` 
- **takeRandom**: Randomly Takes One Or More Elements From Base Array
 - param `Number` **count** How Many Elements Should Be Taken?
 - returns `Array`
 ```javascript
 var arr = [0,1,2,3,4,5,6,7,8,9];
 arr.takeRandom(); // [3]
 arr.takeRandom(3); // [5,7,9]
 ``` 
- **clean**: Clears All Null And Undefined Values (Keeping Boolean False Values)
 - returns `Array`
 ```javascript
 var arr = [1,false,,,null,,"test"];
 arr.clean(); // [1,false,"test"]
 ``` 
- **groupBy**: Group Base Array by Fuction Declaring Property
 - param `Function|null` **func**
 - returns `Object`
 ```javascript
 var arr = [
  {a:"A",b:1},
  {a:"B",b:1},
  {a:"B",b:2},
  {a:"A",b:2},
  {a:"C",b:1}
 ];
 arr.groupBy(x => x.a); /*
  {
   A: [{a:"A",b:1}, {a:"A",b:2}],
   B: [{a:"B",b:1}, {a:"B",b:2}],
   C: [{a:"C",b:1}]
  }
 */
 ``` 
