// 1. && (AND)

//If it is sunny and I have money I will buy an icecream
if (isSunny() && haveMoney()) {
    console.log('Buy an icecream')
} else {
    console.log('Don\'t buy an icecream')
}

// 2. || (OR)

// If it is raining or is my birthday i will play video games
if (isRaining() || isBirthday()) {
    console.log("Play video games")
} else {
    console.log("Will not play video games")
}

// 3. ! (NOT)

// Converts true to false and vice versa
if (!isRaining()) {
    console.log("It is not raining")
}


/*
AND Truth Table

First Condition | Second Condition | Output

true                true                true
true                false               false
false               true                false
false               false               false 


OR Truth Table

First Condition | Second Condition | Output
true                true                true
true                false               true
false               true                true
false               false               false


NOT Truth Table

First condition | Output
true                false
false               true  

*/