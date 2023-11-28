import { createRouter, createWebHistory } from 'vue-router';

import home from './pages/home.vue';
import create from './pages/createPost.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
		{
		  path: '/',
		  name: 'home',
		  component: home
		},
		{
			path: '/create',
			name: 'create',
			component: create
		  }
	]
})

export { router };