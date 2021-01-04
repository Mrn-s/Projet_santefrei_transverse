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


const routes = [
  { path: '/', component: Accueil },
  { path: '/questionnaire', component: Questionnaires},
  { path: '/register', component: Register},
  { path: '/login', component: Login},
  { path: '/deconnexion', component: Deconnexion},
  { path: '/actualite', component: Actualite},
  { path: '/medecins', component: Medecins },
  { path: '/mes_rapports', component: Mes_rapports},
  { path: '/mes_patients', component: Mes_patients},
  { path: '/profil', component: Profil }

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
    les_medecins: [],
    rapport: {
      createdAt: null,
      id: null,
      maladies_rapport: [],
      symptomes: []
    },
    user_patient: {
      nom: null,
      prenom: null,
      email: null,
      telephone: null,
      id: null
    },
    user_medecin: {
      nom: null,
      prenom: null,
      email: null,
      specialite: null,
      id: null
    },
    maladiesTypes: ['tete', 'bras_droit', 'bras_gauche', 'jambe_droite', 'jambe_gauche', 'torse', 'cou', 'epaule_droite', 'epaule_gauche']
  },
  async mounted () {
    // const res_medecins = await axios.get('/api/medecins')
    // this.medecins = res_medecins.data
    // const res_maladies = await axios.get('/api/maladies')
    // this.maladies = res_maladies.data
    const liste_des_questionnaires = await axios.get('/api/getQuestionnaire')
    this.questionnaires = liste_des_questionnaires.data
    const liste_des_medecins = await axios.get('/api/getLes_medecins')
    this.les_medecins = liste_des_medecins.data
    // alert(this.les_medecins)

    await axios.post('/api/setdatas', 'maladiesTypes=' + this.maladiesTypes)

    const res_patient = await axios.get('/api/me_patient')
    this.user_patient.id = res_patient.data.id
    this.user_patient.nom = res_patient.data.nom
    this.user_patient.email = res_patient.data.email
    this.user_patient.prenom = res_patient.data.prenom
    this.user_patient.telephone = res_patient.data.telephone

    const res_medecin = await axios.get('/api/me_medecin')
    this.user_medecin.id = res_medecin.data.id
    this.user_medecin.nom = res_medecin.data.nom
    this.user_medecin.email = res_medecin.data.email
    this.user_medecin.prenom = res_medecin.data.prenom
    this.user_medecin.specialite = res_medecin.data.specialite

  },
  methods: {

    async logout () {
      const res = await axios.post('/api/logout/')
      this.user_medecin.nom = res.data.nom_medecin
      this.user_medecin.email = res.data.email_medecin
      this.user_medecin.prenom = res.data.prenom_medecin
      this.user_medecin.specialite = res.data.specialite
      this.user_medecin.id = res.data.user_medecin

      this.user_patient.nom = res.data.nom_patient
      this.user_patient.email = res.data.email_patient
      this.user_patient.prenom = res.data.prenom_patient
      this.user_patient.telephone = res.data.telephone
      this.user_patient.id = res.data.user_patient
      router.push('/')
    },

    async login (user) {
      await axios.post('/api/login/','email=' + user.email + '&password=' + user.password)

      const res = await axios.get('/api/me_patient')
      this.user_patient.id = res.data.id
      this.user_patient.nom = res.data.nom
      this.user_patient.email = res.data.email
      this.user_patient.prenom = res.data.prenom
      this.user_patient.telephone = res.data.telephone
      // this.user_patient.rapports = res.data.rapports

      router.push('/')
    },

    async medecinLogin (medecin) {
      await axios.post('/api/medecin_login/','email=' + medecin.email + '&password=' + medecin.password)

      const res = await axios.get('/api/me_medecin')
      this.user_medecin.id = res.data.id
      this.user_medecin.nom = res.data.nom
      this.user_medecin.email = res.data.email
      this.user_medecin.prenom = res.data.prenom
      this.user_medecin.specialite = res.data.specialite
      // this.user_medecin.patients = res.data.patients

      router.push('/')
    },

    async register_patient (user_patient) {
      try {
        await axios.post('/api/register_patient/','nom=' + user_patient.nom + '&email=' + user_patient.email + '&password=' + user_patient.password +  '&prenom=' + user_patient.prenom + '&telephone=' + user_patient.telephone)
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
        await axios.post('/api/register_medecin/','nom=' + user_medecin.nom + '&email=' + user_medecin.email + '&password=' + user_medecin.password +  '&prenom=' + user_medecin.prenom + '&specialite=' + user_medecin.specialite)
        router.push('/connexion')
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
    }
  }
})
