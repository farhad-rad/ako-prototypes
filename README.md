# ako-prototypes
###### Some Useful Prototypes For Every JS lover
## Installation
#### Install Using NPM
First You Have To Install Package
```bash
npm i ako-prototypes
```
Then Simply Import It to Your Project
```javascript
// ES
import 'ako-prototypes';

// Module
require('ako-prototypes');
```
#### Install Using Html Script Tag
```html
<!-- NPM -->

<!-- Local -->
<script src="path/to/package/dist/ako-prototypes.min.js"></script>
```
## Usage
#### Array Prototypes
- **distinct**: Distincs Base Array by **func** Declaring Property
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
- **groupBy**: Group Base Array by **func** Declaring Property
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
#### String Prototypes
- **toRegexQuote**: Creates Regex Object After Escaping Special Characters By Adding \ In Base String
  **Note:** Does Not Escape BackSlashes(\)
  - param `String` **flag**
  - returns `Regex`
  ```javascript
  "(hello)".toRegexQuote(); // /\(hello\)/ (Regex)
  "[world]".toRegexQuote("g"); // /\[world\]/g (Regex)
  ```
- **replaceAll**: Replaces All Matching **pattern** In Base String With **replacement**
  - param `RegExp | String` **pattern**
  - param `String` **replacement**
  - returns `String`
  ```javascript
  "HellABC WABCrld!".replaceAll("ABC", "o"); // "Hello World!"
  ```
- **trimToEmpty**: Trims All Extra Spaces From Base String
  - returns `String`
  ```javascript
  "   This    is a Test!".trimToEmpty(); // "This is a Test!"
  "           ".trimToEmpty(); // ""
  ```
- **trimToNull**: Trims All Extra Spaces From Base String And Return Null If Nothing Remains
  - returns `String|null`
  ```javascript
  "   This    is a Test!".trimToNull(); // "This is a Test!"
  "           ".trimToNull(); // null
  ```
- **toEnglishNumeric**: Replace All Persian Numbers In Base String With English Ones
  - returns `String`
  ```javascript
  "Published In July ۲۰۲۱".toEnglishNumeric(); // "Published In July 2021"
  ```
- **toPersianNumeric**: Replace All English Numbers In Base String With Persian Ones
  - returns `String`
  ```javascript
  "منتشر شده در ژولای 2021".toPersianNumeric(); // "منتشر شده در ژولای ۲۰۲۱"
  ```
#### Number Prototypes
- **fixDigits**: Add Leading Zero(**digits**) To Start And End(**decimals**) Of Base Number
  - param `Number` **digits**
  - param `Number` **decimals**
  - returns `String`
  ```javascript
  /* Integer */
  var num = 123;
  num.fixDigits(4); // "0123"
  num.fixDigits(5); // "00123"
  
  /* Float */
  var num = 12.3;
  num.fixDigits(4); // "0012.3"
  num.fixDigits(4, 3); // "0012.300"
  ```
- **isInRange**: Checks Whether Base Number Is In Range Of **start** And **end**
  - param `Number` **start**
  - param `Number` **end**
  - returns `Boolean`
  ```javascript
  var num = 6;
  num.isInRange(1, 10); // true
  num.isInRange(10, 1); // true
  
  num.isInRange(_, 10); // TypeError('Start Must Be Instance Of Number')
  num.isInRange(1, _); // TypeError('End Must Be Instance Of Number')
  ```
- **isInteger**: Checks If Base Number Is An Integer
  - returns `Boolean`
  ```javascript
  (6).isInteger // true
  (7.2).isInteger // false
  ```
- **isPrime**: Checks If Base Number Is A Primitive Number
  - returns `Boolean`
  ```javascript
  (-10).isPrime // false
  (0).isPrime // false
  (1.2).isPrime // false
  (1).isPrime // false
  (2).isInteger // true
  (3).isInteger // true
  (4).isInteger // false
  ```
- **isEven**: Checks If Base Number Is Even
  - returns `Boolean`
  ```javascript
  (2).isEven // true
  (3).isEven // false
  ```
- **isOdd**: Checks If Base Number Is Odd
  - returns `Boolean`
  ```javascript
  (2).isOdd // false
  (3).isOdd // true
  ```
- **pow**: Calculates Base Number Powered By **exponent**
  - param `Number` **exponent**
  - returns `Number`
  ```javascript
  var num = 3;
  num.pow(2); // 9
  num.pow(4); // 81
  ```
- **powBase**: Calculates **base** Powered By Base Number
  - param `Number` **base**
  - returns `Number`
  ```javascript
  var num = 3;
  num.powBase(2); // 8
  num.powBase(4); // 64
  ```
- **absRound**: Calculates ABS And Round Without Use of Math Object
  - returns `Number`
  ```javascript
  (0.5).absRound();  // 0
  (-0.5).absRound();  // -0
  (3.2).absRound(); // 3
  (3.7).absRound(); // 3
  (-3.2).absRound(); // -3
  (-3.7).absRound(); // -3
  ```
- **absFloor**: Calculates ABS And Floor Without Use of Math Object
  - returns `Number`
  ```javascript
  (0.5).absFloor();  // 0
  (-0.5).absFloor();  // 0
  (3.2).absFloor(); // 3
  (3.7).absFloor(); // 3
  (-3.2).absFloor(); // -3
  (-3.7).absFloor(); // -3
  ```
- **floor**: Calculates Floor Without Use of Math Object
  - returns `Number`
  ```javascript
  (1.2).floor();  // 1
  (1.8).floor();  // 1
  ```
- **ceil**: Calculates Ceil Without Use of Math Object
  - returns `Number`
  ```javascript
  (1.2).ceil();  // 2
  (1.8).ceil();  // 2
  ```
- **round**: Calculates Round Without Use of Math Object
  - returns `Number`
  ```javascript
  (1.2).round();  // 1
  (1.8).round();  // 2
  ```
- **sign**: Calculates Sign Without Use of Math Object
  - returns `Number`
  ```javascript
  (-5).sign();  // -1
  (0).sign();  // 0
  (5).sign();  // 1
  ```
- **sqrt**: Calculates SQRT Without Use of Math Object
  - returns `Number`
  ```javascript
  (16).sqrt();  // 4
  ```
- **cbrt**: Calculates CBRT Without Use of Math Object
  - returns `Number`
  ```javascript
  (27).cbrt();  // 3
  ```
- **abs**: Calculates ABS Without Use of Math Object
  - returns `Number`
  ```javascript
  (27).abs();  // 27
  (-27).abs();  // 27
  ```
- **trunc**: Calculates Trunc Without Use of Math Object
  - returns `Number`
  ```javascript
  (27.12345).trunc();  // 27
  (-27.12345).trunc();  // 27
  ```
  
## License
[MIT](https://choosealicense.com/licenses/mit/)
