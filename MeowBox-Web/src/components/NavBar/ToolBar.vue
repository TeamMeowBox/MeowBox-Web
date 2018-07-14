<template>
  <v-toolbar style="box-shadow:none; background-color:#ffffff; padding-left:15vw; padding-right:15vw;">
    <v-toolbar-title style="font-size:2.5rem; color:#e68789">
      <a href="/"><img src="../../assets/images/meowbox_logo.png" height="40vh" alt=""/></a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down hidden-md-and-down">
      <v-btn flat v-for="item in toolbarItems" :key="item.title" router :to="item.link">
        {{item.title}}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'ToolBar',
  data () {
    return {
      toolbarItems: [
        {title: '미유박스이야기', link: '/story'},
        {title: '이달의 박스', link:'/thismonthbox'},
        {title: '생일축하해! 박스', link: '/happyBirthday'},
        {title: '주문하기', link: '/order'},
        {title: '집사들의 후기', link: '/review'}
      ]
    }
  }
}
</script>
<style lang="scss">
  @import '../../assets/scss/Header.scss';
  .v-btn--active:before, .v-btn:focus:before, .v-btn:hover:before {
    background-color: rgba(0,0,0,0) !important;
  }
  .v-btn--active, .v-btn--router::after {
    color:#e68789 !important;
  }
  .application .theme--light.v-btn, .theme--light .v-btn {
    color:#4c4e51;
  }
</style>
