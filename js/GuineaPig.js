"use strict";

import { Pet } from './Pet'

export class GuineaPig {
   constructor({ petType, petName, petDetail, energyLevel }) {
      this.petType = petType;
      this.petName = petName;
      this.petDetail = petDetail;
      this.energyLevel = energyLevel;
   }
}