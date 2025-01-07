// const arr=[1,2,3]
// [1,2]='a';
// console.log(arr)

// let text = "report not found";
// let result = text.contains("report not found");
// console.log(result)

// const isValidEmail = (email) => {
//     if (!email || typeof email !== 'string') {
//         return false;
//     }

//     const normalizedEmail = email.trim().toLowerCase();
//     if (normalizedEmail.startsWith('creditline_')) {
//         return false;
//     }

//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(normalizedEmail);
// };

// console.log(isValidEmail('creditline_696a31bde90a538f160dd230af043943@gmail.com')); // false
// console.log(isValidEmail(' valid.email@example.com ')); // true
// console.log(isValidEmail(null)); // false
// console.log(isValidEmail('notAnEmail')); // false

// const isValidEmail = (email) => {
// 	if (email.toLowerCase().startsWith('creditline_')) {
// 		return false;
// 	}
// 	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// 	return emailRegex.test(email);
// };
// console.log(isValidEmail('creditline696a31bde90a538f160dd230af043943@gmail.com'))

// console.log(null === undefined)

// var x = 10,
//   y = 11,
//   z = x + y;
//   console.log(z)

// const arr = [1, 3, 4, 5, 0, 2, 4, 5]
// function swap(a1,b1){
//     a=b1
//     b1=a1;
//     a1=a
// }

// const w='masai';
// let obj={}
// for(let i in w){
//     let char=w[i]
//     if(obj[char]==undefined){
//         obj[char]=1
//     }else{
//         obj[char]+=1
//     }
// }
// console.log(obj['ayush']=5,obj)

// function swap(a,b,arr){
//     temp=arr[a]
//     arr[a]=arr[b]
//     arr[b]=temp
// }

// selection sort

let arr = [3, 5, 6, 1, 0, 1, 0, 0, 0];
// for(let i=0;i<arr.length;i++){
//     let index=i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[index]){
//             index=j
//         }
//         console.log(j,"j",i,"i")
//     }
//     swap(index,i,arr)
// }
// console.log(arr)

//bubble sort

// function swap(a,b,arr){
//     temp=arr[a]
//     arr[a]=arr[b]
//     arr[b]=temp
// }

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(arr[j]>arr[j+1]){
//             swap(j,j+1,arr)
//         }
//     }
// }
// console.log(arr)

// let str='cac'
// function checkpelindrom(){
// let left=0
// let right=str.length-1
// while(left<right){
//     if(str[left]!=str[right]){
//         return false
//     }
//     left ++
//     right --
//     return true
// }
// }
// console.log(checkpelindrom())

// Input:
// let s = "abcaba"
// // Output: 2

// function check(s){
//     for(let i=0;i<s.length;i++){
//         let bag=''
//         for(let j=i;j<s.length;j++){
//             bag=bag+s[j]
//             console.log(bag)
//         }
//     }
// }
// check(s)

// console.log("a")
// for(let i=0;i<2000000000;i++){
//     // console.log("b")
// }
// console.log('c')

function daysRemaining(date) {
  const inputDate = new Date(date);
  const currentDate = new Date();
  const targetDate = new Date(inputDate);
  targetDate.setDate(inputDate.getDate() + 20);
  const diffInTime = targetDate - currentDate;
  const remainingDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
  return remainingDays > 20 ? false : remainingDays;
}

// const date = "2024-11-15";
// console.log(daysRemaining(date));

// const str = "7.6.55";
// console.log(combinedNumber()); // Output: 76969
// function combinedNumber(str){
//    const num= Number(str.replace(/\./g, ''))
//    return num
// }

// console.log(1 + '12'); 112
// console.log(0 - '10'); -10
// console.log('11' + 1); 111
// console.log('10' + -1);10-1



var a = 10;

// console.log(a);

var a = 10;