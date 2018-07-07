<template>
  <v-toolbar style="box-shadow:none; background-color:#ffffff; padding-left:15vw; padding-right:15vw;">
    <v-toolbar-title style="font-size:2.5rem; color:#e68789">MEOW BOX</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
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
        {title: '생일축하해! 박스', link: '/birthbox'},
        {title: '주문하기', link: '/order'},
        {title: '집사들의 후기', link: '/review'}
      ]
    }
  }
}
</script>
