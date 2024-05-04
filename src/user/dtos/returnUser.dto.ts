import { UserEntity } from "../entities/user.entity";

export class ReturnUserDTO {
    id: number;
    name: string;

    constructor(userEntity: UserEntity) {
        this.id = userEntity.id;
        this.name = userEntity.name;
    }
}