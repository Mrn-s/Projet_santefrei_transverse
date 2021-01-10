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
 password: 'Tellier_Souadji',
 database: 'Projet_transverse'
})

client.connect()

class Panier_symptomes {
  constructor () {
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.nb_symptomes = 0
    this.symptomes = []
  }
}

//
// .delete(parseMenu, (req, res) => {
//   const size = parseInt(req.session.symptomeTypes.length)
//   for (let i = 0; i != size; i++) {
//     if (req.menuType == req.session.symptomeTypes[i]) {
//       const index = symptomes[i].findIndex(a => a.id === req.menuId)
//       menus[i].splice(index, 1)
//     }
//   }
//
//   res.send()
// })

router.delete('/panier_s/:type/:id', (req, res) => {
  // console.log("API 1")
 const s_Id = parseInt(req.params.id)
 const s_Type = req.params.type
// console.log("API 2 " + s_Id)
 var index = null
 var symp = null

 const size = parseInt(req.session.symptomeTypes.length)
 for (let i = 0; i != size; i++) {
   // console.log("API 3")
    if (s_Type == req.session.symptomeTypes[i]) {
      // console.log("API 4")
      index = indexSympInPanier (s_Id, s_Type, req.session.panier_symptomes.symptomes)
      symp = sympInPanier (s_Id, s_Type, req.session.panier_symptomes.symptomes)
        // console.log("API 5 " + index + " " + symp)
    }
 }

 if (isNaN(s_Id)) {
   // console.log("API 6 1 ")
    res.status(400).json({ message: 'Requête incorrecte' })
 } else if (index === -1) {
   // console.log("API 6 2 ")
    res.status(501).json({ message: "Le symptome n'est pas dans le panier" })
 } else {
   // console.log("API 6 3 ")
    const size = parseInt(req.session.symptomeTypes.length)
    for (let i = 0; i != size; i++) {
      if (s_Type == req.session.symptomeTypes[i]) {
        // console.log("API 7 ")
        req.session.panier_symptomes.symptomes.splice(index, 1)
        // console.log("API 8 ")
      }
    }
    // console.log("API 9 ")
    req.session.panier_symptomes.nb_symptomes = req.session.panier_symptomes.nb_symptomes - 1
    // console.log("API 10 ")
    res.json(index)
  }
})

function sympInPanier (id, type, symptomes) {
  for (let i = 0; i != symptomes.length; i++) {
    if (symptomes[i].type == type) {
      if (symptomes[i].id == id) {
        return symptomes[i]
      }
    }
  }
}
// Cette fonction
function indexSympInPanier (id, type, symptomes) {
  var index = 0
  for (let i = 0; i != symptomes.length; i++) {
    if (symptomes[i].type == type) {
      if (symptomes[i].id == id) {
        return index
      }
    }
    index ++
  }
}


router.post('/setdatas', (req, res) => {
  req.session.symptomeTypes = req.body.symptomeTypes.split(',')
  res.send()
})

router.use((req, res, next) => {
  // l'utilisateur n'est pas reconnu, lui attribuer un panier dans req.session
  if (typeof req.session.panier_symptomes === 'undefined') {
    console.log(" on reset dans api ")
    req.session.panier_symptomes = new Panier_symptomes()
  }
  next()
})


router.post('/panier_s', (req, res) => {
  const s_id = parseInt(req.body.id)
  const s_nom = req.body.nom
  const s_type = req.body.type
  // console.log("ETAPE 1 : " + s_id + " " + s_nom + " " + s_type)

  const size = parseInt(req.session.symptomeTypes.length)

  // for (let i = 0; i != size; i++) {
  //   console.log("ETAPE 3 ! ")
  //   if (s_type == req.session.symptomeTypes[i]) {
  //     console.log("ETAPE 3 bis ! " + symptomes[i].data )
  //     var s_existant = symptomes[i].find(a => a.id === s_id)
  //   }
  // }
  // console.log("ETAPE 4 !")
  // if (!s_existant) {
  //   console.log("ETAPE 5 ! ")
  //   res.status(501).json({ message: 'symptome non existant' })
  // } else {
    // console.log("ETAPE 5 bis ! ")
    var newSymptome_dans_panier = {
      id: s_id,
      type: s_type,
      nom: s_nom
    }
    // console.log("ETAPE 6 ! " + newSymptome_dans_panier.id + " " + newSymptome_dans_panier.type + " " + newSymptome_dans_panier.nom)
    req.session.panier_symptomes.nb_symptomes = req.session.panier_symptomes.nb_symptomes + 1
    // console.log("ETAPE 7  : " + req.session.panier_symptomes.nb_symptomes)
    const size_2 = parseInt(req.session.symptomeTypes.length)
    for (let i = 0; i != size_2; i++) {
      // console.log("ETPAE 8 : " + (s_type == req.session.symptomeTypes[i]) + " " + checkIfNotMenuExistInPanier_s(newSymptome_dans_panier.id, newSymptome_dans_panier.type, req.session.panier_symptomes.symptomes))
      if ((s_type == req.session.symptomeTypes[i]) && (checkIfNotMenuExistInPanier_s(newSymptome_dans_panier.id, newSymptome_dans_panier.type, req.session.panier_symptomes.symptomes)))
      {
          req.session.panier_symptomes.symptomes.push(newSymptome_dans_panier)
          res.json(newSymptome_dans_panier)
      }
    }
  // }
})
function checkIfNotMenuExistInPanier_s (id, type, symptomes) {
  var bool = true
  for (let i = 0; i != symptomes.length; i++) {
    if (symptomes[i].type == type) {
      if (symptomes[i].id == id) {
        bool = false
      }
    }
  }
  return bool
}


