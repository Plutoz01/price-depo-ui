import { AuthenticatedGuard } from "@price-depo-ui/security/src/guards/authenticated.guard";
import { HasAllPermissionsGuard } from "@price-depo-ui/security/src/guards/has-all-permissions.guard";

export const guards = [
  AuthenticatedGuard,
  HasAllPermissionsGuard
];
