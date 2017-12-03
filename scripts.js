// Declare all of the html elements
const originalEl = document.getElementById("original");
const reversedEl = document.getElementById("reversed");
const sortedEl = document.getElementById("sorted");
const reverseSortedEl = document.getElementById("reverse-sorted");
const joinedEl = document.getElementById("joined");
const slicedEl = document.getElementById("sliced");
const splitEl = document.getElementById("split");
const firstToLastEl = document.getElementById("first-to-last");
const forEachEl = document.getElementById("foreach");
const mapEl = document.getElementById("map");
// Declare the arrays I will be working with
let fruits = ["strawberry", "apple", "carrot", "banana", "grapes", "tomato"];
let numbers = [15, 1000, 3, 1, 77, 10];
// Declare all of the function definitions
function reverse(foo) {
    // the reverse method returns a new array with the array indeces in the opposite order. its value must be returned
    return foo.reverse();
}

// Call the functions on the arrays and place those results into the html
originalEl.innerHTML = fruits;
originalEl.innerHTML += "<br>" + numbers;

reversedEl.innerHTML = reverse(fruits);
reversedEl.innerHTML += "<br>" + reverse(numbers);
