const express = require('express');
const router = express.Router();

router.post('/FetchCategory', (req, res) => {
    console.log('Storage - Fetch Category');

    res.send({
        message: 'Success',
        result: ['Bakery', 'Beverages', 'Beauty', 'Canned Goods', 'Cleaning Supplies', 'Condiments', 'Flowers',
            'Frozen Foods', 'Fruits', 'Meat', 'Miscellaneous', 'Paper Products', 'Personal Care', 'Pet Care',
            'Pharmacy', 'Seafood', 'Snacks', 'Vegetables']
    })
});

router.post('/FetchItemCode', (req, res) => {
    const category = req.body.category;
    console.log('Storage - Fetch Item Code : ' + category);

    switch (category) {
        case 'Beverages':
            res.send({
                message: 'Success',
                result: ['TKBDHTVD39', 'UXBTKZ746N', 'E4H4BA934D', '63SMA3XZZJ', 'Z595D852EX', 'JHZ7R9W9XQ',
                    'R9N5K3R4ZN', 'N9H6EFWUAV', '4R2VQHHVVP', '42JAD8V8JJ', 'MH2C2W5XFN', '6KFL8GGQ5E', 'FJW4ZJYH6Q',
                    'PNHATCPZN9', 'TM7JQ56WR9', 'V4F8NQQ3HY', 'NKZPPFBKRH', 'K55JRA5MY6', '94CVHJPGPN', '8TKEMKSFGQ',
                    'KGXT9MNBPC', 'JR5E4PZGJA', '5U8N62H66K', 'E4LYR2PQMY', 'YEVPXJYRAA']
            })
    }
});

module.exports = router;
