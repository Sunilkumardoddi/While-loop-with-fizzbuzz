
var updated = [];
var count = 1;
function Fizzbuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            updated.push("FizzBuzz");
        }
        else if (count % 3 === 0) {
            updated.push("Fizz");
        } else if (count % 5 === 0) {
            updated.push("Buzz");
        }
        else {
            updated.push(count)
        }
        count++;
    }
    console.log(updated);
}
Fizzbuzz();
