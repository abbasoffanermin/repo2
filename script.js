
//Part1
function calculateSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(calculateSum([1, 3, 5, 7]));
//Part2
let counter = 0
while (counter < 5) {
    counter++;
    console.log(counter);
}
//Part3
let countDown = 5
do {
    countDown--;
    console.log(countDown);
} while (countDown > 0);
//Part4
function evaluateGrade(grade) {
    if (grade > 60) {
        return 'Pass'
    } else {
        return 'Fail'
    }
}
console.log(evaluateGrade(50));
console.log(evaluateGrade(70)); 