"use strict";

import { Kennel } from "./Kennel.js";

try {
   new Kennel();
} catch {
   console.error("Error initializing Kennel application.");
}