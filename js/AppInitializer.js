"use strict";

import { PetConfigs } from "./PetConfigs.js";
import { KennelManager } from "./KennelManager.js";
import { FormHandler } from "./FormHandler.js"

export class AppInitializer {
   constructor() {
      this.initialize();
   }

   initialize() {
      const petConfigs = new PetConfigs().getPetConfigs();
      const formHandler = new FormHandler(petConfigs);

      new KennelManager({ petConfigs, formHandler });
   }
}