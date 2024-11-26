import { UserInterfacePortOutRepository } from "../../domain/ports/out/user.interface.portOut";
import { UserDto } from "../dto/user.dto";
import { UserMapper } from "../mapper/user.mapper";

export class UserApplicationService {
    constructor(private readonly userInterfacePortOut: UserInterfacePortOutRepository){}

    async createUser( userDto: UserDto ): Promise<UserDto>{
        const user = UserMapper.ToEntity(userDto);
        const createUser = await this.userInterfacePortOut.saveUser(user);

        return UserMapper.toDto(createUser);
    }

    async getUsers(): Promise<UserDto[]>{
        const users = await this.userInterfacePortOut.getUsers();
        return UserMapper.toDtoArray(users);
    }

    async findUserById( id: string ): Promise<UserDto>{
        const user = await this.userInterfacePortOut.findUserById(id)
        return UserMapper.toDto(user);
    }

    async updateUser( id: string, userDto: UserDto): Promise<UserDto>{
        const user = UserMapper.ToEntity(userDto);
        const updateUser = await this.userInterfacePortOut.upddateUser( id, user);

        return UserMapper.toDto(updateUser);
    }

    async deleteUser( id: string ): Promise<void>{
        await this.userInterfacePortOut.deleteUser(id)
    }
}