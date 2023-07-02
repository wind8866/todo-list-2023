import { dbDeleteTodo, dbUpdateTodo } from '../../../utils/db'

export default async function main(req: any, res: any) {
  const { method, body, query } = req
  if (!query.id || !Number(query.id)) {
    // 或许这里可以返回404
    res.status(400).json({ message: 'id is required' })
    return
  }
  if (method === 'PATCH') {
    try {
      const resData = await dbUpdateTodo({
        id: body.id,
        text: body.text,
        finish: body.finish,
      })
      res.status(200).json(resData)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  } else if (method === 'DELETE') {
    try {
      await dbDeleteTodo(query.id)
      res.status(204).json()
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.setHeader('Allow', ['PATCH', 'DELETE'])
    res.status(405).end(`Method ${method} Not Allowed`)
  }
}
