import { xata } from "../../src/xataClient";

const handler = async (req, res) => {
  const { label, is_done } = req.body;
  await xata.db.items.create({ is_done, label });
};

export default handler;
