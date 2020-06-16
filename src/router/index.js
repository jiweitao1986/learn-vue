import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from '../demos/home/home.component.vue';
import CreateComponent from '../demos/create/create.component.vue';
import ComputedComponent from '../demos/computed/computed.component.vue'
import VuexComponent from '../demos/vuex/vuex.component.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
  },
  {
    path: '/create',
    name: 'Create',
    component: CreateComponent,
  },
  {
    path: '/computed',
    name: 'Computed',
    component: ComputedComponent,
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: VuexComponent,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
