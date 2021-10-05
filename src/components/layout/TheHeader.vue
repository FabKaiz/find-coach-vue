<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a Coach</router-link></h1>
      <ul>
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li><router-link to="/requests">Requests</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: white;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: 0.2s;
    font-weight: 600;
  }

  nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #9e88b2;
  color: #9e88b2;
}

h1 {
  font-weight: bolder;
  font-size: 1.75rem;
  margin: 0;

  a {
    color: white;
    margin: 0;

    &:hover,
    &:active,
    &.router-link-active {
      border-color: transparent;
    }
  }
}

li {
  margin: 0 0.5rem;
}
</style>
