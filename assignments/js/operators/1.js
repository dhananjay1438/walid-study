// Use of logical AND (&&)

var isRaining = true
var isNight = true

if (isRaining && isNight) {
    console.log("Don't go out")
}


if (isRaining || isNight) {
    console.log("It is either raining or is night")
}

// Logical NOT (!)
if (!isRaining) {
    console.log("It is not raining")
}