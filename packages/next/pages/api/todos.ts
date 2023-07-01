import {
  dbAddTodo,
  dbDeleteTodo,
  dbQueryList,
  dbUpdateTodo,
} from '../../utils/db'

// TODO: typescript 类型定义
async function queryTodoList(req: any, res: any) {
  const resData = await dbQueryList()
  return resData
}
async function queryAddTodo(req: any, res: any) {
  const resData = await dbAddTodo(req.body.text)
  return resData
}
async function queryChangeTodo(req: any, res: any) {
  const resData = await dbUpdateTodo(req.body)
  return resData
}
async function queryDeleteTodo(req: any, res: any) {
  const resData = await dbDeleteTodo(req.body.id)
  return resData
}
export default async (req: any, res: any) => {
  const { method } = req
  switch (method) {
    case 'GET':
      const resData = await queryTodoList(req, res)
      res.status(200).json(resData)
      break
    case 'POST':
      const resData2 = await queryChangeTodo(req, res)
      res.status(200).json(resData2)
      break
    case 'PUT':
      const resData3 = await queryAddTodo(req, res)
      res.status(200).json(resData3)
      break
    case 'DELETE':
      const resData4 = await queryDeleteTodo(req, res)
      res.status(200).json(resData4)
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'POST', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
