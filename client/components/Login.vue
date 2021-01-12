<template>
  <div class="background_page_login">
        <div class="container" id="colonne_login">
            <form class="container" @submit.prevent="login">
              <div class="row">
                <div class="col-sm-12 taille_4 bold" id="titre_onglet_connexion">
                  Connexion
                </div>
              </div>
              <div class="row">
                <label class="col-sm-6 taille_3">Email</label>
                <label class="col-sm-6 taille_3">Mot de passe</label>
                <div class="col-sm-6">
                  <input class="col-sm-12" type="text" id="email" v-model="editLogin.email" placeholder="Entrer votre email" name="username" required>
                </div>
                <div class="col-sm-6">
                  <input class="col-sm-12" type="password" v-model="editLogin.password" placeholder="Entrer votre mot de passe" name="password" required>
                </div>
              </div>

              <div class="row ligne_connexion">
                <button class="col-sm-12 taille_3" id="btn-connexion" type="submit">Je me connecte</button>
                <router-link class="col-sm-12 taille_3" id="lien_vers_inscription" to='/register'> Pas encore de compte ?</router-link>
              </div>

            </form>
        </div>
        <div class="container" id="colonne_remerciements">
          <div class="container colonne_centrale">
            <div class="row ">
              <div class="col-sm-12 taille_5 bold" id="titre_section_remerciements">
                MERCI
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <p class="taille_2 bold" id="text_remerciements"> Nous aimerions remercier l'ensemble du personnel soignant pour son devouement inéstimable face à la COVID19. Nous vous remercions tout autant d'utiliser notre platforme qui constitue un véritable pont entre malades et médecins. </p>
              </div>
            </div>

          </div>

        </div>
      </div>
</template>

<script>
  module.exports = {
    props: {

    },
    data () {
      return {
        editLogin:{
          email:'',
          password:''
        }
      }
    },
    methods: {
      login () {
        var email = document.getElementById("email").value
        if (email.match(/(medecin-)+[a-z]+(-)+[a-z]+(-santefrei)/gm)) {// medecin-Prenom-Nom-santefrei
          this.$emit('medecin_login', this.editLogin)
        } else {
          this.$emit('login', this.editLogin)
        }
    }
  }
}
</script>

<style scoped>
#lien_vers_inscription{
  margin: 20px 0;
  width: 100%;
  background-color: var(--bleu_logo);
  color: white;
}
#colonne_login form{
  background-color: var(--beige_fonce_o);
  border:2px solid black;
}
#colonne_login{
  padding-top: 70px;
}
#text_remerciements{
  padding: 19px;
  color: var(--bleu_logo);
}

#colonne_remerciements{
  margin-top: 25px;
}

#titre_section_remerciements{
  text-align: center;
  color: var(--bleu_logo);
  text-decoration: underline 10px var(--bleu_logo);
}

.ligne_connexion{
  margin: 15px 0;
}
#btn-connexion{
  color: white;
  /* padding: 20px; */
  background-color: var(--bleu_logo);
}

  #titre_onglet_connexion{
    color:var(--bleu_logo);
    text-align: center;
    margin: 10px;
  }
  .background_page_login{
    /* background-color: var(--beige_fonce_o); */
    height: 100%;
    width: 100%;
    background-image: url("../images/background_santefrei_carre.png");
    background-repeat:round;
  }

  /* Full-width inputs */
  input[type=text], input[type=password] {
      padding: 12px 20px;
      margin: 18px 0;

      border: 1px solid #ccc;

  }

  input[type=submit]:hover {
      background-color: rgb(191,215,197);
      color: black;
      border: 1px solid #53af57;
  }
</style>
