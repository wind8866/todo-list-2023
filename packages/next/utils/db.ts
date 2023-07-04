import mysql, { RowDataPacket, OkPacket } from 'mysql2/promise'
import type { ITodo } from './types'
import dayjs from 'dayjs'

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
export async function dbQueryList(id?: number) {
  let sql = 'select * from main'
  if (id != null) {
    sql += ` where id=${id}`
  }
  sql += ' order by create_time desc'
  const db = await dbConnection()
  const [rows, fields] = await db.execute<ITodo[] & RowDataPacket[][]>(sql)
  return rows.map((row) => ({ ...row, finish: Boolean(row.finish) }))
}

// insert into main (text, create_time, finish) values ('mysql', '2016-05-06', 0);
export async function dbAddTodo(text: string): Promise<ITodo> {
  const db = await dbConnection()
  const time = dayjs().format('YYYY-MM-DD hh:mm:ss')
  const sql = `insert into main (text, create_time, finish) values ("${text}", "${time}", 0);`
  const [rows, fields] = await db.execute<OkPacket>(sql)

  console.log('[Add Log]: ', new Date(), text, JSON.stringify(rows))
  const res = {
    id: rows.insertId,
    text,
    create_time: time,
    finish: false,
  }
  return {
    id: rows.insertId,
    text,
    create_time: time,
    finish: false,
  }
}

// update main set text="MySQL" where id=1;
export async function dbUpdateTodo(todo: Partial<ITodo>): Promise<ITodo> {
  let set = ''
  if (todo.text != null) {
    set += `text="${todo.text}" `
  } else if (todo.finish != null) {
    set += `finish=${todo.finish ? 1 : 0} `
  } else if (todo.create_time != null) {
    set += `create_time=${todo.create_time} `
  }
  const db = await dbConnection()
  const sql = `update main set ${set} where id=${todo.id}`
  const [rows, fields] = await db.execute<ITodo & RowDataPacket[]>(sql)
  console.log('[Update Log]: ', new Date(), todo.id, JSON.stringify(todo), rows)

  const list = await dbQueryList(todo.id)
  if (list.length === 0) throw new Error('Not Found')
  list[0].finish = Boolean(list[0].finish)
  return list[0]
}

// delete from main where id=2;
export async function dbDeleteTodo(id: number) {
  const db = await dbConnection()
  const [rows, fields] = await db.execute<OkPacket>(
    'delete from main where id=?',
    [id],
  )
  console.log('[Delete Log]: ', new Date(), id, rows)
}
