//Selectionner éléments
let coups = 0;

const input = document.getElementById("textarea");
const form = document.querySelector("form");
const indications = document.querySelector(".indications");
const textdanger = document.querySelector(".text-danger");
//Cacher l'erreur

textdanger.style.display = "none";

// Générer un nombre aléatoire
let nombreAleatoire = genererNombreEntier(1000);
console.log(nombreAleatoire);
function genererNombreEntier(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Vérifier que l'utilisateur donne bien un nombre

input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    textdanger.style.display = "inline";
  } else {
    textdanger.style.display = "none";
  }
});

// Agir à l'envoi du formulaire

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(input.value) || input.value == "") {
    input.style.border = "red solid";
  } else {
    coups++;
    input.style.border = "silver solid";
    nombreChoisi = input.value;
    input.value = "";
    verifier(nombreChoisi);
  }
});
// Créer la fonction vérifier

function verifier(nombre) {
  let instruction = document.createElement("li");

  if (nombreChoisi < nombreAleatoire) {
    instruction.textContent = "#" + coups + "( " + nombre + " ) C'est plus !";
    instruction.className = "plus";
  } else if (nombreChoisi > nombreAleatoire) {
    instruction.textContent = "#" + coups + "( " + nombre + " ) C'est moins !";
    instruction.className = "moins";
  } else {
    instruction.textContent =
      "#" + coups + "( " + nombre + " ) C'est le juste prix !";
    instruction.className = "fini";
  }
  document.querySelector(".indications").prepend(instruction);
}
