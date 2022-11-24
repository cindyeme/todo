import { xata } from "../../src/xataClient";

const handler = async (req, res) => {
  const { id } = req.body;
  await xata.db.items.delete(id);
  res.end();
};

export default handler;
