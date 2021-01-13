const Accueil = window.httpVueLoader('./components/Accueil.vue')
const Questionnaires = window.httpVueLoader('./components/Questionnaires.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Deconnexion = window.httpVueLoader('./components/Deconnexion.vue')
const Medecins = window.httpVueLoader('./components/Medecins.vue')
const Actualite = window.httpVueLoader('./components/Actualite.vue')
const Mes_rapports = window.httpVueLoader('./components/mes_rapports_client.vue')
const Mes_patients = window.httpVueLoader('./components/mes_patients.vue')
const Profil = window.httpVueLoader('./components/Profil.vue')
const Rdv = window.httpVueLoader('./components/Rendez_vous.vue')

const routes = [
  // à gauche le chemin pour acceder à la vue // à droite la vue en elle-même
  { path: '/', component: Accueil },
  { path: '/questionnaire', component: Questionnaires},
  { path: '/register', component: Register},
  { path: '/login', component: Login},
  { path: '/deconnexion', component: Deconnexion},
  { path: '/actualite', component: Actualite},
  { path: '/medecins', component: Medecins },
  { path: '/mes_rapports', component: Mes_rapports},
  { path: '/mes_patients', component: Mes_patients},
  { path: '/profil', component: Profil },
  { path: '/rdv', component: Rdv }
]

const router = new VueRouter({
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

var app = new Vue({
  router,
  el: '#app',
  data: {

    questionnaires:[],
    l_symptomes:[],
    liste_specialites:[],
    liste_actualite:[],
    liste_medecins: [],
    panier_symptomes: {
      createdAt: null,
      updatedAt: null,
      nb_symptomes: 0,
      symptomes: []
    },
    user_patient: {
      nom: null,
      prenom: null,
      email: null,
      telephone: null,
      id: null,
      rdv_patient: []
    },
    user_medecin: {
      nom: null,
      prenom: null,
      email: null,
      telephone: null,
      specialite: null,
      id: null,
      region: null,
      adresse: null,
      demande_de_rdv: []
    },
    demande_de_rdv_med:null,
    maladiesTypes: ['tete', 'bras_droit', 'bras_gauche', 'jambe_droite', 'jambe_gauche', 'torse', 'cou', 'epaule_droite', 'epaule_gauche'],
    symptomeTypes: ['type_1','type_2','type_3','type_4','type_5','type_6'],
    liste_medecins_bdd: null,
    rdv_symptome:null
  },
  async mounted () {
    // const res_medecins = await axios.get('/api/medecins')
    // this.medecins = res_medecins.data
    // const res_maladies = await axios.get('/api/maladies')
    // this.maladies = res_maladies.data
    const res_panier_symptome = await axios.get('/api/GetPanierSymptomes')
    this.panier_symptomes = res_panier_symptome.data
    const liste_des_questionnaires = await axios.get('/api/getQuestionnaire')
    this.questionnaires = liste_des_questionnaires.data
    const liste_des_symptomes = await axios.get('/api/getLes_symptomes')
    this.l_symptomes = liste_des_symptomes.data
    const liste_des_medecins = await axios.get('/api/getLes_medecins')
    this.liste_medecins = liste_des_medecins.data
    const liste_des_actualite = await axios.get('/api/getLes_actualite')
    this.liste_actualite = liste_des_actualite.data
    const liste_des_spe = await axios.get('/api/getLes_spe')
    this.liste_specialites = liste_des_spe.data
    const med_bdd = await axios.get('/api/getLes_medecins_bdd')
    this.liste_medecins_bdd = med_bdd.data.m_api_bdd
    const res_m_bdd = await axios.get('/api/getLes_rdv_bdd')
    this.demande_de_rdv_med = res_m_bdd.data.dmd_rdv_bdd
    const res_symp_rdv = await axios.get('/api/getLes_symp_rdv_bdd')
    this.rdv_symptome = res_symp_rdv.data.s_rdv

    await axios.post('/api/setdatas', 'symptomeTypes=' + this.symptomeTypes)

    const res_patient = await axios.get('/api/me_patient')
    this.user_patient.id = res_patient.data.id
    this.user_patient.email = res_patient.data.email
    this.user_patient.nom = res_patient.data.nom
    this.user_patient.prenom = res_patient.data.prenom
    this.user_patient.telephone = res_patient.data.telephone
    this.user_patient.rdv_patient = res_patient.data.patient_rdv

    const res_medecin = await axios.get('/api/me_medecin')

    this.user_medecin.id = res_medecin.data.id
    this.user_medecin.email = res_medecin.data.email
    this.user_medecin.nom = res_medecin.data.nom
    this.user_medecin.prenom = res_medecin.data.prenom
    this.user_medecin.telephone = res_medecin.data.telephone
    this.user_medecin.specialite = res_medecin.data.specialite
    this.user_medecin.region = res_medecin.data.region
    this.user_medecin.adresse = res_medecin.data.adresse
    this.user_medecin.demande_de_rdv = res_medecin.data.demande_de_rdv
  },
  methods: {
    // async add_to_rdv_s (liste_des_symptomes_a_ajouter_et_id){
    //   alert("vue app 1 : " + liste_des_symptomes_a_ajouter_et_id)
    //   const res = await axios.put('/api/add_to_rdv_api','id_du_rdv=' + liste_des_symptomes_a_ajouter_et_id.id_rdv + '&liste_s_to_add=' + liste_des_symptomes_a_ajouter_et_id.l_symptomes_to_add )
    //   alert("vue app 2 : ")
    //   asAlertMsg({
    //     type: "success",
    //     title: "Validé",
    //     message: "Vous avez bien ajouter vos symptomes",
    //     timer: 2500,
    //   })
    // },
    async add_to_rdv_s (rdv_id){
      alert("vue app 1 : " + this.panier_symptomes.symptomes[0].nom + "  test2  : " + this.panier_symptomes.symptomes[1].nom + "  test3  : " + this.panier_symptomes.symptomes[2].nom )
      const res = await axios.put('/api/add_to_rdv_api','id_du_rdv=' + rdv_id.id_rdv + '&liste_s_to_add=' + this.panier_symptomes.symptomes )
      alert("vue app 2 : test")
      asAlertMsg({
        type: "success",
        title: "Validé",
        message: "Vous avez bien ajouter vos symptomes",
        timer: 2200,
      })
    },

    async refuser_rdv (rdv_id){

      const res = await axios.post('/api/refuser_le_rdv','id=' + rdv_id.id)

      asAlertMsg({
        type: "success",
        title: "Validé",
        message: "Vous avez refusé le rdv",
        timer: 2200,
      })
    },

    async accepter_rdv (rdv_id){
      const res = await axios.post('/api/accepter_le_rdv','id=' + rdv_id.id)
      asAlertMsg({
        type: "success",
        title: "Validé",
        message: "Vous avez accepté le rendez-vous",
        timer: 2200,
      })
    },

    async removeFromPanier_symptomes (s) {
      // alert("Vue APP 1")
      for (let i = 0; i != this.symptomeTypes.length; i++) {
        // alert("Vue APP 2 for")
        if (s.type == this.symptomeTypes[i]) {
          // alert("test 1")
          const indexS = await axios.delete('/api/panier_s/' + s.type + '/' + s.id)
          // alert("test 2")
          this.panier_symptomes.symptomes.splice(indexS.data, 1)
        }
      }

      this.panier_symptomes.nb_symptomes = this.panier_symptomes.nb_symptomes - 1
    },

    async add_to_panier_symptomes (symptome) {
      // alert("vue app ETAPE 1")
      for (let i = 0; i != this.symptomeTypes.length; i++) {
        // alert("vue app ETAPE 2")
        if (symptome.type == this.symptomeTypes[i]) {
          // alert("vue app ETAPE 3")
          const res = await axios.post('/api/panier_s','id=' + symptome.id + '&type=' + symptome.type + '&nom=' + symptome.nom)

          this.panier_symptomes.symptomes.push(res.data)

          this.panier_symptomes.nb_symptomes = this.panier_symptomes.nb_symptomes + 1
        }
      }
    },

    async logout () {
      const res = await axios.post('/api/logout/')
      this.user_medecin.nom = res.data.nom_medecin
      this.user_medecin.email = res.data.email_medecin
      this.user_medecin.prenom = res.data.prenom_medecin
      this.user_medecin.specialite = res.data.specialite
      this.user_medecin.telephone = res.data.telephone_medecin
      this.user_medecin.id = res.data.user_medecin
      this.user_medecin.demande_de_rdv = []

      this.user_patient.nom = res.data.nom_patient
      this.user_patient.email = res.data.email_patient
      this.user_patient.prenom = res.data.prenom_patient
      this.user_patient.telephone = res.data.telephone
      this.user_patient.id = res.data.user_patient
      this.user_patient.rdv_patient = []
      asAlertMsg({
        type: "success",
        title: "Validé",
        message: "Vous avez bel et bien été deconnecté",
        timer: 2800,
      })
      router.push('/')
    },

    async prendre_rdv (rdv) {
        // alert("alert 1 : " + rdv.patient + " " + rdv.medecin + rdv.heure + rdv.date + rdv.description)

        const le_rdv = await axios.post('/api/rdv','date=' + rdv.date + '&heure=' + rdv.heure + '&description=' + rdv.description + '&mid=' + rdv.medecin + "&accepted=" + rdv.accepted_or_not)
        // alert("alert 2" + le_rdv.data)
        this.user_patient.rdv_patient.push(le_rdv.data)
        // alert("alert 3 " + this.user_patient.rdv_patient)
        this.user_medecin.demande_de_rdv.push(le_rdv.data)

        // alert("alert 4 " + this.user_medecin.demande_de_rdv)
        asAlertMsg({
          type: "success",
          title: "Validé",
          message: "Votre rendez-vous a été prit en compte M./Mme. " + this.user_patient.nom,
          timer: 3000,
        })
        router.push('/questionnaire')
    },

    async login (user) {
      await axios.post('/api/login/','email=' + user.email + '&password=' + user.password)

      const res = await axios.get('/api/me_patient')
      this.user_patient.id = res.data.id
      this.user_patient.nom = res.data.nom
      this.user_patient.email = res.data.email
      this.user_patient.prenom = res.data.prenom
      this.user_patient.telephone = res.data.telephone
      this.user_patient.rdv_patient = res.data.patient_rdv

      router.push('/')
    },

    async medecinLogin (medecin) {

      await axios.post('/api/medecin_login/','email=' + medecin.email + '&password=' + medecin.password)

      const res = await axios.get('/api/me_medecin')
      this.user_medecin.id = res.data.id
      this.user_medecin.nom = res.data.nom
      this.user_medecin.email = res.data.email
      this.user_medecin.prenom = res.data.prenom
      this.user_medecin.telephone = res.data.telephone
      this.user_medecin.specialite = res.data.specialite
      this.user_medecin.region = res.data.region
      this.user_medecin.adresse = res.data.adresse
      this.user_medecin.demande_de_rdv = res.data.demande_de_rdv

      router.push('/')
    },

    async register_patient (user_patient) {
      try {
        await axios.post('/api/register_patient/','nom=' + user_patient.nom + '&email=' + user_patient.email + '&password=' + user_patient.password +  '&prenom=' + user_patient.prenom +'&telephone=' + user_patient.telephone)
        asAlertMsg({
          type: "success",
          title: "Validé",
          message: "Votre compte a bien été créé M./Mme. " + this.user_patient.nom,
          timer: 3500,
        })
        router.push('/login')
      } catch (e) {
        asAlertMsg({
          type: "warning",
          title: "Attention",
          message: "Cette adresse mail existe déjà"
        })
      }
    },

    async register_medecin (user_medecin) {
      try {
        await axios.post('/api/register_medecin/','adresse=' + user_medecin.adresse + '&region=' + user_medecin.region + '&nom=' + user_medecin.nom + '&email=' + user_medecin.email + '&password=' + user_medecin.password +  '&prenom=' + user_medecin.prenom + '&specialite=' + user_medecin.specialite + '&telephone=' + user_medecin.telephone)
        asAlertMsg({
          type: "success",
          title: "Validé",
          message: "Votre compte a bien été créé Dr. " + user_medecin.nom,
          timer: 3000,
        })
        router.push('/login')

      } catch (e) {
        asAlertMsg({
          type: "warning",
          title: "Attention",
          message: "Cette adresse mail existe déjà"
        })
      }
    },

    async updateProfile_patient (nv_profil) {
      await axios.put('/api/user_update_patient/', 'nom=' + nv_profil.nom + '&prenom=' + nv_profil.prenom + '&email=' + nv_profil.email + '&telephone=' + nv_profil.telephone)
      const res = await axios.get('/api/me_patient')
      this.user_patient.nom = res.data.nom
      this.user_patient.email = res.data.email
      this.user_patient.prenom = res.data.prenom
      this.user_patient.telephone = res.data.telephone
      asAlertMsg({
        type: "success",
        title: "Validé",
        message: "Vos modifications ont été prises en compte",
        timer: 2500,
      })

    },

    async updateProfile_medecin (nv_profil) {
      await axios.put('/api/user_update_medecin/','nom=' + nv_profil.nom + '&prenom=' + nv_profil.prenom + '&email=' + nv_profil.email + '&specialite=' +  nv_profil.specialite + '&telephone=' + nv_profil.telephone + '&region=' + nv_profil.region + '&adresse=' + nv_profil.adresse)
      const res = await axios.get('/api/me_medecin')
      this.user_medecin.nom = res.data.nom
      this.user_medecin.email = res.data.email
      this.user_medecin.prenom = res.data.prenom
      this.user_medecin.telephone = res.data.telephone
      this.user_medecin.specialite = res.data.specialite
      this.user_medecin.adresse = res.data.adresse
      this.user_medecin.region = res.data.region
      asAlertMsg({
        type: "success",
        title: "Validé",
        message: "Vos modifications ont été prises en compte",
        timer: 2500,
      })

    }

  }
})
