<template>
  <div id="background_page_questionnaire">
      <!-- <p>{{user_patient}}</p> -->
      <section v-if ="!(user_patient.id) " class=" container">

        <article v-if="!(user_medecin.id)" class="row" id="titre_questionnaire_page">
          <article class="col-sm-1">

          </article>
          <router-link class="col-sm-10  taille_3 lien_connexion" to='/login'> Connectez-vous et envoyez vos symptomes à votre médecin </router-link>
          <article class="col-sm-1">

          </article>
        </article>

      </section>

      <section v-if ="user_patient.id || user_medecin.id" class="section_principale container">



        <section class="container" v-if="questionnaire_form">

          <section v-if ="user_patient.id"  class="container-fluid" id="section_symptomes">
            <article class="row" id="titre_section_symptome">
              <p class="taille_4 col-sm-12"> Trouvez vos symptomes et prennez rdv avec votre médecin</p>
            </article>

            <section id="typeSymptome" class=" row d-flex justify-content-center">
              <div class=" col-sm-2">
                <button class="col-sm-12 btn-13 custom-btn-1 bold" @click="changeTypeSymptome('type_1')">Type 1</button>
              </div>
              <div class=" col-sm-2">
                <button class="col-sm-12 btn-13 custom-btn-1 bold" @click="changeTypeSymptome('type_2')">Type 2</button>
              </div>
              <div class=" col-sm-2">
                <button class="col-sm-12 btn-13 custom-btn-1 bold" @click="changeTypeSymptome('type_3')">Type 3</button>
              </div>
              <div class=" col-sm-2">
                <button class="col-sm-12 btn-13 custom-btn-1 bold" @click="changeTypeSymptome('type_4')">Type 4</button>
              </div>
              <div class=" col-sm-2">
                <button class="col-sm-12 btn-13 custom-btn-1 bold" @click="changeTypeSymptome('type_5')">Type 5</button>
              </div>
              <div class=" col-sm-2">
                <button class="col-sm-12 btn-13 custom-btn-1 bold" @click="changeTypeSymptome('type_6')">Type 6</button>
              </div>
            </section>
            <article class="row">

              <article id="colonne_gauche" class="col-sm-9">

                <article class="row">
                  <article v-for="s in l_symptomes" v-if="s.type == symptomeType" class="symptome col-sm-4">
                    <div class="chaque_s row card-2">
                      <p class="bold col-sm-12 taille_2">{{ s.name }}</p>
                      <p class="col-sm-12 taille_1">{{ s.description }}</p>
                      <div class="col-sm-12">
                        <button class="btn-14 custom-btn" @click="addToPanierSymptomes(s.type,s.id,s.name)" type="button" name="button">Je ressens ce symptome</button>
                      </div>
                    </div>
                  </article>
                </article>

              </article>

              <article id="colonne_droite" class="col-sm-3">
                <div class="taille_2 col-sm-12 titre_colonne_droite">
                  Vos symptomes
                </div>

                <div class="container">

                  <p class="row ligne_colonne_droite"> Nombre de symptomes : {{ panier_symptomes.nb_symptomes }}</p>
                  <div class="row icii">
                    <article v-for="s in panier_symptomes.symptomes" :key="s.id" class="container chaque_symptome_panier">
                      <div class="row infos_chaque_symptome_panier">
                        <p class="col-sm-12">{{ s.nom }}</p>
                        <p class="col-sm-12">type : {{ s.type }}</p>
                        <p class="col-sm-12">id : {{ s.id }}</p>
                      </div>

                      <div class="row">
                        <button class="col-sm-12" type="button" name="button" @click="removeFromPanier_symptomes(s.id, s.type, s.nom)"> Supprimer </button>
                      </div>

                    </article>
                  </div>

                  <div class="row ligne_colonne_droite">
                    <select  v-model="editListe_symptomes.medecin">
                      <option  value="" disabled selected>Choisissez votre médecin</option>
                      <option  v-for="m in les_medecins" v-bind:value="m.nom">{{ m.nom }}</option>
                    </select>
                  </div>
                  <div class="row ligne_colonne_droite">
                    <button type="button" name="button"> Envoyez mes symptomes à mon médecin </button>
                  </div>


                  <!-- <span>Sélectionné : {{ editListe_symptomes.medecin }}</span> -->
                </div>

              </article>

            </article>

          </section>

          <section id="section_questionnaires" class="container">

            <article class="row">
              <p id="titre_section_questionnaire" class="taille_4 col-sm-12"> Nos questionnaires généraux</p>
            </article>
            <article class="row">
              <article v-for="q in questionnaires" class="questionnaire col-sm-4">
                <div class="chaque_q row card-1">
                  <p class=" titre_questionnaire taille_2 col-sm-12" >{{ q.titre }}</p>
                  <p class=" col-sm-12"> {{ q.duree }} min</p>
                  <div class="col-sm-12">
                    <button type="button" name="button" @click="changeQuestionnaire(q.id), affichage_questionnaire()"> remplir le questionnaire</button>
                  </div>
                </div>
              </article>
            </article>

          </section>

        </section>

        <section class="container le_questionnaire" v-else>

          <button class="row" type="button" name="button" @click="affichage_questionnaire()">retour</button>

          <article class="row"  v-for="q in questionnaires" v-if="q.id == Questionnaire_actuel">

            <article class="container ">

              <p class="taille_3 titre_questionnaire row">{{ q.titre }}</p>
              <form @submit.prevent="addReponseQuestionnaire">
              <article class="taille_1 row"  v-for="question in q.questions">
                <p class="questions_questionnaire col-sm-7">  {{ question }}</p>
                  <div v-for="r in l_reponse" :key="r" class="">
                    <input type="radio" :name="r" :value="r">
                    <label :for="r"></label>
                  </div>

              </article>
              <div>
                <button type="submit">Valider</button>
              </div>
            </form>

              <p class="taille_1 description_questionnaire row">{{ q.description }}</p>
              <button v-if="user_medecin.id" type="button" name="button"> Modifier le questionnaire</button>
              <button v-if="user_medecin.id" type="button" name="button"> Envoyer ce questionnaire au patient</button>

            </article>

          </article>

        </section>

      </section>
  </div>
