import { Column, Entity, PrimaryColumn,  CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Faculties{
    @PrimaryColumn({
        type: 'varchar'
    })
    id: string;

    @Column({
        type: "varchar",
        nullable: false
    })
    name: string;

    @Column({
        type: "varchar",
        nullable: false
    })
    expertise: string;

    @Column({
        type: 'integer',
        nullable: false
    })
    noOfPubliccation: number;

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date
}