<template>
  <div id="container">
        <div id="popupForm_register">
          <form  @submit.prevent="Creer_patient">
            <h1>Inscription</h1>
            <label><b>Email</b></label>
            <input id="email_register" type="text" v-model="editRegister_patient.email" placeholder="email">
            <label><b>Mot de passe</b></label>
            <input type="password" v-model="editRegister_patient.password" placeholder="mot de passe">
            <label><b>Nom</b></label>
            <input type="text" v-model="editRegister_patient.nom" placeholder="nom">
            <label><b>Prenom</b></label>
            <input type="text" v-model="editRegister_patient.prenom" placeholder="prenom">
            <label><b>Telephone</b></label>
            <input type="text" v-model="editRegister_patient.telephone" placeholder="telephone">
            <article class="btn_inscription">
              <button class="bouton_inscription" type="submit">Je m'inscris</button>
              <button type="button" class="bouton_inscription" @click="openForm_register_medecin()">Inscription médecin</button>
            </article>
          </form>
        </div>

        <div id="popupForm_register_medecin">
          <form @submit.prevent="Creer_medecin">
            <h1>Inscription médecin</h1>
            <label><b>Email</b></label>
            <input id="email_register_medecin" type="text" v-model="editRegister_medecin.email" placeholder="email">
            <label><b>Mot de passe</b></label>
            <input type="password" v-model="editRegister_medecin.password" placeholder="mot de passe">
            <label><b>Nom</b></label>
            <input type="text" v-model="editRegister_medecin.nom" placeholder="nom">
            <label><b>Prenom</b></label>
            <input type="text" v-model="editRegister_medecin.prenom" placeholder="prenom">
            <label><b>Specialite</b></label>
            <!-- <input type="text" v-model="prenom" placeholder="specialite"> -->
            <select id="heure_select" v-model="editRegister_medecin.specialite">
              <option value="" disabled selected>Specialite</option>
              <option value="allergologie">allergologie</option>
              <option value="andrologie">andrologie</option>
              <option value="anesthésiologie">anesthésiologie</option>
              <option value="cardiologie">cardiologie</option>
              <option value="chirurgie cardiaque">chirurgie cardiaque</option>
              <option value="chirurgie plastique">chirurgie plastique</option>
              <option value="chirurgie générale">chirurgie générale</option>
              <option value="chirurgie gynécologique">chirurgie gynécologique</option>
              <option value="chirurgie maxillo-faciale">chirurgie maxillo-faciale</option>
              <option value="chirurgie oculaire">chirurgie oculaire</option>
              <option value="chirurgie orale">chirurgie orale</option>
              <option value="chirurgie pédiatrique">chirurgie pédiatrique</option>
              <option value="chirurgie thoracique">chirurgie thoracique</option>
              <option value="chirurgie vasculaire">chirurgie vasculaire</option>
              <option value="chirurgie viscérale">chirurgie viscérale</option>
              <option value="neurochirurgie">neurochirurgie</option>
              <option value="dermatologie">dermatologie</option>
              <option value="endocrinologie">endocrinologie</option>
              <option value="gastro-entérologie">gastro-entérologie</option>
              <option value="gériatrie">gériatrie</option>
              <option value="gynécologie">gynécologie</option>
              <option value="hématologie">hématologie</option>
              <option value="hépatologie">hépatologie</option>
              <option value="immunologie">immunologie</option>
              <option value="infectiologie">infectiologie</option>
              <option value="médecine du travail">médecine du travail</option>
              <option value="médecine d'urgence">médecine d'urgence</option>
              <option value="médecine générale">médecine générale</option>
              <option value="médecine interne">médecine interne</option>
              <option value="médecine physique et de réadaptation">médecine physique et de réadaptation</option>
              <option value="néonatologie">néonatologie</option>
              <option value="néphrologie">néphrologie</option>
              <option value="neurologie">neurologie</option>
              <option value="obstétrique">obstétrique</option>
              <option value="odontologie">odontologie</option>
              <option value="oncologie">oncologie</option>
              <option value="ophtalmologie">ophtalmologie</option>
              <option value="orthopédie">orthopédie</option>
              <option value="otorhinolaryngologie">otorhinolaryngologie</option>
              <option value="pédiatrie">pédiatrie</option>
              <option value="pneumologie">pneumologie</option>
              <option value="podologie">podologie</option>
              <option value="psychiatrie">psychiatrie</option>
              <option value="radiologie">radiologie</option>
              <option value="rhumatologie">rhumatologie</option>
              <option value="urologie">urologie</option>
            </select>
            <article class="btn_inscription">
              <button class="bouton_inscription" type="submit">Je m'inscris</button>
              <button type="button" class="bouton_inscription" @click="openForm_register()">Inscription patient</button>
            </article>
          </form>
        </div>

  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      editRegister_patient:{
        email: '',
        password: '',
        nom:'',
        prenom:'',
        telephone:''
      },
      editRegister_medecin:{
        email: '',
        password: '',
        nom:'',
        prenom:'',
        telephone:'',
        specialite:''
      },
      editLogin:{
        email:'',
        password:''
      }
    }
  },
  methods: {
    async Creer_patient() {
      // alert(this.editRegister_patient)
      var email = document.getElementById("email_register").value
      if (email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
        this.$emit('register_patient', this.editRegister_patient)
      }
    },
    async Creer_medecin(){
      var email = document.getElementById("email_register_medecin").value
      if (email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
        this.$emit('register_medecin', this.editRegister_medecin)
      }
    },
    openForm_register(){
      document.getElementById("popupForm_register_medecin").style.display="none";
      document.getElementById("popupForm_register").style.display="flex";
    },
    openForm_register_medecin () {
      document.getElementById("popupForm_register_medecin").style.display="flex";
      document.getElementById("popupForm_register").style.display="none";
    }
  }
}
</script>

<style>
  #popupForm_register_medecin{
    display: none;
  }
  .btn_inscription{
    display: flex;
    flex-direction: column;
  }

  #container{
      width:400px;
      margin:0 auto;
      margin-top:2%;
  }
  /* Bordered form */
  form {
      width:100%;
      padding: 30px;
      border: 1px solid #f1f1f1;
      background: #F2EDDB;
  }

  #container h1{
      display:flex;
      justify-content: space-around;
      height:6%;
      margin: 0 auto;
      padding-bottom: 10px;
  }

  /* Full-width inputs */
  input[type=text], input[type=password] {
      width: 100%;
      padding: 12px 20px;
      margin: 18px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
  }

  /* Set a style for all buttons */
  input[type=submit] {
      background-color: #09371F;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 100%;
  }
  input[type=submit]:hover {
      background-color: rgb(191,215,197);
      color: black;
      border: 1px solid #53af57;
  }
  .bouton_inscription{
    border:none;
    margin-top: 3%;
    text-decoration: none;
    width: 100%;
    background-color: #09371F;
    padding-top: 4%;
    padding-bottom: 4%;
    color:#fff;
    font-size: 1.3em;
  }
  .bouton_inscription:hover{
    background-color: #E8C542;
    color: black;
    cursor: pointer;

  }
</style>
