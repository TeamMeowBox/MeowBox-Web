<template>
  <v-app>
    <top-nav></top-nav>
    <hr style="border-top:0.4px solid #efeded;">
    <tool-bar></tool-bar>
    <nuxt/>
    <footer-page></footer-page>
  </v-app>
</template>

<script>
import TopNav from '../components/NavBar/TopNav';
import ToolBar from '../components/NavBar/ToolBar'
import FooterPage from '../components/Home/Footer'
export default {
  name: 'default',
  components: {
    TopNav,
    ToolBar,
    FooterPage
  }

}
</script>
