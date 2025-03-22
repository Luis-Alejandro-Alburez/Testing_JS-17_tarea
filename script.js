//Ejercicio:

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

/* 
Paso 1:
  Escribe una funciÃ³n greenEnergy() que tenga un objeto como 
  parÃ¡metro y establezca la propiedad 'Fuel Type' de ese 
  objeto en 'avocado oil'
*/

function greenEnergy(objeto) {
  objeto["Fuel Type"] = "avocado oil";
}

/*  
Paso 2:
  Escribe una funciÃ³n remotelyDisable() que tenga un objeto como
  parÃ¡metro y establezca (o reasigne) la propiedad disable de ese
  objeto a true.

  */

function remotelyDisable(objeto) {
  objeto["disable"] = true;
}

/*

Paso 3:
  Llame a sus dos funciones con el objeto spaceship en el editor de cÃ³digo,
  luego imprime el objeto spaceship para confirmar que se 
  cambiaron/agregaron esas propiedades.
  */

greenEnergy(spaceship);
console.log(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
