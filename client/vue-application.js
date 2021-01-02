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
    liste_medecins: [],
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
      id: null,
      rapports: []
    },
    user_medecin: {
      nom: null,
      prenom: null,
      email: null,
      specialite: null,
      id: null,
      patients: []
    },
    maladiesTypes: ['tete', 'bras_droit', 'bras_gauche', 'jambe_droite', 'jambe_gauche', 'torse', 'cou', 'epaule_droite', 'epaule_gauche']
  },
  async mounted () {
    const res_medecins = await axios.get('/api/medecins')
    this.medecins = res_medecins.data
    const res_maladies = await axios.get('/api/maladies')
    this.maladies = res_maladies.data

    await axios.post('/api/setdatas', 'maladiesTypes=' + this.maladiesTypes)

    const res_patient = await axios.get('/api/me_patient')
    this.user_patient.id = res_patient.data.user_patient
    this.user_patient.nom = res_patient.data.nom
    this.user_patient.email = res_patient.data.email
    this.user_patient.prenom = res_patient.data.prenom
    this.user_patient.telephone = res_patient.data.telephone

    const res_medecin = await axios.get('/api/me_medecin')
    this.user_medecin.id = res_medecin.data.user_medecin
    this.user_medecin.nom = res_medecin.data.nom
    this.user_medecin.email = res_medecin.data.email
    this.user_medecin.prenom = res_medecin.data.prenom
    this.user_medecin.specialite = res_medecin.data.specialite
  },
  methods: {

    async login (user) {
      console.log(this.user.id)
      await axios.post('/api/login/','email=' + user.email + '&password=' + user.password)

      const res = await axios.get('/api/me_patient')
      this.user.id = res.data.user_patient
      this.user.nom = res.data.nom
      this.user.email = res.data.email
      this.user.prenom = res.data.prenom
      this.user.telephone = res.data.telephone

      router.push('/')
    },

    async register_patient (user_patient) {
      try {
        await axios.post('/api/register_patient/','nom=' + user_patient.nom + '&email=' + user_patient.email + '&password=' + user_patient.password +  '&prenom=' + user_patient.prenom + '&telephone=' + user_patient.telephone)
        router.push('/connexion')
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
    }

  }
})
