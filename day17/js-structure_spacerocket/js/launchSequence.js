// Implement the launch sequence function here and export it as the default export.

import { countdown } from "./core/countdown";
import { fuel } from "./core/fuel";
import { liftoff } from "./core/liftoff";
import { loadPayload } from "./core/load";

export default function launchSequenceFunction() {
  loadPayload();
  fuel();
  for (let i = 5; i > 0; i--) {
    countdown();
  }
  liftoff;
}
