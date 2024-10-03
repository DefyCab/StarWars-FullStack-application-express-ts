import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Character List');
});

module.exports = router;
