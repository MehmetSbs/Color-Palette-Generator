const generateButton = document.querySelector(".btn");
const colorRect1 = new colorRect();

colorRect1.init();

OnClick = () => {
    colorRect1.init();
}

copy = (num) => {

    var range = document.createRange();

    if(num == 1 && document.querySelector(".hexShow1").innerHTML != "COPIED"){
        range.selectNode(document.querySelector(".hexShow1"));
    }
    else if (num == 2 && document.querySelector(".hexShow2").innerHTML != "COPIED") {
        range.selectNode(document.querySelector(".hexShow2"));
    }
    else if (num == 3 && document.querySelector(".hexShow3").innerHTML != "COPIED") {
        range.selectNode(document.querySelector(".hexShow3"));
    }
    else if (num == 4 && document.querySelector(".hexShow4").innerHTML != "COPIED") {
        range.selectNode(document.querySelector(".hexShow4"));
    }

    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    if (num == 1) {
        document.querySelector(".hexShow1").innerHTML = "COPIED";
    }
    else if (num == 2) {
        document.querySelector(".hexShow2").innerHTML = "COPIED";
    }
    else if (num == 3) {
        document.querySelector(".hexShow3").innerHTML = "COPIED";
    }
    else if (num == 4) {
        document.querySelector(".hexShow4").innerHTML = "COPIED";
    }
}

generateButton.addEventListener("click",OnClick);