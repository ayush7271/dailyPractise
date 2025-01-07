// for(var i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i)
// }

// for (var i = 0; i < 5; i++) {
//     setTimeout((function(i) {
//         return () => console.log(i);
//     })(i), i * 1000);
// }

// function factorial(num) {
//     if (num === 0 || num === 1) {
//       return 1; // Base case: factorial of 0 or 1 is 1
//     } else {
//       return  factorial(num - 1)*num; // Recursive case
//     }
//   }
  
//   // Testing the function
//   const result1 = factorial(10); // Expected output: 120
//   const result2 = factorial(0); // Expected output: 1
  
//   console.log(result1); // Should log 120
//   console.log(result2); // Should log 1
  
// function shuffleArrayExceptLast(array) {
//   const lastItem = array[array.length - 1]; 
//   const itemsToShuffle = array.slice(0, -1); 

//   for (let i = itemsToShuffle.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [itemsToShuffle[i], itemsToShuffle[j]] = [itemsToShuffle[j], itemsToShuffle[i]]; 
//   }

//   return [...itemsToShuffle, lastItem]; 
// }

// let text = [
//   'Need higher loan amount',
//   'Unable to proceed further, facing an issue',
//   'Need telephonic assistance',
//   'Interest rate is high',
//   'Processing fees is high',
//   'Others (Please specify)',
// ];


// let shuffledText = shuffleArrayExceptLast(text);
// console.log("Shuffled Array:", shuffledText);
