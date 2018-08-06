export interface UserAuth {
  id: number;
  user_name: string;
  name: string;
  scopes: string[];
  active: boolean;
  exp: number;
  authorities: string[];
}
