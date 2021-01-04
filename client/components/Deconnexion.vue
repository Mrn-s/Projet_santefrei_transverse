<template>

  <div v-if="checkIfLogged(user_medecin.id, user_patient.id)"></div>

</template>

<script>
  module.exports = {
    props: {
      user_medecin:{type: Object },
      user_patient: {type: Object }
    },
    data () {
      return {

      }
    },
    methods: {
      // Si un admin ou un client lambda du site est connecté
      // alors on exécute la route logout pour déconnecter l'utilisateur
      checkIfLogged(user_medecin, user_patient) {
        if (user_medecin != '' || user_patient != '') {
          this.$emit('logout');
        }
      }
    }
  }
</script>

<style scoped></style>
