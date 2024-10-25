"use strict";

import { PetConfigs } from "./PetConfigs.js";
import { KennelManager } from "./KennelManager.js";
import { FormHandler } from "./FormHandler.js"
import { PetDisplayer } from "./PetDisplayer.js";

export class AppInitializer {
   constructor() {
      this.initialize();
   }

   initialize() {
      const petConfigs = new PetConfigs().getPetConfigs();
      const kennelManager = new KennelManager(petConfigs);

      new FormHandler(petConfigs);
      new PetDisplayer(kennelManager);
   }
}