### CSE 110 Lab 4: Explore, DevTools Part II
1. Because the arguments num1 and num2 passed into calculateSum are of datatype **string**, the result will be the addition of two strings and result in them being placed next to each other as a string rather than being treated as numbers and getting added up. For instance, I tried out passing in 10 and 20 and the result came out as '1020' for the bug described above. 
2. The fix would be to convert the string arguments into integers using parseInt() method and then adding them up.
