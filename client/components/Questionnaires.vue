<template>
  <div id="background_page_questionnaire">

      <section class="container">
        <article class="row" id="titre_questionnaire_page">
          <p class="taille_5">Connectez-vous pour consulter votre historique</p>
        </article>
      </section>

      <section class="container" v-if="questionnaire_form" >

        <section  class="container" id="section_symptomes">
          <article class="row" id="titre_section_symptome">
            <p class="taille_3"> Trouvez vos symptomes et prennez rdv avec votre médecin</p>
          </article>
          <article v-for="s in symptomes" class="symptome row">
            <p class="taille_2">{{ s.name }}</p>
          </article>
        </section>

        <section id="section_questionnaires" class="container">
          <article class="row" id="titre_section_questionnaire">
            <p class="taille_3"> Nos questionnaires généraux</p>
          </article>
          <article v-for="q in questionnaires" class="questionnaire row">
            <p class="titre_questionnaire taille_moyenne col-sm-12" >{{ q.titre }}</p>
            <p class="col-sm-12"> {{ q.duree }} min</p>
            <div class="col-sm-12">
              <button type="button" name="button" @click="changeQuestionnaire(q.id), affichage_questionnaire()"> remplir le questionnaire</button>

            </div>
          </article>
        </section>

      </section>
      <section class="container" v-else>
        <button class="row" type="button" name="button" @click="affichage_questionnaire()">retour</button>

        <articl class="row"  v-for="q in questionnaires" v-if="q.id == Questionnaire_actuel">

          <article class="container" id="le_questionnaire">
            <p class="taille_3 titre_questionnaire row">{{ q.titre }}</p>
            <article class="taille_1 row" v-for="question in q.questions"><p class="questions_questionnaire">  {{ question }}</p></article>
            <p class="photo_questionnaire row">{{ q.photo }}</p>
            <p class="taille_1 description_questionnaire row">{{ q.description }}</p>
            <button v-if="user_medecin.id" type="button" name="button"> Modifier le questionnaire</button>
            <button v-if="user_medecin.id" type="button" name="button"> Envoyer ce questionnaire au patient</button>

          </article>

        </article>
      </section>

  </div>
</template>

<script>
  module.exports = {
    props: {
      user_medecin: { type: Object},
      user_patient: { type: Object},
      questionnaires: { type: Array, default: [] },
      symptomes : { type : Array, default: [] },
    },
    data () {
      return {
        questionnaire_form: true,
        Questionnaire_actuel: ""
      }
    },
    methods:{
      affichage_questionnaire() {
        if (this.questionnaire_form == true) {
          this.questionnaire_form = false
        } else {
          this.questionnaire_form = true
        }
      },
      changeQuestionnaire(Questionnaire_choisis) {
        this.Questionnaire_actuel = Questionnaire_choisis
      }
    }
  }
</script>

<style scoped>


  #le_questionnaire{
    background-color: var(--beige_fonce_o);
    padding: 60px;
  }
  .description_questionnaire{
    font-size: 1.3em;
    background-color: var(--vert);
    color:var(--beige_fonce);
    padding: 20px;
  }

  .titre{
    /* font-size: 2em;
    font-weight: bold;
    color: var(--vert);
    text-decoration: underline var(--vert) 3px; */
  }
  .questions_questionnaire{
    /* padding: 20px;
    border: 2px black solid; */
  }

  #background_page_questionnaire{
    /* margin: 0; */
    font-family: "Times News Roman";
    background-image: url("../images/background_questionnaire.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    /* height: 100%; */
   max-height: 1660px;
   padding-bottom: 100px;
    /* overflow-y: scroll; */
  }
  /* div{
    height: 100%;
  } */
  /* footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    color: #F2EDDB;
    background-color: #09371F;
    text-align: center;
  } */
  #section_symptomes{
    /* display: flex;
    flex-wrap:wrap;
    justify-content: center; */
    /* align-items: center;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 5%; */
    border: 2px solid red;
    background-color: var(--beige_fonce_o);
  }
  #section_questionnaires{
    /* display: flex; */
    /* flex-wrap:wrap; */
    /* justify-content: center;
    align-items: center;
    margin-left: 20%;
    margin-right: 20%; */
    margin-top: 30px;
    border: 2px solid red;
    background-color: var(--beige_fonce_o);

    /* border: blue 3px solid; */
  }

  .symptome{
    /* display: flex;
    border: black 3px solid;
    flex-direction: column; */
    /* margin: 3%; */
    /* height: 50px;
    width: 40%;
    padding: 2% 2% 0 2%;
    margin: 2%; */
    border: 2px solid black;
    /* background-color: var(--beige_fonce_o); */

  }

  .questionnaire{
    /* display: flex;
    border: black 3px solid;
    flex-direction: column; */
    /* margin: 3%; */
    /* height:200px;
    width: 40%;
    padding: 2% 2% 0 2%;
    margin: 2%; */
    border: 2px solid black;
    /* background-color: var(--beige_fonce_o); */
  }

  .titre_questionnaire{
    font-weight: bold;
  }

  #titre_questionnaire_page{
    /* display: flex;
    justify-content: center;
    align-content: center; */
    /* margin-top:150px; */
  }
  /* #temps_questionnaire{
    display: flex;
  } */

  /* button{
    width: 40%;
    text-decoration: none;
    padding: 10px;
    border-radius: 40px 40px;
    background-color: #09371F;
    cursor: pointer;
    color: #fff;
  } */
  button:hover{
    color: #09371F;
    background-color: #E8C542;
  }

</style>
