<template>
  <div class="margin-bottom">
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilters" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilters" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilters" />
      <label for="career">Career</label>
    </span>
  </div>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilters(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style lang="scss" scoped>
.margin-bottom {
  margin-bottom: 40px;
}
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;

  label,
  input {
    vertical-align: middle;
  }

  label {
    margin-left: 0.25rem;
  }
}

.filter-option.active label {
  font-weight: bold;
  color: red;
}
</style>
