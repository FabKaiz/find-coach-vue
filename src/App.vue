<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100vh;
  width: 100vw;
}

body {
  margin: 0;
}

h2 {
  font-size: 1.75rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(60px);
}

.route-leave-to {
  opacity: 0;
  transform: translateX(60px);
}

.route-enter-active,
.route-leave-active {
  transition: all 0.3s ease-in-out;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
