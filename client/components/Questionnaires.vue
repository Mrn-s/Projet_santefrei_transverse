<template>
  <div>
        <section>
          <article id="titre_questionnaire_page">
            <p class="titre_page">Connectez-vous pour consulter votre historique</p>
          </article>
        </section>

        <section v-if="questionnaire_form" id="section_questionnaires">



          <article v-for="questionnaireu in questionnaires" class="questionnaire">
            <p class="titre_questionnaire taille_moyenne" >{{ questionnaireu.titre }}</p>
            <p> 10 min</p>
            <button type="button" name="button" @click="changeQuestionnaire(questionnaireu.id), affichage_questionnaire()"> remplir le questionnaire</button>
          </article>

      </section>

      <section v-else>
        <button type="button" name="button" @click="affichage_questionnaire()">Liste des questionnaires</button>

        <article v-for="q in questionnaires" v-if="q.id == Questionnaire_actuel">

          <article class="container" id="le_questionnaire">
            <p class="titre row">{{ q.titre }}</p>
            <article class="row" v-for="question in q.questions"><p class="questions_questionnaire">  {{ question }}</p></article>
            <p class="photo_questionnaire row">{{ q.photo }}</p>
            <p class="description_questionnaire row">{{ q.description }}</p>
          </article>

        </article>

      </section>
  </div>
</template>

<script>
  module.exports = {
    props: {
      questionnaires: { type: Array, default: [] }
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

  .titre_page{
    font-size: 3em;
    color:var(--vert_fonce);
  }

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
    font-size: 2em;
    font-weight: bold;
    color: var(--vert);
    text-decoration: underline var(--vert) 3px;
  }
  .questions_questionnaire{
    padding: 20px;
    border: 2px black solid;
  }

  div{
    margin: 0;
    font-family: "Times News Roman";
    background-image: url("../images/background_questionnaire.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100%;
  }
  div{
    height: 100%;
  }
  /* footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    color: #F2EDDB;
    background-color: #09371F;
    text-align: center;
  } */
  #section_questionnaires{
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    margin-left: 20%;
    margin-right: 20%;
    background-color: #FBFBF3;

    /* border: blue 3px solid; */
  }

  .questionnaire{
    display: flex;
    border: black 3px solid;
    flex-direction: column;
    /* margin: 3%; */
    height:200px;
    width: 40%;
    padding: 2% 2% 0 2%;
    margin: 2%;
    background-color: #F2EDDB
  }

  #titre_questionnaire{
    display: flex;
    text-align: center;
    /* align-items: center; */
    /* margin-top: -50%; */
    /* width: 100%; */
  }

  #titre_questionnaire_page{
    display: flex;
    justify-content: center;
    align-content: center;
    /* margin-top:150px; */
  }
  #temps_questionnaire{
    display: flex;
  }

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
