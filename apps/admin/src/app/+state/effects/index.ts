import { DeleteManufacturerEffect } from "./delete-manufacturer.effect";
import { LoadManufacturerEffect } from "./load-manufacturer.effect";
import { LoadManufacturersEffect } from "./load-manufacturers.effect";
import { RouterEffects } from "./router.effects";
import { SaveManufacturerEffect } from "./save-manufacturer.effect";

export const effects = [
  DeleteManufacturerEffect,
  LoadManufacturersEffect,
  LoadManufacturerEffect,
  SaveManufacturerEffect,
  RouterEffects
];
