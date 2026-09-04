//  DANKESNACHRICHT UND CONSOLE LOG

/* 
Beim Absenden des Kontaktformulars wird dem Nutzer eine
Dankes-Nachricht angezeigt. Alle eingegebenen Angaben werden in der
Konsole geloggt.
*/
const button = document.querySelector("#button");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);

  const nameContent = name.value;
  const emailContent = email.value;
  const messageContent = message.value;

  console.log("Name: ", nameContent);
  console.log("E-Mail: ", emailContent);
  console.log("Nachricht: ", messageContent);

  alert(`Danke für's Einsenden deiner Nachricht, ${nameContent}! 😘👌`);
});
