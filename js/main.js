"use strict";

import { AppInitializer } from "./AppInitializer.js";

try {
   new AppInitializer();
} catch {
   console.error(`Error initializing Kennel application: ${error}`);
}