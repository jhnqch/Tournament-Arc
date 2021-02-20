import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class AccountProfile {
  readonly id: string;
  readonly username?: string;
  readonly homePage?: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly bio?: string;
  constructor(init: ModelInit<AccountProfile>);
  static copyOf(source: AccountProfile, mutator: (draft: MutableModel<AccountProfile>) => MutableModel<AccountProfile> | void): AccountProfile;
}

export declare class AccountRecovery {
  readonly id: string;
  readonly securityQuestion1: string;
  readonly securityQuestion2: string;
  readonly securityQuestion3: string;
  readonly securityAnswer1: string;
  readonly securityAnswer2: string;
  readonly securityAnswer3: string;
  readonly email?: string;
  constructor(init: ModelInit<AccountRecovery>);
  static copyOf(source: AccountRecovery, mutator: (draft: MutableModel<AccountRecovery>) => MutableModel<AccountRecovery> | void): AccountRecovery;
}

export declare class RegisteredUser {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly Login?: Login;
  readonly AccountRecovery?: AccountRecovery;
  readonly AccountProfile?: AccountProfile;
  constructor(init: ModelInit<RegisteredUser>);
  static copyOf(source: RegisteredUser, mutator: (draft: MutableModel<RegisteredUser>) => MutableModel<RegisteredUser> | void): RegisteredUser;
}

export declare class Login {
  readonly id: string;
  readonly password: string;
  constructor(init: ModelInit<Login>);
  static copyOf(source: Login, mutator: (draft: MutableModel<Login>) => MutableModel<Login> | void): Login;
}