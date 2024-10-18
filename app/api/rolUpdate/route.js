import getDB from "@/util/db";
const db = getDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nrol } = req.body;

    try {
      const result = await db.run('UPDATE usuario SET rol = ? WHERE id_usuario = ?', [nrol, 1]);
      res.status(200).json({ message: 'Rol actualizado', result });
    } catch (error) {
      console.error('Error al actualizar el rol:', error);
      res.status(500).json({ error: 'Error al actualizar el rol' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
