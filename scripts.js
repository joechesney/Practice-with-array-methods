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
const mappedEl = document.getElementById("mapped");
const nextEl = document.getElementById("next");
// Declare the arrays I will be working with
let fruits = ["strawberry", "apple", "carrot", "banana", "grapes", "tomato"];
let numbers = [15, 1000, 3, 320, 110, 899, 1, 77, 10];
// Declare all of the function definitions
function reverse(foo) {
    // the reverse method returns a NEW array with the array indices in the opposite order. its value must be returned
    return foo.reverse();
}
function sortThem(foo) {
    // this method returns an array with the array items sorted only by their first character. so it sorts words if they are all lower case or all upper case, and it will sort single digit numbers
    return foo.sort();
}
function sortNums(foo) {
    // this method is used for sorting numbers because it will reutrn values based on the difference between the number values, rather than just the value of the firts digit. it can also be reversed to provide a descending order. to do that, just change 'return a-b' to 'return b-a'
    return foo.sort(function(a,b){return a-b;});
}
function reverseSortThem(foo){
    return foo.sort(function(a,b){return b-a;});
}
function joinThem(foo) {
    return foo.join(",");
}


function firstToLast(foo) {
    let chups = foo.shift();
    foo.push(chups);
    return foo;
}

// Call the functions on the arrays and place those results into the html
originalEl.innerHTML = fruits;
originalEl.innerHTML += "<br>" + numbers;
console.log("original: ", fruits);
console.log("original: ", numbers);
reversedEl.innerHTML = reverse(fruits);
reversedEl.innerHTML += "<br>" + reverse(numbers);
console.log("reversed: ", fruits);
console.log("reversed: ", numbers);
sortedEl.innerHTML = sortThem(fruits);
sortedEl.innerHTML += "<br>" + sortThem(numbers);
sortedEl.innerHTML += "<br>" + sortNums(numbers);
console.log("sorted: ", fruits);
console.log("sorted: ", numbers);
reverseSortedEl.innerHTML = reverseSortThem(fruits);
reverseSortedEl.innerHTML += "<br>" + reverseSortThem(numbers);
console.log("reverse-sorted: ", fruits);
console.log("reverse-sorted: ", numbers);
joinedEl.innerHTML = joinThem(fruits);
joinedEl.innerHTML += "<br>" + joinThem(numbers);
console.log("joined: ", fruits);
console.log("joined: ", numbers);
// This is when I realized this whole thing is dumb
slicedEl.innerHTML = fruits.slice(2);
slicedEl.innerHTML += "<br>" + numbers.slice(3, 6);

firstToLastEl.innerHTML = firstToLast(fruits);
firstToLastEl.innerHTML += "<br>" + firstToLast(numbers);

fruits.forEach(function(somethin){
    forEachEl.innerHTML += somethin + " ";
});

// how to reverse the letters in each element of an array
let newArray = fruits.map(function(chups){
    return chups.split("").reverse().join("");
});

newArray.forEach(function(butts){
    mappedEl.innerHTML += butts + " ";
    console.log(butts);
});
// this is dumb

nextEl.innerHTML = newArray.reduce(function (a,b) {
    return a+b;
});