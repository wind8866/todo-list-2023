import { dbAddTodo, dbQueryList } from '../../../utils/db'

export function headerCORS(res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'PUT,POST,GET,DELETE,OPTIONS,PATCH',
  )
}

export default async function main(req: any, res: any) {
  headerCORS(res)
  const { method, body } = req
  if (method === 'OPTIONS') {
    res.status(200).json()
  } else if (method === 'GET') {
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
    res.setHeader('Allow', ['GET', 'POST', 'OPTIONS'])
    res.status(405).end(`Method ${method} Not Allowed`)
  }
}
