let count = document.getElementById("count"); //initializing variable count

count.innerText = 0; //checking by changing the value

let total = 0; //initializing variable total

let add = document.getElementById("add"); //initializing variable add
add.addEventListener("click", function() {
    count.innerText = parseInt(count.innerText) + 1; //checking by changing the value
    total = count; //checking by changing the value
});

let subtract = document.getElementById("subtract"); //initializing variable subtract
subtract.addEventListener("click", function() {
    count.innerText = parseInt(count.innerText) - 1; //checking by changing the value
    if (count.innerText < 0) {
        count.innerText = 0;
    }
    total = count; //checking by changing the value
});

let reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    count.innerText = 0;
});

let save = document.getElementById("save");
save.addEventListener("click", function() {
    let print = document.getElementById("previous");
    print.innerText = "Saved Value is : " + total.innerText;
});