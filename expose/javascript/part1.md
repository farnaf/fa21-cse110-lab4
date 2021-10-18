### CSE 110 Lab 4: Expose, Part I
1. values added:  20
2. final result:  20
3. values added:  20
4. console.log('final result: ', result);
                                    ^
ReferenceError: result is not defined
    at sumValues (/tmp/AFF2cdHkDq.js:7:35)
    at Object.<anonymous> (/tmp/AFF2cdHkDq.js:9:1)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
    The reason that the above error apears is because let only defines result in the scope of the if statement. So once the if statement is closed with a curly brace, variable result doesn't exist anymore and the program cannot look up its value.
5. result = num1 + num2;
               ^
TypeError: Assignment to constant variable.
    at sumValues (/tmp/AFF2cdHkDq.js:4:16)
    at Object.<anonymous> (/tmp/AFF2cdHkDq.js:9:1)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
    Because result is defined as a constant, its value cannot change to be the sum of num1 and num2. This inconsistency causes the above error.
6. Doesn't get to print anything (neither an output nor an error) because of the error the porgram throws at line 9, and the disruption it causes to the rest of the program running. 
