<template>
  <div id="background_page_medecins">

    <article class="container">
      <article class="row taille_5">
        <p>Decouvrez l'ensemble de nos médecins</p>
      </article>
      <article class="row" v-for="m in les_medecins">

        <p class="col-sm-4 taille_3"> {{ m.nom }} </p>
        <p class="col-sm-4 taille_2"> {{ m.adresse }} </p>
        <p class="col-sm-4 taille_2"> {{ m.numero }} </p>
      </article>
    </article>


  </div>
</template>

<script>
module.exports = {
    props: {
      les_medecins: { type: Array, default: [] }
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
#background_page_medecins{
  background-color: var(--beige);
  height: 100%;
}
</style>
