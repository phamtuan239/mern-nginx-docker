const Person = require('../models/Person')

exports.createPersonHandler = async (req, res) => {
  try {
    await Person.create(req.body)
    res.status(201).send({ succes: true })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

exports.getPersonsHandler = async (req, res) => {
  try {
    const pers = await Person.find()
    res.status(201).send({ pers })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

exports.updatePersonHandler = async (req, res) => {
  try {
    await Person.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.status(201).send({ succes: true })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

exports.deletePersonHandler = async (req, res) => {
  try {
    await Person.findOneAndRemove({ _id: req.params.id })
    res.status(201).send({ succes: true })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}
