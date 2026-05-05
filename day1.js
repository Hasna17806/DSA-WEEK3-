//------------------------Bubble sort------------------------

// function bubbleSort(arr){
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++){
//         let swapped = false;

//         for (let j = 0; j < n - 1 - i; j++){
//             if (arr[j] > arr[j + 1]){

//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

//                 swapped = true;
//             }
//         }
//         if (!swapped) break;
//     }

//     return arr;
// }

// console.log(bubbleSort([1, 5, 7, 3, 2]));

// Worst case: O(n²)
// Average case: O(n²)
// Best case: O(n) because of swapped optimization
// Space Complexity O(1)

//---------------------------Selection sort--------------------------------

function selectionSort(arr) {

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        let minIndex = i;

        for (let j = i + 1; j < n; j++) {

            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

console.log(selectionSort([4, 2, 7, 1, 5]));

// Case	Complexity
// Best Case	O(n²)
// Average Case	O(n²)
// Worst Case	O(n²)

// Why?


// Nested loops are always used
// It always checks all remaining elements
// Space Complexity
// O(1)

//-------------------------Insertion sort-----------------------------

// function insertionSort(arr) {

//     let n = arr.length;

//     for (let i = 1; i < n; i++) {

//         let current = arr[i];
//         let j = i - 1;

//         // Shift larger elements
//         while (j >= 0 && arr[j] > current) {

//             arr[j + 1] = arr[j];
//             j--;
//         }

//         // Insert element
//         arr[j + 1] = current;
//     }

//     return arr;
// }

// console.log(insertionSort([5, 3, 4, 1, 2]));

// Time Complexity
// Worst Case
// O(n²)
// Reverse sorted array.
// Best Case
// O(n)
// Already sorted array.

// Space Complexity
// O(1)
