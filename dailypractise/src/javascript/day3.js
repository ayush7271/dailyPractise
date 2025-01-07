// let array = [1, 1, 3, 6, 5, 6];
// let arr=[...new Set(array)]
// console.log(arr)

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter the even numbers, square them, and then sum them up
// const sum = array
//   .filter((num) => num % 2 === 0) // Filter out the even numbers
//   .map((num) => num * num) // Square each even number
//   .reduce((sum, num) => sum + num, 0); // Sum them up

// console.log(sum); // Output the sum

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredItems = array.filter((e)=>{
    if(e%2==0)
        return e
    
});
// console.log(filteredItems);
 var x = { name: 10 };
var y = { ...x };
y.name = 20;

// console.log(x);
// console.log(y);

// var a = 2;
// a++;
// console.log(a); //3
// const d = [1, 2, 3];
// d.push(5); //1235
// console.log(d);
// let b = 2;
// b++;
// console.log(b); //3
// const c = [2];
// c[0]++;
// console.log(c);


// var myObject = {
//     foo: 'bar',
//     func: function () {
//       var self = this;
//       console.log('outer func: this.foo = ' + this.foo);
//       console.log('outer func: self.foo = ' + self.foo);
//       (function () {
//         console.log('inner func: this.foo = ' + this.foo);
//         console.log('inner func: self.foo = ' + self.foo);
//       })();
//     },
//   };
//   myObject.func();

// var output =
//  (function (x) {
//     delete x;
  
//     return x;
//   })(6);
var a = 3;
var b = {
  a: 9,
  b: a,
};
console.log(a,b.a,++b.b)
// console.log(a + b.a + ++b.b);
