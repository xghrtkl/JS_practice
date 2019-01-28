function nextInLine(arr, item) {
    // Your code here
    var x = arr.push(item)
    console.log('arr1: ' + arr)
    // console.log('item: ' + item)
    console.log('x: ' + x)
  
    var z = arr.shift()
    console.log('arr2: ' + arr)
    // console.log('y: ' + y)
    return z;  // Change this line
  }
  console.log('result: ' + nextInLine([5,6,7,8,9], 1))
  
  // Test Setup
  var testArr = [1,2,3,4,5];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));