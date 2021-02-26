import { NextApiRequest, NextApiResponse } from "next";
import seneca from "./seneca";
import marcus from "./marcus";
import epictetus from "./epictetus";
export const quotes = [...seneca, ...marcus, ...epictetus];
export type Philosopher = "Marcus Aurelius" | "Seneca" | "Epictetus";
export type StoicProps = { author: Philosopher; text: string; source: string };

export const getRandomQuote = (data: typeof quotes) =>
  data[Math.floor(Math.random() * data.length)];

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const quote = getRandomQuote(quotes);
  res.status(200).json(quote);
}