</template>

<script>
  module.exports = {
    props: {
      les_medecins: { type: Array, default: [] },
      user_medecin: { type: Object },
      user_patient: { type: Object },
      questionnaires: { type: Array, default: [] },
      l_symptomes : { type : Array, default: [] },
      panier_symptomes: { type: Object }
    },
    data () {
      return {
        l_r :{
          id:'',
          liste:['t','b','a'],
          nom:'t'
        },
        editListe_symptomes: {
          id: '',
          nom:'',
          description:'',
          medecin:'',
          type:''
        },
        questionnaire_form: true,
        Questionnaire_actuel: "",
        symptomeType: "type_1"
      }
    },
    methods:{
      removeFromPanier_symptomes(id_s, type_s, nom_s) {
        // alert("on passe par la la vue 1")
        let content = {
          nom: nom_s,
          type: type_s,
          id: id_s
        }
        // alert("on passe par la la vue 2")
        this.$emit('remove-from-panier-s', content)
      },
      addToPanierSymptomes (type_s, id_s, nom_s) {
        let content = {
          nom: nom_s,
          type: type_s,
          id: id_s
        }
        this.$emit('add-to-panier-symptomes', content)
      },
      affichage_questionnaire() {
        if (this.questionnaire_form == true) {
          this.questionnaire_form = false
        } else {
          this.questionnaire_form = true
        }
      },
      changeQuestionnaire(Questionnaire_choisis) {
        this.Questionnaire_actuel = Questionnaire_choisis
      },
      changeTypeSymptome(nv_type_symptome){
        this.symptomeType = nv_type_symptome
      }
    }
  }
</script>

<style scoped>

.ligne_colonne_droite{
  margin-top: 20px;
}

.titre_colonne_droite{
  /* width: 100%; */
  text-align: center;
}

.icii{
  max-height: 380px;
  overflow-y: scroll;
}
.chaque_symptome_panier{
  /* border: 2px black solid; */
  margin: 20px 0;
  /* padding: 10px; */

  color: #fff;
}
.infos_chaque_symptome_panier{
  background-color: var(--vert_o2);
}


.custom-btn {
  /* padding: 10px 25px; */
  /* font-weight: 500; */
  /* background: transparent; */
  outline: none !important;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  display: inline-block;
}
.btn-14 {
  border: 2px solid #000;
  font-weight: bold;
  z-index: 1;
  padding: 2px 6px;
}
.btn-14:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -1;
  /* background: var(--jaune2); */
  background: var(--vert_o2);
  transition: all 0.4s ease;
}
.btn-13:hover{
  transform: translate(5px,5px);
  -webkit-transform: translate(0px,-7px);
}

.btn-14:hover {
  color: #fff  ;
  font-weight: bold;
  /* transform: translate(5px,5px);
  -webkit-transform: translate(0px,-7px); */
}
.btn-14:hover:after {
  left: 0;
  width: 100%;
}
.btn-14:active {
  top: 2px;
}

.le_questionnaire{
  background-color: var(--beige_fonce_o);
  padding: 10px 40px;
  border: solid black 1px;
}

#section_questionnaires{
  background-color: var(--beige_fonce_o);
  border: 1px solid black;
  margin-top: 50px;
}
#section_symptomes{
  padding: 15px 30px;
  border: 1px solid black;
  background-color: var(--beige_fonce_o);
}
#titre_section_questionnaire{
  text-align: center;
}

#typeSymptome{
  margin: 15px 0;
}

  #titre_section_symptome{
    text-align: center;
  }

  .card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .card-1:hover {
  background-color: var(--vert_o2);
  color: var(--beige);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  /* background-color: var(--beige_fonce_o); */
  }

  .card-2 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .card-2:hover {
  background-color: var(--violet_o);
  color: var(--beige);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  /* background-color: var(--beige_fonce_o); */
  }

  .chaque_s{
    margin: 10px 0px;
    padding: 20px 0;
  }

  .chaque_q{
    margin: 15px 10px;
    padding: 20px 0;
  }
  .section_principale{

    margin-top: 20px;
    padding:20px;
    text-align: center;
  }
  .lien_connexion{
    text-decoration: none;
    color:var(--vert);
    font-weight: bold;
  }
  .lien_connexion:hover{
    background-color: var(--violet_o);
  }

  #colonne_droite{
    border-left:1px black solid;
    border-right:1px black solid;

  }

  #background_page_questionnaire{
    /* margin: 0; */
    font-family: "Times News Roman";
    background-image: url("../images/background_questionnaire.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100%;
    max-height: 1660px;
    padding-bottom: 124px;
    padding-top: 40px;
    overflow-y: scroll;
  }

  .titre_questionnaire{
    font-weight: bold;
  }
  #titre_questionnaire_page{
    margin-top: 50px;
    text-align: center;
  }

  button:hover{
    /* color: #09371F; */
    /* background-color: #E8C542; */
  }

</style>
