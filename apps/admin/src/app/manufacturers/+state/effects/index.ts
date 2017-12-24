import { DeleteManufacturerEffect } from "./delete-manufacturer.effect";
import { LoadManufacturerEffect } from "./load-manufacturer.effect";
import { LoadAllManufacturersEffect } from "./load-all-manufacturers.effect";
import { ManufacturerRouterEffects } from "./manufacturer-router.effects";
import { SaveManufacturerEffect } from "./save-manufacturer.effect";

export const effects = [
  DeleteManufacturerEffect,
  LoadManufacturerEffect,
  LoadAllManufacturersEffect,
  ManufacturerRouterEffects,
  SaveManufacturerEffect
];
