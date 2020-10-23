URLBase = "http://localhost:3000/api/v1/characters/";
let charArray = [];
document.addEventListener("DOMContentLoaded", () => {
  console.log("HTML is loaded!");
  fetch(URLBase)
    .then((res) => res.json())
    .then((characters) => {
      charArray = characters;
      // characters.forEach((character) => pathNav(character));
    });

  // createFormData();
  // characterNav();
  homeNav();
  path.addEventListener("click", (e) => {
    pathNav();
  })
  const character = document.querySelector("#characters");
      character.addEventListener("click", (e) => {
        characterNav();
      })
      const home = document.querySelector("#home");
      home.addEventListener("click", (e) => {
        homeNav();
      })
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
      console.log(character.id);
      fetch(`http://localhost:3000/api/v1/characters/${character.id}`, {
        method: "DELETE",
      })
      .then((res) => res.json())
      .then((data) => {
        if ((data = {})) {
          divCard.remove();
        }
      });
    });
  } //last line of render card
  
  function createFormData(type) {
    const cardIndex = document.querySelector("#card-index");
    const h3 = document.createElement("h3");
    h3.innerText = "Create Your Character: ";
    
    const br = document.createElement("br");
    const br2 = document.createElement("br");
    
    if(document.querySelector("#form")){
      document.querySelector("#form").remove();
    }
    const newCharacterForm = document.createElement("form");
    newCharacterForm.id = "form"
    
    const name = document.createElement("input");
    name.type = "text";
    name.placeholder = "Name";
    name.id = "name";
    
    // const char_type = document.createElement("input");
    // char_type.type = "text";
    // char_type.placeholder = "Character Type";
    // char_type.id = "character";
    
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
      // let char_type = document.querySelector("#character").value;
      
      let species = document.querySelector("#species").value;
      // console.log(species)
      let description = document.querySelector("#description").value;
      // console.log(description)
      let image = document.querySelector("#image").value;
      
      // console.log(image)
      let newCharacter = {
        name: name,
        char_type: type,
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
      .then((character) => {
        renderCharacterCard(character)
        charArray.push(character)
      })
      e.target.reset();
    });
    //append for form
    newCharacterForm.append(
      h3,
      name,
      // char_type,
      species,
      description,
      image,
      submitBtn,
      br,
      br2
      );

      cardIndex.append(newCharacterForm);
    } //last line of Form function
    
    function characterNav() {
      // const character = document.querySelector("#characters");
      // character.addEventListener("click", (e) => {
        const cardIndex = document.querySelector("#card-index");
        // console.log(cardIndex)//grab card index and reset it
        cardIndex.innerHTML = "";
        // fetch(URLBase)
        // .then((res) => res.json())
        // .then((characters) =>
        charArray.forEach((character) => renderCharacterCard(character))
        
        // document.querySelector(".starwars-demo").style.display = "none"
      // });
    }
    
    function homeNav() {
      
        const cardIndex = document.querySelector("#card-index");
        cardIndex.innerHTML = "";
        const fade = document.createElement("div")
        fade.className = "fade"
        const starwars = document.createElement('section')
        starwars.className = "star-wars"
        const crawl = document.createElement('div')
        crawl.className = "crawl"
        const title = document.createElement('div')
        title.className = "title"
        const p1 = document.createElement('p')
        p1.innerText = "Episode Mod III"
        const hope = document.createElement('h1')
        hope.innerText = "A New Hope"
        const p2 = document.createElement('p')
        p2.innerText = "Help us, Payton and Stephanie! You're our only hope! It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire."
        const p3 = document.createElement('p')
        p3.innerText = "During the battle, Rebel spies Payton and Stephanie, managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet."
        const p4 = document.createElement('p')
        p4.innerText = "Pursued by the Empire’s sinister agents and the notorious gangster Jabba the Hut, our heros races to the rebel base aboard their starship, custodian of the stolen plans that can save the people and restore freedom to the galaxy…."
        // p2.append(p3)
        title.append(p1, hope)
        crawl.append(title, p2, p3, p4)
        starwars.append(crawl)
        
        
        const cl = document.createElement('div')
        cl.className = "container-logo"
        const center = document.createElement('center')
        const starWarsDemo = document.createElement('div')
        starWarsDemo.className = "starwars-demo"
        const img1 = document.createElement('img')
        img1.src = "images/star.svg"
        img1.className = "star"
        const br1 = document.createElement('br')
        const br2 = document.createElement('br')
        const br3 = document.createElement('br')
        const br4 = document.createElement('br') 
        const br5 = document.createElement('br')
        const br6 = document.createElement('br')
        const br7 = document.createElement('br')
        const br8 = document.createElement('br') 
        const h2 = document.createElement('h2')
        h2.className = "byline"
        h2.id = "byline"
        h2.innerText = "Stephanie Payton" 
        const img2 = document.createElement('img')
        img2.src = "images/wars.svg"
        img2.className = "wars"
        
        starWarsDemo.append(img1, br1, br2, br3, br4, h2, img2)
        center.append(starWarsDemo)
        cl.append(center)
        
        
        
        
          // console.log(home)
          const divHome = document.createElement("div");
          const h1 = document.createElement("h1");
        const byline = document.getElementById('byline');     // Find the H2
        bylineText = h2.innerText;                                      // Get the content of the H2
        bylineArr = bylineText.split('');                                   // Split content into array
        h2.innerHTML = '';                                                      // Empty current content
        
        var span;                   // Create variables to create elements
        var letter;
        
        for(i=0;i<bylineArr.length;i++){                                    // Loop for every letter
          span = document.createElement("span");                    // Create a <span> element
          letter = document.createTextNode(bylineArr[i]);   // Create the letter
          if(bylineArr[i] == ' ') {                                             // If the letter is a space...
            h2.appendChild(letter);                 // ...Add the space without a span
          } else {
              span.appendChild(letter);                       // Add the letter to the span
              h2.appendChild(span);                   // Add the span to the h2
            }
          }
          
          
          
          divHome.append(h1)
      
          cardIndex.append(br1, br2, br3, br4, br5, br6, br7, br8, divHome, cl, fade, starwars)
          
          // //append section
          
        }
        
    function pathNav() {
      const cardIndex = document.querySelector("#card-index");
      cardIndex.innerHTML = "";
      // const path = document.querySelector("#path");
      // path.addEventListener("click", (e) => {
        // console.log(home)
        const pathContainer = document.createElement("div");
        pathContainer.id = "pcontainer";
        // const br = document.createElement('br')
        const h1 = document.createElement("h1");
        h1.innerText = "Fulfill Your Destiny...";
        h1.style = "color: goldenrod;";
        h1.style.fontFamily = "arial";
        
        const br1 = document.createElement("br");
        const br2 = document.createElement("br");
        const br3 = document.createElement("br");
        // document.querySelector(".starwars-demo").style.display = "none"
        // document.querySelector(".star-wars").style.display = "none"
        // document.querySelector('create-character').style.display = ""
        
        const pathBtn = document.createElement("button");
        pathBtn.innerText = "Choose Your Path";
        
        pathBtn.addEventListener("click", (e) => {
          if (document.querySelector("#results")) {
            document.querySelector("#results").remove();
          }
          let charTypeList = [];
          charArray.filter(function (obj) {
            charTypeList.push(obj.char_type);
          });
          
          const randomPath =
          charTypeList[Math.floor(Math.random() * charTypeList.length)];
          const results = document.createElement("p");
          results.className = "path-results";
          // document.createElement("#character").value = randomPaths;
          
          results.innerText = `Fulfill your destiny, you must! ${randomPath} you are to become!`;
          results.style.fontSize = "x-large";
          
          // const pathContainer = document.querySelector("#pcontainer");
          const resultsDiv = document.createElement("div");
          resultsDiv.id = "results";
          resultsDiv.append(results);
          pathContainer.append(resultsDiv);
          createFormData(randomPath);
        });
        //append section
        pathContainer.append(h1, br1, br2, pathBtn);
        cardIndex.append(pathContainer);
      
    }
  

