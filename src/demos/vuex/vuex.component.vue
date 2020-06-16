<template>
  <div>
    <h3>{{ title }}</h3>
    <dl>
      <dt>Mutation</dt>
      <dd>{{count}}</dd>
      <dd><button @click="increment()">increment</button></dd>
    </dl>
    <dl>
      <dt>EmpObj</dt>
      <dd>{{empName}}</dd>
      <dd><button @click="changeName()">changeName</button></dd>
    </dl>
  </div>
</template>

<script>
import Vue from 'vue';
import { store } from './store';

const empObj = {
  id: 1,
  code: 'Code-1',
  name: 'Name-1'
}

export default Vue.extend({

  store: store,

  data: function() {
    return {
      title: 'Vuex-Compoment',
    }
  },
  computed: {

    now: function() {
      const now = new Date();
      const nowStr = now.toISOString();
      return nowStr;
    },

    count: function() {
      return this.$store.state.count;
    },

    empName: function() {
      return empObj.name;
    }
    

  },
  methods: {
    increment: function() {
      this.$store.commit('increment');
      console.log(this.$store);
    },

    changeName: function() {
      const now = new Date();
      const nowStr = now.toISOString();
      empObj.name = `Name-${nowStr}`;
      console.log(empObj);
    }
  }
})
</script>
