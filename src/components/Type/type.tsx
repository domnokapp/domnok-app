export type UserContact = {
    userId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export type UserModel = {
    id: number | undefined;
    code: string | undefined;
    name: string | undefined;
    teamName: string | undefined;
    photoUrl: string | undefined;
};