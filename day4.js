//----------------First Occurrence--------------------------

// function firstOccurrence(arr, target){

//     for(let i = 0; i < arr.length; i++){

//         if(arr[i] === target){
//             return i;
//         }
//     }

//     return -1;
// }

// console.log(firstOccurrence([1,2,2,2,3,4], 2));

//--------------------Last occurrence---------------------

// function lastOccurrence(arr, target){

//     let ans = -1;

//     for(let i = 0; i < arr.length; i++){

//         if(arr[i] === target){
//             ans = i;
//         }
//     }

//     return ans;
// }

// console.log(lastOccurrence([1,2,2,2,3,4], 2));

//-------------------Lower bound---------------------

// function lowerBound(arr, target){

//     let left = 0;
//     let right = arr.length - 1;
//     let ans = arr.length;

//     while(left <= right){

//         let mid = left + Math.floor((right - left) / 2);

//         if(arr[mid] >= target){

//             ans = mid;
//             right = mid - 1;
//         }

//         else{
//             left = mid + 1;
//         }
//     }

//     return ans;
// }

// console.log(lowerBound([1,2,4,4,5,7], 4));

//-------------------Upper bound----------------------

// function upperBound(arr, target){

//     let left = 0;
//     let right = arr.length - 1;
//     let ans = arr.length;

//     while(left <= right){

//         let mid = left + Math.floor((right - left) / 2);

//         if(arr[mid] > target){

//             ans = mid;
//             right = mid - 1;
//         }

//         else{
//             left = mid + 1;
//         }
//     }

//     return ans;
// }

// console.log(upperBound([1,2,4,4,5,7], 4));

//..

// For both Lower Bound and Upper Bound using Binary Search:

// Time Complexity
// O(log n)
//Because:
// in every step, half of the array is removed
// Binary Search reduces the search space

// Space Complexity O(1)

//-------------------Search insert position-------------------------

// function searchInsert(arr, target){

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

//     return left;
// }

// console.log(searchInsert([1,3,5,6], 2));

//...
// Time Complexity
// O(logn)
// Because Binary Search is used.

// Space Complexity
// O(1)

//------------------Peak Element Basics---------------------
//-----------------Linear Search Solution-------------------

// function findPeak(arr){

//     let n = arr.length;

//     for(let i = 0; i < n; i++){

//         if(
//             (i === 0 || arr[i] > arr[i - 1]) &&
//             (i === n - 1 || arr[i] > arr[i + 1])
//         ){
//             return i;
//         }
//     }
// }

// console.log(findPeak([1,5,3,7,6]));

//..

// Time Complexity O(n)

