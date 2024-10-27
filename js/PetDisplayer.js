"use strict";

export class PetDisplayer {

   constructor({ allPets, petConfigs }) {
      this.allPets = allPets;
      this.petConfigs = petConfigs;
   }

   showPet(newPet) {
      const allPetsSection = document.getElementById('allPetsSection');
      const ul = document.createElement('ul');

      const petId = `pet-${Date.now()}`
      ul.id = petId;

      this.addPetDetails(ul, allPetsSection, newPet);
      this.addPetButtons(ul, newPet, petId);
   }

   addPetDetails(ul, allPetsSection, newPet) {

      for (let [key, value] of Object.entries(newPet)) {
         const li = document.createElement('li');
         li.className = `${key}`;

         switch (key) {
            case 'petType':
               key = 'Type';
               li.textContent = `${key}: ${value}`;
               break;
            case 'petName':
               key = 'Name';
               li.textContent = `${key}: ${value}`;
               break;
            case 'petDetail':
               const petType = newPet.petType;
               key = this.petConfigs[petType]['extra info'];
               li.textContent = `${key}: ${value}`;
               break;
            case 'energyLevel':
               key = 'Energy';
               li.textContent = `${key}: ${value}`
               break;
         }

         ul.appendChild(li);
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
      this.addEventListeners(newPet, petId);
   }

   addEventListeners(newPet, petId) {
      const playWithAllButton = document.getElementById('playWithAllButton');
      const feedAllButton = document.getElementById('feedAllButton');

      const playPetButton = document.getElementById(`play-${petId}`);
      const feedPetButton = document.getElementById(`feed-${petId}`);
      const deletePetButton = document.getElementById(`delete-${petId}`);

      playWithAllButton.addEventListener("click", () => {
         const newEnergyLevel = newPet.playWithPet();
         this.updateEnergy({ petId, newEnergyLevel });
      })

      feedAllButton.addEventListener("click", () => {
         const newEnergyLevel = newPet.feedPet();
         this.updateEnergy({ petId, newEnergyLevel });
      })

      playPetButton.addEventListener("click", () => {
         const newEnergyLevel = newPet.playWithPet();
         this.updateEnergy({ petId, newEnergyLevel });
      });

      feedPetButton.addEventListener("click", () => {
         const newEnergyLevel = newPet.feedPet();
         this.updateEnergy({ petId, newEnergyLevel });
      });

      deletePetButton.addEventListener("click", () => {
         newPet.deletePet(petId);
      });
   }

   updateEnergy({ petId, newEnergyLevel }) {
      let energyLevelLi;

      if (petId) {
         energyLevelLi = document.querySelector(`#${petId} .energyLevel`);
         energyLevelLi.textContent = `Energy: ${newEnergyLevel}`;
      } else {
         energyLevelLi = document.querySelectorAll('.energyLevel');
         energyLevelLi.forEach(liItem => {
            liItem.textContent = `Energy: ${newEnergyLevel}`;
         })
      }
   }
}