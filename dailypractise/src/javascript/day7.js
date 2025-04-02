let arr=[12,18,17,65,46]
let n=5
let k=6
let remarr={}
let remainder=[]
for(let i=0;i<n;i++){
    let rm=arr[i]%6
    remainder.push(rm)
    remarr[arr[i]]=rm
}
function swap(arr,index,k){
    temp=arr[index]
    arr[index]=arr[k]
    arr[k]=temp
}

function bubblesort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
}
bubblesort(arr)
// let res=[]
for(let i in remainder){
    console.log(remarr[remainder[i]])
}

console.log(remainder)