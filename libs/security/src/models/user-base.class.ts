import { UserRole } from "./user-role.enum";
import * as immutable from "immutable";

export class UserBase {

  readonly role: UserRole;
  readonly permissions: immutable.Set<string>;


  constructor( role?: UserRole, permissions?: string[] ) {
    this.role = role || UserRole.ANONYMOUS;
    this.permissions = immutable.Set( permissions || [] );
  }

  get isAuthenticated(): boolean {
    return this.role !== UserRole.ANONYMOUS;
  }

  hasPermission( desiredPermission: string ): boolean {
    return this.permissions.some( ( ownedPermission ) => ownedPermission === desiredPermission );
  }
}
