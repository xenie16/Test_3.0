"use strict";

export class Pet {
   constructor({ petType, petName, petDetail, energyLevel }) {
      this.petType = petType;
      this.petName = petName;
      this.petDetail = petDetail;
      this.energyLevel = energyLevel;
   }

   feedPet() {
      console.log('fed')
      if (this.energyLevel + 10 >= 100) {
         this.energyLevel = 100;
      } else {
         this.energyLevel += 10;
      }

      console.log(this.energyLevel)
      return this.energyLevel;
   }

   playWithPet() {
      console.log('play')

      if (this.energyLevel - 10 <= 0) {
         this.energyLevel = 0
      } else {
         this.energyLevel -= 10;
      }

      console.log(this.energyLevel)
      return this.energyLevel;
   }

   deletePet(petId) {
      const ul = document.getElementById(petId)
      ul.remove();
   }
}