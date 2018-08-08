import { UserAuth } from "./user-auth";
export interface Client {
  id: number;
  user: UserAuth;
}
