/* The problem we would like you to solve deals with an array of integers. We want to rotate these integers
to a specified number of positions to the left.

If for example you have an array of integers [1,2,3,4,5,6,7] and we would like to rotate 2 positions to the
left, the solution expected would be [3,4,5,6,7,1,2].

Note: the solution should be able to handle a position value greater than the number of integers in the
array. If, for example, we would like to rotate [1,2,3,4,5,6,7] 8 positions to left, it would produce the
result [2,3,4,5,6,7,1]. Negative values for the positions to rotate will throw an error which the code
example should handle gracefully.
*/

function rotateArrayLeft(array, positions) {
    const rotatedArray = [];
    const length = array.length;
  
    //Adjusted number of positions to rotate in the array within length?
    const adjustedPosition = positions - Math.floor(positions / length) * length;
  
    // Rotate the array
    for (let i = 0; i < length; i++) {
      // New index after rotation
      let newIndex = i + length - adjustedPosition;
  
      // newIndex can be greater than length, so make sure it's not greater than or equal to length
      if (newIndex >= length) {
        newIndex -= length;
      }
  
      // Assign the current element to corresponding index
      rotatedArray[newIndex] = array[i];
    }
  
    if (positions < 0) {
      throw new Error("Positions to rotate must be a non-negative number.");
    }
  
    return rotatedArray;
  }
  
  // Test
  const array = [1, 2, 3, 4, 5, 6, 7];
  const positionsToRotate = 2;
  
  const rotatedArray = rotateArrayLeft(array, positionsToRotate);
  console.log(rotatedArray);
  