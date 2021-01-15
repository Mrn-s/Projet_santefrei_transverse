<template>
<div id ="background_page_mes_patients">
  <div class="container-fluid">
    <section class="container">
      <div class="row taille_5 ">
        <div class="col-sm-12 titre_page">
            <p>Retrouvez la liste de vos rendez-vous</p>
        </div>
      </div>
    </section>
    <div class="row colo">
      <section class="col-sm-4 " v-for=" r in rdv_bdd" :key="r.id" v-if="(r.medecin_id == user_medecin.nom) && (r.accepted =='oui') ">
        <div class="container chaque_rdv">
          <div class="row">
            <section class="col-sm-12 taille_1">
              <p> Rendez-vous numéro : {{ r.id }} </p>
            </section>
          </div>
          <div class="row">
            <section class="col-sm-12">
              <p> <b class="titres_lignes_chaque_rdv">Date</b> : {{ r.date }} </p>
            </section>
          </div>
          <div class="row">
            <section class="col-sm-12">
              <p> <b class="titres_lignes_chaque_rdv">Heure</b> : {{ r.heure }} </p>
            </section>
          </div>
          <div class="row">
            <section class="col-sm-12" v-for=" p in p_bdd" :key="p.id" v-if=" p.id == r.patient_id">
              <p> <b class="titres_lignes_chaque_rdv"> Nom du patient</b> : M/Mme. {{ p.nom }} {{p.prenom}} </p>
            </section>
          </div>
          <div class="row">
            <section class="col-sm-12">
              <p> <b class="titres_lignes_chaque_rdv"> Description</b> : {{ r.description }} </p>
            </section>
          </div>
          <div class="row">
            <section class="col-sm-12 symp taille_1">
              <p> <b>Symptômes</b> </p>
            </section>
          </div>

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

        </div>
        <div class="container btn_reprendre_rdv">
          <div class="row">
            <section class="col-sm-12" v-for=" p in p_bdd" :key="p.id" v-if=" p.id == r.patient_id">
              <button class="btn_p_rdv col-sm-12 taille_1 bold" type="button" name="button" @click="changeRdv(p.id,p.nom), affichage_rdv()">Proposer un nouveau rendez-vous</button>
            </section>
          </div>
        </div>
      </section>
    </div>

    <div class="container-fluid vos_dmd_rdv">

    </div>
    <div class="container ">
      <div class="row taille_5">
        <div class="col-sm-12 titre_dmd_rdv">
          <p> Vos rendez-vous demandés aux patients</p>
        </div>
      </div>
    </div>
    <div class="row colo">

      <div class="col-sm-6" v-for=" r in rdv_to_p_bdd" :key="r.id" v-if="(r.accepted =='non')">

        <div class="container chaque_rdv">
          <div class="row">
            <section class="col-sm-12 taille_1">
              <p> Identifiant rdv : {{ r.id }} </p>
            </section>
          </div>
          <div class="row">
            <section class="col-sm-12">
              <p> <b class="titres_lignes_chaque_rdv">Date</b> : {{ r.date }} </p>
            </section>
          </div>
          <div class="row">
            <section class="col-sm-12">
              <p> <b class="titres_lignes_chaque_rdv">Heure</b> : {{ r.heure }} </p>
            </section>
          </div>
          <div class="row">
            <section class="col-sm-12" v-for=" p in p_bdd" :key="p.id" v-if=" p.id == r.patient_id">
              <p> <b class="titres_lignes_chaque_rdv"> Nom du patient</b> : M/Mme. {{ p.nom }} {{p.prenom}} </p>
            </section>
          </div>
          <div class="row">
            <section class="col-sm-12">
              <p> <b class="titres_lignes_chaque_rdv"> Description</b> : {{ r.description }} </p>
            </section>
          </div>

        </div>


      </div>
    </div>

  </div>

    <div v-if="rdv_form" class="container-fluid rdv">
      <form class=" ici" @submit.prevent="prendre_rdv_m_to_p">
        <div class="container form_container">
            <div class="row">
              <p class="titre_rdv col-sm-12 taille_4"> Rendez-vous avec M/Mme. {{this.p}} </p>
            </div>
            <div class="row ligne_rdv input_description">
              <textarea class="col-sm-12" v-model="editingRdv.description" placeholder="ecrivez votre message" type="text"> </textarea>
            </div>
            <div class="row ligne_rdv">
              <div class="col-sm-6">
                <input class="col-sm-12" v-model="editingRdv.date" type="date" name="date" id="select_date">
              </div>
              <div class="col-sm-6">
                <select class="col-sm-12" v-model="editingRdv.heure" id="heure_select">
                  <option value="" disabled selected>Heure de rendez-vous</option>
                  <option value="10h00">10h00</option>
                  <option value="10h15">10h15</option>
                  <option value="10h30">10h30</option>
                  <option value="10h45">10h45</option>
                  <option value="11h00">11h00</option>
                  <option value="11h15">11h15</option>
                  <option value="11h30">11h30</option>
                  <option value="11h45">11h45</option>
                  <option value="12h00">12h00</option>
                  <option value="12h15">12h15</option>
                  <option value="12h30">12h30</option>
                  <option value="12h45">12h45</option>
                  <option value="13h00">13h00</option>
                  <option value="13h15">13h15</option>
                  <option value="13h30">13h30</option>
                  <option value="13h45">13h45</option>
                  <option value="14h00">14h00</option>
                  <option value="14h15">14h15</option>
                  <option value="14h30">14h30</option>
                  <option value="14h45">14h45</option>
                  <option value="15h00">15h00</option>
                  <option value="15h15">15h15</option>
                  <option value="15h30">15h30</option>
                  <option value="15h45">15h45</option>
                  <option value="16h00">16h00</option>
                  <option value="16h15">16h15</option>
                  <option value="16h30">16h30</option>
                  <option value="16h45">16h45</option>
                  <option value="17h00">17h00</option>
                  <option value="17h15">17h15</option>
                  <option value="17h30">17h30</option>
                  <option value="17h45">17h45</option>
                  <option value="18h00">18h00</option>
                  <option value="18h15">18h15</option>
                  <option value="18h30">18h30</option>
                  <option value="18h45">18h45</option>
                  <option value="19h00">19h00</option>
                </select>
              </div>

            </div>

            <div class="row ligne_rdv taille_1">
              <div class="col-sm-6">
                <button class="col-sm-12 envoyer_dmd" type="submit" name="button">Envoyer la demande de rendez-vous avec M/Mme {{this.p}}</button>
              </div>
              <div class="col-sm-6">
                <button class="fermer_dmd col-sm-12" type="button" name="button" @click="affichage_rdv()">fermer</button>
              </div>


            </div>
          </div>
        </form>
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
      p_bdd: { type: Array, default: [] },
      rdv_symptome: { type: Array, default: [] },
      rdv_to_p_bdd: { type: Array, default: [] }
    },
    data () {
      return {
        rdv_form: false,
        id_patient_rdv_actuel: "",
        p:"",
        editingRdv: {
          date: '',
          heure: '',
          description:'',
          medecin: this.user_medecin.id,
          // patient: id_patient_rdv_actuel,
          // n_p: this.p,
          accepted_or_not: 'non'
        }

      }
    },
    methods: {
      affichage_rdv() {
        if (this.rdv_form == true) {
          this.rdv_form = false
        } else {
          this.rdv_form = true
        }
      },
      changeRdv(patient_choisis,nom_p) {
        this.editingRdv.medecin = patient_choisis
        this.id_patient_rdv_actuel = patient_choisis
        this.p = nom_p
      },
        prendre_rdv_m_to_p () {
          alert("dans la vue id patient : " + this.id_patient_rdv_actuel + " nom patient : " + this.p)
          // alert("dans la vue id patient : " + this.editingRdv.patient + " nom patient : " + this.editingRdv.n_p)
          this.$emit('prendre_rendez_vous_m_to_p', this.editingRdv, this.id_patient_rdv_actuel , this.p)
        }
    }
  }
