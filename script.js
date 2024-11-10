const form = document.getElementById("login");
// Biglietto
const cards = document.getElementById("imgs");
cards.classList.add("d-none");

// Function submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // La distanza scelta dal Passeggero
  const distanza = document.getElementById("distanza");
  // Prezzo finale dopo lo sconto
  const prezzoFinale = document.getElementById("prezzoFinale");
  // L'età del Passeggero
  const ageUtente = document.getElementById("Age").value;
  // Il nome del Passeggero
  const nomeUtente = document.getElementById("Name").value;
  // Biglietto Iniziale
  const ticket = document.getElementById("ticket");
  let prezzoScontato;
  // La distanza compilata dal Utente
  let distanzaPercorsa = parseInt(distanza.value);
  console.log("La distanza compilata dal Utente: " + distanzaPercorsa + "KM");
  // Prezzo inziale/km e % di sconti
  const prezzo = 0.21;
  const scontoMinorenne = 20;
  const scontoSenior = 40;
  // Prezzo Senza sconto
  let prezzoSenzaSconto = distanzaPercorsa * prezzo;
  console.log(" Prezzo Senza sconto è :" + prezzoSenzaSconto);
  ///////////////////////////////
  // prezzo per il  Under18 //////////////////////////////////////////
  if (ageUtente === "18") {
    prezzoScontato =
      prezzoSenzaSconto - (prezzoSenzaSconto * scontoMinorenne) / 100;
    prezzoFinale.innerHTML = prezzoScontato.toFixed(2) + " €";
    console.log(
      "Prima dello sconto il pezzo è " +
        prezzoSenzaSconto.toFixed(2) +
        " €" +
        " Dopo lo sconto  sconto il pezzo è " +
        prezzoScontato.toFixed(2) +
        " €"
    );
  }
  // /////////////////////////////////   prezzo per over65 //////////////////////////////////////////
  else if (ageUtente === "65") {
    prezzoScontato =
      prezzoSenzaSconto - (prezzoSenzaSconto * scontoSenior) / 100;
    prezzoFinale.innerHTML = prezzoScontato.toFixed(2) + " €";
    console.log(
      "Prima dello sconto il pezzo è " +
        prezzoSenzaSconto.toFixed(2) +
        " Dopo lo sconto  sconto il pezzo è " +
        prezzoScontato.toFixed(2) +
        " €"
    );
  }
  // Il prezzo per i non Minorenne/Senior
  else {
    prezzoFinale.innerHTML =
      "Nessuno sconto disponibile per la Vostra età , il prezzo è " +
      prezzoSenzaSconto.toFixed(2) +
      " €";
    console.log(prezzoFinale.innerHTML);
  }
  // Nome del Passeggerovisualizzato sull biglietto
  ticket.innerHTML =
    nomeUtente.charAt(0).toUpperCase() +
    nomeUtente.substr(1, nomeUtente.length);
  console.log("Il nome del Passeggero è " + nomeUtente);
  // Il biglietto dopo il calculo finale del prezzo
  cards.classList.remove("d-none");
});

// ////////Function Distinazione/////
const tuttiDistinazione = document.getElementById("tuttiDistinazione");
const buttonDistinazione = document.getElementById("buttonDistinazione");
tuttiDistinazione.classList.add("d-none");
buttonDistinazione.addEventListener("click", function () {
  tuttiDistinazione.classList.toggle("d-none");
});
