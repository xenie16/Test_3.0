"use strict";

export class PetConfigs {
   #configs = {
      animals: {
         dog: {
            "extra info": "breed",
            "energy level": 100,
         },
         cat: {
            "extra info": "FIV vaccinated",
            "energy level": 100,
            dropdownOptions: ['yes', 'no']

         },
         "guinea pig": {
            "extra info": "color",
            "energy level": 100,
         }
      }
   }

   getPetConfigs() {
      return this.#configs.animals;
   }
}