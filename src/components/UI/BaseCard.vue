<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
