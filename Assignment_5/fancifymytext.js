const fancyBtn = document.querySelector("fancyBtn")
const boringBtn = document.querySelector("boringBtn")

function callAlert() {
    alert("Radio button change detected")
}

function makeTextLarger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function boldAlert() {
    alert()
    document.getElementById("textArea").style.fontWeight = "bold";
}

function moo() {
    var str
    document.getElementById("textArea").style.textTransform = "uppercase";
    str = document.getElementById("textArea").value;
    var parts = str.split(".");
    str = parts.join("-Moo");
    document.getElementById("textArea").value = str;
}

function fancify() {
    document.getElementById("boringBtn").checked = false;
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.textDecoration = "underline";
    document.getElementById("textArea").style.color = "blue";
}

function boringify() {
    document.getElementById("fancyBtn").checked = false;
    document.getElementById("textArea").style.fontWeight = "normal";
    document.getElementById("textArea").style.textDecoration = "none";
    document.getElementById("textArea").style.color = "black";
}


