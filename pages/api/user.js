import { NextApiRequest, NextApiResponse } from 'Next';
import connect from '../../utils/database';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { db } = await connect();
    const response = await db.collection('users').insertOne({
      name: 'Gabriel',
      age: '15'
    });
    res.status(200).json(response.ops[0]);
  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
