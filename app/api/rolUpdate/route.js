import { db } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nrol } = req.body;

      const result = await db.run('UPDATE usuario SET rol = ? WHERE id_usuario = ?', [nrol, 1]);
  }}
  