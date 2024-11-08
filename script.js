const form = document.getElementById("login");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const distanza = document.getElementById("distanza");

  const button = document.getElementById("button");
  const prezzoFinale = document.getElementById("prezzoFinale");
  const ageUtente = document.getElementById("Age").value;
  let prezzoScontato;
  let distanzaPercorsa = parseInt(distanza.value);
  const prezzo = 0.21;
  const scontoMinorenne = 20;
  const scontoSenior = 40;
  let prezzoSenzaSconto = distanzaPercorsa * prezzo;
  console.log(prezzoSenzaSconto);
  //    Under18/////////
  if (ageUtente === "18") {
    prezzoScontato =
      prezzoSenzaSconto - (prezzoSenzaSconto * scontoMinorenne) / 100;
    prezzoFinale.innerHTML =
      "Prima dello sconto il pezzo è " +
      prezzoSenzaSconto +
      " Dopo lo sconto  sconto il pezzo è " +
      prezzoScontato;
    console.log(
      "Prima dello sconto il pezzo è " +
        prezzoSenzaSconto +
        " Dopo lo sconto  sconto il pezzo è " +
        prezzoScontato
    );
  }
  //    over65 ////////////////
  else if (ageUtente === "65") {
    prezzoScontato =
      prezzoSenzaSconto - (prezzoSenzaSconto * scontoSenior) / 100;
    prezzoFinale.innerHTML =
      "Prima dello sconto il pezzo è " +
      prezzoSenzaSconto +
      " Dopo lo sconto  sconto il pezzo è " +
      prezzoScontato;
    console.log(
      "Prima dello sconto il pezzo è " +
        prezzoSenzaSconto +
        " Dopo lo sconto  sconto il pezzo è " +
        prezzoScontato
    );
  }
});
