import { User } from "../../entity/user.entity";

export interface UserInterfacePortIn {
    createUser(user: User): Promise<User>;
    getUsers(): Promise<User[]>;
    getUser( id: string ): Promise<User>;
    upddateUser(id: string, user:User ): Promise<User>;
    deleteUser( id: string ): Promise<void>;
}