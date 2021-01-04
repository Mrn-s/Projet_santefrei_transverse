<template>
  <!-- <div id="page_profil">
    <div  id="mes_infos" class="container-fluid">
      <div class=" col-sm-12">

        <div class="row titre_section">
          <p>Mes infos</p>
        </div>

        <div class="row" >
          <div class="col-sm-12">
            <form id="formulaire_modification_profil" @submit.prevent="sendEditProfil">

              <div class="row">
                <div class="col-sm-3 ml-sm-auto">
                  Nom :
                </div>
                <div class="col-sm-5 mr-sm-auto">
                  <input name="nom" :placeholder="user.nom" type="text" v-model="editingProfile.nom">
                </div>
              </div>

              <div class="row">
                <div class="col-sm-3 ml-sm-auto">
                  Prenom :
                </div>
                <div class="col-sm-5 mr-sm-auto">
                  <input name="prenom" :placeholder="user.prenom" type="text" v-model="editingProfile.prenom">
                </div>
              </div>

              <div class="row">
                <div class="col-sm-3 ml-sm-auto">
                  Email :
                </div>
                <div class="col-sm-5 mr-sm-auto">
                  <input name="email" :placeholder="user.email" type="text" v-model="editingProfile.email">
                </div>
              </div>

              <div class="row">
                <div class="col-sm-3 ml-sm-auto">
                  Telephone :
                </div>
                <div class="col-sm-5 mr-sm-auto">
                  <input name="telephone" :placeholder="user.telephone" type="text" v-model="editingProfile.telephone">
                </div>
              </div>
              <br>
              <div class="row">
                <div class="col-sm-12" align="center">
                  <button type="submit" class="slide_page_commander">Modifier</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div> -->
<div class="container">

  <form id="formulaire_modification_profil" @submit.prevent="sendEditProfil">

    <p>nom</p> <br>
    <input name="nom" :placeholder="user_patient.nom" type="text" v-model="editingProfile.nom">
    <p>prenom</p> <br>
    <input name="prenom" :placeholder="user_patient.prenom" type="text" v-model="editingProfile.prenom">
    <p>email</p> <br>
    <input name="email" :placeholder="user_patient.email" type="text" v-model="editingProfile.email">
    <p>telephone</p>
    <input name="telephone" :placeholder="user_patient.telephone" type="text" v-model="editingProfile.telephone">

    <button type="submit">Modifier</button>

  </form>

</div>

</template>

<script>
  module.exports = {
    props: {
      user_patient: {type: Object },
      user_medecin: {type: Object },
    },
    data () {
      return {
        editingProfile: {
          id: -1,
          nom:'',
          prenom:'',
          email:'',
          telephone:''
        }
      }
    },
    methods: {
      // Enregistre la veleur des champs du formulaire de modification du profil
      editProfil (profile){
        this.editingProfile.nom = profile.nom
        this.editingProfile.prenom = profile.prenom
        this.editingProfile.email = profile.email
        this.editingProfile.telephone = profile.telephone
        alert(profile.nom)
      },
      // Envoie un nouveau profil (modifié)
      sendEditProfil(){
        this.$emit('update-Profile-patient', this.editingProfile)
        // alert(this.editingProfile)
        this.abortEditProfil()
      },
      // Annule la modification d'un profil
      abortEditeProfil(){
        this.editingProfile={
          id: -1,
          nom:'',
          prenom:'',
          email:'',
          telephone:''
        }
      }
    }
  }
</script>

<style scoped>
#page_profil p{
  font-size: 1.8em;
}
</style>
