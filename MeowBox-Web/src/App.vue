<template>
 <v-app style="background-color:#fff">
    <top-nav></top-nav>
    <hr style="border-top:0.4px solid #efeded;">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <footer-page></footer-page>
  </v-app>
</template>

<script>
import TopNav from './components/NavBar/TopNav'
import ToolBar from './components/NavBar/ToolBar'
import FooterPage from './components/Home/Footer'
export default {
  name: 'App',
  components : {
    TopNav,
    ToolBar,
    FooterPage
  }
}
</script>
