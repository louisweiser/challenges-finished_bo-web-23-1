// Implement the launch sequence function here and export it as the default export.

import { countdown } from "./core/countdown.js";
import { fuel } from "./core/fuel.js";
import { liftoff } from "./core/liftoff.js";
import { loadPayload } from "./core/load.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { deployPayload } from "./core/deploy.js";

export default function launchSequenceFunction() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  fuel();
  for (let i = 0; i < 5; i++) {
    countdown();
  }
  liftoff;
  //deployPayload();
}
