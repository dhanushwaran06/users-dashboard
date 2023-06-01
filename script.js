const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  if (!validate()) {
    e.preventDefault();
  }
});

function validate() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error1");
  if (email == "tracker@gmail.com" && password == "tracker") {
    window.location.assign("dashbord.html");
    error.textContent = "";
    return false;
  } else {
    error.textContent = "Invlaid crendiential";
    return false;
  }
}

//! for api fatch

const pokedex = document.getElementById("displaydex");

const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 9; i++) {
    const url = `https://randomuser.me/api/?results=10${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((results) => ({
      name: results.name.first,
      email: results.email,
      city: results.location.city,
      pic: results.picture.large,
    }));
    displayPokemon(pokemon);
  });
};

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = pokemon.map(
    (pokeman) => `
      <li>
              <img src="${pokeman.picture.large}"/>
             <h2> ${pokeman.name.first}</h2>
              <h2>${pokeman.email}</h2>
               <h2>${pokeman.location.city}</h2>
             </li>
    `,
  );

  pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();