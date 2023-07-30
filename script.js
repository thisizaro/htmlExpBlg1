let navMenu = document.querySelector('.nav-menu');
let navBlocks = document.querySelectorAll('.nav-block');

console.log(navMenu.style);
console.log(navBlocks.style);

navMenu.onclick = function(){
    console.log(navBlocks)
    for (let i = 0; i < navBlocks.length; i++) {
        navBlocks[i].classList.toggle('navActive');
    }

    console.log("active")
}
