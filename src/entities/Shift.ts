import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Shift {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true, nullable: false })
    mouth:number

    @Column({ unique: true, nullable: false  })
    shiftDate: Date
}