"use strict";

export class FormManipulator {
   #animalTypeSelect = document.getElementById('animalTypeSelect');
   #selectedPet;

   constructor(petConfigs) {
      this.petConfigs = petConfigs
      this.modifyForm();
   }
   modifyForm() {
      this.addPetTypes();
      this.addPetDetails();
   }

   addPetTypes() {
      const animalTypeSelect = this.#animalTypeSelect;

      for (const property in this.petConfigs) {
         const option = document.createElement('option');
         option.textContent = property;
         option.value = property;

         animalTypeSelect.appendChild(option);
      }
   }

   addPetDetails() {
      this.updateDetailsField();

      const petDetails = document.getElementById('petDetails');
      const petConfigs = this.petConfigs;
      const selectedPet = this.#selectedPet;

      petDetails.innerHTML = '';

      for (const [key, value] of Object.entries(petConfigs)) {
         if (key === selectedPet) {
            const label = document.createElement('label');
            label.textContent = value['extra info'];

            if (value.dropdownOptions) {
               const select = document.createElement('select');
               value.dropdownOptions.forEach((element) => {
                  const option = document.createElement('option');
                  option.textContent = element;
                  option.value = element;

                  select.appendChild(option);
               })
               label.appendChild(select);
            } else {
               const input = document.createElement('input');
               input.type = 'text';

               label.appendChild(input);
            }

            petDetails.appendChild(label);
         }

      }
   }

   updateDetailsField() {
      this.#selectedPet = this.#animalTypeSelect.value;

      this.#animalTypeSelect.addEventListener("change", () => {
         this.#selectedPet = this.#animalTypeSelect.value;
         this.addPetDetails()
      })
   }
}