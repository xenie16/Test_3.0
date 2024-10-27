"use strict";

export class PetDisplayer {
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
      const playPetButton = document.getElementById(`play-${petId}`);
      const feedPetButton = document.getElementById(`feed-${petId}`);
      const deletePetButton = document.getElementById(`delete-${petId}`);

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
      const energyLevelLi = document.querySelector(`#${petId} .energyLevel`);
      energyLevelLi.textContent = `energyLevel: ${newEnergyLevel}`
   }
}