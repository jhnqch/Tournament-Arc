// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AccountProfile, AccountRecovery, RegisteredUser, Login } = initSchema(schema);

export {
  AccountProfile,
  AccountRecovery,
  RegisteredUser,
  Login
};