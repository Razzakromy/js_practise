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

