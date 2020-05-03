<template>
  <div>
    <h2>{{ title }}</h2>
    <create-component-first></create-component-first>
    <create-component-second></create-component-second>
    <create-component-third></create-component-third>
    <create-component-fourth></create-component-fourth>
    <create-component-fifth></create-component-fifth>
  </div>
</template>

<script>
import CreateComponentFirst from './create-component-first';
import CreateComponentSecond from './create-component-second';
import CreateComponentThird from './create-component-third';
import CreateComponentFourth from './create-component-fourth';
import CreateComponentFifth from './create-component-fifth';

export default {
  name: 'CreateComponent',
  components: {
    CreateComponentFirst,
    CreateComponentSecond,
    CreateComponentThird,
    CreateComponentFourth,
    CreateComponentFifth
  },
  data: function() {
    return {
      title: 'CreateComponent'
    }
  }
}
</script>
