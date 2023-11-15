export function createHtmlForPerson(person) {
    const personContainer = document.createElement("div");
    const nameTag = document.createElement("p");
    const genderTag = document.createElement("p");
    const ageTag = document.createElement("p");

  
    personContainer.className = "card";
    personContainer.addEventListener("click", () => {
      console.log(person);
    });
    nameTag.innerHTML = person.name;
    genderTag.innerHTML = person.gender;
    ageTag.innerHTML = person.dateOfBirth;

    personContainer.appendChild(nameTag);
    personContainer.appendChild(genderTag);
    personContainer.appendChild(ageTag);
    document.body.appendChild(personContainer);
  }