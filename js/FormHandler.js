"use strict";

export class FormHandler {
   #animalTypeSelect = document.getElementById('animalTypeSelect');
   #petDetails = document.getElementById('petDetails');
   #petNameInput = document.getElementById('petNameInput');
   #selectedPet;
   #changeListener;

   constructor(petConfigs) {
      this.petConfigs = petConfigs
      this.modifyForm();
   }
   modifyForm() {
      this.addPetTypes();
      this.updateDetailsField()
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
      const petDetails = this.#petDetails;
      const selectedPet = this.#selectedPet;

      petDetails.innerHTML = '';

      for (const [key, value] of Object.entries(this.petConfigs)) {
         if (key === selectedPet) {
            petDetails.textContent = value['extra info'];

            if (value.dropdownOptions) {
               this.createDropdown(value);
            } else {
               this.createTextInput();
            }
         }
      }
   }

   createDropdown(value) {
      const select = document.createElement('select');
      select.id = 'petDetailInput';

      value.dropdownOptions.forEach((element) => {
         const option = document.createElement('option');
         option.textContent = element;
         option.value = element;

         select.appendChild(option);
      })
      petDetails.appendChild(select);
   }

   createTextInput() {
      const input = document.createElement('input');
      input.type = 'text';
      input.id = 'petDetailInput';
      input.required = true;

      petDetails.appendChild(input);
   }

   updateDetailsField() {
      if (this.#changeListener) {
         this.#animalTypeSelect.removeEventListener("change", this.#changeListener);
      }

      this.#selectedPet = this.#animalTypeSelect.value;

      this.#changeListener = this.debounce(() => {
         this.#selectedPet = this.#animalTypeSelect.value;
         this.addPetDetails();
      }, 100);

      this.#animalTypeSelect.addEventListener("change", this.#changeListener);
   }

   debounce(func, wait) {
      let timeout;
      return (...args) => {
         clearTimeout(timeout);
         timeout = setTimeout(() => func.apply(this, args), wait);
      };
   }

   resetForm() {
      this.#animalTypeSelect.selectedIndex = 0;
      this.#petNameInput.value = '';

      this.#selectedPet = this.#animalTypeSelect.value;

      this.addPetDetails();

   }
}