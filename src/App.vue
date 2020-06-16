<template>
  <div id="app">
    <h1>Learn Vuex</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link> |
      <router-link to="/computed">Computed</router-link> |
      <router-link to="/vuex">Vuex</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>

export default {
  name: 'App',
  components: {
  }
}
</script>