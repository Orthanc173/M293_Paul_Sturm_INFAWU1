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

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameContent = name.value;
  const emailContent = email.value;
  const messageContent = message.value;
  const priceRating = document.querySelector('input[name="preise"]:checked');

  console.log("Name: ", nameContent);
  console.log("E-Mail: ", emailContent);
  console.log("Nachricht: ", messageContent);
  console.log("Preisbewertung: ", priceRating.value);

  alert(`Danke für's Einsenden deiner Nachricht, ${nameContent}! 😘👌`);
});

/*
API: dynamische Produkte
*/

const ulProducts = document.querySelector("ul.contentList");

const getData = async () => {
  const result = await fetch(
    "https://dummyjson.com/products/category/smartphones",
  );
  const data = await result.json();
  const smartphones = data["products"];

  for (let i = 0; i <= smartphones.length; i++) {
    ulProducts.innerHTML += `
    <li class="contentItem">
        <img src="${smartphones[i].thumbnail}" alt="Produktbild von ${smartphones[i].title}" /><br />
        <div class="itemInfo">
          <h2>${smartphones[i].title}</h2>
          <div class="purchaseInfo">
            <h2 class="price">${smartphones[i].price} CHF</h2>
            <img
              class="warenkorb"
              src="../assets/cart.png"
              alt="Warenkorb Favicon"
            />
          </div>
        </div>
        <select>
          <option value="">Speicherplatz auswählen</option>
          <option value="16">16GB</option>
          <option value="32">32GB</option>
          <option value="64">64GB</option>
        </select>
        <p>
          ${smartphones[i].description}
        </p>
      </li>`;
  }
};

getData();
