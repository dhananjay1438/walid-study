
// Checks if the number is even
function is_even(num) {
    // If num is divisible by 2 return 0
    // otherwise return false
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// Checks if number is odd
function is_odd(num) {
    // If number is not divisible by 2
    // return true otherwise return false
    if (num % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

function even_or_odd(num) {

    if (is_even(num)) {
        console.log("Number is even")
    } else if (is_odd(num)) {
        console.log("Number is odd")
    }

}

var num = 53;

even_or_odd(num)