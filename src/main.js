import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Content from './components/Content.vue'
import Bulletin from './components/MenuLinks/Bulletin.vue'
import RelatedLinks from './components/MenuLinks/RelatedLink.vue'

import Brief from './components/SubMenuLinks/Brief.vue'
import Loc from './components/SubMenuLinks/Loc.vue'
import Adoption from './components/SubMenuLinks/Adoption.vue'

import Regulations from './components/SubMenuLinks/Regulations.vue'
import Member from './components/SubMenuLinks/Member.vue'
import ReviewFlow from './components/SubMenuLinks/ReviewFlow.vue'

import Announcement from './components/SubMenuLinks/Announcement.vue'
import SignUp from './components/SubMenuLinks/SignUp.vue'
import PreviousPassList from './components/SubMenuLinks/PreviousPassList.vue'

import ApplyForm from './components/SubMenuLinks/ApplyForm.vue'
import Guide from './components/SubMenuLinks/Guide.vue'
import Specs from './components/SubMenuLinks/Specs.vue'

import AnimalRoom1f from './components/SubMenuLinks/Specs/1f.vue'
import AnimalRoom5f from './components/SubMenuLinks/Specs/5f.vue'
import AnimalRoom7f from './components/SubMenuLinks/Specs/7f.vue'
import Farm from './components/SubMenuLinks/Specs/Farm.vue'

// 當內容變多時，再考慮重構成延遲載入
// const Bulletin = () => import('./components/MenuLinks/Bulletin.vue')
// const RelatedLinks = () => import('./components/MenuLinks/RelatedLink.vue')

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.config.ignoredElements = ['iframe'];

const store = new Vuex.Store({
  state: {
    bulletins: window.bulletins,
    announcements: window.announcements,
  },
  mutations: {
  }
});

const routes = [
  { path: '/', redirect: '/bulletin' },
  { path: '/intro', component: Content,
    children: [
      { path:'brief', component: Brief },
      { path:'loc', component: Loc },
      { path:'adoption', component: Adoption }
    ]
  },
  { path: '/iacuc', component: Content,
    children: [
      { path:'regulations', component: Regulations },
      { path:'member', component: Member },
      { path:'review', component: ReviewFlow }
    ]
  },
  { path: '/training', component: Content,
    children: [
      { path:'announcement', component: Announcement },
      { path:'signup', component: SignUp },
      { path:'passlist', component: PreviousPassList }
    ]
  },
  { path: '/bulletin', component: Bulletin },
  { path: '/download', component: Content,
    children: [
      { path:'applyform', component: ApplyForm },
      { path:'guide', component: Guide },
      { path:'specs', component: Specs,
        children: [
          { path: '1f', component: AnimalRoom1f},
          { path: '5f', component: AnimalRoom5f},
          { path: '7f', component: AnimalRoom7f},
          { path: 'farm', component: Farm},
        ]
      }
    ]
  },
  { path: '/links', component: RelatedLinks }
]

const router = new VueRouter({
  // mode: 'history',
  routes: routes
})

new Vue({
  store,
  router,
  data: function() {
    return this.$store.state;
  },
  render: h => h(App),
}).$mount('#app')
