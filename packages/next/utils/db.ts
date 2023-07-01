import mysql from 'mysql2/promise'
import type { ITodo } from './types'

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
let db: mysql.Connection | null = null
export async function dbConnection() {
  if (db) return db
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: 'root',
    database: 'todolist',
    password: process.env.DB_PASS,
  })
  db = connection
  return connection
}

export async function dbClose() {
  if (db) {
    await db.end()
    db = null
  }
}

// select * from main;
export async function dbQueryList() {
  const db = await dbConnection()
  const [rows, fields] = await db.execute('select * from main')
  return rows
}

// insert into main (text, create_time, finish) values ('mysql', '2016-05-06', 0);
export async function dbAddTodo(text: string) {
  const db = await dbConnection()
  const time = new Date().toString()
  const sql = `insert into main (mysql, create_time, finish) values (${text}, ${time}, 0);`
  const [rows, fields] = await db.execute(sql)

  console.log('[Add Log]: ', new Date(), text, JSON.stringify(rows))
  return rows
}

// update main set text="MySQL" where id=1;
export async function dbUpdateTodo(todo: Partial<ITodo>) {
  let set = ''
  if (todo.text) {
    set += `text="${todo.text}" `
  } else if (todo.finish) {
    set += `finish=${todo.finish ? 1 : 0} `
  } else if (todo.create_time) {
    set += `create_time=${todo.create_time} `
  }
  const db = await dbConnection()
  const sql = `update main set ${set} where id=${todo.id}`
  const [rows, fields] = await db.execute(sql)

  console.log('[Update Log]: ', new Date(), todo.id, JSON.stringify(todo), rows)
  return rows
}

// delete from main where id=2;
export async function dbDeleteTodo(id: number) {
  const db = await dbConnection()
  const [rows, fields] = await db.execute('delete from main where id=?', [id])

  console.log('[Delete Log]: ', new Date(), id, rows)
  return rows
}
