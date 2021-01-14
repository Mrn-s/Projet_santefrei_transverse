const express = require('express')
const router = express.Router()
const maladies = require('../data/maladies.js')
const symptomes = require('../data/symptomes.js')
const bcrypt = require('bcrypt')
const { Client } = require('pg')
const questionnaires = require('../data/liste_questionnaires.js')
var les_medecins = require('../data/medecins.js')
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
    res.status(501).json({ message: "Le symptôme n'est pas dans le panier" })
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

    req.session.panier_symptomes = new Panier_symptomes()
  }
  next()
})


router.post('/panier_s', (req, res) => {
  const s_id = parseInt(req.body.id)
  const s_nom = req.body.nom
  const s_type = req.body.type

  const size = parseInt(req.session.symptomeTypes.length)

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


router.post('/refuser_le_rdv', async (req, res) => {
  // console.log("api 1")
  const r_id = req.body.id
  // console.log("r_id : " + r_id)
  const del = "DELETE FROM rendez_vous WHERE id = $1"
  await client.query({
    text: del,
    values: [r_id]
  })
  const del2 = "DELETE FROM symptomes_rdv WHERE id_rdv = $1"
  await client.query({
    text: del2,
    values: [r_id]
  })
  // console.log("api 2")
  res.send()
})

router.post('/accepter_le_rdv', async (req, res) => {
  const r_id = req.body.id
  const oui = 'oui'
  const update = "UPDATE rendez_vous SET accepted = $1 WHERE id=$2"
  const result = await client.query({
    text: update,
    values: [oui, r_id]
  })
  res.send()
})


router.post('/refuser_le_rdv_from_m', async (req, res) => {
  // console.log("api 1")
  const r_id = req.body.id
  // console.log("r_id : " + r_id)
  const del = "DELETE FROM rendez_vous_m_to_p WHERE id = $1"
  await client.query({
    text: del,
    values: [r_id]
  })
  // console.log("api 2")
  res.send()
})

router.post('/accepter_le_rdv_from_m', async (req, res) => {

  const r_id = req.body.id
  // console.log(" test : " + req.body.medecin_id)
  const oui = 'oui'

  const selec = "SELECT * FROM rendez_vous_m_to_p WHERE id = $1"

  const result = await client.query({
    text: selec,
    values: [r_id]
  })

  const selec2 = "SELECT * FROM medecins WHERE id = $1"

  const result2 = await client.query({
    text: selec2,
    values: [parseInt(result.rows[0].medecin_id, 10)]
  })

  const insert2 = "INSERT INTO rendez_vous (date, heure, description, patient_id, medecin_id, accepted) VALUES ($1, $2, $3, $4, $5, $6)"
  await client.query({
    text: insert2,
    values: [result.rows[0].date, result.rows[0].heure, result.rows[0].description, result.rows[0].patient_id, result2.rows[0].nom, oui]
  })

  const del = "DELETE FROM rendez_vous_m_to_p WHERE id = $1"
  await client.query({
    text: del,
    values: [r_id]
  })

  const selec3 = await client.query("SELECT id FROM rendez_vous ORDER BY id")

  // selec3.rows[selec3.rowCount-1]

  const insert3 = "INSERT INTO symptomes_rdv (s_un, s_deux, s_trois, s_quatre, s_cinq, s_six, s_sept, s_huit, s_neuf, s_dix, id_rdv) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)"
  await client.query({
    text: insert3,
    values: [null, null, null, null, null, null, null, null, null, null, selec3.rows[selec3.rowCount-1].id]
  })
  res.send()
})

router.post('/add_responses_q', async (req, res) => {

  const insert = "INSERT INTO reponses_aux_questionnaires (reponses, id_questionnaire, id_patient) VALUES ($1, $2, $3)"
  await client.query({
    text: insert,
    values: [req.body.reponses, req.body.questionnaire_id, req.session.userId]
  })
  res.send()
})

router.get('/getLes_responses_bdd', async (req, res) => {
  var responses = []

  // const result =
  const result2 = await client.query("SELECT * FROM reponses_aux_questionnaires ORDER BY id")

  for (let i = 0; i < result2.rowCount; i++) {
    responses.push(result2.rows[i])
  }

  const content = { responses : responses }

  res.status(200).json(content)
})


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

router.post('/rdv_m_to_p', async (req, res) => {

    const date = req.body.date
    const heure = req.body.heure
    const description = req.body.description
    const id_du_patient = req.body.pid
    const id_du_medecin = req.session.medecinId
    const accepted_ou_pas = req.body.accepted
    const nom_pat = req.body.nom_p

    const insert = "INSERT INTO rendez_vous_m_to_p (date, heure, description, patient_id, medecin_id, accepted) VALUES ($1, $2, $3, $4, $5, $6)"

    await client.query({
      text: insert,
      values: [date, heure, description, id_du_patient, req.session.medecinId, accepted_ou_pas]
    })
    // console.log("ICI 2")
    // const selec = "SELECT id FROM prendre_rendez_vous_m_to_p WHERE (date = $1 AND heure = $2 AND description = $3 AND patient_id = $4 AND accepted = $5)"
    //
    // const result = await client.query({
    //   text: selec,
    //   values: [date, heure, description, req.session.userId, accepted_ou_pas]
    // })
    // console.log("ICI 3 " + result.rows[0].id)
    // const insert2 = "INSERT INTO symptomes_rdv (s_un, s_deux, s_trois, s_quatre, s_cinq, s_six, s_sept, s_huit, s_neuf, s_dix, id_rdv) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)"
    // await client.query({
    //   text: insert2,
    //   values: [null, null, null, null, null, null, null, null, null, null, result.rows[0].id]
    // })
    // console.log("ICI 4 " + insert2)

    const le_rdv = {
      id: req.session.rdv_medecin_Id + 1,
      date: date,
      heure: heure,
      description: description,
      id_du_patient: id_du_patient,
      id_du_medecin: req.session.medecinId,
      accepted_ou_pas: accepted_ou_pas
    }
    // console.log("ICI 3")

    res.status(200).json(le_rdv)
  // } else {
  //   res.status(401).json({ message: "not logged" })
  // }

})

router.post('/rdv', async (req, res) => {
  // console.log("ICI 1")
  if (req.session.userId) {

    // const rdv_id
    const date = req.body.date
    const heure = req.body.heure
    const description = req.body.description
    const id_du_patient = req.session.userId
    const id_du_medecin = req.body.mid
    const accepted_ou_pas = req.body.accepted

    const insert = "INSERT INTO rendez_vous (date, heure, description, patient_id, medecin_id, accepted) VALUES ($1, $2, $3, $4, $5, $6)"

    await client.query({
      text: insert,
      values: [date, heure, description, req.session.userId, id_du_medecin, accepted_ou_pas]
    })
    // console.log("ICI 2")
    const selec = "SELECT id FROM rendez_vous WHERE (date = $1 AND heure = $2 AND description = $3 AND patient_id = $4 AND accepted = $5)"

    const result = await client.query({
      text: selec,
      values: [date, heure, description, req.session.userId, accepted_ou_pas]
    })
    // console.log("ICI 3 " + result.rows[0].id)
    const insert2 = "INSERT INTO symptomes_rdv (s_un, s_deux, s_trois, s_quatre, s_cinq, s_six, s_sept, s_huit, s_neuf, s_dix, id_rdv) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)"
    await client.query({
      text: insert2,
      values: [null, null, null, null, null, null, null, null, null, null, result.rows[0].id]
    })
    // console.log("ICI 4 " + insert2)

    const le_rdv = {
      id: req.session.rdv_patient_Id + 1,
      date: date,
      heure: heure,
      description: description,
      id_du_patient: req.session.userId,
      id_du_medecin: id_du_medecin,
      accepted_ou_pas: accepted_ou_pas
    }

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
  // console.log("test1 ")

    const email = req.body.email
    const password = req.body.password
    const prenom = req.body.prenom
    const nom = req.body.nom
    const adresse = req.body.adresse
    const region = req.body.region
    const telephone = req.body.telephone
    const specialite = req.body.specialite

    const sql = "SELECT * FROM medecins WHERE email=$1"

    const result = await client.query({
      text: sql,
      values: [email]
    })
    // console.log("test2 ")

    if (result.rowCount == 1) {
      res.status(400).json({ message: "this user already exist" })
    } else {
      const hash = await bcrypt.hash(password, 10)
      const insert = "INSERT INTO medecins (nom ,prenom, email, specialite, password, telephone, region, adresse) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"

      const result2 = await client.query({
        text: insert,
        values: [nom, prenom, email, specialite, hash, telephone, region, adresse]
      })
      // console.log("test3 ")

      var size = les_medecins.length
      const newMedecin = {
        id: size + 1,
        email: email,
        prenom: prenom,
        nom: nom,
        region: region,
        photo:'https://img.icons8.com/material-sharp/96/000000/user-male-circle.png',
        numero:telephone,
        adresse:adresse,
        specialite: specialite
      }
      console.log("test 4")
      les_medecins.push(newMedecin)
      res.send()
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
        req.session.medecinRegion = result2.rows[0].region
        req.session.medecinAdresse = result2.rows[0].adresse
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

router.get('/me_medecin', async (req, res) => {

    var dmd_rdv = []
    var dmd_rdv_to_p = []

      const select = "SELECT * FROM rendez_vous WHERE medecin_id=$1"
      const resultm = await client.query({
        text: select,
        values: [req.session.medecinName]
      })
      for (let i = 0; i < resultm.rows.length; i++) {
        resultm.rows[i].date = new Date(resultm.rows[i].date).toString().slice(0,15)
      }
      dmd_rdv = resultm.rows

      const selectd = "SELECT * FROM rendez_vous_m_to_p WHERE medecin_id=$1"
      const resultmd = await client.query({
        text: selectd,
        values: [req.session.medecinName]
      })
      for (let i = 0; i < resultmd.rows.length; i++) {
        resultmd.rows[i].date = new Date(resultmd.rows[i].date).toString().slice(0,15)
      }
      dmd_rdv_to_p = resultmd.rows

    const m = {
      id: req.session.medecinId,
      nom: req.session.medecinName,
      email: req.session.medecinEmail,
      prenom: req.session.medecinFirstName,
      telephone: req.session.medecinTelephone,
      specialite: req.session.medecinSpecialite,
      adresse: req.session.medecinAdresse,
      region: req.session.medecinRegion,
      demande_de_rdv: dmd_rdv,
      demande_de_rdv_to_p: dmd_rdv_to_p
    }

    res.json(m)

  })

router.get('/me_patient', async (req, res) => {

    var mes_rdv = []
    var mes_rdv_from_m = []

      const select = "SELECT * FROM rendez_vous WHERE patient_id=$1"
      const result = await client.query({
        text: select,
        values: [req.session.userId]
      })
      for (let i = 0; i < result.rows.length; i++) {
        result.rows[i].date = new Date(result.rows[i].date).toString().slice(0,15)
      }
      mes_rdv = result.rows
      const selectp = "SELECT * FROM rendez_vous_m_to_p WHERE patient_id=$1"
      const resultp = await client.query({
        text: selectp,
        values: [req.session.userId]
      })
      for (let i = 0; i < resultp.rows.length; i++) {
        resultp.rows[i].date = new Date(resultp.rows[i].date).toString().slice(0,15)
      }
      mes_rdv_from_m = resultp.rows

    const user = {
      id: req.session.userId,
      nom: req.session.userName,
      email: req.session.userEmail,
      prenom: req.session.userFirstName,
      telephone: req.session.userTelephone,
      patient_rdv: mes_rdv,
      patient_rdv_from_m: mes_rdv_from_m
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
    var adresse = req.body.adresse
    var region = req.body.region

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
    if (!region) {
      region = req.session.medecinRegion
    }
    if (!adresse) {
      adresse = req.session.medecinAdresse
    }
    ancien_nom = req.session.medecinName
    req.session.medecinName = nom
    req.session.medecinFirstName = prenom
    req.session.medecinEmail = email
    req.session.medecinTelephone = telephone
    req.session.medecinSpecialite = specialite
    req.session.medecinRegion = region
    req.session.medecinAdresse = adresse


    const update = "UPDATE medecins SET nom = $1, prenom = $2, email = $3, specialite = $4, telephone = $5, adresse = $6, region = $7 WHERE email=$3"
    const result = await client.query({
      text: update,
      values: [nom, prenom, email, specialite, telephone, adresse, region]
    })

    const updatee = "UPDATE rendez_vous SET medecin_id = $1 WHERE medecin_id=$2"
    const resulte = await client.query({
      text: updatee,
      values: [nom, ancien_nom]
    })

    res.send()
    })

router.get('/getLes_medecins_bdd', async (req, res) => {
  var m_api_bdd = []

  const result2 = await client.query("SELECT * FROM medecins ORDER BY id")

  for (let i = 0; i < result2.rowCount; i++) {
    m_api_bdd.push(result2.rows[i])
  }

  const content = { m_api_bdd : m_api_bdd }

  res.status(200).json(content)
})

router.get('/getLes_patients_bdd', async (req, res) => {
  var p_api_bdd = []

  // const result =
  const result2 = await client.query("SELECT * FROM users ORDER BY id")

  for (let i = 0; i < result2.rowCount; i++) {
    p_api_bdd.push(result2.rows[i])
  }

  const content = { p_api_bdd : p_api_bdd }

  res.status(200).json(content)
})

router.get('/getLes_symp_rdv_bdd', async (req, res) => {
  var s_rdv_api_bdd = []

  // const result =
  const result2 = await client.query("SELECT * FROM symptomes_rdv")

  for (let i = 0; i < result2.rowCount; i++) {
    s_rdv_api_bdd.push(result2.rows[i])
  }

  const content = { s_rdv : s_rdv_api_bdd }

  res.status(200).json(content)
})

router.get('/getLes_rdv_bdd', async (req, res) => {
  var dmd_rdv_bdd = []

  // const result =
  const result2 = await client.query("SELECT * FROM rendez_vous")

  for (let i = 0; i < result2.rowCount; i++) {
    // console.log("api " + result2.rows[i])
    dmd_rdv_bdd.push(result2.rows[i])
  }

  const content = { dmd_rdv_bdd : dmd_rdv_bdd }

  res.status(200).json(content)
})

router.get('/getLes_rdv_to_p_bdd', async (req, res) => {
  var dmd_rdv_bdd = []

  // const result =
  const result2 = await client.query("SELECT * FROM rendez_vous_m_to_p")

  for (let i = 0; i < result2.rowCount; i++) {
    // console.log("api " + result2.rows[i])
    dmd_rdv_bdd.push(result2.rows[i])
  }

  const content = { dmd_rdv_bdd : dmd_rdv_bdd }

  res.status(200).json(content)
})

router.put('/add_to_rdv_api', async (req, res) => {

  // console.log( " on arrive dans l'api ! ")
  var id = req.body.id_du_rdv
  var l = req.session.panier_symptomes.symptomes

  var symp_un = null
  var symp_deux = null
  var symp_trois = null
  var symp_quatre = null
  var symp_cinq = null
  var symp_six = null
  var symp_sept = null
  var symp_huit = null
  var symp_neuf = null
  var symp_dix = null

  if (l[0]) {
    var symp_un = l[0].nom
  }
  if (l[1]) {
    var symp_deux = l[1].nom
  }
  if (l[2]){
      var symp_trois = l[2].nom
  }
  if (l[3]) {
      var symp_quatre = l[3].nom
  }
  if (l[4]) {
    var symp_cinq = l[4].nom
  }
  if (l[5]) {
    var symp_six = l[5].nom
  }
  if (l[6]) {
    var symp_sept = l[6].nom
  }
  if (l[7]) {
    var symp_huit = l[7].nom
  }
  if (l[8]) {
      var symp_neuf = l[8].nom
  }
  if (l[9]) {
    var symp_dix = l[9].nom
  }
  console.log(" l[0] : " + l[0].nom)

  const update = "UPDATE symptomes_rdv SET s_un = $1, s_deux = $2, s_trois = $3, s_quatre = $4, s_cinq = $5, s_six = $6, s_sept = $7, s_huit = $8, s_neuf = $9, s_dix = $10 WHERE id_rdv=$11"
  const result = await client.query({
    text: update,
    values: [symp_un, symp_deux, symp_trois, symp_quatre, symp_cinq, symp_six, symp_sept, symp_huit, symp_neuf, symp_dix, id]
  })
  // console.log("api 2")

  res.send()
  })

module.exports = router
