"use strict";

export class PetDisplayer {

   constructor(allPets) {
      this.allPets = allPets;
   }

   // showAllPets(allPets) {
   //    this.allPets = allPets;

   //    const ourPetsTitle = document.getElementById('ourPetsTitle');

   //    for (const pet in this.allPets) {
   //       const petType = this.allPets[pet].petType;
   //       const petName = this.allPets[pet].petName;
   //       const petDetail = this.allPets[pet].petDetail;
   //       const energyLevel = this.allPets[pet].energyLevel;

   //       const ul = document.createElement('ul');
   //       console.log(ul)
   //       ourPetsTitle.insertAdjacentElement("afterend", ul);

   //       const petCard = `
   //       <li><span class="bold">Pet type: </span>${petType}</li>
   //       <li><span class="bold">Name: </span>${petName}</li>
   //       <li><span class="bold">Details: </span>${petDetail}</li>
   //       <li><span class="bold">Energy: </span>${energyLevel}</li>
   //       `
   //       ul.insertAdjacentHTML('beforeend', petCard);
   //    }
   // }

   showPet(newPet) {
      const allPetsSection = document.getElementById('allPetsSection');
      const ul = document.createElement('ul');

      const petId = `pet-${Date.now()}`
      ul.id = petId

      this.addPetDetails(ul, allPetsSection, newPet);
      this.addPetButtons(ul, newPet, petId);
   }

   addPetDetails(ul, allPetsSection, newPet) {

      for (const [key, value] of Object.entries(newPet)) {
         const li = document.createElement('li');
         li.textContent = `${key}: ${value}`
         li.className = `${key}`

         ul.appendChild(li)
      }

      allPetsSection.appendChild(ul);
   }

   addPetButtons(ul, newPet, petId) {
      const li = document.createElement('li');
      const buttonTypes = ['Play', 'Feed', 'Delete'];

      buttonTypes.forEach((type => {
         const button = document.createElement('button');
         button.textContent = type;
         button.id = `${type.toLowerCase()}-${petId}`;
         li.appendChild(button);
      }))

      ul.appendChild(li);
      this.addEventListeners(newPet, petId)
   }

   addEventListeners(newPet, petId) {
      const playWithAllButton = document.getElementById('playWithAllButton');
      const feedAllButton = document.getElementById('feedAllButton');

      const playPetButton = document.getElementById(`play-${petId}`);
      const feedPetButton = document.getElementById(`feed-${petId}`);
      const deletePetButton = document.getElementById(`delete-${petId}`);

      playWithAllButton.addEventListener("click", () => {
         const newEnergyLevel = newPet.playWithPet();
         this.updateEnergy({ newEnergyLevel });
      })

      feedAllButton.addEventListener("click", () => {

      })

      playPetButton.addEventListener("click", () => {
         const newEnergyLevel = newPet.playWithPet()
         this.updateEnergy({ petId, newEnergyLevel });
      });

      feedPetButton.addEventListener("click", () => {
         const newEnergyLevel = newPet.feedPet()
         this.updateEnergy({ petId, newEnergyLevel });
      });

      deletePetButton.addEventListener("click", () => {
         newPet.deletePet(petId)
      });
   }

   updateEnergy({ petId, newEnergyLevel }) {
      let energyLevelLi;
      console.log(newEnergyLevel)

      if (petId) {
         energyLevelLi = document.querySelector(`#${petId} .energyLevel`);
         energyLevelLi.textContent = `energyLevel: ${newEnergyLevel}`
      } else {
         energyLevelLi = document.querySelectorAll('.energyLevel');
         energyLevelLi.forEach(liItem => {
            liItem.textContent = `energyLevel: ${newEnergyLevel}`
         })
      }
   }
}