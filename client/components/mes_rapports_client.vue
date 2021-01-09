<template>
  <div id="background_page_medecins">

    <article class="colonne_centrale container taille_3">
      <p>ceci est la page mes rapports</p>
      <p>cette page doit contenir les rapports du patient actuellement connecté</p>
      <p> ils doivent être triables par date ou importance par date et consultables à tout moment par le patient </p>
    </article>
</div>
</template>

<script>
module.exports = {
}
</script>

<style scoped>
#background_page_medecins{
  background-color: var(--beige);
  height: 100%;
  max-height: 1660px;
  padding-top: 40px;
  padding-bottom: 150px;
  overflow-y: scroll;
}

</style>
