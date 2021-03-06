// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/resource'

import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
import VueResource from 'vue-resource'
Vue.config.productionTip = false




Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage
		},		
		{
			path:'/detail',
			component:DetailPage,
			redirect:'detail/resource',
			children:[
				{
					path:'resource',
					component:DetailAnaPage
				},				
				{
					path:'forecast',
					component:DetailForPage
				},				
				{
					path:'count',
					component:DetailCouPage
				},				
				{
					path:'publish',
					component:DetailPubPage
				}
			]
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})