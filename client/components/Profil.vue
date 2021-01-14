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
                        <p class="taille_1">Nom</p>
                      </div>

                      <div class="col-sm-6">
                        <input name="nom" :placeholder="user_patient.nom" type="text" v-model="editingProfile_patient.nom">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">Prénom</p>
                      </div>
                      <div class="col-sm-6">
                        <input name="prenom" :placeholder="user_patient.prenom" type="text" v-model="editingProfile_patient.prenom">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">E-mail</p>
                      </div>
                      <div class="col-sm-6">
                        <input id="email" name="email" :placeholder="user_patient.email" type="text" v-model="editingProfile_patient.email">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">Téléphone</p>
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
                        <p class="taille_1">Prénom</p>
                      </div>
                      <div class="col-sm-6">
                        <input name="prenom" :placeholder="user_medecin.prenom" type="text" v-model="editingProfile_medecin.prenom">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">E-mail</p>
                      </div>
                      <div class="col-sm-6">
                        <p class="taille_1" id="med_email">{{ user_medecin.email }}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">Téléphone</p>
                      </div>
                      <div class="col-sm-6">
                        <input name="telephone" :placeholder="user_medecin.telephone" type="text" v-model="editingProfile_medecin.telephone">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="taille_1">Région</p>
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
                        <p class="taille_1">Spécialité</p>
                      </div>
                      <div class="col-sm-6">
                        <select id="heure_select" v-model="editingProfile_medecin.specialite">
                          <option value="" disabled selected>{{user_medecin.specialite}}</option>
                          <option value="allergologie">Allergologie</option>
                          <option value="andrologie">Andrologie</option>
                          <option value="anesthésiologie">Anesthésiologie</option>
                          <option value="cardiologie">Cardiologie</option>
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
                          <option value="médecine physique et de réadaptation">Médecine rééducative</option>
                          <option value="néonatologie">Néonatologie</option>
                          <option value="néphrologie">Néphrologie</option>
                          <option value="neurologie">Neurologie</option>
                          <option value="obstétrique">Obstétrique</option>
                          <option value="odontologie">Odontologie</option>
                          <option value="oncologie">Oncologie</option>
                          <option value="ophtalmologie">Ophtalmologie</option>
                          <option value="orthopédie">Orthopédie</option>
                          <option value="otorhinolaryngologie">=Otorhinolaryngologie</option>
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
                      <button type="submit" >Modifier</button>
                    </div>

                  </form>
                </div>
             </div>
           </div>
        </div>
        <div class="row">
         <div class="col-sm-7 c_rdv">
             <div class="container mes-rendez-vous">
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
                     <p> <b class="titres_lignes_chaque_rdv">Médecin</b> : Dr. {{ rdv_demande.medecin_id }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv">Description</b> : {{ rdv_demande.description }} </p>
                   </section>
                   <section class="col-sm-12 symp taille_1">
                     <p> Symptômes </p>
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
                   <section class="col-sm-12" v-for=" p in p_bdd" :key="p.id" v-if=" p.id == r.patient_id">
                     <p> <b class="titres_lignes_chaque_rdv"> Nom du patient</b> : M/Mme. {{ p.nom }} {{p.prenom}} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv"> Description</b> : {{ r.description }} </p>
                   </section>
                   <section class="col-sm-12 symp taille_1">
                     <p> <b>Symptômes</b> </p>
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
           <div class="container mes-rendez-vous">
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
                   <p> <b class="titres_lignes_chaque_rdv">Médecin</b> : Dr. {{ rdv_demande.medecin_id }} </p>
                 </section>
                 <section class="col-sm-12">
                   <p> <b class="titres_lignes_chaque_rdv">Description</b> : {{ rdv_demande.description }} </p>
                 </section>
                 <section class="col-sm-12 symp taille_1">
                   <p>Symptômes</p>
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
                   <p>Rendez-vous numéro : {{ r.id }}</p>
                 </section>
                 <section class="col-sm-12">
                   <p> <b class="titres_lignes_chaque_rdv">Date</b> : {{ r.date }} </p>
                 </section>
                 <section class="col-sm-12">
                   <p> <b class="titres_lignes_chaque_rdv">Heure</b> : {{ r.heure }} </p>
                 </section>
                 <section class="col-sm-12" v-for=" p in p_bdd" :key="p.id" v-if=" p.id == r.patient_id">
                   <p> <b class="titres_lignes_chaque_rdv">Nom du patient</b> : M/Mme. {{ p.nom }} {{p.prenom}} </p>
                 </section>
                 <section class="col-sm-12">
                   <p> <b class="titres_lignes_chaque_rdv">Description</b> : {{ r.description }} </p>
                 </section>
                 <section class="col-sm-12 symp taille_1">
                   <p>Symptômes</p>
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

           <div class="container mes-rendez-vous" v-if="user_patient.id " >
                 <div class="row">
                   <div class="col-sm-12">
                       <!-- <p v-if="user_patient.id" class="taille_3" id="titre_section_mes_rdv_demandes">Mes rendez-vous demandés</p> -->
                       <p class="taille_3" id="titre_section_mes_rdv_demandes">Réception des rendez-vous</p>
                   </div>
                 </div>
                 <div class="row">
                   <div class="col-sm-12">
                     <button class="btn_profil" type="button" name="button">Trier par date</button>
                   </div>
                 </div>

                 <section class="row chaque_rdv" v-for=" rdv_demande in rdv_to_p_bdd" v-if="(user_patient.id == parseInt(rdv_demande.patient_id,10)) && (rdv_demande.accepted == 'non') "  >
                   <section class="col-sm-12 taille_1">
                     <p> Rendez-vous numéro : {{ rdv_demande.id }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv">Date</b> : {{ rdv_demande.date }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv">Heure</b> : {{ rdv_demande.heure }} </p>
                   </section>
                   <section class="col-sm-12" v-for="m in m_bdd" v-if="m.id == rdv_demande.medecin_id">
                     <p> <b class="titres_lignes_chaque_rdv">Médecin</b> : Dr. {{ m.nom }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv">Description</b> : {{ rdv_demande.description }} </p>
                   </section>
                   <section class="col-sm-6 btn_accepter_refuser">
                     <button class="col-sm-12" type="button" @click="accepter_rdv_from_m(rdv_demande.id)" name="button">Accepter</button>
                   </section>
                   <section class="col-sm-6 btn_accepter_refuser">
                     <button class="col-sm-12" type="button" @click="refuser_rdv_from_m(rdv_demande.id)" name="button">Refuser</button>
                   </section>
                 </section>

                 <!-- <section class="row chaque_rdv" v-for=" rdv_demande in rdv_to_p_bdd" v-if="(user_medecin.id == parseInt(rdv_demande.medecin_id,10)) && (rdv_demande.accepted == 'non') "  >
                   <section class="col-sm-12 taille_1">
                     <p> Rendez-vous numéro : {{ rdv_demande.id }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv">Date</b> : {{ rdv_demande.date }} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv">Heure</b> : {{ rdv_demande.heure }} </p>
                   </section>
                   <section class="col-sm-12" v-for=" p in p_bdd" :key="p.id" v-if=" p.id == rdv_demande.patient_id">
                     <p> <b class="titres_lignes_chaque_rdv"> Nom du patient</b> : M/Mme. {{ p.nom }} {{p.prenom}} </p>
                   </section>
                   <section class="col-sm-12">
                     <p> <b class="titres_lignes_chaque_rdv"> description</b> : {{ rdv_demande.description }} </p>
                   </section>

                 </section> -->
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
      rdv_to_p_bdd: { type: Array, default: [] },
      user_patient: {type: Object },
      user_medecin: {type: Object },
      rdv_bdd: { type: Array, default: [] },
      rdv_symptome : { type: Array, default: [] },
      p_bdd : { type: Array, default: [] },
      m_bdd:{ type: Array, default: [] }
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
      accepter_rdv_from_m(r_id){
        let rdv_id = {
          id: r_id
        }
        this.$emit('accepter_rdv_from_m', rdv_id)
      },
      refuser_rdv_from_m(r_id){

        let rdv_id = {
          id: r_id
        }
        this.$emit('refuser_rdv_from_m', rdv_id)
      },
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

  .mes-rendez-vous{
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
    background-color: var(--bleu_logo_o);
    font-size: 1.2em;
    padding: 4px 12px;
    color:white;
    transition-duration: 0.5s;
  }

  .btn_profil:hover{
    background-color: var(--bleu_logo);
  }

</style>
