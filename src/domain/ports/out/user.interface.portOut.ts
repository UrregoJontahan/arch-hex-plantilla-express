import { User } from "../../entity/user.entity";

export interface UserInterfacePortOutRepository {
    saveUser(user: User): Promise<User>;
    getUsers(): Promise<User[]>;
    findUserById( id: string ): Promise<User>;
    upddateUser(id: string, user:User ): Promise<User>;
    deleteUser( id: string ): Promise<void>;
}