const selection_sort = (arr) =>{
    for (let i = 0;i < arr.length; i++){
        let min_index = i;
        for (let j = i + 1;j < arr.length; j++){
            if(arr[j] < arr[min_index]){
                min_index = j;
            }

        }
        if(min_index !== i) {
            let tmp = arr[min_index];
            arr[min_index] = arr[i]
            arr[i] = tmp
        }
    }
    return arr
}

let array = [9,4,5,6,2,1,3,8,7]

console.log(selection_sort(array))