<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{now}}</p>
    <dl>
      <dt>数字</dt>
      <dd>{{num}}</dd>
      <dd>Computed: {{numSquare}}</dd>
      <dd><button @click="add()">AddOne</button></dd>
    </dl>
    <dl>
      <dt>对象</dt>
      <dd>Original: {{JSON.stringify(obj)}}</dd>
      <dd>Computed: {{objStr}}</dd>
      <dd><button @click="changeObj()">ChangeObj</button></dd>
      <dd><button @click="changeObjProp()">ChangeObjProp</button></dd>
    </dl>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  data: function() {
    return {
      title: 'Computed-Compoment',
      num: 0,
      obj: {
        key1: 'val1',
        key2: 'val2'
      }
    }
  },
  computed: {

    now: function() {
      const now = new Date();
      const nowStr = now.toISOString();
      return nowStr;
    },

    numSquare: function() {
      return this.num * this.num;
    },

    objStr: function() {
      return JSON.stringify(this.obj);
    }

  },
  methods: {
    add: function() {
      this.num += 1;
    },

    changeObj: function() {
      const now = (new Date()).toISOString();
      this.obj = {
        key1: `val1-${now}`,
        key2: `val2-${now}`
      }
    },

    changeObjProp: function() {
      const now = (new Date()).toISOString();
      this.obj.key1 = `val1-${now}`;
    }
  }
})
</script>
