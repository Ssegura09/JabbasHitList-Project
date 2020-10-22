URLBase = "http://localhost:3000/api/v1/characters/";
document.addEventListener("DOMContentLoaded", () => {
  console.log('HTML is loaded!')
  // fetch(URLBase)
  // .then((res) => res.json())
  // .then((characters) =>
  // characters.forEach((character) => renderCharacterCard(character))
  // );
  
  createFormData();
  characterNav();
  homeNav();
  pathNav();
}); //end of DOMContentLoaded


function renderCharacterCard(character) {
  // console.log("here")
  const cardIndex = document.querySelector("#card-index");
  cardIndex.style = "width: 18rem;";
  
  const delBtn = document.createElement("button");
  delBtn.className = "del-btn";
  delBtn.innerText = "X";
  
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");
  
  const img = document.createElement("img");
  img.src = character.image;
  img.className = "card-img-top";
  img.style = "width: 150px; height: 215px;";
  
  const divCard = document.createElement("div");
  divCard.className = "card-body";
  
  const h4 = document.createElement("h4");
  h4.className = "card-name";
  h4.innerText = `Name: ${character.name}`;
  
  const h5 = document.createElement("h5");
  h5.className = "card-type";
  h5.innerText = `Character Role: ${character.char_type}`;
  
  const speciesh5 = document.createElement("h5");
  speciesh5.className = "card-species";
  speciesh5.innerText = `Species: ${character.species}`;
  
  const p = document.createElement("p");
  p.className = "card-description";
  p.innerText = character.description;
  
  // append section for cards
  cardIndex.append(divCard);
  divCard.append(br3, delBtn, br1, br2, img, h4, h5, speciesh5, p);
  
  // event listener for delBtn
  delBtn.addEventListener("click", (e) => {
    // e.preventDefault()
    console.log(character.id)
    fetch(`http://localhost:3000/api/v1/characters/${character.id}`, {
      method: "DELETE",
    })
    .then(res=> res.json())
    .then(data => {
      if (data = {}) {
        divCard.remove()
      }
    })
  });
} //last line of render card

function createFormData() {
  const createCharDiv = document.querySelector("#create-character");
  const h3 = document.createElement("h3");
  h3.innerText = "Create Your Character: ";
  
  const newCharacterForm = document.createElement("form");
  
  const name = document.createElement("input");
  name.type = "text";
  name.placeholder = "Name";
  name.id = "name";
  
  const char_type = document.createElement("input");
  char_type.type = "text";
  char_type.placeholder = "Character Type";
  char_type.id = "character";
  
  const species = document.createElement("input");
  species.type = "text";
  species.placeholder = "Species";
  species.id = "species";

  // const description = document.createElement("input");
  // description.type = "text";
  // description.placeholder = "Description";
  // description.id = "description";
  
  const image = document.createElement("input");
  image.type = "text";
  image.placeholder = "Image";
  image.id = "image";
  
  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Pew-Pew!";
  
  newCharacterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let name = document.querySelector("#name").value;
    let char_type = document.querySelector("#character").value;
    
    let species = document.querySelector("#species").value;
    // console.log(species)
    // let description = document.querySelector("#description").value;
    // console.log(description)
    let image = document.querySelector("#image").value;
    // console.log(image)
    let newCharacter = 
    {name: name,
      char_type: char_type,
      species: species,
      // description: description,
      image: image}
      // console.log(newCharacter)
      
      let postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(newCharacter)
    };
    
    fetch(URLBase, postOptions)
    .then(res => res.json())
    // .then((res) => console.log(res))
    // .then(text => console.log(text))
    .then((character) => renderCharacterCard(character));
    e.target.reset();
  });
  //append for form
  newCharacterForm.append(
    name,
    char_type,
    species,
    // description,
    image,
    submitBtn
    );
    createCharDiv.append(h3, newCharacterForm);
  } //last line of Form function

  
  function characterNav() {
    const character = document.querySelector('#characters')
      character.addEventListener('click', e => {
        const cardIndex = document.querySelector('#card-index')
        // console.log(cardIndex)//grab card index and reset it
        cardIndex.innerHTML = ""
        fetch(URLBase)
          .then((res) => res.json())
          .then((characters) =>
          characters.forEach((character) => renderCharacterCard(character))
          );
      })
  
  }

  function homeNav() {
    const home = document.querySelector('#home')
    home.addEventListener('click', e => {
      const cardIndex = document.querySelector('#card-index')
      // console.log(home)
      cardIndex.innerHTML = ""
      const divHome = document.createElement('div')
      const h1 = document.createElement('h1')
      h1.innerText = "Welcome!"
      h1.style = "color: goldenrod;"
      h1.style.fontFamily = "arial"
      
      
    
      divHome.append(h1)
      cardIndex.append(divHome)
      
    })
  
  }