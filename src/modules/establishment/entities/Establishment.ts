import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";

import { User } from "../../users/entities/User";

@Entity("establishment")
class Establishment {
  @PrimaryColumn()
  id: string;

  @Column({ length: 14 })
  cnpj: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "id" })
  user: User;

  @CreateDateColumn()
  created_at: Date;
}

export { Establishment };