<template>
  <li>
    <div>
      <a :href="emaiLink">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ['email', 'message'],
  computed: {
    emailLink() {
      return 'mailto' + this.email;
    },
  },
}
</script>

<style lang="scss" scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
  p {
    margin: 0.5rem 0 0 0;
  }
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
  &:hover,
  &:active {
    color: #8d007a;
  }
}
</style>
