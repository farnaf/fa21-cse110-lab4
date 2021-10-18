### CSE 110 Lab 4: Expose, Part II
1. 3, because of the way i is defined using var, the last value of i before the end of the loop is 3 (length of prices array) and that value gets printed.
2. 150, the last value of discountedPrice is set to be prices[2] * 0.5 = 300 * 0.5 = 150. The value of discountedPrice is accessible after the loop since it's defined with var. 
3. 150, findPrice in the last iteration is = Math.round(150 * 100)/100, which is equal to 150 and findPrice is accessible after the loop since it's defined with var.
4. [50, 100, 150], discounted is modified through the iteration of the loop to have 3 elements. The new values are half of the corresponding values in the original array passed into the method.
5. console.log(i);
                ^
ReferenceError: i is not defined
    at discountPrices (/tmp/AFF2cdHkDq.js:10:17)
    at Object.<anonymous> (/tmp/AFF2cdHkDq.js:17:1)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
    Variable i was defined in the scope of the loop due to the use of the keyword let. Aftet the loop finishes, the value of i is not accessible, so we get an error. 
6. onsole.log(discountedPrice);
                ^
ReferenceError: discountedPrice is not defined
    at discountPrices (/tmp/AFF2cdHkDq.js:11:17)
    at Object.<anonymous> (/tmp/AFF2cdHkDq.js:17:1)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
    Variable discountedPrice was defined in the scope of the loop due to the use of the keyword let. Aftet the loop finishes, the value of discountedPrice is not accessible, so we get an error. 
7. 150, finalPrice is defined and accessed in the scope of the discountPrices function, so after it's last modified in the for loop (prices[2] * 0.5), its final value is printed at line 14 to be equal to 150.
8. [50, 100, 150], discounted is defined and accessed in the scope of the discountPrices function, so after it's last modified in the for loop, its final value will be returned at the end.
9. console.log(i);
                ^
ReferenceError: i is not defined
    at discountPrices (/tmp/AFF2cdHkDq.js:9:17)
    at Object.<anonymous> (/tmp/AFF2cdHkDq.js:16:13)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
    Variable i was defined in the scope of the loop due to the use of the keyword let. Aftet the loop finishes, the value of i is not accessible, so we get an error.
10. 3, variable length has been defined initially as a const to be = prices.length. The value is not attempted to be changed in the code and once accessed later, it is still equal to 3.
11. [50, 100, 150], discounted is declared as a const and initially an empty array. Through the loop, values are added to it (not re-assigned). So the final values of it containing half of the values in the original array is returned.
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. Arithmetic
    A. '32' - string and number will be concatinated into a new string 
    B. 1 - both treated as numbers and the subtraction results in 1
    C. 3 - null represents 0 so the value of the number doesn't change
    D. '3null' - string added to null will make a new string concatination of both
    E. 4 - true is converted to 1 and then added to 3
    F. 0 - false and null both are converted to 0's and their addition results in 0
    G. '3undefined' - string concatination
    H. NaN - the subtraction cannot be converted to a number so it outputs NaN
14. Comparison
    A. true - both are treated as numbers and compared
    B. false - both are treated as strings, one starts with character '1' and the other with '2', the inequality does not hold
    C. true - == checks if values are equal, regardless of datatype
    D. false - datatypes vary although values are the same, === will return false
    E. false - 1 is not equal to 2, datatypes are not compared
    F. true - Boolean(2) returns true and when compared with true using ===, both values and datatypes are equal
15. == (equals operator) is used for comparison between two variables irrespective of the datatype of variable. === (strict equals operator) is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.
16. The for loop is in [this .js file](part2-question16.js).
17. [2, 4, 6], the original array [1, 2, 3] passed into modifyArray goes through a loop where every element is passed into the callback function (another argument of modifyArray) and the new values (twice the original value) are added to a new array returned at the end. The final array returned is the original array where each element is multiplied by two.
18. The program is in [this .js file](part2-question18.js).
19. 1
    4
    3
    2 (shows up on the terminal later - with a delay)
