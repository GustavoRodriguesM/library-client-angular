import { UserAuth } from "./../core/user/user-auth";
export interface Client {
  id: number;
  user: UserAuth;
}
