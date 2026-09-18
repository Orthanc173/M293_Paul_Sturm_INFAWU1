// DARK MODE
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.querySelector("#themeSwitch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") {
  enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});

//  DANKESNACHRICHT UND CONSOLE LOG FÜR KONTAKTFORMULAR

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

// DYNAMISCHE PRODUKTE / LISTENELEMENTE

const ulProducts = document.querySelector("ul.contentList");

const getProducts = async (source, showStorageSelect = false) => {
  if (!ulProducts) return;

  const result = await fetch(source);
  const data = await result.json();
  const products = data.products;
  const storageSelect = showStorageSelect
    ? `
        <select>
          <option value="">Speicherplatz auswählen</option>
          <option value="16">16GB</option>
          <option value="32">32GB</option>
          <option value="64">64GB</option>
        </select>`
    : "";

  for (let i = 0; i < products.length; i++) {
    ulProducts.innerHTML += `
    <li class="contentItem">
        <img src="${products[i].thumbnail}" alt="Produktbild von ${products[i].title}" /><br />
        <div class="itemInfo">
          <h2>${products[i].title}</h2>
          <div class="purchaseInfo">
            <h2 class="price">${products[i].price} CHF</h2>
            <img
              class="warenkorb"
              src="../assets/cart.png"
              alt="Warenkorb Favicon"
            />
          </div>
        </div>
        ${storageSelect}
        <p>
          ${products[i].description}
        </p>
      </li>`;
  }
};

const getSmartphones = () => {
  getProducts("https://dummyjson.com/products/category/smartphones", true);
};

const getTablets = () => {
  getProducts("https://dummyjson.com/products/category/tablets");
};

const getLaptops = () => {
  getProducts("https://dummyjson.com/products/category/laptops");
};

const currentPage = document.title.toLowerCase();

if (currentPage.includes("smartphones")) {
  getSmartphones();
} else if (currentPage.includes("tablets")) {
  getTablets();
} else if (currentPage.includes("laptops")) {
  getLaptops();
}
