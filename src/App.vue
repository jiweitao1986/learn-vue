<template>
  <div id="app">
    <h1>Learn Vue</h1>
    <create-component></create-component>
    <create-component-second></create-component-second>
  </div>
</template>

<script>
import CreateComponent from './components/create-component/create-component.vue'

export default {
  name: 'App',
  components: {
    CreateComponent
  }
}
</script>