<template>

<div id="background_page_actualite">

  <div class="container colonne_centrale">

    <article class="row chaque-actu" v-for="ac in les_actus">

      <div class="col-sm-8">
        <div class="row">
          <p class="col-sm-12 taille_3 titre"> {{ ac.titre }} </p>
        </div>
        <div class="row">
          <p class="col-sm-12 taille_1"> {{ ac.theme }} </p>
        </div>
        <div class="row">
          <p class="col-sm-12 taille_2"> {{ ac.description }} </p>
        </div>
        <div class="row">
          <p class="col-sm-12 taille_1"> {{ ac.redacteur }}</p>
        </div>
        <div class="row">
          <p class="col-sm-12 taille_1"> {{ ac.sources }}</p>
        </div>
      </div>

      <div class="col-sm-4">
        <img class="img_all" v-bind:src="ac.photo">
      </div>

    </article>
  </div>
</div>

</template>

<script>
module.exports = {
    props: {
      les_actus: { type: Array, default: [] }
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
.titre{
  text-align: center;
}
.chaque-actu{
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin:15px 0;
}

#background_page_actualite{
  background-color: var(--beige);
}

</style>
