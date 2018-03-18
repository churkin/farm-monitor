<style lang="less">
   .quote-wrapper{
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.14);
    padding: 2em;
    margin-top: 1em;
  }
</style>

<template>
  <div class="view-content">
    <span class="view-caption">Errors</span>
    <div style="width:500px">      
      <grid-header :items="headerItems" />
      <div style="padding-top: 26px;">
        <tree-view :model="errors" />
      </div>
    </div>
    <!--<div class="row">
      <div class="quote-wrapper">
        <h2>Random Quote</h2>
        <p>
          {{quote}}
        </p>
      </div>
    </div>-->
  </div>
</template>

<script>
  import QuoteService from '../../services/quote';
  import TreeView from '../controls/treeview.vue';
  import GridHeader from '../controls/grid-header.vue';

  export default {
    components: {
      TreeView,
      GridHeader
    },

    props: ['errors'],

    data () {
      return {
        quote: '',

        headerItems: [
          { text: 'Rig name' },
          { text: 'Error text', width: 200 }
        ]
      }
    },

    mounted () {
      QuoteService.getQuote(this).then(resp => {
        this.quote = resp.data[0].content
      }, (err) => {
        console.log(err)
      });
    }
  }
</script>

