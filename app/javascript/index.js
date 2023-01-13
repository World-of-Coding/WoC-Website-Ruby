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

for (let i = 0; i < 20; i++) {
    let stars = document.createElement('div');
    stars.classList.add("stars");
    stars.style.top = Math.random() * window.innerHeight - 5 + 'px';
    stars.style.left = Math.random() * window.innerWidth - 5 + 'px';
    stars.addEventListener('click', () => {
        window.open(
            "https://www.youtube.com/watch?v=dDakzFJfZ4c&ab_channel=BadHistory",
            "_blank"
        );
    })
    document.querySelector('header').appendChild(stars);
}

let man = document.getElementById("man");
let year = new Date().getFullYear();

man.innerHTML = `&copy; ${year} Copyright World of Coding`;

let memberCount;

fetch("https://discord.com/api/v9/invites/program?with_counts=true&with_expiration=true")
    .then(response => response.json())
    .then(data => {
        memberCount = data['approximate_member_count'];
        document.getElementById('mem').innerHTML = `Join and chill with ${memberCount} other devs`;
    });

//comment
