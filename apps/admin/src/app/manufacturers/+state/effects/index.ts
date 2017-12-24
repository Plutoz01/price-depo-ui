import { LoadManufacturerEffect } from "./load-manufacturer.effect";
import { LoadAllManufacturersEffect } from "./load-all-manufacturers.effect";
import { ManufacturerCrudEffects } from "./manufacturer-crud.effects";
import { ManufacturerRouterEffects } from "./manufacturer-router.effects";

export const effects = [
  LoadManufacturerEffect,
  LoadAllManufacturersEffect,
  ManufacturerCrudEffects,
  ManufacturerRouterEffects
];
