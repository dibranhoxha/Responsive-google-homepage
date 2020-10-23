let autoCompleteElement = document.getElementById("auto-complete-container");
let searchBar = document.getElementById("search-bar");
let searchBarContainer = document.getElementById("search-bar-container");
let actionContainer = document.getElementById("action-container")
let animatedButton = document.getElementById('animated-button');
let animatedList = document.querySelector("#animated-button ul");
let animatedListItems = document.querySelectorAll("#animated-button ul li");
let Iphonebackward = document.getElementById("iphone-backward");
let DesktopBackward = document.getElementById("desktop-backward");
let pxArr = [49, 74, 101, 127, 154, 180, 207, 233, 255]
let randomNr = Math.floor(Math.random() * (pxArr.length - 1));
let px = -pxArr[randomNr];


animatedButton.addEventListener('mouseenter', () => {
    randomSelection();
});

animatedButton.addEventListener('mouseleave', () => {
    fixedSelection();
});

searchBar.addEventListener("click", () => {
    appearAutoComplete();
})

Iphonebackward.addEventListener("click", () => {
    dissapearAutoComplete();
})
DesktopBackward.addEventListener("click", () => {
    dissapearAutoComplete();
})


function appearAutoComplete() {
    autoCompleteElement.id = "device-auto-complete";
    searchBarContainer.id = "auto-complete-search-bar";
    actionContainer.style.display = "none";
}

function dissapearAutoComplete() {
    autoCompleteElement.id = "auto-complete-container";
    searchBarContainer.id = "search-bar-container";
    actionContainer.style.display = "block";
}

function randomSelection() {
    setTimeout(() => {
        animatedList.style.transition = "margin-top 0.9s ease";
        animatedList.style.marginTop = px + "px";
    }, 300);
}

function fixedSelection() {
    setTimeout(() => {
        animatedList.style.transition = "margin-top 0s ease";
        animatedList.style.marginTop = "4px";
    }, 300);
}









