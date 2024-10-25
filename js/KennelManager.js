"use strict";

import { PetDisplayer } from "./PetDisplayer.js";

import { Cat } from './Cat.js'
import { Dog } from './Dog.js';
import { GuineaPig } from './GuineaPig.js';

export class KennelManager {
   #allPetsInKennel = [];

   constructor(petConfigs) {
      this.petConfigs = petConfigs;

      this.addEventListeners();
   }

   addEventListeners() {
      const addPetButton = document.getElementById('addPetButton');
      const petDisplayer = new PetDisplayer()

      addPetButton.addEventListener("click", e => {
         e.preventDefault();
         this.addPetToKennel();
         petDisplayer.showAllPets(this.#allPetsInKennel);
      })
   }

   addPetToKennel() {
      const details = {
         petType: document.getElementById('animalTypeSelect').value,
         petName: document.getElementById('petNameInput').value,
         petDetail: document.getElementById('petDetailInput').value,
      }

      let newPet = '';

      switch (details.petType) {
         case 'dog':
            details.energyLevel = this.petConfigs.dog['energy level'];
            newPet = new Dog(details);
            break;
         case 'cat':
            details.energyLevel = this.petConfigs['guinea pig']['energy level'];
            newPet = new Cat(details);
            break;
         case 'guinea pig':
            details.energyLevel = this.petConfigs.cat['energy level'];
            newPet = new GuineaPig(details);
            break;
      }

      this.#allPetsInKennel.push(newPet);
      console.log(this.#allPetsInKennel);
   }
}