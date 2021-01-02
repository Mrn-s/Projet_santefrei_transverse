const Accueil = window.httpVueLoader('./components/Accueil.vue')
const Questionnaires = window.httpVueLoader('./components/Questionnaires.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Medecins = window.httpVueLoader('./components/Medecins.vue')
const Actualite = window.httpVueLoader('./components/Actualite.vue')

const routes = [
  { path: '/', component: Accueil },
  { path: '/questionnaire', component: Questionnaires },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/actualite', component: Actualite },
  { path: '/medecins', component: Medecins }
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

    await axios.post('/api/setdatas', 'menusTypes=' + this.menusTypes)

    const res_moi = await axios.get('/api/me')
    this.admin.id = res_moi.data.admin
    this.user_patient.id = res_moi.data.user_patient
    this.user_patient.nom = res_moi.data.nom
    this.user_patient.email = res_moi.data.email
    this.user_patient.prenom = res_moi.data.prenom
    this.user_patient.telephone = res_moi.data.telephone

  },
  methods: {

    async register (user_patient) {
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
    },

    async login (user_patient) {
      await axios.post('/api/login/','email=' + user_patient.email + '&password=' + user_patient.password)

      const res = await axios.get('/api/me')
      this.user_patient.id = res.data.user_patient
      this.user_patient.nom = res.data.nom
      this.user_patient.email = res.data.email
      this.user_patient.prenom = res.data.prenom
      this.user_patient.telephone = res.data.telephone

      router.push('/')
    }

  }
})
