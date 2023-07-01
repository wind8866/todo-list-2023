import mysql from "mysql2/promise";

// SHOW DATABASES;
// CREATE DATABASE todolist;
// USE todolist;
// CREATE TABLE main(
//   `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
//     `text` VARCHAR(100) NOT NULL,
//     `create_time` DATETIME,
//     `finish` TINYINT,
//     PRIMARY KEY(`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

// select * from main;

// insert into main (text, create_time, finish) values ('mysql', '2016-05-06', 0);

// update main set text="MySQL" where id=1;

// delete from main where id=2;

// 创建一个数据库连接

export default async function Page() {
  return <pre>{JSON.stringify("list")}</pre>;
}
