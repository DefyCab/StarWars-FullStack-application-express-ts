import { Router } from 'express';
import { StarWarChars } from './types';

const router = Router();
const parseChar = (char: StarWarChars) => {
  return {
    name: char.name,
    hairColor: char.hair_color,
  };
};

router.get('/', async (req, res) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/`);
    const data = (await response.json()) as { results: StarWarChars[] };
    const starWarsChars = data.results.map(parseChar);
    res.json(starWarsChars);
  } catch (error) {
    res.status(500).json({ error: 'Server failure' });
  }
});

module.exports = router;
