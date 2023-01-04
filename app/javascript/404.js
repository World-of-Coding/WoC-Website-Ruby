document.querySelector('.menu-btn').addEventListener("click", () => {
    document.querySelector('.menu-list').style.right = "0";
})

document.querySelector('.close-btn').addEventListener("click", () => {
    document.querySelector('.menu-list').style.right = "-100%";
})

let links = document.querySelectorAll('.list li a');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        document.querySelector('.menu-list').style.right = "-100%";
    })
}
//404