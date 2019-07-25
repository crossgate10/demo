<template>
  <div id="app">
    <top-banner/>
    <vue-fab/>
    <navigation-menu/>
    <div class="submenu-content-div">
      <sub-menu/>
      <main-content/>
    </div>
  </div>
</template>

<script>
import TopBanner from './components/TopBanner'
import VueFab from './components/FloatActionButton'
import NavigationMenu from './components/NavigationMenu'
import SubMenu from './components/MenuLinks/SubMenu'
import Content from './components/Content'

export default {
  components:{
    'top-banner': TopBanner,
    'vue-fab': VueFab,
    'navigation-menu': NavigationMenu,
    'sub-menu': SubMenu,
    'main-content': Content
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 0fr 0fr 0fr 5fr;
}
.submenu-content-div {
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 0 auto;
  padding-top: 10px; 
  border-top: lightgray 3px solid;
}
#sub-menu {
  margin-right: 20px;
}
#sub-menu li {
    list-style-type: none;
    margin-top: 2px;
    margin-bottom: 2px;
    padding-top:10px;
    padding-bottom:10px;
    border: lightgray 3px solid;
}
#sub-menu li a {
  text-decoration: none;
}
/* #sub-menu li:hover {
  background-color: #62faff;
  background-image: linear-gradient(270deg, #62faff 0%, #FFFFFF 20%, #ffffff 80%, #62faff 100%);
} */
#sub-menu li:hover {
    font-size: 130%;
    transition: 0.2s, 0.2s;
}

.dropdown:hover .dropdown-menu {
    display: block;
}
</style>
