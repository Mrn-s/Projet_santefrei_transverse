<template>
  <div id="background_page_rendez_vous">

    <article class="colonne_centrale container taille_3">
      <p>ceci est la page prendre_rendez_vous</p>
    </article>
</div>
</template>

<script>
module.exports = {
  data () {
    return {
      newRendez_vous: {
        date: '',
        heure: '',
        nom: '',
        prenom: '',
        medecin_id: ''
      }
    }
  },
  methods: {
    // Envoie la valeur des champs du formulaire
    add_rdv () {
      this.$emit('rdv', this.newRendez_vous)
    }
  }
}
</script>

<style scoped>
#background_page_rendez_vous{
  padding-bottom: 100px;
  padding-top: 40px;
  background-color: var(--beige);
  height: 90%;
}

</style>
