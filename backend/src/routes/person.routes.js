const {
  getPersonsHandler,
  createPersonHandler,
  updatePersonHandler,
  deletePersonHandler
} = require('../controllers/person.controller')

const express = require('express')

const router = express.Router()

router.get('/api/pers', getPersonsHandler)
router.post('/api/pers', createPersonHandler)
router.put('/api/pers/:id', updatePersonHandler)
router.delete('/api/pers/:id', deletePersonHandler)

module.exports = router
