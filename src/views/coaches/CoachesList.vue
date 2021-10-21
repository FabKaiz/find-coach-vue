<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error has occurred"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <div class="main">
      <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
      </section>
      <section>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)">
            Refresh
          </base-button>
          <!-- <base-button link to="/auth" v-if="!isLoggedIn">Login</base-button> -->
          <p v-if="!isLoggedIn">Login or signup to register as a coach</p>
          <base-button
            v-if="isLoggedIn && !isCoach && !isLoading"
            link
            to="/register"
          >
            Register as Coach
          </base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :description="coach.description"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </ul>
        <h3 v-else>No coaches found.</h3>
      </section>
    </div>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      error: null,
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Sorry something went wrong';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
