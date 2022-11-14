const binary_search = (arr, item) => {
    let first = 0;
    let last = arr.length - 1;
    while(first <= last) {
        let mid = Math.floor(((first + last) / 2));
        let tmp = arr[mid];
        if (tmp === item) {
            return mid;
        }
        if (tmp > item) {
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }
    return null
}

const array = [1,2,3,4,5,6,7,8,9]

console.log(binary_search(array,7))