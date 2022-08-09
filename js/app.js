let count = document.getElementById("count"); //initializing variable count
count.innerText = 0; //checking by changing the value
let add = document.getElementById("add"); //initializing variable add
add.addEventListener("click", function() {
    count.innerText = parseInt(count.innerText) + 1; //checking by changing the value
});

let subtract = document.getElementById("subtract"); //initializing variable subtract
subtract.addEventListener("click", function() {
    count.innerText = parseInt(count.innerText) - 1; //checking by changing the value
    if (count.innerText < 0) {
        count.innerText = 0;
    }
});

let reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    count.innerText = 0;
});