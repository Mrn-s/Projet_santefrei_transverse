<template>
  <div id="background_page_register">
    <div class="container c_test">

        <div class="container" id="popupForm_register">
          <form @submit.prevent="Creer_patient">
            <div class="container">
                <div class="row">
                  <div class="taille_4 col-sm-12 bold titre_onglet_inscription">
                    <p>Inscription</p>
                  </div>
                </div>

                <div class="row">
                  <label class="col-sm-6 taille_2">E-mail</label>
                  <label class="col-sm-6 taille_2">Mot de passe</label>
                  <div class="col-sm-6">
                    <input class="col-sm-12" id="email_register" type="text" v-model="editRegister_patient.email" placeholder="email">
                  </div>
                  <div class="col-sm-6">
                    <input class="col-sm-12" type="password" v-model="editRegister_patient.password" placeholder="mot de passe">
                  </div>
                </div>

                <div class="row">
                  <label class="col-sm-6 taille_2">Nom</label>
                  <label class="col-sm-6 taille_2">Prénom</label>
                  <div class="col-sm-6">
                    <input class="col-sm-12" type="text" v-model="editRegister_patient.nom" placeholder="nom">
                  </div>
                  <div class="col-sm-6">
                    <input class="col-sm-12" type="text" v-model="editRegister_patient.prenom" placeholder="prenom">
                  </div>
                </div>

                <div class="row tel">
                  <label class="col-sm-2 taille_2">Téléphone</label>
                  <div class="col-sm-10">
                    <input class="col-sm-12" type="text" v-model="editRegister_patient.telephone" placeholder="telephone">
                  </div>

                </div>

            </div>

            <article class="container btn_inscription">
                <div class="row">
                  <div class="col-sm-6">
                    <button class=" col-sm-12 bouton_inscription" type="submit">Je m'inscris</button>
                  </div>
                  <div class="col-sm-6">
                      <button type="button" class="col-sm-12 bouton_inscription" @click="openForm_register_medecin()">Je suis un médecin</button>
                  </div>
              </div>
            </article>
          </form>
        </div>

        <div class="container"  id="popupForm_register_medecin">
          <form @submit.prevent="Creer_medecin">
              <div class="container">
                <div class="taille_4 bold col-sm-12 titre_onglet_inscription">
                  <p>Inscription médecin</p>
                </div>
                <div class="row">
                  <label class="col-sm-6 taille_2">E-mail</label>
                  <label class="col-sm-6 taille_2">Spécialite</label>

                  <div class="col-sm-6">
                    <input class="col-sm-12" id="email_register_medecin" type="text" v-model="editRegister_medecin.email" placeholder="email">
                  </div>
                  <div class="col-sm-6">
                    <select  class="col-sm-12" id="spe_select" v-model="editRegister_medecin.specialite">
                      <option value="" disabled selected>Spécialité</option>
                      <option value="allergologie">Allergologie</option>
                      <option value="andrologie">Andrologie</option>
                      <option value="anesthésiologie">Anesthésiologie</option>
                      <option value="cardiologie">Cardiologie</option>
                      <option value="chirurgie cardiaque">Chirurgie cardiaque</option>
                      <option value="chirurgie plastique">Chirurgie plastique</option>
                      <option value="chirurgie générale">Chirurgie générale</option>
                      <option value="chirurgie gynécologique">Chirurgie gynécologique</option>
                      <option value="chirurgie maxillo-faciale">Chirurgie maxillo-faciale</option>
                      <option value="chirurgie oculaire">Chirurgie oculaire</option>
                      <option value="chirurgie orale">Chirurgie orale</option>
                      <option value="chirurgie pédiatrique">Chirurgie pédiatrique</option>
                      <option value="chirurgie thoracique">Chirurgie thoracique</option>
                      <option value="chirurgie vasculaire">Chirurgie vasculaire</option>
                      <option value="chirurgie viscérale">Chirurgie viscérale</option>
                      <option value="neurochirurgie">Neurochirurgie</option>
                      <option value="dermatologie">Dermatologie</option>
                      <option value="endocrinologie">Endocrinologie</option>
                      <option value="gastro-entérologie">Gastro-entérologie</option>
                      <option value="gériatrie">Gériatrie</option>
                      <option value="gynécologie">Gynécologie</option>
                      <option value="hématologie">Hématologie</option>
                      <option value="hépatologie">Hépatologie</option>
                      <option value="immunologie">Immunologie</option>
                      <option value="infectiologie">Infectiologie</option>
                      <option value="médecine générale">Médecine générale</option>
                      <option value="médecine interne">Médecine interne</option>
                      <option value="médecine physique et de réadaptation">Médecine physique et de réadaptation</option>
                      <option value="néonatologie">Néonatologie</option>
                      <option value="néphrologie">Néphrologie</option>
                      <option value="neurologie">Neurologie</option>
                      <option value="obstétrique">Obstétrique</option>
                      <option value="odontologie">Odontologie</option>
                      <option value="oncologie">Oncologie</option>
                      <option value="ophtalmologie">Ophtalmologie</option>
                      <option value="orthopédie">Orthopédie</option>
                      <option value="otorhinolaryngologie">Otorhinolaryngologie</option>
                      <option value="pédiatrie">Pédiatrie</option>
                      <option value="pneumologie">Pneumologie</option>
                      <option value="podologie">Podologie</option>
                      <option value="psychiatrie">Psychiatrie</option>
                      <option value="radiologie">Radiologie</option>
                      <option value="rhumatologie">Rhumatologie</option>
                      <option value="urologie">Urologie</option>
                    </select>
                  </div>

                </div>

                <div class="row">
                  <label class="col-sm-6 taille_2">Téléphone</label>
                  <label class="col-sm-6 taille_2">Mot de passe</label>
                  <div class="col-sm-6">
                    <input  type="text" v-model="editRegister_medecin.telephone" placeholder="telephone">
                  </div>
                  <div class="col-sm-6">
                    <input type="password" v-model="editRegister_medecin.password" placeholder="mot de passe">
                  </div>
                </div>
                <div class="row">
                  <label class="col-sm-6 taille_2">Nom</label>
                  <label class="col-sm-6 taille_2">Prénom</label>
                  <div class="col-sm-6">
                    <input type="text" v-model="editRegister_medecin.nom" placeholder="nom">
                  </div>
                  <div class="col-sm-6">
                    <input type="text" v-model="editRegister_medecin.prenom" placeholder="prenom">
                  </div>

                </div>
                <div class="row">
                  <label class="col-sm-6 taille_2">Région</label>
                  <label class="col-sm-6 taille_2">Adresse</label>
                  <div class="col-sm-6">
                    <input type="text" v-model="editRegister_medecin.region" placeholder="region">
                  </div>
                  <div class="col-sm-6">
                    <input type="text" v-model="editRegister_medecin.adresse" placeholder="adresse">
                  </div>
                </div>
              </div>

              <article class="container btn_inscription">
                <div class="row">
                  <div class="col-sm-6">
                    <button class="col-sm-12  bouton_inscription" type="submit">Je m'inscris</button>
                  </div>
                  <div class="col-sm-6">
                    <button type="button" class=" col-sm-12 bouton_inscription" @click="openForm_register()">Je ne suis pas médecin</button>
                  </div>
                </div>
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
          specialite:'',
          adresse:'',
          region:''
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
        if (email.match(/(medecin-)+[a-z0-9]+(-)+[a-z0-9]+(-santefrei)$/gm)) { //medecin-nom-prenom-santefrei
          // alert("la vue 1")
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
.tel{

}

  #spe_select{
    height: 60%;
    margin-top: 18px;
    margin-bottom: 18px;
  }

  .titre_onglet_inscription{
    color:var(--bleu_logo);
    margin-top: 15px;
    text-align: center;
  }
  .c_test{
    padding-top: 60px;
  }

  #background_page_register::-webkit-scrollbar {
      display: none;
  }
  #background_page_register{
    /* background-color: var(--beige); */
    background-image: url("../images/background_santefrei_carre.png");
    background-repeat: round;
    max-height: 1000px;
    overflow-y: scroll;
    height: 100vh;
  }
  #popupForm_register{
    background-color: var(--beige_fonce_o);
    border:2px solid black;
  }
  #popupForm_register_medecin{
    background-color: var(--beige_fonce_o);
    border:2px solid black;
    display: none;
  }

  form {
      width:100%;
  }

  /* Full-width inputs */
  input[type=text], input[type=password] {
      width: 100%;
      padding: 12px 20px;
      margin: 18px 0;
  }

  /* Set a style for all buttons */
  input[type=submit] {
      background-color: var(--vert_o);
      color: white;
      padding: 14px 20px;
      border: none;
      cursor: pointer;
      width: 100%;
  }
  input[type=submit]:hover {
      /* background-color: rgb(191,215,197); */
      color: black;
      /* border: 1px solid #53af57; */
  }
  .bouton_inscription{
    border:none;
    text-decoration: none;
    background-color: #fff;
    color:black;
    font-size: 1.3em;
    padding: 10px 0;
  }
  .btn_inscription{
    padding: 20px;
  }
  .bouton_inscription:hover{
    background-color: var(--bleu_logo );
    color: #fff;
    cursor: pointer;

  }
</style>
