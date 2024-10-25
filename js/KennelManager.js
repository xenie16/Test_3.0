"use strict";

import { Cat } from './Cat.js'
import { Dog } from './Dog.js';
import { GuineaPig } from './GuineaPig.js';

export class KennelManager {
   #allPetsInKennel = [];

   constructor(petConfigs) {
      this.configs = petConfigs;
      // console.log(petConfigs);

      this.addEventListeners();
   }

   addEventListeners() {
      const addPetButton = document.getElementById('addPetButton');

      addPetButton.addEventListener("click", e => {
         e.preventDefault();
         this.addPetToKennel();
      })
   }

   addPetToKennel() {
      const details = {
         petType: document.getElementById('animalTypeSelect').value,
         petName: document.getElementById('petNameInput').value,
         petDetailInput: document.getElementById('petDetailInput').value,
      }

      let newPet = '';

      switch (details.petType) {
         case 'dog':
            newPet = new Dog(details);
            break;
         case 'cat':
            newPet = new Cat(details);
            break;
         case 'guinea pig':
            newPet = new GuineaPig(details);
            break;
      }

      this.#allPetsInKennel.push(newPet)
   }
}