"use strict";

export class FormHandler {
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
      animalTypeSelect.innerHTML = '';

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
            petDetails.textContent = value['extra info'];

            if (value.dropdownOptions) {
               const select = document.createElement('select');
               select.id = 'petDetailInput';

               value.dropdownOptions.forEach((element) => {
                  const option = document.createElement('option');
                  option.textContent = element;
                  option.value = element;

                  select.appendChild(option);
               })
               petDetails.appendChild(select);
            } else {
               const input = document.createElement('input');
               input.type = 'text';
               input.id = 'petDetailInput';
               input.required = true;

               petDetails.appendChild(input);
            }
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

   resetForm() {
      const petTypeSelect = document.getElementById('animalTypeSelect');
      const petNameInput = document.getElementById('petNameInput');
      const petDetailInput = document.getElementById('petDetailInput');

      petTypeSelect.selectedIndex = 0;
      petNameInput.value = '';
      petDetailInput.value = '';
   }
}