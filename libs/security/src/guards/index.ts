import { AuthenticatedGuard } from './authenticated.guard';
import { HasAllPermissionsGuard } from './has-all-permissions.guard';

export const guards = [
  AuthenticatedGuard,
  HasAllPermissionsGuard
];
