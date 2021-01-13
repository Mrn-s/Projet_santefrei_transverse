<template>
  <div id="background_page_profil">

    <div class="container section_principale">

      <div class="row">
        <div  class="col-sm-12">
          <p id="titre_page_info">Mon profil</p>
        </div>
      </div>

        <div id="mes_infos" class="container">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-12">
                <p class="taille_3 " id="titre_section_mes_infos">Mes infos personnelles</p>
              </div>

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
                        <button type="submit" class="btn_profil" >Modifier</button>
                    </div>

                  </form>
                  <form v-else  @submit.prevent="sendEditProfil_medecin">
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">Nom</p>
                      </div>

                      <div class="col-sm-6">
                        <input name="nom" :placeholder="user_medecin.nom" type="text" v-model="editingProfile_medecin.nom">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">Prenom</p>
                      </div>
                      <div class="col-sm-6">
                        <input name="prenom" :placeholder="user_medecin.prenom" type="text" v-model="editingProfile_medecin.prenom">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">Email</p>
                      </div>
                      <div class="col-sm-6">
                        <p class="taille_1" id="med_email">{{ user_medecin.email }}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">Télephone</p>
                      </div>
                      <div class="col-sm-6">
                        <input name="telephone" :placeholder="user_medecin.telephone" type="text" v-model="editingProfile_medecin.telephone">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">Region</p>
                      </div>
                      <div class="col-sm-6">
                        <input name="region" :placeholder="user_medecin.region" type="text" v-model="editingProfile_medecin.region">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">Adresse</p>
                      </div>
                      <div class="col-sm-6">
                        <input name="adresse" :placeholder="user_medecin.adresse" type="text" v-model="editingProfile_medecin.adresse">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">Specialité</p>
                      </div>
                      <div class="col-sm-6">

                      <select id="heure_select" v-model="editingProfile_medecin.specialite">
                        <option value="" disabled selected>{{user_medecin.specialite}}</option>
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
        <div class="row">
         <div class="col-sm-7 c_rdv">
             <div id="mes-rendez-vous"  class="container">
                 <div class="row">
                   <div class="col-sm-12">
                       <p class="taille_3" id="titre_section_mes_rdv">Mes rendez-vous</p>
                   </div>
                 </div>
                 <div class="row">
                   <div class="col-sm-12">
                     <button type="button" name="button" class="btn_profil">Trier par date</button>
                   </div>
                 </div>
                 <!-- section gauche pour les patient -->
                 <section class="row chaque_rdv" v-for=" rdv_demande in user_patient.rdv_patient" v-if="user_patient.id && (rdv_demande.accepted =='oui')">
                   <section class="col-sm-12 taille_1">
                     <p> Rendez-vous numéro : {{ rdv_demande.id }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv">Date</b> : {{ rdv_demande.date }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv">Heure</b> : {{ rdv_demande.heure }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv"> Médecin</b> : Dr. {{ rdv_demande.medecin_id }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv"> description</b> : {{ rdv_demande.description }} </p>
                   </section>
                   <section class="col-sm-12 symp taille_1">
                     <p> Symptomes </p>
                   </section>
                   <div class="container">
                     <section v-for ="liste_s_rdv in rdv_symptome" v-if="liste_s_rdv.id_rdv == rdv_demande.id" class="row l_sym">
                       <p class="col-sm-12"> {{ liste_s_rdv.s_un }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_deux"> {{ liste_s_rdv.s_deux }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_trois"> {{ liste_s_rdv.s_trois }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_quatre"> {{ liste_s_rdv.s_quatre }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_cinq"> {{ liste_s_rdv.s_cinq }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_six"> {{ liste_s_rdv.s_six }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_sept"> {{ liste_s_rdv.s_sept }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_huit"> {{ liste_s_rdv.s_huit }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_neuf"> {{ liste_s_rdv.s_neuf }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_dix"> {{ liste_s_rdv.s_dix }} </p>
                     </section>
                   </div>

                 </section>
                 <!-- section gauche pour les médecins -->
                 <section class="row chaque_rdv" v-for=" r in rdv_bdd" :key="r.id" v-if="(r.medecin_id == user_medecin.nom) && user_medecin.id  && (r.accepted =='oui') ">
                   <section class="col-sm-12 taille_1">
                     <p> Rendez-vous numéro : {{ r.id }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv">Date</b> : {{ r.date }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv">Heure</b> : {{ r.heure }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv"> Nom du patient</b> : M/Mme. {{ r.patient_id }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv"> Description</b> : {{ r.description }} </p>
                   </section>
                   <section class="col-sm-12 symp taille_1">
                     <p> <b>Symptomes</b> </p>
                   </section>
                   <div class="container">
                     <section v-for ="liste_s_rdv in rdv_symptome" v-if="liste_s_rdv.id_rdv == r.id" class="row l_sym">
                       <p class="col-sm-12"> {{ liste_s_rdv.s_un }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_deux"> {{ liste_s_rdv.s_deux }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_trois"> {{ liste_s_rdv.s_trois }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_quatre"> {{ liste_s_rdv.s_quatre }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_cinq"> {{ liste_s_rdv.s_cinq }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_six"> {{ liste_s_rdv.s_six }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_sept"> {{ liste_s_rdv.s_sept }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_huit"> {{ liste_s_rdv.s_huit }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_neuf"> {{ liste_s_rdv.s_neuf }} </p>
                       <p class="col-sm-12" v-if="liste_s_rdv.s_dix"> {{ liste_s_rdv.s_dix }} </p>
                     </section>
                   </div>
                 </section>

             </div>
         </div>
         <div class="col-sm-5 c_rdv">
           <div id="mes-rendez-vous" class="container">
               <div class="row">
                 <div class="col-sm-12">
                     <!-- <p v-if="user_patient.id" class="taille_3" id="titre_section_mes_rdv_demandes">Mes rendez-vous demandés</p> -->
                     <p class="taille_3" id="titre_section_mes_rdv_demandes">Mes demandes de rendez-vous</p>
                 </div>
               </div>
               <div class="row">
                 <div class="col-sm-12">
                   <button type="button" name="button" class="btn_profil">Trier par date</button>
                 </div>
               </div>

               <section class="row chaque_rdv" v-if="user_patient.id && (rdv_demande.accepted == 'non') " v-for=" rdv_demande in user_patient.rdv_patient" >
                 <section class="col-sm-12 taille_1">
                   <p> Rendez-vous numéro : {{ rdv_demande.id }} </p>
                 </section>
                 <section class="col-sm-12">
                   <p> <b class="titres_lignes_chaque_rdv">Date</b> : {{ rdv_demande.date }} </p>
                 </section>
                 <section class="col-sm-12">
                   <p> <b class="titres_lignes_chaque_rdv">Heure</b> : {{ rdv_demande.heure }} </p>
                 </section>
                 <section class="col-sm-12">
                   <p> <b class="titres_lignes_chaque_rdv"> Médecin</b> : Dr. {{ rdv_demande.medecin_id }} </p>
                 </section>
                 <section class="col-sm-12">
                   <p> <b class="titres_lignes_chaque_rdv"> description</b> : {{ rdv_demande.description }} </p>
                 </section>
                 <section class="col-sm-12 symp taille_1">
                   <p> Symptomes </p>
                 </section>
                 <div class="container">
                   <section v-for ="liste_s_rdv in rdv_symptome" v-if="liste_s_rdv.id_rdv == rdv_demande.id" class="row l_sym">
                     <p class="col-sm-12"> {{ liste_s_rdv.s_un }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_deux"> {{ liste_s_rdv.s_deux }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_trois"> {{ liste_s_rdv.s_trois }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_quatre"> {{ liste_s_rdv.s_quatre }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_cinq"> {{ liste_s_rdv.s_cinq }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_six"> {{ liste_s_rdv.s_six }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_sept"> {{ liste_s_rdv.s_sept }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_huit"> {{ liste_s_rdv.s_huit }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_neuf"> {{ liste_s_rdv.s_neuf }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_dix"> {{ liste_s_rdv.s_dix }} </p>
                   </section>
                 </div>
               </section>
               <section class="row chaque_rdv" v-for=" r in rdv_bdd" :key="r.id" v-if="(r.medecin_id == user_medecin.nom) && user_medecin.id && (r.accepted == 'non')">
                 <section class="col-sm-12 taille_1">
                   <p> Rendez-vous numéro : {{ r.id }} </p>
                 </section>
                 <section class="col-sm-12">
                   <p> <b class="titres_lignes_chaque_rdv">Date</b> : {{ r.date }} </p>
                 </section>
                 <section class="col-sm-12">
                   <p> <b class="titres_lignes_chaque_rdv">Heure</b> : {{ r.heure }} </p>
                 </section>
                 <section class="col-sm-12">
                   <p> <b class="titres_lignes_chaque_rdv"> Nom du patient</b> : M/Mme. {{ r.patient_id }} </p>
                 </section>
                 <section class="col-sm-12">
                   <p> <b class="titres_lignes_chaque_rdv"> description</b> : {{ r.description }} </p>
                 </section>
                 <section class="col-sm-12 symp taille_1">
                   <p> Symptomes </p>
                 </section>
                 <div class="container">
                   <section v-for ="liste_s_rdv in rdv_symptome" v-if="liste_s_rdv.id_rdv == r.id" class="row l_sym">
                     <p class="col-sm-12"> {{ liste_s_rdv.s_un }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_deux"> {{ liste_s_rdv.s_deux }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_trois"> {{ liste_s_rdv.s_trois }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_quatre"> {{ liste_s_rdv.s_quatre }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_cinq"> {{ liste_s_rdv.s_cinq }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_six"> {{ liste_s_rdv.s_six }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_sept"> {{ liste_s_rdv.s_sept }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_huit"> {{ liste_s_rdv.s_huit }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_neuf"> {{ liste_s_rdv.s_neuf }} </p>
                     <p class="col-sm-12" v-if="liste_s_rdv.s_dix"> {{ liste_s_rdv.s_dix }} </p>
                   </section>
                 </div>
                 <section class="col-sm-6 btn_accepter_refuser">
                   <button class="col-sm-12" type="button" @click="accepter_rdv(r.id)" name="button">Accepter</button>
                 </section>
                 <section class="col-sm-6 btn_accepter_refuser">
                   <button class="col-sm-12" type="button" @click="refuser_rdv(r.id)" name="button">Refuser</button>
                 </section>
               </section>
           </div>
         </div>
        </div>

    </div>

  </div>
</template>

<script>
  module.exports = {
    components: {
    },
    props: {
      user_patient: {type: Object },
      user_medecin: {type: Object },
      rdv_bdd: { type: Array, default: [] },
      rdv_symptome : { type: Array, default: [] }
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
          specialite:'',
          adresse:'',
          region:''
        }
      }
    },
    methods: {
      accepter_rdv(r_id){
        let rdv_id = {
          id: r_id
        }
        this.$emit('accepter_rdv', rdv_id)
      },
      refuser_rdv(r_id){

        let rdv_id = {
          id: r_id
        }
        this.$emit('refuser_rdv', rdv_id)
      },
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
            adresse:'',
            region:'',
            telephone:'',
            specialite:''
          }
      }
    }
  }
</script>

<style scoped>
.btn_accepter_refuser{
  margin: 20px 0;
}

.titres_lignes_chaque_rdv{
  padding: 10px;
  background-color: var(--vert_o2);
  color: white;
}
  .symp{
    /* text-align:center; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .symp p{
    padding: 10px;

    background-color: var(--vert_o2);
    color: white;
  }
  .l_sym{
    border-top: 1px black solid;
    border-bottom: 1px black solid;
    margin:  0 15px;
    padding: 10px 0;
    max-height: 170px;
    overflow-y: scroll;
  }

  .c_rdv{
    margin-bottom: 20px;
  }

  .chaque_rdv{
    box-shadow: 3px 3px 3px 3px var(--bleu_logo);
    margin: 15px 0 12px 0;
    padding: 10px 0 10px 0;
  }

  #titre_section_mes_infos, #titre_section_mes_rdv_demandes{
    text-align: center;
    color:var(--bleu_logo);
  }
  #titre_section_mes_rdv{
    text-align: center;
    color:var(--bleu_logo);
  }

  #titre_page_info{
    background-color: var(--bleu_logo_o);
    border: white 2px solid;
    text-align: center;
    color:white;
    font-size: 3.9em;
  }

  #mes-rendez-vous{
    border: 1px white solid;
    background-color: var(--beige_fonce);
    margin-top: 50px;
    padding: 15px;
  }
  #mes_infos{
    background-color: var(--beige_fonce);
    border: 1px white solid;
    margin-top: 20px;
  }

  #email{
    width: 300px;
  }
  .section_principale{
    padding-bottom: 100px;
    padding-top: 35px;

  }
    #background_page_profil {
      background-image: url("../images/background_santefrei_carre.png");
      background-repeat: round;
      /* background-color: var(--bleu_logo_o); */
      padding-bottom: 5vh;
      /* padding-top: 40px; */
      height: 100%;
      max-height: 1660px;
      overflow: scroll;
      /* height: 90%; */
    }

  .btn_profil{
    background-color: var(--vert_o2);
    color:white;
    transition-duration: 0.5s;
  }

  .btn_profil:hover{
    background-color: var(--vert_o);
  }

</style>
