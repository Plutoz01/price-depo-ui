import { UserBase } from "../models/user-base.class";

export interface SecurityState {
  readonly user: UserBase;
}
