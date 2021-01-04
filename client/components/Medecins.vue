<template>
  <div id="page_medecins">

    <p>cette page contient l'ensemble des médecins de notre base de donnée</p>
    <p>les médecins sont stocké dans le fichier medecins.js dans data mais aussi dans notre BDD</p>
    <article v-for="m in les_medecins">

    <p> {{ m.nom }} - {{ m.adresse }} - {{ m.numero }} </p>

    </article>

  </div>
</template>

<script>
module.exports = {
    props: {
      les_medecins: { type: Array, default: [] },
    },
    data () {
      return {
      }
    },
    methods:{
      
    }
  }
</script>

<style scoped>
  #page_medecins p{
    font-size: 1.8em;
  }
</style>
