var menu = document.querySelector(".bi-list");
var close = document.querySelector(".bi-x-lg");
var nav = document.querySelector(".responsive");

menu.addEventListener("click", function () {
	nav.style.left = "0%";
})

close.addEventListener("click", function () {
	nav.style.left= "-100%";
})
