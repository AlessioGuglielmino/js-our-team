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
  {
    name: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];

for (let i = 0; i < ourTeam.length; i++) {
  const name = ourTeam[i].name;
  const ruolo = ourTeam[i].ruolo;
  const foto = ourTeam[i].foto;
  wrap.innerHTML += `<div class="card col-3" >
  <img src="./img/${foto}" class="card-img-top" >
  <div class="card-body  ">
    <p class="card-text d-flex justify-content-center ">${name}</p>
    <p class="card-text d-flex justify-content-center ">${ruolo}</p>

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
