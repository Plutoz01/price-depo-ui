import { AuthenticatedDirective } from "@price-depo-ui/security/src/directives/authenticated/authenticated.directive";
import { HasAnyRoleDirective } from "@price-depo-ui/security/src/directives/has-any-role/has-any-role.directive";
import { HasPermissionDirective } from "@price-depo-ui/security/src/directives/has-permission/has-permission.directive";

export const directives = [
  AuthenticatedDirective,
  HasAnyRoleDirective,
  HasPermissionDirective
];
