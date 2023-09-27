// menuButton opslaan in variable
var menuButton = document.querySelector("header > button:nth-of-type(1)");

// luisteren naar een klik
menuButton.onclick = openMenu;

// reageert op deze functie
function openMenu() {

  let navNav = document.querySelector("nav");
  navNav.classList.add("toonMenu");
}





// stap 1 - zoek sluiten button op
var menuSluiten = document.querySelector("nav button");


// stap 2 - laat die button luisteren naar kliks
menuSluiten.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {

  let byeNav = document.querySelector("nav");
  byeNav.classList.remove("toonMenu");
}