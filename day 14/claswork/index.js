arr = [3, 6, 9, 2, 56, 34, 98, 56, 23, 12, 90];
 console.log(arr);
 
for (let i=0;i<=arr.length-1;i++){
    if(arr[i]>arr[i+1]){
        let temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
    }
}
console.log(arr);