// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { createTodo, getAllTodos } from '../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { description } = req.body;
    await createTodo(description);
    return res.status(200).json({ message: 'Success' });
  } else if (req.method === 'GET') {
    const data = await getAllTodos();
    return res.status(200).json(data);
  }

  res.status(200).json({ name: 'John Doe' });
}
