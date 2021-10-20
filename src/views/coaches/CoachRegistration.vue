<template>
  <section>
    <base-card>
      <div class="padding">
        <h2>Register as a coach now!</h2>
        <coach-form @save-data="saveData"></coach-form>
      </div>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/coachForm.vue';

export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 0;
}

.padding {
  padding: 50px;
}
</style>
