import { xata } from "../../src/xataClient";

const handler = async (req, res) => {
  const { id, is_done } = req.body;
  await xata.db.items.update({ is_done, id });
  res.end();
};

export default handler;