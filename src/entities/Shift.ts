import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm"

@Entity()
@Unique(["month", "shiftDate"])
export class Shift {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    mouth:number

    @Column({ nullable: false  })
    shiftDate: Date
}