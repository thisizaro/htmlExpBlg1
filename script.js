let x = document.getElementsByClassName("nav-menu");
let y = document.querySelector(".nav-block");

console.log(x);
console.log(y);

console.log("\n");
while (true)
{
    x.addEventListener("click", displayDate);
}

function displayDate()
{
console.log("Function working")
}
