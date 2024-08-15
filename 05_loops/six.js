// ================================
// JavaScript Array Methods: Filter, Map, and ForEach
// ================================

// Filtering an Array Using the Filter Method
// ---------------------------
// Example 1: Filtering numbers greater than 4

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNums.filter((num) => {
    return num > 4;
});

console.log("Numbers greater than 4:", newNums);

// Output:
// Numbers greater than 4: [5, 6, 7, 8, 9, 10]

// Example 2: Filtering Fantasy books published after 1925

let books = [
    { title: "The Great Gatsby", publishDate: "1925", genre: "Classic" },
    { title: "To Kill a Mockingbird", publishDate: "1960", genre: "Fiction" },
    { title: "1984", publishDate: "1949", genre: "Dystopian" },
    { title: "Pride and Prejudice", publishDate: "1813", genre: "Romance" },
    { title: "The Catcher in the Rye", publishDate: "1951", genre: "Fiction" },
    { title: "The Lord of the Rings", publishDate: "1954", genre: "Fantasy" },
    { title: "Moby-Dick", publishDate: "1851", genre: "Adventure" },
    { title: "Jane Eyre", publishDate: "1847", genre: "Gothic" },
    { title: "Brave New World", publishDate: "1932", genre: "Science Fiction" },
    { title: "The Hobbit", publishDate: "1937", genre: "Fantasy" }
];

let userBooks = books.filter((bk) => {
    return bk.publishDate >= "1925" && bk.genre === "Fantasy";
});

console.log("Fantasy books published after 1925:", userBooks);

// Output:
// Fantasy books published after 1925: [
//     { title: "The Lord of the Rings", publishDate: "1954", genre: "Fantasy" },
//     { title: "The Hobbit", publishDate: "1937", genre: "Fantasy" }
// ]

// Using the ForEach Method to Filter and Push to a New Array
// ---------------------------
// Example: Filtering numbers greater than 4 manually using forEach

let manualFilteredNums = [];

myNums.forEach((num) => {
    if (num > 4) manualFilteredNums.push(num);
});

console.log("Manually filtered numbers greater than 4:", manualFilteredNums);

// Output:
// Manually filtered numbers greater than 4: [5, 6, 7, 8, 9, 10]

// Transforming an Array Using the Map Method
// ---------------------------
// Example: Adding 2 to each number in the array

let incrementedNums = myNums.map((num) => num + 2);
console.log("Numbers incremented by 2:", incrementedNums);

// Output:
// Numbers incremented by 2: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Chaining Map and Filter Methods
// ---------------------------
// Example: Multiplying each number by 10, then adding 1, and finally filtering numbers greater than or equal to 40

let transformedNums = myNums
    .map((num) => num * 10)  // Multiply each number by 10
    .map((num) => num + 1)   // Add 1 to each result
    .filter((num) => num >= 40);  // Filter numbers greater than or equal to 40

console.log(`Transformed numbers: (${transformedNums})`);

// Output:
// Transformed numbers: (41, 51, 61, 71, 81, 91)
