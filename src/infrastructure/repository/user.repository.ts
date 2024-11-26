import { User } from "../../domain/entity/user.entity";
import { UserInterfacePortOutRepository } from "../../domain/ports/out/user.interface.portOut";

export class UserRepository implements UserInterfacePortOutRepository {
    
    users:User[] = [];


    async saveUser(user: User): Promise<User> {
        this.users.push(user)
        return user;
    }
    
    async getUsers(): Promise<User[]> {
        return this.users.map( users => users)
    }
    
    async findUserById(id: string): Promise<User> {
        if (!id) {
            throw new Error("Usuario no encontrado");
        }
    
        const user = this.users.find(user => user.id === id);
        
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
    
        return user;
    }

    async upddateUser(id: string, user: User): Promise<User> {
        if (!id) {
            throw new Error("Debes agregar un id");
        }
    
        const userFindIndex = this.users.findIndex(user => user.id === id);
        
        if (userFindIndex === -1) {
            throw new Error("Usuario no encontrado");
        }

        const existing = this.users[userFindIndex]
    
        const updateUser = new User(
            existing.id,
            user.name || existing.name,
            user.lastName || existing.lastName
        )

        this.users[userFindIndex] = updateUser;

        return updateUser;
    }
    
    async deleteUser(id: string): Promise<void> {
        if(!id){
            throw new Error("Debes agregar un id");
        }

        const userIndex = this.users.findIndex( u => u.id === id);

        if(userIndex === -1){
            throw new Error("Usuario no encontrado");
        }

        this.users.splice( userIndex, 1)
    }
    
}