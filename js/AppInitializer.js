"use strict";

import { PetConfigs } from "./PetConfigs.js";
import { KennelManager } from "./KennelManager.js";
import { FormManipulator } from "./FormManipulator.js"
import { PetDisplayer } from "./PetDisplayer.js";

export class AppInitializer {
   constructor() {
      this.initialize();
   }

   initialize() {
      try {
         const petConfigs = new PetConfigs().getPetConfigs();
         new FormManipulator(petConfigs);
      const kennelManager = new KennelManager(petConfigs);
      new PetDisplayer(kennelManager);
   }
}