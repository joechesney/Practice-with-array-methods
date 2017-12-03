const reversedEl = document.getElementById("reversed");
const sortedEl = document.getElementById("sorted");
const reverseSortedEl = document.getElementById("reverse-sorted");
const joinedEl = document.getElementById("joined");
const slicedEl = document.getElementById("sliced");
const splitEl = document.getElementById("split");
const firstToLastEl = document.getElementById("first-to-last");
const forEachEl = document.getElementById("foreach");
const mapEl = document.getElementById("map");

let fruits = ["strawberry", "apple", "carrot", "banana", "grapes", "tomato"];

function reverse(foo) {
    foo.reverse();
}