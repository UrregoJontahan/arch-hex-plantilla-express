import { UserApplicationService } from "../../application/service/user.service.application";
import { UserDto } from "../../application/dto/user.dto";

export class UserController {
    constructor( private readonly userServiceApplication: UserApplicationService ){}

    async createUser(userDto: UserDto): Promise<UserDto>{
        const user = await this.userServiceApplication.createUser(userDto);
        return user;
    }

    async getUsers(): Promise<UserDto[]>{
        return await this.userServiceApplication.getUsers();
    }

    async findUserById( id: string ): Promise<UserDto>{
        const user = await this.userServiceApplication.findUserById(id);
        return user
    }

    async updateUser( id: string, userDto: UserDto ): Promise<UserDto>{
        return await this.userServiceApplication.updateUser(id, userDto);
    }

    async deleteUser( id: string ){
         await this.userServiceApplication.deleteUser(id);
    }
}