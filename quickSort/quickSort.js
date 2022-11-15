const quickSort = (arr) =>{
    if(arr.length < 2){
        return arr;
    }

    let pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

let array = [8,2,1,3,5,4,6,9,7]

console.log(quickSort(array))