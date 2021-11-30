const strBtn = document.querySelector("#strBtn")
const agiBtn = document.querySelector("#agiBtn")
const intBtn = document.querySelector("#intBtn")


strBtn.addEventListener("click", () => displayStr());
// ("agiBtn").addEventListener("click", displayInt);
// ("intBtn").addEventListener("click", displayAgi);

function displayStr() {
    let x = document.getElementById("strHero");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function displayAgi() {
    let x = document.getElementById("agiHero");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function displayInt() {
    let x = document.getElementById("IntHero");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
