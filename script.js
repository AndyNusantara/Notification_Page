const tombol = document.querySelector(".right-text");
const notifNo = document.querySelector(".border");
const dot = document.querySelectorAll(".dot");

console.log(dot);

tombol.addEventListener("click", function () {
    dot.forEach((e) => (e.style.display = "none"));
    notifNo.innerHTML = "0";
});
