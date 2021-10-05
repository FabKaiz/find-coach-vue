<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="coachContactLink">
        Contact
      </base-button>
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  margin: 1rem 0;
  border: 1px solid #42424256;
  border-radius: 4px;
  padding: 1rem;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-6px);
  }
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}
</style>
