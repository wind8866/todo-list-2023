import { dbAddTodo, dbQueryList } from '../../../utils/db'

export default async function main(req: any, res: any) {
  const { method, body } = req
  if (method === 'GET') {
    try {
      const resData = await dbQueryList()
      res.status(200).json(resData)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  } else if (method === 'POST') {
    if (typeof body.text !== 'string' || String(body.text).length === 0) {
      res.status(400).json({ message: 'text is required' })
      return
    }
    try {
      const resData = await dbAddTodo(body.text)
      res.status(201).json(resData)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${method} Not Allowed`)
  }
}
