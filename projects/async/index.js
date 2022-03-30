// const demarrer = new Promise((resolve, reject) => {
//   isRunning = true;
//   console.log("en train de démarrer...");

//   setTimeout(() => {
//     if (isRunning === true) {
//       resolve(isRunning);
//     } else {
//       reject();
//     }
//   }, 3000);
// });

// demarrer
//   .then((working) => {
//     console.log(
//       "La voiture est prête à faire son baby driver ! (isRunning = " +
//         working +
//         ")"
//     );
//   })
//   .catch(() => {
//     console.log("Ca démare pas frérot");
//   });

// //// FONCTION PROMISE

// function chargerScript(script) {
//   //On doit return une promesse
//   return new Promise((resolve, reject) => {
//     //Créer un élément (script)
//     let element = document.createElement("script");
//     element.src = script;
//     document.head.append(element);

//     //Resolve
//     element.onload = () => resolve("Fichier " + script + " a été chargé.");

//     //Reject
//     element.onerror = () =>
//       reject(new Error("Operation impossible pour le script " + script));
//   });
// }

// const promesse = chargerScript("test.js");

// // On recupere result avec .then qui est l'argument de resolve
// // On recupere error avec .catch qui est l'argument de reject

// promesse
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Async et Axait "sucre syntaxiques"

// async function direBonjour() {
//   const promesse = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promesse tenue !"), 3000);
//   });

//   let resultat = await promesse;
//   console.log(resultat);
// }
// direBonjour();

// function chargerScript(script) {
//   //On doit return une promesse
//   return new Promise((resolve, reject) => {
//     //Créer un élément (script)
//     let element = document.createElement("script");
//     element.src = script;
//     document.head.append(element);

//     //Resolve
//     element.onload = () => resolve("Fichier " + script + " a été chargé.");

//     //Reject
//     element.onerror = () =>
//       reject(new Error("Operation impossible pour le script " + script));
//   });
// }

// async function resultat() {
//   console.log("calling...");
//   try {
//     const result = await chargerScript("test.js");
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// resultat();

function startEngine() {
  const willStart = false;

  return new Promise((resolve, reject) => {
    if (willStart === true) {
      setTimeout(() => resolve("Car started !"), 3000);
    } else {
      setTimeout(() => reject("Car will not start..."), 3000);
    }
  });
}

async function checkStartEngine() {
  try {
    const checkStart = await startEngine();
    console.log(checkStart);
  } catch (error) {
    console.log(error);
  }
}

checkStartEngine();
