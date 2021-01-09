const express = require('express')
const router = express.Router()
const maladies = require('../data/maladies.js')
const symptomes = require('../data/symptomes.js')
const bcrypt = require('bcrypt')
const { Client } = require('pg')
const questionnaires = require('../data/liste_questionnaires.js')
const les_medecins = require('../data/medecins.js')
const les_symptomes = require('../data/symptomes.js')
const les_actualites = require('../data/actualite.js')
const les_specialites = require('../data/specialites.js')


const client = new Client({
 user: 'postgres',
 host: 'localhost',
 password: 'landry',
 database: 'Projet_transverse'
})

client.connect()

class Panier_symptomes {
  constructor () {
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.nom =''
    this.prenom=''
    this.symptomes = []
  }
}

// router.post('/setdatas', (req, res) => {
//   req.session.symptomesTypes = req.body.symptomesTypes.split(',')
//   res.send()
// })
//
// router.get('/panier_symptome', (req, res) => {
//   res.json(req.session.panier_symptomes)
// })
//
// router.post('/panier_symptome', (req, res) => {
//   const s_Id = parseInt(req.body.id)
//   const s_Type = req.body.type
//
//   const size = parseInt(req.session.symptomeTypes.length)
//   for (let i = 0; i != size; i++) {
//     if (s_Type == req.session.symptomeTypes[i]) {
//       var symptome = liste_symptomes[i].find(a => a.id === s_Id)
//     }
//   }
//
//   if (!symptome) {
//     res.status(501).json({ message: 'symptome non existant' })
//   } else {
//     var newSym = {
//       id: menuId,
//       type: s_Type
//     }
//
//     const size = parseInt(req.session.symptomeTypes.length)
//     for (let i = 0; i != size; i++) {
//       if (menuType == req.session.symptomeTypes[i]) {
//         if (checkIfNotSymptomeExistInMes_symptomes(newSym.id, newSym.type, req.session.panier_symptomes.symptomes)) {
//           req.session.panier_symptomes.symptomes.push(newSym)
//           res.json(newSym)
//         }
//       }
//     }
//   }
// })
//
// function checkIfNotSymptomeExistInMes_symptomes (id, type, symptomes) {
//   var bool = true
//   for (let i = 0; i != symptomes.length; i++) {
//     if ((s_in_panier_s[i].type == type) && (s_in_panier_s[i].id == id)) {
//         bool = false
//     }
//   }
//   return bool
// }
//
// router.use((req, res, next) => {
//   if (typeof req.session.panier_symptomes === 'undefined') {
//     req.session.panier_symptomes = new Panier_symptomes()
//   }
//   next()
// })
//
// function parseSymptome (req, res, next) {
//   const symptomeId = parseInt(req.params.id)
//   const symptomeType = req.params.type
//
//   // si menuId n'est pas un nombre (NaN = Not A Number), alors on s'arrête
//   if (isNaN(menuId)) {
//     res.status(400).json({ message: 'menuId should be a number' })
//     return
//   }
//   // on affecte req.menuId pour l'exploiter dans toutes les routes qui en ont besoin
//   req.symptomeId = id_s
//   req.symptomeType = type_s
//
//   const size = parseInt(req.session.menusTypes.length)
//   for (let i = 0; i != size; i++) {
//     if (req.symptomeType == req.session.menusTypes[i]) {
//       const symptome = symptomes[i].find(a => a.id === req.symptomeId)
//       req.symptome = symptome
//       req.type = type_s
//
//     }
//   }
//
//   if (!req.symptome) {
//     res.status(404).json({ message: 'symptome ' + id_s + ' does not exist' })
//     return
//   }
//
//   next()
// }
//
// .get(parseSymptome, (req, res) => {
//   res.json(req.menu)
// })
//
// router.delete('/panier_symptome/:type/:id', (req, res) => {
//  const menuId = parseInt(req.params.id)
//  const menuType = req.params.type
//
//  var index = null
//  var menu = null
//
//  const size = parseInt(req.session.menusTypes.length)
//  for (let i = 0; i != size; i++) {
//     if (menuType == req.session.menusTypes[i]) {
//       index = indexMenuInPanier (menuId, menuType, req.session.panier.menus)
//       menu = menuInPanier (menuId, menuType, req.session.panier.menus)
//     }
//  }
//
//  if (isNaN(menuId)) {
//     res.status(400).json({ message: 'Requête incorrecte' })
//  } else if (index === -1) {
//     res.status(501).json({ message: "L'menu n'est pas dans le panier" })
//  } else {
//     const size = parseInt(req.session.menusTypes.length)
//     for (let i = 0; i != size; i++) {
//       if (menuType == req.session.menusTypes[i]) {
//         req.session.panier.menus.splice(index, 1)
//       }
//     }
//
//     req.session.panier.nb_menus = req.session.panier.nb_menus - menu.quantity
//     req.session.panier.prix = req.session.panier.prix - (menu.quantity * menu.prix)
//     res.json(index)
//   }
// })
//
// function menuInPanier (id, type, menus) {
//   for (let i = 0; i != menus.length; i++) {
//     if (menus[i].type == type) {
//       if (menus[i].id == id) {
//         return menus[i]
//       }
//     }
//   }
// }
//
// function indexMenuInPanier (id, type, menus) {
//   var index = 0
//   for (let i = 0; i != menus.length; i++) {
//     if (menus[i].type == type) {
//       if (menus[i].id == id) {
//         return index
//       }
//     }
//     index ++
//   }
// }
//
// router.put('/panier/:type/:id/:quantity', (req, res) => {
//   const menuId = parseInt(req.params.id)
//   const menuQte = parseInt(req.params.quantity)
//   const menuType = req.params.type
//
//   var index = null
//
//   const size = parseInt(req.session.menusTypes.length)
//   for (let i = 0; i != size; i++) {
//     if (menuType == req.session.menusTypes[i]) {
//       index = indexMenuInPanier (menuId, menuType, req.session.panier.menus)
//     }
//   }
//
//   if (isNaN(menuId)) {
//     res.status(400).json({ message: 'Requête incorrecte' })
//   } else if (index === -1) {
//     res.status(501).json({ message: "L'menu n'est pas dans le panier" })
//   } else {
//     const size = req.session.panier.menus.length
//     for (let i = 0; i != size; i++) {
//       req.session.panier.menus[i].quantity = menuQte
//     }
//     res.send()
//   }
// })


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
    const telephone = req.body.telephone
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
      const insert = "INSERT INTO medecins (nom ,prenom, email, specialite, password, telephone) VALUES ($1, $2, $3, $4, $5, $6)"

      const result2 = await client.query({
        text: insert,
        values: [nom, prenom, email, specialite, hash, telephone]
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
        req.session.medecinTelephone = result2.rows[0].telephone
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
    telephone_medecin: req.session.medecinTelephone,
    specialite: req.session.medecinSpecialite
  }
  res.json(log)
})
// Exercice 4 : Who am I, testé uniquement sur Postman mais pas la partie vue.js
router.get('/me_medecin', async (req, res) => {
  console.log(req.session.medecinId)

  if (req.session.medecinId) {
    const utilisateur = await client.query({
      text: 'SELECT * FROM medecins WHERE id=$1',
      values: [req.session.medecinId]
    })
    res.json(utilisateur.rows[0])
    console.log(utilisateur.rows[0])
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

router.get('/getLes_spe', (req,res) => {
  res.json(les_specialites)
})

router.get('/getLes_medecins', (req,res) => {
  res.json(les_medecins)
})

router.get('/getLes_symptomes', (req,res) => {
  res.json(les_symptomes)
})

router.get('/getLes_actualite', (req,res) => {
  res.json(les_actualites)
})

router.put('/user_update_patient', async (req, res) => {

  var nom = req.body.nom
  var prenom = req.body.prenom
  var email = req.body.email
  var telephone = req.body.telephone

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

router.put('/user_update_medecin', async (req, res) => {

    var nom = req.body.nom
    var prenom = req.body.prenom
    var email = req.body.email
    var telephone = req.body.telephone
    var specialite = req.body.specialite

    if (!nom) {
      nom = req.session.medecinName
    }
    if (!prenom) {
      prenom = req.session.medecinFirstName
    }
    if (!email) {
      email = req.session.medecinEmail
    }
    if (!telephone) {
      telephone = req.session.medecinTelephone
    }
    if (!specialite) {
      specialite = req.session.medecinSpecialite
    }

    req.session.medecinName = nom
    req.session.medecinFirstName = prenom
    req.session.medecinEmail = email
    req.session.medecinTelephone = telephone
    req.session.medecinSpecialite = specialite

    const update = "UPDATE medecins SET nom = $1, prenom = $2, email = $3, specialite = $4, telephone = $5 WHERE email=$3"
    const result = await client.query({
      text: update,
      values: [nom, prenom, email, specialite, telephone]
    })

    res.send()
    })

// router.post('/prendre_rendez_vous', async (req, res) => {
//
//     if (req.session.userId) {
//
//       const date = req.body.date
//       const heure = req.body.heure
//       const nom = req.body.nom
//       const prenom = req.body.prenom
//       const medecin_id = req.body.medecin
//
//       const insert = "INSERT INTO rendez_vous (date, heure, nom, prenom, medecin_id) VALUES ($1, $2, $3, $4, $5)"
//
//       await client.query({
//         text: insert,
//         values: [date, heure, nom, prenom, medecin_id]
//       })
//
//       const rdv = {
//         date: date,
//         heure: heure,
//         nom: nom,
//         prenom: prenom,
//         medecin_id: medecin_id
//       }
//
//       res.status(200).json(rdv)
//     } else {
//       res.status(401).json({ message: "not logged" })
//     }
//
// })

module.exports = router
