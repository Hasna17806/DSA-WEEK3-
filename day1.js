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