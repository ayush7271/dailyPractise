// 6
// rancho 45
// chatur 32
// raju 30
// farhan 28
// virus 32
// joy 45

// 1 joy
// 1 rancho
// 3 chatur
// 3 virus
// 5 raju
// 6 farhan

//make leaderboard

let arr1 = ["rancho", "chatur", "raju", "farhan", "virus", "joy"];
let arr2 = [45, 32, 30, 28, 32, 45];

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sortName(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length - i - 1; j++) {
      if (arr1[j].charCodeAt(0) > arr1[j + 1].charCodeAt(0)) {
        swap(arr1, j, j + 1);
        swap(arr2, j, j + 1);
      }
    }
  }
}
sortName(arr1, arr2);
function sortArray() {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length - i - 1; j++) {
      if (arr2[j] < arr2[j + 1]) {
        swap(arr2, j, j + 1);
        swap(arr1, j, j + 1);
      }
    }
  }
}
sortArray()
console.log(arr1,arr2)