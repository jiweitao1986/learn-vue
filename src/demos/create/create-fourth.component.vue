<template>
  <div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
import Vue from 'vue';
var componentConstructor = Vue.extend({
  data: function() {
    return {
      title: 'Create-Component-Fourth'
    }
  }
})

export default Vue.component('create-component-fourth', componentConstructor)
</script>
