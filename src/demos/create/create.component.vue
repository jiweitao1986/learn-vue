<template>
  <div>
    <h2>{{ title }}</h2>
    <create-component-1st></create-component-1st>
    <create-component-2nd></create-component-2nd>
    <create-component-second></create-component-second>
    <create-component-3rd></create-component-3rd>
    <create-component-4th></create-component-4th>
    <create-component-fourth></create-component-fourth>
    <create-component-5th></create-component-5th>
  </div>
</template>

<script>
import CreateComponentFirst from './create-first.component';
import CreateComponentSecond from './create-second.component';
import CreateComponentThird from './create-third.component';
import CreateComponentFourth from './create-fourth.component';
import CreateComponentFifth from './create-fifth.component';

export default {
  name: 'CreateComponent',
  components: {
    'create-component-1st': CreateComponentFirst,
    'create-component-2nd': CreateComponentSecond,
    'create-component-3rd': CreateComponentThird,
    'create-component-4th': CreateComponentFourth,
    'create-component-5th': CreateComponentFifth
  },
  data: function() {
    return {
      title: 'CreateComponent'
    }
  }
}
</script>
