// let arr=[[1,2,3],[4,5,6],[7,8,9]]

// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i][0])
// }

let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[14,15,16,17]]
let n=4
let top=0;
let left=0
let bottom=n-1
let right=n-1
let res=[]
for(let i=top;i<=bottom;i++){
    res.push(arr[i][left])
}
left++
for(let i=left;i<right;i++){
    res.push(arr[bottom][i])
}
bottom--
for(let i=bottom;i>=0;i--){
    res.push(arr[i][right])
}
right--
for(let i=right;i>=left;i--){
    res.push(arr[top][i])
}
top++
console.log(res)