</script>

<style scoped>
#heure_select, #select_date{
  padding: 20px;
}
.colo{
  min-height: 200px;
}

.vos_dmd_rdv{
  margin-top: 60px;
  padding: 40px 0 0 0;
  border-top: 15px var(--bleu_logo) solid;
}

.titre_dmd_rdv{
  text-align: center;
  border: var(--bleu_logo) 5px solid;

  margin: 0 0 50px 0;
}

.titre_page{
  margin: 30px 0;
  border: var(--bleu_logo) 5px solid;
  text-align: center;
}
.btn_p_rdv{
  padding: 10px;
  /* border: none; */

border: 2px var(--bleu_logo) solid;
  text-decoration: none;

}
.btn_p_rdv:hover{
    background-color: var(--bleu_logo_o);
    color:white;
}

.btn_reprendre_rdv{
/* width: 100%; */
margin: 5px 0 40px 0;
}

  .input_description{
    height: 100px !important;
  }
  .ligne_rdv{
    margin: 60px 0;
  }
  .form_container{
    padding: 15px 0;
  }

  .titre_rdv{
    text-align: center;
  }

  .ici{
    background-color: var(--beige_fonce);
    /* border-right: 2px solid black;
    border-left: 2px solid black; */
    color: var(--bleu_logo);
    border: 8px solid var(--bleu_logo_o);
    margin: 0 100px;
  }

  .envoyer_dmd, .fermer_dmd{
    padding: 10px 0;
  }
  .fermer_dmd:hover{
    color: white;
    background-color: var(--rouge);
  }
  .envoyer_dmd:hover{
    color: white;
    background-color: var(--vert_o);
  }

  .rdv{
    position: absolute;
    top:20%;
    z-index: 5;
  }
  .chaque_rdv{
    background-color: var(--bleu_logo_o);
    color:white;
    border: 3px solid var(--bleu_logo);
    max-height: 300px;
    overflow-y: scroll;

  }
  #background_page_mes_patients {
    height: 100%;
    max-height: 1660px;
    overflow: scroll;
    padding-bottom: 150px;
    background-color: var(--beige_fonce_o);
    /* font-size: 1.8em; */
    /* padding: 15px; */
  }
</style>
