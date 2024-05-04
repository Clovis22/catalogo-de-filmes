import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'movie'})
export class MovieEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;

    @Column({name: 'description', nullable: false})
    description: string;
}