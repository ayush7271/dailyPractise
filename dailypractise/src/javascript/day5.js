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


function* rangeGenerator(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }
  
  const range = rangeGenerator(1, 15);
  
//   console.log(range)
//   const numbers = [...range]


