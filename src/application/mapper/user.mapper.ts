import { User } from "../../domain/entity/user.entity";
import { UserDto } from "../dto/user.dto";

export class UserMapper{

    static toDto(user: User): UserDto{
        return{
            id: user.getId(),
            name: user.getName(),
            lastName: user.getLastName(),
        }
    }

    static ToEntity(userDto: UserDto): User{
        const user = new User(
            userDto.id,
            userDto.name,
            userDto.lastName
        ) 
        return user;
    }

    static toDtoArray(users: User[]): UserDto[] {
        return users.map(user => this.toDto(user));
    }

    static toEntityArray(userDtos: UserDto[]): User[] {
        return userDtos.map(userDto => this.ToEntity(userDto));
    }
}