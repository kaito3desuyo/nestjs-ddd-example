import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TaskModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  taskName: string;

  @Column()
  description: string;
}
