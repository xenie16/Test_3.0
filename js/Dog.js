"use strict";

import { Pet } from "./Pet";

export class Dog {

   constructor({ petName, petDetailInput }) {
      this.petType = 'dog';
      this.petName = petName;
      this.petDetailInput = petDetailInput;
      this.energyLevel = 100;
   }
}