const express = require('express')
const router = express.Router()
const maladies = require('../data/maladies.js')
const symptomes = require('../data/symptomes.js')
const bcrypt = require('bcrypt')
const { Client } = require('pg')
const questionnaires = require('../data/liste_questionnaires.js')
const les_medecins = require('../data/medecins.js')


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
  const sql = "SELECT password FROM users WHERE email=$1"
  const result = await client.query({
    text: sql,
    values: [email]
  })

  if (result.rowCount == 1) {
    const hashedPassword = result.rows[0].password

    if (await bcrypt.compare(password, hashedPassword)) {

      const sqlId = "SELECT * FROM users WHERE email=$1"
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

  const email = req.body.email
  const password = req.body.password

  const sql = "SELECT password FROM medecins WHERE email=$1"
  const result = await client.query({
    text: sql,
    values: [email]
  })

  console.log(result.rowcount)

  if (result.rowCount == 1) {
      const hashedPassword = result.rows[0].password

      if (await bcrypt.compare(password, hashedPassword)) {

        const sqlId = "SELECT * FROM medecins WHERE email=$1"
        const result2 = await client.query({
          text: sqlId,
          values: [email]
        })

        req.session.medecinId = result2.rows[0].id
        req.session.medecinName = result2.rows[0].nom
        req.session.medecinEmail = result2.rows[0].email
        req.session.medecinFirstName = result2.rows[0].prenom
        req.session.medecinSpecialite = result2.rows[0].specialite

        res.status(200).json({ message: "well logged as medecin" })

    } else {
      res.status(400).json({ message: "wrong password" })
    }
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

  req.session.medecinId = null
  req.session.medecinName = null
  req.session.medecinEmail = null
  req.session.medecinFirstName = null
  req.session.medecinSpecialite = null


  const log = {
    user_patient: req.session.userId,
    user_medecin: req.session.medecinId,
    nom_patient: req.session.userName,
    email_patient: req.session.userEmail,
    prenom_patient: req.session.userFirstName,
    telephone: req.session.userTelephone,

    nom_medecin: req.session.medecinName,
    email_medecin: req.session.medecinEmail,
    prenom_medecin: req.session.medecinFirstName,
    specialite: req.session.medecinSpecialite
  }
  res.json(log)
})
// Exercice 4 : Who am I, testé uniquement sur Postman mais pas la partie vue.js
router.get('/me_medecin', async (req, res) => {

  if (req.session.medecinId) {
    const utilisateur = await client.query({
      text: 'SELECT * FROM medecins WHERE id=$1',
      values: [req.session.medecinId]
    })
    res.json(utilisateur.rows[0])
  } else {
    res.status(401).json({ message: 'not connected' })
  }
  })

router.get('/me_patient', async (req, res) => {
  if (req.session.userId) {
    const utilisateur = await client.query({
      text: 'SELECT * FROM users WHERE id=$1',
      values: [req.session.userId]
    })
    res.json(utilisateur.rows[0])
  } else {
    res.status(401).json({ message: 'not connected' })
  }
  })

router.get('/getQuestionnaire', (req,res) => {
  res.json(questionnaires)
})

router.get('/getLes_medecins', (req,res) => {
  console.log(les_medecins)
  res.json(les_medecins)
})

router.put('/user_update_patient', async (req, res) => {

  var nom = req.body.nom
  var prenom = req.body.prenom
  var email = req.body.email
  var telephone = req.body.telephone
  // console.log(nom)
  // console.log(prenom)

  if (!nom) {
    nom = req.session.userName
  }
  if (!prenom) {
    prenom = req.session.userFirstName
  }
  if (!email) {
    email = req.session.userEmail
  }
  if (!telephone) {
    telephone = req.session.userTelephone
  }

  req.session.userName = nom
  req.session.userFirstName = prenom
  req.session.userEmail = email
  req.session.userTelephone = telephone

  const update = "UPDATE users SET nom = $1, prenom = $2, email = $3, telephone = $4 WHERE email=$3"
  const result = await client.query({
    text: update,
    values: [nom, prenom, email, telephone]
  })

  res.send()
  })

module.exports = router
