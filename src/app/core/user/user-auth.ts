export interface UserAuth {
    user_name: string;
    scopes: string[];
    active: boolean;
    authorities: string[];
}