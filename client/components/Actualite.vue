<template>

<div id="background_page_actualite">
  <article class="container colonne_centrale container_titre">
    <div class="row taille_5 titre_page">
      <div class="col-sm-12 bold  ">
         Les dernieres actualités
      </div>

    </div>
  </article>
  <div class="container colonne_centrale">

    <article class="row chaque-actu" v-for="ac in les_actus">

      <div class="col-sm-4">
        <div class="row photo_actu">
          <img class="  img_all col-sm-12" v-bind:src="ac.photo">
        </div>
      </div>
      <div class="col-sm-8">
        <div class="row">
          <p class="col-sm-12 taille_3 titre bold"> {{ ac.titre }} </p>
        </div>
        <div class="row">
          <p class="col-sm-12 taille_1"> {{ ac.theme }} </p>
        </div>
        <div class="row">
          <p class="col-sm-12 taille_1"> {{ ac.description }} </p>
        </div>
        <div class="row">
          <p class="col-sm-12 taille_1 bold"> {{ ac.redacteur }}</p>
        </div>
        <div class="row">
          <a class="col-sm-12 taille_1 source bold" :href="ac.sources"> Source </a>
        </div>
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
.container_titre{
  font-family: 'Times New Roman';
  /* color:var(--bleu_logo); */
margin-bottom: 30px;
}

.titre_page{
  text-align: center;
}

.source{
  text-decoration: underline;
  color:var(--bleu_logo);

}
.photo_actu{
  /* width: 100%; */
  display: flex;
  align-content: center;
  justify-content: center;
}

.titre{
  text-align: center;
}
.chaque-actu{
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin:15px 0;
  padding: 20px;
  transition: transform .4s;
}
.chaque-actu:hover{
    background-color: var(--beige_fonce_o);

    transform: scale(1.08);
    /* transform: translate(5px,5px); */
    /* var(--bleu_ciel_o) */
    cursor: pointer;
}

#background_page_actualite{
  background-color: var(--bleu_logo);
  height: 100%;
  max-height: 1660px;
  padding-top: 40px;
  padding-bottom: 124px;
  overflow-y: scroll;
}

</style>
