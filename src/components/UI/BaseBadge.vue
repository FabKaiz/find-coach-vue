<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title;
    },
  },
};
</script>

<style lang="scss" scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.2rem 1rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #3d008d88;
  color: white;
}

.backend {
  background-color: #71008d77;
  color: white;
}

.career {
  background-color: #8d006e73;
  color: white;
}
</style>
