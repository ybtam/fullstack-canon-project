import { Entity, PrimaryKey, Property } from "@mikro-orm/postgresql";
import {Field, ObjectType} from "type-graphql";
import { v4 } from 'uuid';

@Entity()
@ObjectType()
export class Test {
  @Field()
  @Property()
  name: string;

  @PrimaryKey({ type: 'uuid' })
  uuid = v4();
}
