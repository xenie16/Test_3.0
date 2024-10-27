"use strict";

export class Pet {
   constructor({ petType, petName, petDetail, energyLevel }) {
      this.petType = petType;
      this.petName = petName;
      this.petDetail = petDetail;
      this.energyLevel = energyLevel;
   }

   feedPet() {
      if (this.energyLevel + 10 >= 100) {
         this.energyLevel = 100;
      } else {
         this.energyLevel += 10;
      }

      return this.energyLevel;
   }

   playWithPet() {
      if (this.energyLevel - 10 <= 0) {
         this.energyLevel = 0
      } else {
         this.energyLevel -= 10;
      }

      return this.energyLevel;
   }

   deletePet(petId) {
      const ul = document.getElementById(petId)
      ul.remove();
   }
}