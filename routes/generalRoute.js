const express = require('express');
const router = express.Router();









router.get('*', (req,res)=> {
    res.status(404).json({
        message: 'Pagenai found xain',
        status: 404,
    })
})



module.exports = router;