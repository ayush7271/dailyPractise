// function twoSum(arr,k){
//     let left=0
//     let right=arr.length-1
//     while(left<right){
//         let sum=arr[left]+arr[right]
//         if(sum==k){
//             return{left,right}
//         }else if(sum>k){
//             right--
//         }else{
//             left++
//         }
//     }
// }
// let arr=[1,4,7,8,9]
// console.log(twoSum(arr,12))

// function swap(arr, index, j) {
//   temp = arr[index];
//   arr[index] = arr[j];
//   arr[j] = temp;
// }

// let arr = [3, 2, 99, 4, 5, 0];

function selectionsort() {
  for (let i = 0; i < arr.length; i++) {
    index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        index = j;
      }
      swap(arr, index, i);
    }
  }
}
let arr = [6, 5, 7, 9, 4];
// selectionsort(arr);


// function* rangeGenerator(start, end) {
//     for (let i = start; i <= end; i++) {
//       yield i;
//     }
//   }
  
//   const range = rangeGenerator(1, 15);
  
//   console.log(range)
//   const numbers = [...range]



// in bubble sort in each iteration larger element of array react to its correct position 

// Initial Array:
// [5, 3, 8, 4, 2]

// Iteration 1:
// Compare 5 and 3 → Swap → [3, 5, 8, 4, 2]
// Compare 5 and 8 → No Swap → [3, 5, 8, 4, 2]
// Compare 8 and 4 → Swap → [3, 5, 4, 8, 2]
// Compare 8 and 2 → Swap → [3, 5, 4, 2, 8]
// Largest number 8 is now at the last position.

// Iteration 2:
// Compare 3 and 5 → No Swap → [3, 5, 4, 2, 8]
// Compare 5 and 4 → Swap → [3, 4, 5, 2, 8]
// Compare 5 and 2 → Swap → [3, 4, 2, 5, 8]
// Second largest number 5 is now in its correct position.

// Iteration 3:
// Compare 3 and 4 → No Swap → [3, 4, 2, 5, 8]
// Compare 4 and 2 → Swap → [3, 2, 4, 5, 8]
// Third largest number 4 is in place.

// Iteration 4:
// Compare 3 and 2 → Swap → [2, 3, 4, 5, 8]
// Array is now sorted.


