<template>
 <v-app>
      <v-toolbar>
        <v-toolbar-title>Meow box</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn flat v-for="item in toolbarItems" :key="item.title" router :to="item.link">
              <v-icon left>{{item.icon}}</v-icon>
              {{item.title}}
            </v-btn>

        </v-toolbar-items>
      </v-toolbar>
      <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      toolbarItems : [
        { title: '미유박스 이야기' , link:'/story'},
        { title: '주문하기',link: '/order' },
        { title: '미유박스 후기' ,link: '/review'},
        {  title: '로그인/회원가입', link: '/sign' },

      ]
    }
  }
}
</script>

<style>
</style>
