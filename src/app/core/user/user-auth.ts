export interface UserAuth {
  user_name: string;
  name: string;
  scopes: string[];
  active: boolean;
  exp: number;
  authorities: string[];
}
