function insertionSort(arr){
    for (let i = 1, current, j; i < arr.length; i++) {
        current = arr[i];
        j = i - 1;
        while(j >= 0 && current < arr[j]){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

console.log(insertionSort([5, 6, 9, 1, 10, 2, 2]));