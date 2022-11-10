const {Router} = require('express')

const router = Router();

router.get('/', (req, res)=> res.send('get endpoint e1 '))
router.post('/', (req, res)=> res.send('post endpoint e1'))
router.put('/', (req, res)=> res.send('put endpoint e1'))
router.delete('/', (req, res)=> res.send('delete endpoint e1'))

module.exports = router