<style lang="less">
   .add-pool-view {
      width: 346px;

      .view-caption {
        display: block;
        padding-bottom: 30px;
      }

      .buttons {
        padding-top: 4px;
      }
   }
</style>

<template>
  <div class="view-content pools-view">
    <span class="view-caption">Statistics / Pools</span>
    <grid-header :items="headerItems" />
    <tree-view :model="pools" />
  </div>
</template>

<script>
  import SmallButton from '../controls/button.vue';
  import TextEditor from '../controls/editor.vue';
  import GridHeader from '../controls/grid-header.vue';
  import TreeView from '../controls/treeview.vue';

  export default {
    components: {
      TextEditor,
      SmallButton,
      TreeView,
      GridHeader
    },

    props: [
      'pools'
    ],

    methods: {
      onCancel: function() {
        this.$router.go(-1);
      }
    },

    data () {
      return {
          headerItems: [
              { text: 'Pool name' },
              { text: 'Hashrate' },
              { text: 'Avg. hashrate'},
              { text: 'Shares'}, 
              { text: 'Active Workers'}
          ]
      }
    }
  }
</script>