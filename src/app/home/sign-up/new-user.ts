export interface NewUser {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    birthday: Date;
    roles: string[];
}