router.get('/GetPanierSymptomes', (req, res) => {
  res.json(req.session.panier_symptomes)
})

router.post('/panier/rdv_m', (req, res) => {
  if (req.session.userId) {
    req.session.panier_s = new Panier_symptomes()
    res.status(200).json(req.session.panier_s)
  } else {
    res.status(401).json({ message: "not logged" })
  }
})



router.post('/rdv', async (req, res) => {
// console.log("ICI 1")
  if (req.session.userId) {
    // console.log("ICI 2")
    const date = req.body.date
    const heure = req.body.heure
    const description = req.body.description
    const id_du_patient = req.body.pid
    const id_du_medecin = req.body.mid

    // console.log("date " + date + "heure :" + heure + "id_du_patient " + id_du_patient + "id_du_medecin " + id_du_medecin)

    const insert = "INSERT INTO rendez_vous (date, heure, description, patient_id, medecin_id) VALUES ($1, $2, $3, $4, $5)"

    // console.log("ICI 3")

    await client.query({
      text: insert,
      values: [date, heure, description, id_du_patient, id_du_medecin]
    })

    // console.log("ICI 4")
    const le_rdv = {
      id: req.session.rdv_patient_Id + 1,
      date: date,
      heure: heure,
      description: description,
      id_du_patient: id_du_patient,
      id_du_medecin: id_du_medecin

    }
    // console.log("ICI 5")


    res.status(200).json(le_rdv)
  } else {
    res.status(401).json({ message: "not logged" })
  }

})

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
      req.session.rdv_patient_Id = 0

      res.status(200).json({ message: "well logged as user" })

    } else {
      res.status(400).json({ message: "wrong password" })
    }
  } else {
    res.status(400).json({ message: "no such user exist" })
  }
})

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
        req.session.rdv_medecin_Id = 0

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
  req.session.panier_symptomes = new Panier_symptomes()

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
    panier_symptomes: req.session.panier_symptomes,

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

    var dmd_rdv = []

      const select = "SELECT * FROM rendez_vous WHERE medecin_id=$1"
      const result_m = await client.query({
        text: select,
        values: [req.session.medecinId]
      })

      dmd_rdv = result_m.rows


    const m = {
      id: req.session.medecinId,
      nom: req.session.medecinName,
      email: req.session.medecinEmail,
      prenom: req.session.medecinFirstName,
      telephone: req.session.medecinTelephone,
      specialite: req.session.medecinSpecialite,
      medecin_demande_de_rdv: dmd_rdv
    }

    res.json(m)


  // if (req.session.medecinId) {
  //   const utilisateur = await client.query({
  //     text: 'SELECT * FROM medecins WHERE id=$1',
  //     values: [req.session.medecinId]
  //   })
  //   res.json(utilisateur.rows[0])
  //   console.log(utilisateur.rows[0])
  // } else {
  //   res.status(401).json({ message: 'not connected' })
  // }

  })

router.get('/me_patient', async (req, res) => {

    var mes_rdv = []

    if (req.session.userId) {
      const select = "SELECT * FROM rendez_vous WHERE patient_id=$1"
      const result = await client.query({
        text: select,
        values: [req.session.userId]
      })

      for (let i = 0; i < result.rows.length; i++) {
        result.rows[i].date = new Date(result.rows[i].date).toString().slice(0,15)
      }
      mes_rdv = result.rows
    }

    const user = {
      id: req.session.userId,
      nom: req.session.userName,
      email: req.session.userEmail,
      prenom: req.session.userFirstName,
      telephone: req.session.userTelephone,
      patient_rdv: mes_rdv
    }
    // console.log(user)

    res.json(user)

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


module.exports = router
