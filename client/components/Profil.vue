<template>
<div id="page_profil">


  <div class="container" >

    <div class="row">
      <div id="titre_page_info" class="col-sm-12">
        <p class="taille_5">Mon profil</p>
      </div>
    </div>
    <div class="row">
      <div  id="mes_infos"  class="container-fluid">

          <div class="col-sm-12">
            <div class="row">
              <p class="taille_3">Mes infos personnelles</p>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <form id="formulaire_modification_profil" @submit.prevent="sendEditProfil">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="taille_1">nom</p>
                    </div>

                    <div class="col-sm-6">
                      <input name="nom" :placeholder="user_patient.nom" type="text" v-model="editingProfile.nom">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3">
                      <p class="taille_1">prenom</p>
                    </div>
                    <div class="col-sm-6">
                      <input name="prenom" :placeholder="user_patient.prenom" type="text" v-model="editingProfile.prenom">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3">
                      <p class="taille_1">email</p>
                    </div>
                    <div class="col-sm-6">
                      <input name="email" :placeholder="user_patient.email" type="text" v-model="editingProfile.email">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3">
                      <p class="taille_1">telephone</p>
                    </div>
                    <div class="col-sm-6">
                      <input name="telephone" :placeholder="user_patient.telephone" type="text" v-model="editingProfile.telephone">

                    </div>
                  </div>
                  <div class="row">
                      <button type="submit">Modifier</button>
                  </div>

                </form>
              </div>

            </div>

        </div>
      </div>

      <div id="mes-rendez-vous"  class="container-fluid">
        <div class="col-sm-12">

          <p class="taille_3">ici seront affichés les rendez vous avec les médecins</p>
        </div>

      </div>
    </div>


  </div>
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
      },
      // Envoie un nouveau profil (modifié)
      sendEditProfil(){
        this.$emit('update-Profile-patient', this.editingProfile)
        alert(this.editingProfile)
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
  #page_profil {
    background-color: var(--beige);
    height: 100%;
  }
  #page_profil .container{

    background-color: var(--beige_fonce);
    border: 1px black solid;
  }
</style>
