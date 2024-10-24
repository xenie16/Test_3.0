"use strict";

import { PetConfigs } from "./PetConfigs";
import { KennelManager } from "./KennelManager";
import { FormManipulator } from "./FormManipulator.js"

export class Kennel {
   constructor() {
      this.initialize();
   }

   initialize() {
      try {
         const petConfigs = new PetConfigs().getPetConfigs();
         new FormManipulator(petConfigs);
         new KennelManager(petConfigs);
      } catch {
         console.error("Error initializing Kennel.");
      }
   }
}