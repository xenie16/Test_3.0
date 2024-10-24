"use strict";

import { PetConfigs } from "./PetConfigs";
import { KennelManager } from "./KennelManager";

const petConfig = new PetConfigs().getConfig();
new KennelManager(petConfig);