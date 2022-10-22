const express = require('express');
const router = express.Router();

router.post('/search', (req,res,next) => {
    console.log(req.body);
    
});

module.exports = router;