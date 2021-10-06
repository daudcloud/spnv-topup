// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import topups from "./topups";

export default function handler(req, res) {
  res.status(200).json(topups);
}
