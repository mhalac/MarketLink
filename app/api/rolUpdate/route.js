import { db } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nuevoRol } = req.body;

      const result = await db.run('UPDATE usuario SET rol = ? WHERE id_usuario = ?', [nuevoRol, 1]);
  }}
  