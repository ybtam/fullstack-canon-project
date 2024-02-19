import { Migration } from '@mikro-orm/migrations';

export class Migration20240129173701 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "test" ("uuid" uuid not null, "name" varchar(255) not null, constraint "test_pkey" primary key ("uuid"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "test" cascade;');
  }

}
