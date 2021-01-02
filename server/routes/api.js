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
  const hash = await bcrypt.hash(password, 10)
  // console.log(email);
  // alert(email)

  const sql = "SELECT password FROM users WHERE email=$1"
  const result = await client.query({
    text: sql,
    values: [email]
  })

  if (result.rowCount == 1) {
    const hashedPassword = result.rows[0].password

    if (await bcrypt.compare(password, hashedPassword)) {

      const sqlId = "SELECT id, nom, prenom, email, telephone FROM users WHERE email=$1"
      const result2 = await client.query({
        text: sqlId,
        values: [email]
      })

      req.session.userId = result2.rows[0].id
      req.session.userName = result2.rows[0].nom
      req.session.userEmail = result2.rows[0].email
      req.session.userFirstName = result2.rows[0].prenom
      req.session.userTelephone = result2.rows[0].telephone

      res.status(200).json({ message: "well logged as user" })

    } else {
      res.status(400).json({ message: "wrong password" })
    }
  } else {
    res.status(400).json({ message: "no such user exist" })
  }
})

router.post('/medecin_login', async (req,res) =>{


  const id = req.body.id
  const password = req.body.password

  const sql = "SELECT password FROM medecins WHERE id=$1"
  const result = await client.query({
    text: sql,
    values: [id]
  })

  if (result.rowCount == 1) {
    const hashedPassword = result.rows[0].password

    // if (await bcrypt.compare(password, hashedPassword)) {

      const sqlId = "SELECT id FROM medecins WHERE id=$1"
      const result2 = await client.query({
        text: sqlId,
        values: [id]
      })

      req.session.medecinId = result2.rows[0].id
      req.session.userId = null
      req.session.userName = null
      req.session.userEmail = null
      req.session.userFirstName = null
      req.session.userSpecialite = null

      res.status(200).json({ message: "well logged as medecin" })

  } else {
    res.status(400).json({ message: "no such user exist" })
  }
})

router.post('/logout', async (req, res) => {
  req.session.userId = null
  req.session.userName = null
  req.session.userEmail = null
  req.session.userFirstName = null
  req.session.userTelephone = null
  req.session.rapport = new Rapport()

  const log = {
    user: req.session.userId,
    nom: req.session.userName,
    email: req.session.userEmail,
    prenom: req.session.userFirstName,
    telephone: req.session.userTelephone
  }
  res.json(log)
})
// Exercice 4 : Who am I, testé uniquement sur Postman mais pas la partie vue.js
router.get('/me_medecin', async (req, res) => {

  if (req.session.userId) {
    const utilisateur = await client.query({
      text: 'SELECT id, email FROM medecins WHERE id=$1',
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

router.get('/me_patient', async (req, res) => {

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
