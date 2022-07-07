// Selector
// ID
function txtChange() {
    document.getElementById("s_1").innerHTML = "Get elements by ID";
}
function bgChng() {
    document.getElementById("chngbg").style.backgroundColor = "red";
}

function fSChng() {
    document.getElementById("fontSize").style.fontSize = "50px";
}
function clrChng() {
    document.getElementById("colorchng").style.color = "orange";
}
function ffChng() {
    document.getElementById("ffchng").style.fontFamily = "sans-serif";
}

// ClassName
function cn() {
    const collection = document.getElementsByClassName("example");
    collection[0].innerHTML = "Hello World!";
}
function cn2() {
    const collection = document.getElementsByClassName("example2 color");
    collection[0].style.backgroundColor = "red";
    collection[0].style.color = "white";
}

// Name
function n() {
    let num = document.getElementsByName("animal").length;
    document.getElementById("name").innerHTML = num;
}

// TagName
function tn() {
    const collection = document.getElementsByTagName("li");
    document.getElementById("tagname").innerHTML = collection[1].innerHTML;

}
function tn2() {
    document.getElementsByTagName("p")[9].innerHTML = "Hello World!";

}

// KK
function focusOn(x) {
    x.style.background = "yellow";
}

// Window Alert
function onS() {
    alert("You selected some text!");
}
function okd() {
    alert("You selected some text!");
}
function onSub() {
    alert("Your Form was submitted");
}

// Document Write
function dw() {
    document.write(5 + 6);
}

// Console.log

let val = 0;

console.log(val.x = 3); // Prints 3.
console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.


// Data Type

let length = 16;                               // Number
let lastName = "Johnson";                      // String
let x = { firstName: "John", lastName: "Doe" };    // Object
let x1 = 34.00;     // Written with decimals
let x2 = 34;        // Written without decimals

// Booleans
function blns() {
    let x = 5;
    let y = 5;
    let z = 6;
    document.getElementById("blns").innerHTML =
        (x == y) + "<br>" + (x == z);
}
function blns2() {
    let x = 7;
    let y = 5;
    let z = 7;
    document.getElementById("blns2").innerHTML =
        (x == y) + "<br>" + (x == z);
}

// Array
function array() {
    const cars = ["Saab", "Volvo", "BMW"];

    document.getElementById("array").innerHTML = cars[0];
}
function arrayC() {
    const colors = ["Red", "Green", "Blue"];

    document.getElementById("arrayC").innerHTML = colors[1];
}

// Objects
function object() {
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };

    document.getElementById("object").innerHTML =
        person.firstName + " is " + person.age + " years old.";
}
function object2() {
    const person = {
        firstWord: "Hello",
        lastWord: "How",
        age: 50,
        eyeColor: "blue"
    };

    document.getElementById("object2").innerHTML =
        person.firstWord + ", " + person.lastWord + " are you?";
}

// Operator

function op() {
    let x = 5;
    let y = 2;
    let z = x + y;
    document.getElementById("op").innerHTML = z;
}

function op2() {
    let x = 5;
    let y = 2;
    let z = x - y;
    document.getElementById("op2").innerHTML = z;
}
function op3() {
    let x = 5;
    let y = 2;
    let z = x * y;
    document.getElementById("op3").innerHTML = z;
}
function op6() {
    let x = 5;
    let y = 2;
    let z = x / y;
    document.getElementById("op6").innerHTML = z;
}
function op7() {
    let x = 5;
    let y = 2;
    let z = x % y;
    document.getElementById("op7").innerHTML = z;
}
function op8() {
    let a = 4;
    let b = 3;
    let x = 5;
    let y = 2;
    let z = x * y - (a + b);
    document.getElementById("op8").innerHTML = z;
}
function op9() {
    let a = 4;
    let b = 3;
    let x = 5;
    let y = 2;
    let z = x / y - (a - b);
    document.getElementById("op9").innerHTML = z;
}
function op10() {
    let a = 4;
    let b = 3;
    let x = 5;
    let y = 2;
    let z = x % y - (a - b);
    document.getElementById("op10").innerHTML = z;
}
function op3() {
    let x = 5;
    let y = 2;
    let z = x * y;
    document.getElementById("op3").innerHTML = z;
}
function op4() {
    var x = 10;
    x += 5;
    document.getElementById("op4").innerHTML = x;
}
function op5() {
    let x = 5 + 5;
    let y = "5" + 5;
    let z = "Hello" + 5;
    document.getElementById("op5").innerHTML =
    x + "<br>" + y + "<br>" + z;
}






