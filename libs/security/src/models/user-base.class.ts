import * as immutable from 'immutable';

export class UserBase {

  readonly roles: immutable.Set<string>;
  readonly permissions: immutable.Set<string>;


  constructor( roles?: string[], permissions?: string[] ) {
    this.roles = immutable.Set( roles || [] );
    this.permissions = immutable.Set( permissions || [] );
  }

  get isAuthenticated(): boolean {
    return !this.roles.isEmpty();
  }

  hasPermission( desiredPermission: string ): boolean {
    return this.permissions.some( ( ownedPermission: string ) => ownedPermission === desiredPermission );
  }

  hasAnyRole( acceptedRoles: string[] ): boolean {
    return acceptedRoles.some( ( acceptedRole: string ) => this.roles.contains( acceptedRole ) );
  }
}
