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
                  <label class="col-sm-6 taille_2">Email</label>
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
                  <label class="col-sm-6 taille_2">Prenom</label>
                  <div class="col-sm-6">
                    <input class="col-sm-12" type="text" v-model="editRegister_patient.nom" placeholder="nom">
                  </div>
                  <div class="col-sm-6">
                    <input class="col-sm-12" type="text" v-model="editRegister_patient.prenom" placeholder="prenom">
                  </div>

                </div>
                <div class="row tel">
                  <label class="col-sm-2 taille_2">Telephone</label>
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
                  <label class="col-sm-6 taille_2">Email</label>
                  <label class="col-sm-6 taille_2">Specialite</label>

                  <div class="col-sm-6">
                    <input class="col-sm-12" id="email_register_medecin" type="text" v-model="editRegister_medecin.email" placeholder="email">
                  </div>
                  <div class="col-sm-6">
                    <select  class="col-sm-12" id="spe_select" v-model="editRegister_medecin.specialite">
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

                </div>

                <div class="row">
                  <label class="col-sm-6 taille_2">Telephone</label>
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
                  <label class="col-sm-6 taille_2">Prenom</label>
                  <div class="col-sm-6">
                    <input type="text" v-model="editRegister_medecin.nom" placeholder="nom">
                  </div>
                  <div class="col-sm-6">
                    <input type="text" v-model="editRegister_medecin.prenom" placeholder="prenom">
                  </div>

                </div>
                <div class="row">
                  <label class="col-sm-6 taille_2">region</label>
                  <label class="col-sm-6 taille_2">adresse</label>
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
                    <button type="button" class=" col-sm-12 bouton_inscription" @click="openForm_register()">Je suis ne suis pas médecin</button>
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
