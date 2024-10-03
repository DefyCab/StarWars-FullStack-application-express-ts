import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/`);
    const data = (await response.json()) as { results: Chars };
  } catch (error) {
    res.status(500).json({ error: 'Server failure' });
  }
});

module.exports = router;
