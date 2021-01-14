<template>
  <div id="background_page_questionnaire">
      <!-- <p>{{user_patient}}</p> -->
      <section v-if ="!(user_patient.id) " class=" container">

        <article v-if="!(user_medecin.id)" class="row" id="titre_questionnaire_page">

          <router-link class="col-sm-12 taille_4 lien_connexion" to='/login'> Veuillez vous connecter pour accéder à nos questionnaires </router-link>

        </article>

      </section>


      <section v-if ="user_patient.id || user_medecin.id" class="section_principale container">

        <section class="container laa" v-if="questionnaire_form">

          <section v-if ="user_patient.id"  class="container-fluid" id="section_symptomes">

            <article class="row" id="titre_section_symptome">
              <p class="taille_4 col-sm-12"> Ajoutez vos symptômes à vos rendez-vous et gagnez du temps</p>
            </article>
            <section id="typeSymptome" class=" row d-flex justify-content-center onglet_types_symptomes">
              <div class=" col-sm-2 btn-132 custom-btn-1 ">
                <button class=" onglet_symp_btn taille_1 " @click="changeTypeSymptome('cardiologie')"> <b> Cardiologie </b></button>
              </div>
              <div class=" col-sm-2 btn-132 custom-btn-1 ">
                <button class=" onglet_symp_btn taille_1  " @click="changeTypeSymptome('symptômes généraux')"> <b>Autre </b></button>
              </div>
              <div class=" col-sm-2 btn-132 custom-btn-1 ">
                <button class=" onglet_symp_btn taille_1 " @click="changeTypeSymptome('troubles digestifs')"><b>Troubles digestifs</b></button>
              </div>
              <div class=" col-sm-2 btn-132 custom-btn-1 ">
                <button class=" onglet_symp_btn taille_1 " @click="changeTypeSymptome('dermatologie')"><b>Dermatologie</b></button>
              </div>
              <div class=" col-sm-2  btn-132 custom-btn-1 ">
                <button class=" onglet_symp_btn taille_1  " @click="changeTypeSymptome('musculaire')"><b>Musculaire</b></button>
              </div>
              <div class=" col-sm-2 btn-132 custom-btn-1 ">
                <button class=" onglet_symp_btn taille_1 " @click="changeTypeSymptome('troubles liés au nez et à la gorge')"><b>Nez ou gorge</b></button>
              </div>
              <div class=" col-sm-2 btn-132 custom-btn-1 ">
                <button class=" onglet_symp_btn taille_1 " @click="changeTypeSymptome('psychiatrie')"><b>Psychiatrie</b></button>
              </div>
              <div class=" col-sm-2 btn-132 custom-btn-1 ">
                <button class=" onglet_symp_btn taille_1 " @click="changeTypeSymptome('cardiologie')"><b>Cardiologie</b></button>
              </div>
              <div class=" col-sm-2 btn-132 custom-btn-1 ">
                <button class=" onglet_symp_btn taille_1 " @click="changeTypeSymptome('pneumologie')"><b>Problèmes respiratoire</b></button>
              </div>
              <div class=" col-sm-2 btn-132 custom-btn-1 ">
                <button class="onglet_symp_btn taille_1  " @click="changeTypeSymptome('oreilles')"><b>Oreilles</b></button>
              </div>
              <div class=" col-sm-2 btn-132 custom-btn-1 ">
                <button class=" onglet_symp_btn taille_1 " @click="changeTypeSymptome('bouche')"><b>Bouche</b></button>
              </div>
              <div class=" col-sm-2 btn-132 custom-btn-1 ">
                <button class=" onglet_symp_btn taille_1 " @click="changeTypeSymptome('vision')"><b>Vue</b></button>
              </div>
            </section>
            <article class="row">

              <article id="colonne_gauche" class="col-sm-8">

                <article class="row">
                  <article v-for="s in l_symptomes" v-if="s.type == symptomeType" class="symptome col-sm-6">
                    <div class="chaque_s row card-2">
                      <p class="bold col-sm-12 taille_2">{{ s.name }}</p>
                      <p class="col-sm-12 taille_1">{{ s.description }}</p>
                      <div class="col-sm-12">
                        <button class="btn-14 custom-btn ressens-btn" @click="addToPanierSymptomes(s.type,s.id,s.name)" type="button" name="button">Je ressens ce symptôme</button>
                      </div>
                    </div>
                  </article>
                </article>

              </article>

              <article id="colonne_droite" class="col-sm-4">
                <div class="taille_4 col-sm-12 titre_colonne_droite">
                  Vos symptômes
                </div>

                <div class="container">
                  <p class="row ligne_colonne_droite taille_1"> Ajoutez jusqu'à 10 symptômes différents</p>
                  <p class="row ligne_colonne_droite taille_2"> Nombre de symptômes : {{ panier_symptomes.nb_symptomes }}</p>
                  <div class="row icii">
                    <article v-for="s in panier_symptomes.symptomes" :key="s.id" class="container chaque_symptome_panier">
                      <div class="row infos_chaque_symptome_panier taille_1">
                        <p class="col-sm-12">Catégorie : {{ s.type }}</p>

                        <p class="col-sm-12 bold">{{ s.nom }}</p>

                        <!-- <p class="col-sm-12">id : {{ s.id }}</p> -->
                      </div>

                      <div class="row">
                        <button class="col-sm-12 suppr_symptome" type="button" name="button" @click="removeFromPanier_symptomes(s.id, s.type, s.nom)"> Supprimer </button>
                      </div>

                    </article>
                  </div>

                  <div class="row ligne_colonne_droite" id ="rdv_choix_div">
                    <select  v-model="editListe_symptomes.rdv" id="rdv_choix">
                      <option  value="" disabled selected>Choisissez un rendez-vous</option>
                      <option  v-for="r in rdv_bdd" v-if="r.patient_id == user_patient.id" v-bind:value="r.id">Rdv numéro {{ r.id }}</option>
                    </select>
                  </div>
                  <div class="row ligne_colonne_droite taille_1" v-for="r in rdv_bdd" v-if="r.id == editListe_symptomes.rdv">
                    <div class="col-sm-12">
                      <p>Rdv avec Dr. {{r.medecin_id}}</p>
                      <p>Le {{r.date}} à {{r.heure}}</p>
                    </div>

                  </div>
                  <div class="row ligne_colonne_droite taille_1">
                    <button class="col-sm-12 symptome_dans_rdv" @click="add_to_rdv(editListe_symptomes.rdv)" type="button" name="button"> <span>Ajouter ces symptomes à mon rendez-vous</span> </button>

                  </div>
                  <div class="row ligne_colonne_droite taille_2">
                    <p class="col-sm-12"> Attention : ceux-ci remplaceront entièrement les précédents</p>
                  </div>
                </div>

              </article>

            </article>

          </section>

          <section id="section_questionnaires" class="container">

            <article class="row">
              <p id="titre_section_questionnaire" class="taille_4 col-sm-12"> Nos questionnaires généraux</p>
            </article>
            <article class="row">
              <article v-for="q in questionnaires" class="chaque_questionnaire col-sm-4">
                <div class="chaque_q row card-1">
                  <p class=" titre_questionnaire taille_2 col-sm-12" >{{ q.titre }}</p>
                  <p class=" col-sm-12"> {{ q.duree }} min</p>
                  <div class="col-sm-12">
                    <button type="button" name="button" class="btn-14 custom-btn ressens-btn" @click="changeQuestionnaire(q.id), affichage_questionnaire()"> remplir le questionnaire</button>
                  </div>
                </div>
              </article>
            </article>

          </section>

        </section>

        <section class="container le_questionnaire" v-else>
          <div class="row taille_2">
              <button id ="btn_retour" type="button" name="button" @click="affichage_questionnaire(), reset_reponses()">retour</button>
          </div>

          <article class="row"  v-for="q in questionnaires" v-if="q.id == Questionnaire_actuel">

            <article class="container ">
              <div class="row">
                <p class="taille_4 titre_questionnaire col-sm-12">{{ q.titre }}</p>
              </div>
              <div class="row">
                <p class="taille_2 sous_titre_questionnaire col-sm-12"> Evaluez à quel point vous ressentez ce qui est décrit</p>
              </div>


              <article class="taille_1 row questions_article"  v-for="question in q.questions">
                <p class="questions_question col-sm-12">  Question {{ question.id_q }}</p>
                  <div class="col-sm-12 qq">
                    <p>{{ question.qu}} </p>

                  </div>

                  <div class="col-sm-2">
                  Pas d'accord
                  </div>
                  <div class="col-sm-2">
                    <button class="col-sm-12" type="button" name="button" @click="add_to_reponse(question.id_q,1)"> 1 </button>
                  </div>
                  <div class="col-sm-2">
                    <button class="col-sm-12" type="button" name="button" @click="add_to_reponse(question.id_q,2)"> 2 </button>
                  </div>
                  <div class="col-sm-2">
                    <button class="col-sm-12" type="button" name="button" @click="add_to_reponse(question.id_q,3)"> 3 </button>
                  </div>
                  <div class="col-sm-2">
                    <button class="col-sm-12" type="button" name="button" @click="add_to_reponse(question.id_q,4)"> 4 </button>
                  </div>

                  <div class="col-sm-2">
                  D'accord
                  </div>

              </article>
              <div class="row">
                <p> les reponses : {{r_q}}</p>
              </div>
              <div class="row">
                <button class="taille_2" id="btn_valider" @click="envoyer_reponse_questionnaire()"> Valider</button>
              </div>


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
      panier_symptomes: { type: Object },
      rdv_bdd: { type: Array, default: [] },
      r_q: {type: Array, default: []  }
    },
    data () {
      return {
        editListe_symptomes: {
          id: '',
          nom:'',
          description:'',
          rdv:'',
          type:''
        },
        questionnaire_form: true,
        Questionnaire_actuel: "",
        symptomeType: "trouble des hormones",
        reponse_questionnaire:{ type: Array, default: [] }
      }
    },
    methods:{
      envoyer_reponse_questionnaire(){
        this.$emit('send_response_ques', this.Questionnaire_actuel)
      },
      reset_reponses(){
        this.$emit('reset_reponses_of_q')
      },
      add_to_reponse(q_id,re){
        // alert(" dans la vue" + re)
        this.$emit('add_reponse_of_q',q_id, re)
      },
      add_to_rdv(id_rdv){
        let content ={
          id_rdv: id_rdv
        }
      this.$emit('add-to-rdv-s', content)

      },
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
.laa{
  padding: 0 !important;
}
.qq{
  margin: 10px 0;
  background-color: var(--beige_fonce_o);
  color:var(--bleu_logo);

}

.onglet_symp_div:hover{
  color:white !important;
}
.onglet_types_symptomes{
  border-top: 4px var(--bleu_logo_o) solid;
  border-bottom: 4px var(--bleu_logo_o) solid;

}

.onglet_symp:hover{

  color:white;
  height: 100%;
  border: none;

}
.onglet_symp_btn{
  background-color: transparent;
  border: none;
  padding: 20px 0;
  height: 100%;
  width: 100%;

}
.onglet_symp_btn:hover{

  color:white;

}


  #btn_retour{
    padding: 10px 30px;
  }

  #btn_valider{
    margin: 30px 0 5px 0;

  }

  .questions_article{
    margin: 15px 0;
    padding: 22px;
    border-bottom: solid 1px black;
  }

  .questions_question{
    border: 2px black solid;
    background-color: var(--bleu_logo_o);
    color: white;
    margin: 22px 0;
  }

  #rdv_choix_div{
    margin: 35px 0;
  }

  #rdv_choix{
    width: 100%;
    padding: 10px;
  }

  .chaque_questionnaire{
    letter-spacing: 1px;
  }

  .ligne_colonne_droite{
    margin-top: 20px;
  }

  .titre_colonne_droite{
    border: var(--bleu_logo) 3px solid;
    color:white;
    background-color: var(--bleu_logo_o);
    text-align: center;
  }

  .icii{
    max-height: 400px;
    overflow-y: scroll;
  }
  .chaque_symptome_panier{
    margin: 20px 0;
    color: #fff;
  }
  .infos_chaque_symptome_panier{
    color: white;
    padding: 20px;
    background-color: var(--bleu_logo_o);
  }

  .btn-132 {
    z-index: 1;
    padding: 0 !important;

  }

  .btn-132:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    background: var(--bleu_logo);
    transition: all 0.4s ease;
  }

  .btn-132:hover {
    color: white!important;
  }

  .btn-132:hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }


  .custom-btn {

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
    background: var(--bleu_logo);
    transition: all 0.4s ease;
  }
  .btn-13:hover{
    /* transform: translate(5px,5px); */
    /* -webkit-transform: translate(0px,-7px); */
  }

  .btn-14:hover {
    color: #fff  ;
    font-weight: bold;

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
    padding-top: 15px;
    margin-bottom: 40px;
  }

  .card-1 {

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.5s cubic-bezier(.25,.8,.25,1);
    }

    .card-1:hover {
    background-color: var(--bleu_logo);
    color: var(--beige);
    transform: translate(0px,-8px);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transition: all 0.5s cubic-bezier(.25,.8,.25,1);
    }

    .card-2 {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 1s cubic-bezier(.25,.8,.25,1);
    }

    .card-2:hover {
    background-color: var(--bleu_logo);
    transform: translate(0px,-7px);
    color: var(--beige);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transition: all 0.5s cubic-bezier(.25,.8,.25,1);
    }

    .ressens-btn{
      border: 1px solid #fff;
      background-color: var(--beige_fonce);
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
      text-align: center;
    }
    .lien_connexion{
      text-decoration: none;
      padding: 20px 0;
      color:var(--bleu_logo);
      transition: all 1s;
      font-weight: bold;
      border: var(--bleu_logo) 5px solid;
    }
    .lien_connexion:hover{
      transform: translate(0,-20px);
      transition: all 1s;
      background-color: var(--bleu_logo_o);
      color: white;
    }

    #colonne_droite{
      margin: 10px 0;
      border-left:5px var(--bleu_logo) solid;
      border-right:5px var(--bleu_logo) solid;

    }

    #background_page_questionnaire{
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
      text-align: center;
    }
    .sous_titre_questionnaire{
      text-align: center;
    }
    #titre_questionnaire_page{
      margin-top: 150px;
      text-align: center;
    }

    .suppr_symptome{
      background-color: var(--rouge_clair);
      color: white;
      border: 1px solid #da251f;
      transition: all 150ms linear;
    }

    .suppr_symptome:hover{
      background-color: var(--rouge);
      border: 1px solid rgba(0, 0, 0, 0.05);
      /*transform: scale(1.03);*/
      transition: all 150ms linear;
    }

    .symptome_dans_rdv{
      background-color:#11772D;
      border-color: #30AD23;
      color: white;
      transition-duration: 0.5s;
    }

    .symptome_dans_rdv:hover{
      background-color:#30AD23;
    }

</style>
