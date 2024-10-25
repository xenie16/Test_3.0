"use strict";

import { Pet } from './Pet'

export class GuineaPig {
   constructor({ petName, petDetailInput }) {
      this.petType = 'guinea pig';
      this.petName = petName;
      this.petDetailInput = petDetailInput;
      this.energyLevel = 100;
   }
}