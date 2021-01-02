const express = require('express')
const router = express.Router()
const maladies = require('../data/maladies.js')
const medecins = require('../data/medecins.js')
const symptomes = require('../data/symptomes.js')
const bcrypt = require('bcrypt')
const { Client } = require('pg')


const client = new Client({
 user: 'postgres',
 host: 'localhost',
 password: 'Tellier_Souadji',
 database: 'Projet_transverse'
})

client.connect()

class Rapport {
  constructor () {
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.nom =''
    this.prenom=''
    this.maladies = []
  }
}

router.post('/setdatas', (req, res) => {
  req.session.maladiesTypes = req.body.maladiesTypes.split(',')
  res.send()
})

// Exercice 2 : Inscription
router.post('/register_patient',async (req,res) => {

  const email = req.body.email
  const password = req.body.password
  const prenom = req.body.prenom
  const nom = req.body.nom
  const telephone = req.body.telephone

  const sql = "SELECT * FROM users WHERE email=$1"

  const result = await client.query({
    text: sql,
    values: [email]
  })

  if (result.rowCount == 1) {
    res.status(400).json({ message: "this user already exist" })
  } else {
    const hash = await bcrypt.hash(password, 10)
    const insert = "INSERT INTO users (email ,password, nom, prenom, telephone) VALUES ($1, $2, $3, $4, $5)"

    const result2 = await client.query({
      text: insert,
      values: [email, hash, nom, prenom, telephone]
    })
    res.send()
  }
  })

router.post('/register_medecin',async (req,res) => {

    const email = req.body.email
    const password = req.body.password
    const prenom = req.body.prenom
    const nom = req.body.nom
    const specialite = req.body.specialite

    const sql = "SELECT * FROM medecins WHERE email=$1"

    const result = await client.query({
      text: sql,
      values: [email]
    })

    if (result.rowCount == 1) {
      res.status(400).json({ message: "this user already exist" })
    } else {
      const hash = await bcrypt.hash(password, 10)
      const insert = "INSERT INTO medecins (nom ,prenom, email, specialite, password) VALUES ($1, $2, $3, $4, $5)"

      const result2 = await client.query({
        text: insert,
        values: [nom, prenom, email, specialite, hash]
      })
      res.send()
    }
    })
// Exercice 3 : Connexion
router.post('/login', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const doublon = await client.query({
    text: 'SELECT * FROM users WHERE email=$1',
    values: [email]
  })

  if (doublon.rows[0]) {
    const user = doublon.rows[0]
    if (await bcrypt.compare(password, user.password)) {
      // connecter l'utilisateur
      req.session.userId = user.id
      res.json({
        id: user.id,
        email: user.email
      })
      } else {
      res.status(401).json({
        message: 'mdp incorrect'
      })
      return
      }
  }
  else {
    res.status(401).json({
      message: 'l’utilisateur n’existe pas, erreur '
    })
    return
}
})

// Exercice 4 : Who am I, testé uniquement sur Postman mais pas la partie vue.js
router.get('/me', async (req, res) => {

  if (req.session.userId) {
    const utilisateur = await client.query({
      text: 'SELECT id, email FROM users WHERE id=$1',
      values: [req.session.userId]
    })
    res.json(utilisateur.rows[0])
  }
  else
  {
    res.status(401).json({ message: 'not connected' })
    return
  }
})

module.exports = router
