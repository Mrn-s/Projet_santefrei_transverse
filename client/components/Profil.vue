<template>
<div id="page_profil">
  <p>ceci est la page mon profil</p>
  <p>Cette page ne doit s'afficher dans le header que si l'utilisateur est connecté (medecin ou patient peu importe)</p>
  <p>cette page contient les informations personnelles de l'utilisateur (numero de telephone, email etc) qu'il doit pouvoir changer à tout moment</p>

</div>
</template>

<script>
module.exports = {
}
</script>

<style scoped>
#page_profil p{
  font-size: 1.8em;
}
</style>
