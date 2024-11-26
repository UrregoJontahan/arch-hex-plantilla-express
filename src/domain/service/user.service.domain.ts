import { User } from "../entity/user.entity";
import { UserInterfacePortIn } from "../ports/in/user.interfaces.portIn";
import { UserInterfacePortOutRepository } from "../ports/out/user.interface.portOut";

export class UserServiceDomain implements UserInterfacePortIn{
    constructor( private readonly userInterfacePortOut: UserInterfacePortOutRepository){}
    
    async createUser(user: User): Promise<User> {
        return await this.userInterfacePortOut.saveUser(user);
        
    }
    
    async getUsers(): Promise<User[]> {
        return await this.userInterfacePortOut.getUsers();
    }
    
    async getUser(id: string): Promise<User> {
        return await this.userInterfacePortOut.findUserById(id)
    }
    
    async upddateUser(id: string, user: User): Promise<User> {
        return await this.userInterfacePortOut.upddateUser( id, user)
    }
    
    async deleteUser(id: string): Promise<void> {
         await this.userInterfacePortOut.deleteUser(id)
    }
    
}