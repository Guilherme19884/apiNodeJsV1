import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm"
import { bcrypt} from 'bcrypt'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    role: string;

    @Column({ nullable: true })
    shiftDate: Date;

    @Column()
    password: string

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10)
}
