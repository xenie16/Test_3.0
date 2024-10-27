"use strict";

import { PetDisplayer } from "./PetDisplayer.js";

import { Cat } from './Cat.js'
import { Dog } from './Dog.js';
import { GuineaPig } from './GuineaPig.js';

export class KennelManager {
   #pets = new Set();

   constructor({ petConfigs, formHandler }) {
      this.petConfigs = petConfigs;
      this.formHandler = formHandler;
      this.addEventListeners();
   }

   addEventListeners() {
      const petForm = document.getElementById('petForm');

      petForm.addEventListener("submit", e => {
         e.preventDefault();
         this.addPetToKennel();
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
            details.energyLevel = this.petConfigs.cat['energy level'];
            newPet = new Cat(details);
            break;
         case 'guinea pig':
            details.energyLevel = this.petConfigs['guinea pig']['energy level'];
            newPet = new GuineaPig(details);
            break;
      }

      this.#pets.add(newPet);
      const petDisplayer = new PetDisplayer({ allPets: this.#pets, petConfigs: this.petConfigs });
      petDisplayer.showPet(newPet);

      this.formHandler.resetForm();
   }
}