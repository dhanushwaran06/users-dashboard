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

fetch("https://randomuser.me/api/?results=10")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let markup = [];
    let names = [];
    let email = [];
    let city = [];

    for (let i = 0; i < 10; i++) {
      names = `<h1>${data.results[i].name.first}</h1>
             `;
      email = `<h3>${data.results[i].email}</h3>
             `;
      city = `<h3>${data.results[i].location.city}</h3>
             `;
      markup = `<img src="${data.results[i].picture.large}"></img>
             `;

      document.querySelector("p").insertAdjacentHTML("beforeend", markup);
      document.querySelector("h4").insertAdjacentHTML("beforeend", names);
      document.querySelector("h4").insertAdjacentHTML("beforeend", email);
      document.querySelector("h4").insertAdjacentHTML("beforeend", city);
    }
  })
  .catch((error) => console.log(error));

  const body = document.querySelector(".all");
  let cd = "";
  for(let i = 1 ; i <= 10 ; i++){
    cd+=`
    <div class="container">
    <div class="cards">
    <div class="side-cards">
    <div class="dummy">
    </div>
    </div>
    </div>
    </div>  
    `;
    
}
body.innerHTML=cd;