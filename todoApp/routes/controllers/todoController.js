import express from 'express';
import model from '../model/model';

const router = express.Router();

router.get('/',(req,res) => {

    res.json(model);
});

module.exports = router;