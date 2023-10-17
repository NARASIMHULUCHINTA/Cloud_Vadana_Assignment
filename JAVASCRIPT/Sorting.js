let arr = [1, 5, 3, 2, 7, 4, 0, 9, -1],
    sorted = false;

while (!sorted) {
    sorted = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
            sorted = false;
        }
    }
}

console.log('sorted array : ', arr);