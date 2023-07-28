const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);

})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
}

const sr = ScrollReveal ({
	distance: '30px', 
	duration: 2500,
	reset: true
})
sr.reveal('.home-text',{delay:50, origin:'left'});
sr.reveal('.home-img',{delay:50, origin:'right'});
sr.reveal('.container, .about, .menu, .contact',{delay:200, origin:'bottom'});

var favs = Array.from(document.querySelectorAll(".fa-heart"));

for (let fav of favs)(
    fav.addEventListener("click", function(){
        if(fav.style.color =="black")
        {fav.style.color = "red"}
        else{
            fav.style.color= "black"
        }

    })
)
