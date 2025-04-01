
let arr = [1,2,3,4,5]

const arr1 = arr.map((e) => {
    console.log("e in map>>>", e)
    e = e + 1;
})

console.log("arr1>>>>", arr1)
console.log("arr>>>>", arr)

// 🔹 Why arr1 contains [undefined, undefined, ...]?
// Your callback function does not return anything explicitly, so it implicitly returns undefined for each element.

// Since .map() collects return values into a new array, arr1 becomes [undefined, undefined, undefined, undefined, undefined].

// To fix this, you should return the modified value from the callback function:
const arr2 = arr.map((e) => {
    e = e + 1;
    return e; // Explicitly return the modified value
})

console.log("arr2>>>>", arr2) 



// Equivalent for Loop Implementation
// You could achieve the same result using a for loop like this:


// let arr = [1, 2, 3, 4, 5];
let arr3 = [];  // New array to store results

for (let i = 0; i < arr.length; i++) {
    console.log("e in for loop>>>", arr[i]);
    arr3.push(arr[i] + 1);  // Adding modified value to arr1
}

console.log("arr3>>>>", arr3); // [2, 3, 4, 5, 6]
console.log("arr>>>>", arr);   // [1, 2, 3, 4, 5] (unchanged)

// Key Differences Between .map() and for Loop
// Feature                   |	.map()                      |	  for Loop
// Mutates Original Array?   |	❌ No (creates a new array) |	✅ If modified explicitly
// Returns a New Array?      |	✅ Yes                      |	❌ No (requires manual push)
// Functional Programming?   |	✅ Yes                      |	❌ No (imperative approach)
// Requires Explicit return? | 	✅ Yes                      |	❌ No

