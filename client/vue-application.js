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
      rdv_patient: [],
      rdv_patient_from_med:[]
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
      demande_de_rdv: [],
      demande_de_rdv_to_p: []
    },
    demande_de_rdv_med:null,
    demande_de_rdv_med_to_p:null,
    // symptomeTypes: ['type_1','type_2','type_3','type_4','type_5','type_6'],
    symptomeTypes: ['cardiologie','troubles digestifs','pneumologie','problèmes sanguins','troubles liés au nez et à la gorge','problèmes cérébraux', 'psychiatrie', 'oreilles', 'symptômes généraux', 'dermatologie', 'musculaire', 'trouble des hormones','bouche','vision'],
    liste_medecins_bdd: null,
    liste_patients_bdd: null,
    rdv_symptome:null,
    reponses_questions: [],
    toutes_les_reponses_bdd:[]
  },
  async mounted () {

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

    const res = await axios.get('/api/getLes_responses_bdd')
    this.toutes_les_reponses_bdd = res.data.responses

    const res_rdv_to_p_bdd = await axios.get('/api/getLes_rdv_to_p_bdd')
    this.demande_de_rdv_med_to_p = res_rdv_to_p_bdd.data.dmd_rdv_bdd


    const res_symp_rdv = await axios.get('/api/getLes_symp_rdv_bdd')
    this.rdv_symptome = res_symp_rdv.data.s_rdv
    const pat_bdd = await axios.get('/api/getLes_patients_bdd')
    this.liste_patients_bdd = pat_bdd.data.p_api_bdd

    await axios.post('/api/setdatas', 'symptomeTypes=' + this.symptomeTypes)

    const res_patient = await axios.get('/api/me_patient')
    this.user_patient.id = res_patient.data.id
    this.user_patient.email = res_patient.data.email
    this.user_patient.nom = res_patient.data.nom
    this.user_patient.prenom = res_patient.data.prenom
    this.user_patient.telephone = res_patient.data.telephone
    this.user_patient.rdv_patient = res_patient.data.patient_rdv
    this.user_patient.rdv_patient_from_med = res_patient.data.patient_rdv_from_m

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
    this.user_medecin.demande_de_rdv_to_p = res_medecin.data.demande_de_rdv_to_p
  },
  methods: {

    async add_to_rdv_s (rdv_id){

      const res = await axios.put('/api/add_to_rdv_api','id_du_rdv=' + rdv_id.id_rdv + '&liste_s_to_add=' + this.panier_symptomes.symptomes )
      asAlertMsg({
        type: "success",
        title: "Validé",
        message: "Vous avez bien ajouter vos symptomes",
        timer: 2200
      })
    },

    async refuser_rdv (rdv_id){
      const res = await axios.post('/api/refuser_le_rdv','id=' + rdv_id.id)
      asAlertMsg({
        type: "success",
        title: "Validé",
        message: "Vous avez refusé le rdv",
        timer: 2200
      })
    },

    async accepter_rdv (rdv_id){
      const res = await axios.post('/api/accepter_le_rdv','id=' + rdv_id.id)
      asAlertMsg({
        type: "success",
        title: "Validé",
        message: "Vous avez accepté le rendez-vous",
        timer: 2200
      })
    },

    async refuser_rdv_from_m (rdv_id){
      const res = await axios.post('/api/refuser_le_rdv_from_m','id=' + rdv_id.id)
      asAlertMsg({
        type: "success",
        title: "Validé",
        message: "Vous avez refusé le rdv",
        timer: 2200
      })
    },

    async accepter_rdv_from_m (rdv_id){
      const res = await axios.post('/api/accepter_le_rdv_from_m','id=' + rdv_id.id)
      asAlertMsg({
        type: "success",
        title: "Validé",
        message: "Vous avez accepté le rendez-vous",
        timer: 2200
      })
    },

    async removeFromPanier_symptomes (s) {

      for (let i = 0; i != this.symptomeTypes.length; i++) {

        if (s.type == this.symptomeTypes[i]) {

          const indexS = await axios.delete('/api/panier_s/' + s.type + '/' + s.id)

          this.panier_symptomes.symptomes.splice(indexS.data, 1)
        }
      }

      this.panier_symptomes.nb_symptomes = this.panier_symptomes.nb_symptomes - 1
    },

    async add_to_panier_symptomes (symptome) {

      for (let i = 0; i != this.symptomeTypes.length; i++) {

        if (symptome.type == this.symptomeTypes[i]) {

          const res = await axios.post('/api/panier_s','id=' + symptome.id + '&type=' + symptome.type + '&nom=' + symptome.nom)

          this.panier_symptomes.symptomes.push(res.data)

          this.panier_symptomes.nb_symptomes = this.panier_symptomes.nb_symptomes + 1
        }
      }
    },

    async send_re_q (questionnaire_id) {
      // alert(questionnaire_id)
      const res = await axios.post('/api/add_responses_q','reponses=' + this.reponses_questions + '&questionnaire_id=' + questionnaire_id )
      // alert("vue app 2 : test")
      asAlertMsg({
        type: "success",
        title: "Validé",
        message: "Envois du questionnaire",
        timer: 1500,
      })
    },

    async add_reponse_of_q(id,r){
      // alert("vue app " + r)
      // alert (this.reponses_questions.includes([id,r]))
      if (!(this.reponses_questions.includes([id,r]))){

      var liste_id = []
      for (i in this.reponses_questions){

        liste_id.push(i[0])
      }
      // alert(liste_id)
      if(liste_id.includes(id)){
        for (couple in this.reponses_questions){
          if (couple[0] == id){
            couple[1] = r
          }
        }
      }
      else{
            this.reponses_questions.push([id,r])
      }

    }
  },

    async reset_reponses(){
      this.reponses_questions = []
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
      // asAlertMsg({
      //   type: "success",
      //   title: "Validé",
      //   message: "Vous avez bel et bien été deconnecté",
      //   timer: 1800
      // })
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
          timer: 2300
        })
        router.push('/questionnaire')
    },

    async prendre_rdv_m_to_p (rdv, id_du_patient, nom_patient) {
        // alert("alert 1 : id du patient " + id_du_patient + " medecin : " + rdv.medecin + " description : " + rdv.description)

        const le_rdv = await axios.post('/api/rdv_m_to_p','date=' + rdv.date + '&heure=' + rdv.heure + '&description=' + rdv.description + '&nom_p=' + nom_patient + '&pid=' + id_du_patient + "&accepted=" + rdv.accepted_or_not)
        // alert("alert 2" + le_rdv.data)
        this.user_patient.rdv_patient_from_med.push(le_rdv.data)
        // alert("alert 3 " + this.user_patient.rdv_patient)
        this.user_medecin.demande_de_rdv_to_p.push(le_rdv.data)

        // alert("alert 4 " + this.user_medecin.demande_de_rdv)
        asAlertMsg({
          type: "success",
          title: "Validé",
          message: "Votre rendez-vous a été prit en compte DR. " + this.user_medecin.nom,
          timer: 2300
        })
        // router.push('/questionnaire')
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
          timer: 2100,
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
        // alert("alert 1")
        await axios.post('/api/register_medecin/','adresse=' + user_medecin.adresse + '&region=' + user_medecin.region + '&nom=' + user_medecin.nom + '&email=' + user_medecin.email + '&password=' + user_medecin.password +  '&prenom=' + user_medecin.prenom + '&specialite=' + user_medecin.specialite + '&telephone=' + user_medecin.telephone)
        // alert("alert 1")
        asAlertMsg({
          type: "success",
          title: "Validé",
          message: "Votre compte a bien été créé Dr. " + user_medecin.nom,
          timer: 2100
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
        timer: 2100
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
        timer: 2100
      })

    }

  }
})
