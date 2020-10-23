function createFormData() {
    const createCharDiv = document.querySelector("#create-character");
    const h3 = document.createElement("h3");
    h3.innerText = "Create Your Character: ";
  
    const br = document.createElement("br");
  
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
  
    const description = document.createElement("input");
    description.type = "text";
    description.placeholder = "Description";
    description.id = "description";
  
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
      let description = document.querySelector("#description").value;
      // console.log(description)
      let image = document.querySelector("#image").value;
  
      // console.log(image)
      let newCharacter = {
        name: name,
        char_type: char_type,
        species: species,
        description: description,
        image: image,
      };
      // console.log(newCharacter)
  
      let postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newCharacter),
      };
  
      fetch(URLBase, postOptions)
        .then((res) => res.json())
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
      description,
      image,
      submitBtn
    );
    createCharDiv.append(h3, newCharacterForm, br);
  } //last line of Form function