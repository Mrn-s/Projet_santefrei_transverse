<template>
  <div>
          <section class="ligne" id = "ligne_1">

            <article id= "un_un">
                <p class="taille_grande" id ="text_un_un">SANT'EFREI : votre diagnostic personnalisé en quelques clics.</p>
                <p class ="taille_moyenne" id ="sous_text_un_un">Pour tous, partout, à tout moment.</p>
                <article id = "emplacement_bouton_un_un" class="button-container-2">
                  <p  class="mas taille_faible">Je m'inscris</p>
                <router-link  id="bouton_un_un" class="taille_faible" to='/register'> Inscrivez-vous</router-link>
              </article>
            </article>

            <article id ="un_deux">
              <img src="../images/background_un.png" alt="photo de fond">
            </article>

          </section>

          <section class ="ligne" id="ligne_2">

            <article id="deux_un">
              <p id="text_deux" class="taille_grande"> Comment ça marche ? </p>
              <p id ="sous_text_deux" class="taille_faible">En quelques clics,
                créez votre compte et remplissez le questionnaire médical selon le spécialiste que vous souhaitez consultez.
                Téléchargez-le, et décidez ou non de le partager avec votre médecin. C'est facile !</p>
            </article>
          </section>

          <section class = "ligne" id ="ligne_3">
            <article id="trois_un">
              <!-- <img id ="img_trois_un" src="background_deux.png" alt="Image telephone en main"> -->
            </article>
            <article id="trois_deux">
              <p class="mini_titre">Communiquer </p>
              <p class="sous_text_trois_deux">
                Vous pouvez envoyer le rapport de vos symptômes directement à votre médecin.
              </p>
              <p class="mini_titre">Remplir un questionnaire </p>
              <p class="sous_text_trois_deux">
                Selon vos maux, sélectionnez le type de spécialiste que vous souhaitez consulter et remplissez le questionnaire adéquat.
              </p>
              <p class="mini_titre">Prendre rendez-vous </p>
              <p class="sous_text_trois_deux">
                Une fois votre rapport envoyé, fixez un rendez-vous avec votre médecin.
              </p>
            </article>
          </section>
          <section class="ligne" id ="ligne_4">
            <article id="quatre_un" class="taille_grande">
            <p> Un véritable gain de temps, pour le patient et le médecin.</p>
            </article>
          </section>

          <section class="ligne" id ="ligne_5">
            <article id="cinq_un">
              <p class="taille_grande">Témoignages </p>
              <p id ="sous_text_cinq" class="taille_faible">
               « Ce site m'a permis d'être rassuré quant à mes symptômes en attendant la consultation chez mon spécialiste.
               De plus, le temps de consultation est réduit, et l'attente pour avoir un rendez-vous aussi,
               puisque le médecin étudie ma fiche de symptômes avant mon arrivée ! ».
              </p>
              <p class="taille_faible" id="noms_temoignages">Adam, 32 ans </p>
            </article>
          </section>
   </div>
</template>

