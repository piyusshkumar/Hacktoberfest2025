function heapSort(arr, ascending = true) {
    if (!Array.isArray(arr)) throw new TypeError('Input must be an array');

    let n = arr.length;

    
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i, ascending);
    }

    
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; 
        heapify(arr, i, 0, ascending);
    }
    return arr;
}

function heapify(arr, n, i, ascending) {
    let largest = i;
    const left = (i << 1) + 1;
    const right = (i << 1) + 2;

    const compare = ascending
        ? (a, b) => a > b
        : (a, b) => a < b;

    if (left < n && compare(arr[left], arr[largest])) {
        largest = left;
    }
    if (right < n && compare(arr[right], arr[largest])) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest, ascending);
    }
}

// Test
let arr = [12, 11, 13, 5, 6, 7];
console.log('Ascending:', heapSort(arr.slice()));   // [5, 6, 7, 11, 12, 13]
console.log('Descending:', heapSort(arr.slice(), false)); // [13, 12, 11, 7, 6, 5]
