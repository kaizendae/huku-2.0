import type { NextApiRequest, NextApiResponse } from 'next';

const { API_KEY } = process.env;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    ).then((r) => r.json());

    if (result.status_code === 34) {
      res.status(404).json({ error: 'api.themoviedb.org failed to load data' });
    } else {
      res.send({ result });
    }

    // res.status(200).send({ result });
  } catch (err) {
    res.status(500).json({ error: 'api.themoviedb.org failed to load data' });
  }
}
