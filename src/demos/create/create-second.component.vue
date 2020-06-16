<template>
  <div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
import Vue from 'vue';

// component方法将该组件注册为全局；
// 可以在任何位置通过<create-component-second>使用该组件；
// 也可以将该组件注册到某个父组件中，此时，可以使用自定义的名称，比如<create-component-2nd></create-component-2nd>
export default Vue.component('create-component-second', {
  data: function() {
    return {
      title: 'Create-Component-Second'
    }
  }
})
</script>
