<template>
  <div id="background_page_profil">

    <div class="container colonne_centrale">

      <div class="row">
        <div id="titre_page_info" class="col-sm-12">
          <p class="taille_5">Mon profil</p>
        </div>
      </div>
      <div class="row">
        <div id="mes_infos"  class="container-fluid">

          <div class="col-sm-12">
            <div class="row">
                <p class="taille_3">Mes infos personnelles</p>
              </div>
            <div class="row">
                <div class="col-sm-12">
                  <form v-if="user_patient.id" @submit.prevent="sendEditProfil">
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">nom</p>
                      </div>

                      <div class="col-sm-6">
                        <input name="nom" :placeholder="user_patient.nom" type="text" v-model="editingProfile_patient.nom">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">prenom</p>
                      </div>
                      <div class="col-sm-6">
                        <input name="prenom" :placeholder="user_patient.prenom" type="text" v-model="editingProfile_patient.prenom">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">email</p>
                      </div>
                      <div class="col-sm-6">
                        <input id="email" name="email" :placeholder="user_patient.email" type="text" v-model="editingProfile_patient.email">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">telephone</p>
                      </div>
                      <div class="col-sm-6">
                        <input name="telephone" :placeholder="user_patient.telephone" type="text" v-model="editingProfile_patient.telephone">
                      </div>
                    </div>
                    <div class="row">
                        <button type="submit" >Modifier</button>
                    </div>

                  </form>
                  <form v-else  @submit.prevent="sendEditProfil_medecin">
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">nom</p>
                      </div>

                      <div class="col-sm-6">
                        <input name="nom" :placeholder="user_medecin.nom" type="text" v-model="editingProfile_medecin.nom">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">prenom</p>
                      </div>
                      <div class="col-sm-6">
                        <input name="prenom" :placeholder="user_medecin.prenom" type="text" v-model="editingProfile_medecin.prenom">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">email</p>
                      </div>
                      <div class="col-sm-6">
                        <input id="email_med" name="email" :placeholder="user_medecin.email" type="text" v-model="editingProfile_medecin.email">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">telephone</p>
                      </div>
                      <div class="col-sm-6">
                        <input name="telephone" :placeholder="user_medecin.telephone" type="text" v-model="editingProfile_medecin.telephone">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">specialite</p>
                      </div>
                      <div class="col-sm-6">

                      <select id="heure_select" v-model="editingProfile_medecin.specialite">
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
                        <button type="submit" >Modifier</button>
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
      user_medecin: {type: Object }
    },
    data () {
      return {
        editingProfile_patient: {
          id: -1,
          nom:'',
          prenom:'',
          email:'',
          telephone:''
        },
        editingProfile_medecin: {
          id: -1,
          nom:'',
          prenom:'',
          email:'',
          telephone:'',
          specialite:''
        }
      }
    },
    methods: {
      // Enregistre la veleur des champs du formulaire de modification du profil
      // Envoie un nouveau profil (modifié)
      sendEditProfil(){
          this.$emit('update-profile-patient', this.editingProfile_patient)
        this.abortEditProfil()
      },
      sendEditProfil_medecin(){
          this.$emit('update-profile-medecin', this.editingProfile_medecin)
          this.abortEditProfil_medecin()
      },
      // Annule la modification d'un profil
      abortEditProfil(){
          this.editingProfile_patient={
            id: -1,
            nom:'',
            prenom:'',
            email:'',
            telephone:''
          }
        },
        abortEditProfil_medecin(){
          this.editingProfile_medecin={
            id: -1,
            nom:'',
            prenom:'',
            email:'',
            telephone:'',
            specialite:''
          }
      }
    }
  }
</script>

<style scoped>
  #email, #email_med{
    width: 300px;
  }
    #background_page_profil {
      background-color: var(--beige);
      padding-bottom: 100px;
      padding-top: 40px;
      height: 90%;
    }

</style>
