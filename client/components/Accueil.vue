<template>
  <div class="background_page_accueil">

    <div class=" container-fluid">

          <section class="ligne" id = "ligne_1">
            <article id ="background_un">

                <article id= "un_un">
                    <p class="taille_5 bold" id ="text_un_un">SANT'EFREI : votre évaluation personnalisé en quelques clics.</p>
                    <p class ="taille_3" id ="sous_text_un_un">Pour tous, partout, à tout moment.</p>
                    <p class ="taille_3"> Inscrivez-vous et trouvez les solutions à vos problèmes </p>
                    <article v-if ="!user_medecin.id && !user_patient.id" id = "emplacement_bouton_un_un" class="button-container-2">
                    <router-link id="bouton_un_un" class="taille_2" to='/register'> Inscrivez-vous</router-link>
                  </article>
                </article>
                <article id="equipe" class="taille_3">
                  <p>Developpé par <strong>Merouane</strong> / <strong>Landry</strong>  / <strong>Gaowei</strong>, avec la participation de <strong>Camelia</strong> et <strong>Lihao</strong></p>
                </article>

              </article>

          </section>

          <section class ="ligne container" id="ligne_2">

            <article id="deux_un" class=" row">
              <p id="text_deux" class="taille_5 col-sm-12 bold"> Comment ça marche ? </p>
              <p id ="sous_text_deux" class="taille_2 col-sm-12">
                En quelques clics,
                créez votre compte et remplissez le questionnaire médical selon le spécialiste que vous souhaitez consultez.
                Téléchargez-le, et décidez ou non de le partager avec votre médecin. C'est facile !
              </p>
            </article>

          </section>

          <section class = "ligne container-fluid" >
            <article id ="ligne_3" class="row">
              <article class="col-sm-4" id="trois_un">
              </article>
              <article class="col-sm-8" id="trois_deux">
                <div id="contenu_trois">
                  <p class="taille_3 bold col-sm-12">Communiquer</p>
                  <p class="taille_1 col-sm-12">
                    Vous pouvez envoyer le rapport de vos symptômes directement à votre médecin.
                  </p>
                  <p class="taille_3 bold col-sm-12">Remplir un questionnaire </p>
                  <p class="taille_1 col-sm-12">
                    Selon vos maux, sélectionnez le type de spécialiste que vous souhaitez consulter et remplissez le questionnaire adéquat.
                  </p>
                  <p class="taille_3 bold col-sm-12">Prendre rendez-vous </p>
                  <p class="taille_1 col-sm-12">
                    Une fois votre rapport envoyé, fixez un rendez-vous avec votre médecin.
                  </p>
                </div>
              </article>
            </article>
          </section>

          <section class="ligne container">
            <article id="text_quatre" class="taille_5 row bold">
              <p > Un véritable gain de temps, pour le patient et le médecin.</p>
            </article>
          </section>

          <section class="row" id ="ligne_5">
            <article id="cinq_un" class="container">
              <p class="row taille_5">Témoignages </p>
              <p id ="sous_text_cinq" class="taille_1 row">
                 « Ce site m'a permis d'être rassuré quant à mes symptômes en attendant la consultation chez mon spécialiste.
                 De plus, le temps de consultation est réduit, et l'attente pour avoir un rendez-vous aussi,
                 puisque le médecin étudie ma fiche de symptômes avant mon arrivée ! ».
              </p>
              <p class="taille_2" id="noms_temoignages">Adam, 32 ans </p>
            </article>
          </section>
   </div>

</div>
</template>

<script>

  module.exports = {
    props: {
      user_medecin: { type: Object },
      user_patient: { type: Object }
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

#equipe{
  width: 50%;
  margin-top: 100px;
  padding: 30px;
  background-color: var(--beige_fonce_o);
  z-index: 2;
}

.background_page_accueil{
  background-color: var(--beige);
  height: 100%;
  max-height: 1660px;
  /* padding-top: 40px; */
  padding-bottom: 104px;
  overflow-y: scroll;
}

  #contenu_trois{
    padding: 5% 25% 0 25%;
    height: 600px;
  }
  #text_quatre{
    text-align: center;
  }

  .container-fluid{
    background-color: var(--beige);
  }
  .ligne{
    margin-bottom: 4%;
    color: #09371F;
  }

  #bouton_un_un{
    width: 30%;
    padding: 2.5%;
  }
#ligne_1{
  height: 1200px;
  width: 100%;
/* margin-left: 400px; */
  display:flex;
  justify-content: flex-end;
}

  #un_un{
    width: 50%;
    margin-top: 140px;
    padding: 30px;
    background-color: var(--beige_fonce_o);
    z-index: 2;
  }

  #background_un{
    /* display: flex;
    justify-content: flex-end; */
    background-image: url("../images/background_un.png");
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
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

  #ligne_2{
    display: flex;
    justify-content: center;
  }

  #deux_un{
      display:block;
      text-align: center;
      width: 70%;
      padding: 10px;
      border: black 6px double;
      box-shadow: 10px 10px 5px #09371F;;
  }

  #trois_un{
    border-left: 1px black solid;
    border-top: 1px black solid;
    border-bottom: 1px black solid;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("../images/background_deux.png");
    background-attachment: fixed;
    /* width:30%; */
    height: 600px;
  }
  #trois_deux{
    border-left: 1px black solid;
    border-top: 1px black solid;
    border-bottom: 1px black solid;
    border-right: 1px solid black;
    padding-left: 2%;
    padding-right: 2%;
  }
  #ligne_3{
    margin: 0 7%;
  }

  .sous_text_trois_deux{
    width: 50%;
  }

  .container-fluid{
    padding: 0 !important;
    /* margin: 0 !important; */
    overflow: hidden;
  }

  #ligne_5{
    margin: 0 !important;
    width:100%;
    height: 733px;
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
