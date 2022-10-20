const generateButton = document.querySelector(".btn");
const color1 = new colorRect();

color1.init();

OnClick = () => {
    color1.init();
}

generateButton.addEventListener("click",OnClick);