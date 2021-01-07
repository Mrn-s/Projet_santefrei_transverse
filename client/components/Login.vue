<template>
  <div class="all">


        <div id="container">
            <form class="form-container" @submit.prevent="login">
                <h1>Connexion</h1>

                <label><b>Email</b></label>
                <input type="text" id="email" v-model="editLogin.email" placeholder="Entrer votre email" name="username" required>

                <label><b>Mot de passe</b></label>
                <input type="password" v-model="editLogin.password" placeholder="Entrer votre mot de passe" name="password" required>

                <button id="bouton_inscription" type="submit">Je me connecte</button>

            </form>
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
        // if (email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
          alert("ici")
          this.$emit('medecin_Login', this.editLogin)
        } else {
          this.$emit('login', this.editLogin)
        }
    }
  }
}
</script>

<style scoped>
  .all{
    background-color: var(--beige);
  }
  #bouton_inscription{
    border:none;
    text-decoration: none;
    width: 100%;
    background-color: #09371F;
    padding-top: 4%;
    padding-bottom: 4%;
    color:#fff;
    font-size: 1.3em;
  }
  #bouton_inscription:hover{
    background-color: #E8C542;
    color: black;
    cursor: pointer;

  }

  #container{
    height: 100%;
      width:400px;
      margin:0 auto
  }
  /* Bordered form */
  form {
      width:100%;
      padding: 30px;
      border: 1px solid #f1f1f1;
      background-color: var(--beige_fonce);
  }

  #container h1{
      display:flex;
      justify-content: space-around;
      height:6%;
      margin: 0 auto;
      padding-bottom: 10px;
  }

  /* Full-width inputs */
  input[type=text], input[type=password] {
      width: 100%;
      padding: 12px 20px;
      margin: 18px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
  }

  /* Set a style for all buttons */
  input[type=submit] {
      background-color: #09371F;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 100%;
  }
  input[type=submit]:hover {
      background-color: rgb(191,215,197);
      color: black;
      border: 1px solid #53af57;
  }
</style>
