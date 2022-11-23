import { XataClient } from '../../src/xata';

const xata = new XataClient({ apiKey: XATA_API_KEY });
 
const handler = async (req, res) => {
  const { method } = req;
 
  switch (method) {
    case "GET":
      const todos = await xata.db.items.getMany();
       res.status(200).json(todos);
      break;
    case "POST":
      const { todo, is_done } = req.body;
      await xata.db.items.create({ todo, is_done });
      break;
    case "UPDATE":
      const { id } = req.body;
      await xata.db.items.update({ id, is_done });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "UPDATE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

export default handler;