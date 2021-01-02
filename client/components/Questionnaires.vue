<template>
  <div>
        <section>
          <article id="titre_questionnaire_page">
            <p class="taille_grande ">Connectez-vous pour consulter votre historique</p>
          </article>
        </section>

        <section id="section_questionnaires">



          <article class="questionnaire">
            <p class="titre_questionnaire taille_moyenne" > Consultation : medecine générale</p>
            <p> 10 min</p>
            <button type="button" name="button"> remplir le questionnaire</button>
          </article>


          <article class="questionnaire">
            <p class="titre_questionnaire taille_moyenne">Consultation allergologie</p>
            <p> 10 min</p>
            <button type="button" name="button"> remplir le questionnaire</button>
          </article>

          <article class="questionnaire">
            <p class="titre_questionnaire taille_moyenne">Consultation allergologie</p>
            <p> 10 min</p>
            <button type="button" name="button"> remplir le questionnaire</button>
          </article>


          <article class="questionnaire">
            <p class="titre_questionnaire taille_faible">Consultation allergologie</p>
            <p> 10 min</p>
            <button type="button" name="button"> remplir le questionnaire</button>
          </article>


      </section>

    <!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> -->

    <!-- <footer>
        <section class="taille_faible">AVERTISSEMENT : Le système SANT'EFREI que vous êtes sur le point d'utiliser est destiné à vous éclairer sur les causes possibles de vos symptômes et à vous aider dans votre orientation médicale. Les résultats et conseils qu'il vous fournira ne peuvent en aucun cas remplacer une consultation médicale et ne constituent pas un diagnostic.</section>
    </footer> -->
  </div>
</template>

<script>
module.exports = {
}
</script>

<style scoped>
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

  button{
    width: 40%;
    text-decoration: none;
    padding: 10px;
    border-radius: 40px 40px;
    background-color: #09371F;
    cursor: pointer;
    color: #fff;
  }
  button:hover{
    color: #09371F;
    background-color: #E8C542;
  }

</style>
