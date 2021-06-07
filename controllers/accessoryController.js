const { Router } = require('express');

const accessoryService = require('../services/accessoryService');

const router = Router();

router.get('/create', (req, res) => {
    res.render('createAccessory', { title: 'Create Accessory'});
});

router.post('/create', async (req, res) => {
    const data = req.body;

    try {
        await accessoryService.create(data);
        res.redirect('/products');
    } catch (err) {
        res.render('createAccessory', { title: 'Create Accessory', err});
    }
})





module.exports = router; 