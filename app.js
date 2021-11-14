let blue = document.querySelector("#blueSq");
blue.addEventListener("mouseover", () => {
    document.querySelector("#blueSq").classList.add("hover");
});
blue.addEventListener("mouseout", () => {
    document.querySelector("#blueSq").classList.remove("hover");
});