// For Loops
console.log("Classic loop");
for (let step = 0; step <= 4; step++) {
  console.log("Walking east one step: " + step);
}

console.log("Going Backwards");
for (let step = 5; step > 0; step--) {
  console.log("Walking Backward one step:" + step);
}

console.log("Going every nth element");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 1; i < array.length / 2; i = i + 2) {
  console.log("Every Second element " + i);
}

// For Off
const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}

// index value pair
for (let [index, value] of arr.entries()) {
  console.log(index, value);
}
