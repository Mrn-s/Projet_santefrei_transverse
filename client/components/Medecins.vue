<template>
  <div id="background_page_medecins" >

    <article class="colonne_centrale container">
      <article class="row">
        <p id="titre_colonne" class="col-sm-12 taille_5">Decouvrez l'ensemble de nos médecins</p>
        <div class="col-sm-12" id="lien_vers_connexion">
          <router-link class="col-sm-12  taille_3" v-if="!(user_patient.id) && !(user_medecin.id)"  to='/login'> Connectez-vous et prenez rendez-vous </router-link>
        </div>
      </article>

      <div class="container">
        <section class="menu_specialite row d-flex justify-content-around">
            <div class="col-sm-4" v-for="s in les_spe">
              <button class="col-sm-12 action-button shadow animate blue chaque_specialite" type="button" name="button" @click="changeTypeSpecialite(s.nom)">{{ s.nom }}</button>
            </div>
        </section>

        <article  class="taille_4 row">
          <p id="titre_spe" class="col-sm-12">{{ medSpe }}</p>
        </article>
        <article class="row chaque_medecin">
          <article class="col-sm-3 la " v-for="m in les_medecins" v-if="m.specialite == medSpe">

              <div class="card-1 container infos_medecin">
                <div class="row">
                  <img class="img_all" v-bind:src="m.photo">
                </div>
                <div class="row nom_adresse_numero_region_medecin">
                  <p class="nom_medecin col-sm-12 taille_3"> {{ m.nom }} </p>
                  <p class="col-sm-12 taille_2"> {{ m.adresse }} </p>
                  <p class="col-sm-12 taille_2"> {{ m.numero }} </p>
                  <p class="col-sm-12 taille_2"> {{ m.region }} </p>
                </div>
              </div>

              <div v-if="user_patient.id && !rdv_form" class="container">
                <div class="row">
                    <button class="col-sm-12 taille_1 btn-rdv" @click="changeRdv(m.nom), affichage_rdv()">Prendre rendez-vous</button>
                </div>
              </div>
          </article>

        </article>
      </div>
    </article>

      <div v-if="rdv_form" class="container-fluid rdv">
        <form class=" ici container form" @submit.prevent="prendre_rdv">

          <!-- <div class="row "> -->
            <div class="container">
              <p class="titre_rdv row taille_4"> Rendez-vous avec Dr. {{ rdv_actuel }} </p>
            </div>
            <div class="container">
              <input class="row" v-model="editingRdv.date" type="date" name="date" id="select_date">
            </div>
            <div class="container">
              <select class="row" v-model="editingRdv.heure" id="heure_select">
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
            <div class="container">
              <input class="row" v-model="editingRdv.description" placeholder="ecrivez votre message" type="text">
            </div>
            <div class="container">
              <button class="row" type="submit" name="button"> Envoyer la demande de rendez-vous avec Dr. {{rdv_actuel}}</button>
            </div>
            <div class="container">
              <button class="btn_fermer row" type="button" name="button" @click="affichage_rdv()">fermer</button>
            </div>
          <!-- </div> -->


          </form>
      </div>
  </div>
</template>

<script>

  module.exports = {
  components: {

  },
    props: {
      les_spe: { type: Array, default: [] },
      les_medecins: { type: Array, default: [] },
      user_patient: { type: Object },
      user_medecin: { type: Object },
      rdv_patient: {type: Array},
      demande_de_rdv: {type: Array}
    },
    data () {
      return {
        medSpe: "médecine générale",
        rdv_form: false,
        rdv_actuel: "",
        editingRdv: {
          date: '',
          heure: '',
          description:'',
          medecin:'',
          patient: this.user_patient.id
        }
      }
    },
    methods:{
      prendre_rdv () {
        this.$emit('prendre_rendez_vous', this.editingRdv)
      },
      changeQuestionnaire(Questionnaire_choisis) {
        this.Questionnaire_actuel = Questionnaire_choisis
      },
      changeTypeSpecialite(nv_med_spe){
        this.medSpe = nv_med_spe
      },
      affichage_rdv() {
        if (this.rdv_form == true) {
          this.rdv_form = false
        } else {
          this.rdv_form = true
        }
      },
      changeRdv(rdv_choisis) {
        this.editingRdv.medecin = rdv_choisis
        this.rdv_actuel = rdv_choisis
      }
    }
  }
</script>

<style scoped>
#background_page_medecins::-webkit-scrollbar {
    display: none;
}
.menu_specialite::-webkit-scrollbar {
    display: none;
}

.ici{
  background-color: var(--bleu_logo_o);
  border-right: 2px solid black;
  border-left: 2px solid black;
  color: white;
  /* var(--cyan_o2); */
  /* #DBEEE6 */
}
.menu_specialite{
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  /* background-color: var(--vert_clair); */
  max-height: 300px;
  overflow-y: scroll;
}

.la{
  margin: 11px 0;
}

.btn_fermer{
  width: 40%;
}
.nom_adresse_numero_region_medecin{
  margin-top: 15px;
}
.nom_medecin{
  text-align: center;
}

#titre_colonne{
  text-align: center;
}
#titre_spe{
  margin-top: 25px;
  text-align: center;
}

.titre_rdv{
  text-align: center;
}
.rdv{
  /* background-color: var(--vert_clair); */
  /* border: 1px solid black; */
  position: absolute;
  top:30%;
  width: 100vw;

  padding: 25px;
  z-index: 5;
}
#lien_vers_connexion{
  text-align: center;
  padding: 0 15px 25px 15px;
}

.infos_medecin{
  height: 530px;
}

.chaque_medecin{

  /* margin: 12px 0; */
}

.card-1 {
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card-1:hover {
background-color:var(--cam_color);
/* var(--cyan_o); */
color: var(--beige);
transform: translate(0px,-5px);

box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
/* background-color: var(--beige_fonce_o); */
}

#background_page_medecins{
  background-color: var(--beige);
  height: 100%;
  max-height: 1660px;
  padding-top: 2%;
  padding-bottom: 9%;
  overflow-y: scroll;
}
/* .ici{
      overflow-y: scroll;
} */
.animate
{
	transition: all 0.1s;
	-webkit-transition: all 0.1s;
}

.action-button
{
	position: relative;
	padding: 10px 40px;
    margin: 0px 10px 10px 0px;
    float: left;
	border-radius: 3px;
	font-family: 'Lato', sans-serif;
	font-size: 18px;
	color: black;
	text-decoration: none;
}

.blue
{
	background-color:var(--bleu_logo);
  /* var(--cyan_o) */
  color:#fff !important;
	border-bottom: 5px solid var(--vert_o);
	/* text-shadow: 0px -2px #2980B9; */
}

.action-button:active
{
	transform: translate(5px,15px);
  /* -webkit-transform: translate(5px,5px); */
	border-bottom: 1px solid;
}

.chaque_specialite{
  margin:10px 0;
    color: black;
}
</style>
