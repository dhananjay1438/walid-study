
// >, <, <=, ==, =, !, && (AND), || (OR), ^ (XOR)

// Conditional operators
// These are the operators which are used in if conditions

/*
1. == (double is equal to)
2. <= (less than or is equal to)
3. >= (greater than or is equal to)
4. > (greater than)
5. < (less than)
*/

// Assignment Operator

/*
1. = (is equal to)

Ex: var x = 10
We can say we are assigning a value of 10 to variable x, hence the name assignment operator

*/

// Logical Operators

/*
1. && (AND)
2. || (OR)
3. ^ (XOR)
4. ! (NOT)
*/


// Without logical operators
if (num > 5) {
    if (num < 10) {
        console.log("Something")
    }
}

// With logical operators
if (num > 5 && num < 10) {
    console.log("Something")
}


// Without logical operators
if (num > 5) {
    if (num > 100) {
        if (num < 200) {

        }
    }
}

// With logical operators
if (num > 5 && num > 100 && num < 200) {

}



