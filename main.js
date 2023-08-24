// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice

// RECUPERO GLI ELEMENTI D'INTERESSE

let wrap = document.getElementById("wrapper");

const ourTeam = [
  {
    name: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
];

for (let i = 0; i < ourTeam.length; i++) {
  const name = ourTeam[i].name;
  const ruolo = ourTeam[i].ruolo;
  const foto = ourTeam[i].foto;
  wrap.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="./img/${foto}" class="card-img-top" >
  <div class="card-body">
    <p class="card-text">${name}</p>
    <p class="card-text">${ruolo}</p>

  </div>
</div>`;
}

// for (let person of ourTeam) {
//   console.log(person.name);

// }

// for (let role of ourTeam) {
//   console.log(role.ruolo);
// }

// for (let immagine of ourTeam) {
//   console.log(immagine.foto);
// }
