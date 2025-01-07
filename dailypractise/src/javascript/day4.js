// {createPortal(
//     <p
//         style={{
//             color: '#ffffff',
//             zIndex: 100,
//             width: '50%',
//             height: '100px',
//             backgroundColor: '#000',
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)', // Centering both vertically and horizontally
//             display: 'flex',
//             justifyContent: 'center', // Center text horizontally inside the element
//             alignItems: 'center', // Center text vertically inside the element
//         }}
//     >
//         This child is placed in the document body.
//     </p>,
//     document.getElementById('root')
// )}

// var a = 3;
// var b = {
//   a: 9,
//   b: a++,
// };
// console.log(a++);

// function foo() {
//   return "I'm the outer function";
// }

// function test() {
//   console.log(bar);
//   return foo();
//   var bar = "I'm a variable";
//   function foo() {
//     return "I'm the inner function";
//   }
// }
//   console.log(test());
// console.log([4,5,6] +[1,2,3]);
// let array=[1,2,2,3,4,4]
// console.log([...new Set(array)])

// console.log('hello' instanceof String)
// let object1 = {
//     a: 10,
//     b: 20,
//     c: function () {
//         console.log(this.a, this.b)
//       console.log(this.a + this.b);
//     },
//   };
//   const result = object1.c;
//   result();

// console.log(object1.c)

// var p = 4;
// let data = {
//   p: 1,
//   arrow: () => {
//     console.log(this.p);
//   },
//   nonArrow: function () {
//     self = this;
//     console.log(self.p);
//     console.log(this.p);
//     (function () {
//       console.log(self.p);
//       console.log(this.p);
//     })();
//   },
// };
// data.arrow();
// data.nonArrow();

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

// console.log(square)

// var square = function (n) {
//     return n * n
// }
// console.log(square(5))

// let array=[1,1,2]
// var removeDuplicates = function(nums) {
//   return [...new Set(nums)]
//   };
// console.log(removeDuplicates(array))

// function removeDuplicates(nums) {
//   if (nums.length === 0) return 0; // Handle edge case for empty array

//   let i = 0; // Pointer for the unique portion of the array
//   for (let j = 1; j < nums.length; j++) {
//       if (nums[j] !== nums[i]) { // Found a new unique element
//           i++; // Move the unique pointer forward
//           nums[i] = nums[j]; // Update the unique position
//       }
//   }
//   return i + 1; // Return the count of unique elements
// }
// const nums = [1, 1,1, 2, 3, 3, 4];
// const k = removeDuplicates(nums);

// console.log(k); // Output: 4
// console.log(nums.slice(0, k)); // Output: [1, 2, 3, 4]

class linklist {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
const head = new linklist(2);
head.next = new linklist(3);

// console.log(head);

let obj = {
  val: 2,
  next: { val: 3, next: { val: 10, next: null } },
};
function addhead(val){
  const newHead=new linklist(val)
  newHead.next=head
  return newHead
  // return newHead.next=obj
 
}
// console.log(addhead(30))

// console.log(head)
// console.log(obj)

function insertAtEnd(val){
  const newNode=new linklist(val)
  if(!head) return
  let curr=head
  while(curr.next){
    curr=curr.next
  }
  curr.next=newNode
  return head
}

// console.log(insertAtEnd(7))

function search(head, val) {
  let current = head;
  while (current) {
      if (current.val === val) return true;
      current = current.next;
  }
  return false;
}

// console.log(search(head,3))

// let arr=[2,3,4,9]
// let arr1=new Set(arr)
// console.log(arr1.has(9))

// function findRepeatedElements(arr) {
//   let seen = new Set();
//   let duplicates = new Set();

//   for (let num of arr) {
//       if (seen.has(num)) {
//           duplicates.add(num);
//       } else {
//           seen.add(num);
//       }
//   }

//   return [...duplicates];
// }
// console.log(findRepeatedElements([1,5,6,7,8,8]))

// const includesArr = Object(this)
// console.log(includesArr)

// class includecons{
//   constructor(arr){
//     this.arr=arr
//   }
// }
// includecons.prototype.include=includea
// // function(){
// //   console.log(this.arr,'hey i am here')
// // }
// function includea(){
//   // console.log(this.arr)
//   let obj={}
//   for (let i in this.arr){
//     let char=this.arr[i]
//     // console.log(char)
//     if(obj[char]==undefined){
//       obj[char]=1
//     }else{
//       obj[char]+=1
//     }
//   }
//   return obj
// }
// const arr=new includecons([1,2,3])
// console.log(arr.include())

// console.log(Object([1,2,3]))
let arr=[1,2,3,4]
function findIndex(arr,k){
  for(let i in arr){
    if(arr[i]==k){
      return parseInt(i)
    }
  }
}

function del(arr,i){
  let index=findIndex(arr,i)
  console.log(index)
  if (index >= 0) { // Element found
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1]; // Shift elements to the left
    }
    arr.length = arr.length - 1; // Reduce the length of the array
  }
  return arr; // Return the modified array
}
console.log(del(arr,4))






