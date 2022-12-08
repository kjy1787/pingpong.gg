import user from "@/db/user.json";

export default function handler(req, res) {
  const { name } = req.query;
  if (!name) return [];
  let list = [];
  user.map((item) => {
    if (item.name.includes(name)) {
      list.push(item);
    }
  });
  res.status(200).json(list);
}
