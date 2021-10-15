function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

// SELECTION SORT ALGO
function SelectionSortAnimations(array, length) {
  const auxiliary = array.slice();
  const animations = [];
  const translation = [];
  console.log(auxiliary);
  for (let i = 0; i < length - 1; i++) {
    let iMin = i;
    for (let j = i + 1; j < length; j++) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (array[j] < array[iMin]) {
        iMin = j;
      }
      let temp = array[i];
      translation.push([i, array[iMin]]);
      translation.push([iMin, temp]);
    }
    const xchange = array[i];
    array[i] = array[iMin];
    array[iMin] = xchange;
  }
  console.log(translation);
  return { animations, translation };
}

// const merge = (left_arr, right_arr,animations) =>{
//     const output = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while(leftIndex<left_arr.length && rightIndex < right_arr.length){
//         animations.push([leftIndex,rightIndex])
//         animations.push([leftIndex,rightIndex])
//       const left = left_arr[leftIndex]
//       const right = right_arr[rightIndex]
//       if(left < right){
//         output.push(left)
//         leftIndex += 1;
//       }else{
//         output.push(right);
//         rightIndex += 1;
//       }

//     }
//     return [...output, ...left_arr.slice(leftIndex),...right_arr.slice(rightIndex)]

//   }
//   const merge_sort = (arr,animations) =>{

//       const middle = Math.floor(arr.length/2)
//       const left_arr = arr.slice(0,middle)
//       const right_arr = arr.slice(middle)

//       merge(merge_sort(left_arr,animations),merge_sort(right_arr,animations));

//   }

export { getMergeSortAnimations, SelectionSortAnimations };
