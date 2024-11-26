export class User{
    id!: string;
    name!: string;
    lastName!: string;

    constructor( id: string, name: string, lastName: string ){
        this.id = id,
        this.name = name,
        this.lastName = lastName
    }

    setId(id: string){
        this.id = id;
    }

    getId():string {
        return this.id;
    }

    setName(name: string){
        this.name = name;
    }

    getName():string {
        return this.name
    }

    setLastName(lastName: string){
        this.lastName = lastName
    }

    getLastName():string {
        return this.lastName
    }
}