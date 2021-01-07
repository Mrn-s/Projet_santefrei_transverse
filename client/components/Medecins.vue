<template>
  <div id="background_page_medecins">

    <article class="colonne_centrale container">
      <article class="row">
        <p class="col-sm-12  taille_5">Decouvrez l'ensemble de nos médecins</p>

        <router-link class="col-sm-12  taille_3" v-if="!(user_patient.id) && !(user_medecin.id)"  to='/login'> Connectez-vous et prenez rendez-vous </router-link>
      </article>
      <div class="row">
        <section class="col-sm-12 d-flex flex-wrap justify-content-around">

            <button v-for="s in les_spe" type="button" name="button" @click="changeTypeSpecialite(s.nom)">{{ s.nom }}</button>

        </section>
        <article class="col-sm-3 chaque_medecin" v-for="m in les_medecins" v-if="m.specialite == medSpe">

            <div class="card-1 container infos_medecin">
              <div class="row">
                <img class="img_all" v-bind:src="m.photo">
              </div>
              <div class="row">
                <p class="col-sm-12 taille_3"> {{ m.nom }} </p>
                <p class="col-sm-12 taille_2"> {{ m.adresse }} </p>
                <p class="col-sm-12 taille_2"> {{ m.numero }} </p>
                <p class="col-sm-12 taille_2"> {{ m.region }} </p>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <button v-if="user_patient.id" class="taille_2 btn-rdv">Prendre rendez-vous</button>
                </div>

              </div>
            </div>

        </article>
      </div>

    </article>

  </div>
</template>

<script>
  const Rdv = window.httpVueLoader('./components/Rendez_vous.vue')
  module.exports = {
  components: {

  },
    props: {
      les_spe: { type: Array, default: [] },
      les_medecins: { type: Array, default: [] },
      user_patient:{ type: Object },
      user_medecin:{ type: Object }
    },
    data () {
      return {
        medSpe: "spe 1"
      }
    },
    methods:{
      // prendre_rendez_vous(patient_id,medecin_id){
      //   let content = {
      //     p_id: menuId,
      //     m_id: menuType,
      //   }
      //   this.$emit('prendre_rendez_vous', content)
      // },
      // changeQuestionnaire(Questionnaire_choisis) {
      //   this.Questionnaire_actuel = Questionnaire_choisis
      // },
      changeTypeSpecialite(nv_med_spe){
        this.medSpe = nv_med_spe
      },
      add_rdv(r) {
        this.$emit('prendre_rendez_vous', r)
      }
    }
  }
</script>

<style scoped>
.infos_medecin{
  height: 530px;
}

.chaque_medecin{
  margin: 12px 0;
}

.card-1 {
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card-1:hover {
background-color: var(--cyan_o);
color: var(--beige);
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
/* background-color: var(--beige_fonce_o); */
}

#background_page_medecins{
  background-color: var(--beige);
  padding-bottom: 100px;
  padding-top: 40px;
}
/* .ici{
      overflow-y: scroll;
} */
</style>
