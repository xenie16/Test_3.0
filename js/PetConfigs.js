"use strict";

export class PetConfigs {
   #configs = {
      animals: {
         dog: {
            "extra info": "breed",
            "energy level": 100,
            isDropdown: false,
         },
         cat: {
            "extra info": "FIV vaccinated",
            "energy level": 100,
            isDropdown: true,
         },
         "guinea pig": {
            "extra info": "color",
            "energy level": 100,
            isDropdown: false,
         }
      }
   }

   getConfig() {
      return this.#configs.animals;
   }
}