import { SecurityState } from "@price-depo-ui/security/src/+state/security.state";
import { UserBase } from "@price-depo-ui/security/src/models/user-base.class";
import { UserRole } from "@price-depo-ui/security/src/models/user-role.enum";

export const securityInitState: SecurityState = {
    user: new UserBase( UserRole.ANONYMOUS )
};
