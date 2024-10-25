"use strict";

import { PetConfigs } from "./PetConfigs.js";
import { KennelManager } from "./KennelManager.js";
import { FormManipulator } from "./FormManipulator.js"

export class AppInitializer {
   constructor() {
      this.initialize();
   }

   initialize() {
      try {
         const petConfigs = new PetConfigs().getPetConfigs();
         new FormManipulator(petConfigs);
         new KennelManager(petConfigs);
      } catch {
         console.error(`Error initializing Kennel: ${error}`);
      }
   }
}