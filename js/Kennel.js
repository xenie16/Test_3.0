" use strict";

import { PetConfigs } from "./PetConfigs";
import { KennelManager } from "./KennelManager";
import { FormCreator } from "./FormCreator.js"

export class Kennel {

   initialize() {
      const petConfigs = new PetConfigs().getPetConfigs();
      new FormCreator(petConfigs);
      new KennelManager(petConfigs);
   }
}