<script>

  module.exports = {
    components: {
    },
    props: {
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

  .taille_grande
  {
    font-weight: bold;
    font-size: 2.9em;
  }
  .taille_moyenne
  {
    font-size: 2em;
  }
  .taille_faible{
    font-size: 1.3em;
  }

  .mini_titre{
    font-size: 1.3em;
    width:50%;
    font-weight: bold;
  }

  .ligne{
    display: flex;
    margin-bottom: 4%;
    color: #09371F;
  }

  #bouton_un_un{
    width: 30%;
    padding: 2.5%;
  }

  #un_un{
    position: absolute;
    top: 30%;
    width: 37%;
    padding: 1%;
    background-color: #F2EDDB;
    z-index: 2;
  }
  #un_deux{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
  }
  #text_un_un{
    text-align: center;
  }
  #sous_text_un_un{
    text-align: center;
  }
  #emplacement_bouton_un_un{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }



  .mas {
    position: absolute;
    background-color: #E8C542;
    width:28%;
    padding-top:2%;
    padding-bottom: 2%;
    text-align: center;
    font-weight: bold;


  }

  @-webkit-keyframes ani {
    from {
      -webkit-mask-position: 0 0;
    }
    to {
      -webkit-mask-position: 100% 0;
    }
  }

  @keyframes ani2 {
    from {
      -webkit-mask-position: 100% 0;
    }
    to {
      -webkit-mask-position: 0 0;
    }
  }

  .button-container-3 {

    transition: 550s;

  }
  .button-container-3 router-link {

    -webkit-mask: url("https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png");
    -webkit-mask-size: 7100% 100%;
    border: none;

    background: #09371F;
    color: #fff;
    cursor: pointer;
    font-family: "Times New Roman";

    animation: ani2 0.7s steps(70) forwards;
  }

  .button-container-3 router-link:hover {
    animation: ani 0.7s steps(70) forwards;
  }


  .button-container-2 {

    transition: 0.5s;

  }
  .button-container-2 router-link {
    /* width: 101%; */
    /* height: 100%; */

    background: #09371F;
    -webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png");
    /* mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png"); */
    -webkit-mask-size: 3000% 100%;
    mask-size: 3000% 100%;
    border: none;
    color: #fff;
    cursor: pointer;
    /* -webkit-animation: ani2 0.7s steps(29) forwards; */
    animation: ani2 0.7s steps(29) forwards;
  }
  .button-container-2 router-link:hover {
    /* -webkit-animation: ani 0.7s steps(29) forwards; */
    animation: ani 0.7s steps(29) forwards;
  }



  #ligne_1{
    margin-top: 2.5%;
  }

  #ligne_2{
    display: flex;
    justify-content: center;
  }
  #deux_un{
      display:block;
      text-align: center;
      width: 33%;
      padding: 10px;
      /* justify-content: center; */
      /* align-items: center; */
      border: black 6px double;
      /* box-shadow: 40px -10px teal; */
      box-shadow: 10px 10px 5px #09371F;;
  }


  #ligne_3{
    display: flex;
    justify-content: center;

  }
  #trois_un{
    border-left: 1px black solid;
    border-top: 1px black solid;
    border-bottom: 1px black solid;

    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../images/background_deux.png");
    /* background-attachment: fixed; */
    width:30%;
    height: 500px;
  }
  #trois_deux{
    border-left: 1px black solid;
    border-top: 1px black solid;
    border-bottom: 1px black solid;
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 2%;
    padding-right: 2%;
  }
  /* #img_trois_un{
    background-size: cover;
    background-image: url("background_deux.png");
    background-attachment: fixed;
  } */

  .sous_text_trois_deux{
    width: 50%;
  }

  #ligne_4{
      display: flex;
      justify-content: center;
  }
  #quatre_un{
    width: 40%;
    text-align: center;
  }


  #ligne_5{
    width:100%;
    height: 76%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 5px blue solid; */
    background-repeat: no-repeat;
    background-image: url(../images/background_trois.png);
  }
  #cinq_un{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 5px red solid; */
    background-color: #FBFBF3;
    width: 40%;
    height: auto;
  }
  #sous_text_cinq{
    width: 60%;
    text-align: center;
  }
  #noms_temoignages{
    padding: 2%;
    background-color: #E8C542;
  }

  .lien {
    transition: 0.3s ease;
    background-color: #FBFBF3;
    color: #09371F;
    text-decoration: none;
    border-top: 4px solid #FBFBF3;
    border-bottom: 4px solid #FBFBF3;
    /* border: 4px solid #FBFBF3; */
    padding: 20px 0;
    margin: 0 20px;
  }
  .lien:hover {
    border-top: 4px solid #09371F;
    border-bottom: 4px solid #09371F;
    padding: 6px 0;
  }
</style>
