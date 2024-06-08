import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nome: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    age: number;
}
