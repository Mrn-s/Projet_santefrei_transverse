<template>
  <div id="background_page_register">
    <div class="container colonne_centrale" id="ici">

        <div class="container" id="popupForm_register">
          <form class="row"  @submit.prevent="Creer_patient">
            <div class="col-sm-12">
              <h1 >Inscription</h1>
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
            </div>
            <article class="row btn_inscription">
              <button class=" col-sm-6 bouton_inscription" type="submit">Je m'inscris</button>
              <button type="button" class="col-sm-6 bouton_inscription" @click="openForm_register_medecin()">Inscription médecin</button>
            </article>
          </form>
        </div>

        <div class="container"  id="popupForm_register_medecin">
          <form class="container" @submit.prevent="Creer_medecin">
            <div class="row">
              <h1 class="col-sm-12">Inscription médecin</h1>
              <label class="col-sm-12" ><b>Email</b></label>
              <input class="col-sm-12" id="email_register_medecin" type="text" v-model="editRegister_medecin.email" placeholder="email">
              <label class="col-sm-12"><b>Mot de passe</b></label>
              <input class="col-sm-12" type="password" v-model="editRegister_medecin.password" placeholder="mot de passe">
              <label class="col-sm-12"><b>Nom</b></label>
              <input class="col-sm-12" type="text" v-model="editRegister_medecin.nom" placeholder="nom">
              <label class="col-sm-12" ><b>Prenom</b></label>
              <input class="col-sm-12" type="text" v-model="editRegister_medecin.prenom" placeholder="prenom">
              <label class="col-sm-12"><b>Telephone</b></label>
              <input class="col-sm-12" type="text" v-model="editRegister_medecin.telephone" placeholder="telephone">
              <label class="col-sm-12"><b>Specialite</b></label>
            </div>
            <div class="row">
              <select class="col-sm-12" id="heure_select" v-model="editRegister_medecin.specialite">
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
            </div>

            <article class="row btn_inscription">
              <button class="col-sm-6 bouton_inscription" type="submit">Je m'inscris</button>
              <button type="button" class="col-sm-6 bouton_inscription" @click="openForm_register()">Inscription patient</button>
            </article>
          </form>
        </div>

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
        } else {
          alert("Entrez une vraie adresse mail")
        }
      },
      async Creer_medecin(){
        var email = document.getElementById("email_register_medecin").value
        // if (email.match(/[a-z0-9_\-\.]+@+(santefrei-medecin){1}+\.[a-z]+/i)) {
        if (email.match(/(medecin-)+[a-z]+(-)+[a-z]+(-santefrei)$/gm)) { //medecin-jacques-tellier-santefrei
          this.$emit('register_medecin', this.editRegister_medecin)
        } else{
          alert("Vous n'êtes pas médecin")
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
#ici{
  margin-bottom: 300px;
  background-color: var(--beige_fonce);
}

#background_page_register{
  background-color: var(--beige);
  height: 100%;
  max-height: 1660px;
  padding-top: 40px;
  padding-bottom: 124px;
  overflow-y: scroll;
}

.container{
  height: 100%;
}
  #popupForm_register_medecin{
    display: none;
  }

  form {
      width:100%;
      padding: 30px;
      border: 1px solid #f1f1f1;
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
    text-decoration: none;
    background-color: #09371F;
    color:#fff;
    font-size: 1.3em;
  }
  .btn_inscription{
    padding: 20px;
  }
  .bouton_inscription:hover{
    background-color: #E8C542;
    color: black;
    cursor: pointer;

  }
</style>
