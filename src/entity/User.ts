import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    re: number;

    @Column()
    name: string;

    @Column({ unique: true })
    role: string;

    @Column({ nullable: true })
    shiftDate: Date;
}
