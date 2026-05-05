//---------------------------Linear Search-------------------------------

// function linearSearch(arr, target){

//     for(let i = 0; i < arr.length; i++){

//         if(arr[i] === target){

//             return i;
//         }
//     }

//     return -1;
// }

// console.log(linearSearch([4, 2, 7, 1, 5], 1));

// Best Case	O(1)
// Average Case O(n)
// Worst Case	O(n)

//Space Complexity O(1)

//----------------------------Binary search---------------------------------

// function binarySearch(arr, target){

//     let left = 0;
//     let right = arr.length - 1;

//     while(left <= right){

//         let mid = Math.floor((left + right) / 2);

//         if(arr[mid] === target){
//             return mid;
//         }

//         else if(arr[mid] < target){
//             left = mid + 1;
//         }

//         else{
//             right = mid - 1;
//         }
//     }

//     return -1;
// }

// console.log(binarySearch([1,2,3,4,5,6,7], 5));

//...

// Best Case	O(1)
// Average Case	O(log n)
// Worst Case	O(log n)

// Space Complexity
// Iterative Binary Search:
// O(1)
// Recursive Binary Search:
// O(log n)
// because recursion uses stack memory.

// | Linear Search            | Binary Search             |
// | ------------------------ | ------------------------- |
// | Works on unsorted arrays | Requires sorted array     |
// | Checks one by one        | Eliminates half each step |
// | O(n)                     | O(log n)                  |
// | Slower                   | Faster                    |


//------------------------Using Mid Calculation---------------------------

// function binarySearch(arr, target){

//     let left = 0;
//     let right = arr.length - 1;

//     while(left <= right){

//         let mid = left + Math.floor((right - left) / 2);

//         if(arr[mid] === target){
//             return mid;
//         }

//         else if(arr[mid] < target){
//             left = mid + 1;
//         }

//         else{
//             right = mid - 1;
//         }
//     }

//     return -1;
// }

// console.log(binarySearch([1,3,5,7,9,11,13], 9));

//