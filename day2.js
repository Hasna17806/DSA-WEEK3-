//------------------------------------Merge Sort------------------------------------

// function mergeSort(arr) {

//     if (arr.length <= 1) {
//         return arr;
//     }

//     let mid = Math.floor(arr.length / 2);

//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));

//     return merge(left, right);
// }

// function merge(left, right) {

//     let result = [];
//     let i = 0;
//     let j = 0;

//     while (i < left.length && j < right.length) {

//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }

//     return result
//         .concat(left.slice(i))
//         .concat(right.slice(j));
// }

// console.log(mergeSort([5, 3, 8, 1, 2]));


//Best Case	O(n log n)
// Average Case	O(n log n)
// Worst Case	O(n log n)
//Space Complexity
// O(n)

 //-----------------------------Quick sort-----------------------------------

// function quickSort(arr) {

//     if (arr.length <= 1) {
//         return arr;
//     }

//     let pivot = arr[arr.length - 1];

//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length - 1; i++) {

//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [
//         ...quickSort(left),
//         pivot,
//         ...quickSort(right)
//     ];
// }

// console.log(quickSort([5, 3, 8, 1, 2]));

// Best Case	O(n log n)
// Average Case	O(n log n)
// Worst Case	O(n²)

// space Complexity
// Average:O(log n)
// Worst: O(n)

//--------------------Merge function code---------------------------

// function merge(left, right){

//     let result = [];
//     let i = 0;
//     let j = 0;

//     while(i < left.length && j < right.length){

//         if(left[i] < right[j]){
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }

//     return result
//         .concat(left.slice(i))
//         .concat(right.slice(j));
// }


// didnt getting output

