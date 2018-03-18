<style lang="less">
  .setting-view {
    .quote-wrapper{
      box-shadow: 0 3px 1px -2px rgba(0,0,0,.14);
      padding: 2em;
      margin-top: 1em;
    }

    .grid-header + div {
      & > div {
        padding-top: 22px;
      }
    }

    .setting-item {
      font-size: 13px;
      color: #000000;
      line-height: 28px;
      padding-left: 8px;
    }

    .add-button-container {
      padding-top: 8px;
      padding-left: 8px;
    }
  }
</style>

<template>
  <div class="setting-view view-content">
    <span class="view-caption">Settings</span>
    <div style="width:500px"> 
      <grid-header :items="rigHeaderItems" />
      <div v-for="rig in rigs" class="flex-row">
        <div class="setting-item">{{ rig }}</div>
        <div style="width: 300px">
          <small-button text="Edit" /> 
        </div>
      </div>
      <div class="add-button-container">
        <small-button text="Add rig" @click="addRig" />
      </div>
      <grid-header :items="poolHeaderItems" />
      <div v-for="pool in pools" class="flex-row">
        <div class="setting-item">{{ pool }}</div>
        <div style="width: 300px">
          <small-button text="Edit" /> 
        </div>
      </div>
      <div class="add-button-container">
        <small-button text="Add pool" @click="addPool" />
      </div>
      <grid-header :items="scriptHeaderItems" />
      <div v-for="script in scripts" class="flex-row">
        <div class="setting-item">{{ script }}</div>
        <div style="width: 300px">
          <small-button text="Edit" />
        </div>
      </div>
      <div class="add-button-container">
        <small-button text="Add script" @click="addScript" />
      </div>
    </div>
  </div>
</template>

<script>
  import TreeView from '../controls/treeview.vue';
  import GridHeader from '../controls/grid-header.vue';
  import SmallButton from '../controls/button.vue';

  export default {
    components: {
      TreeView,
      GridHeader,
      SmallButton
    },

    props: [
      'rigs',
      'pools',
      'scripts'
    ],

    methods: {
      addPool: function() {
        this.$router.push('/settings/add-pool');
      },

      addRig: function() {
        this.$router.push('/settings/add-rig');
      },

      addScript: function() {
        this.$router.push('/settings/add-script');
      }
    },

    data () {
      return {
        rigHeaderItems: [
          { text: 'Rig name' },
          { text: 'Actions', width: 300 }
        ],

        poolHeaderItems: [
          { text: 'Pool name' },
          { text: 'Actions', width: 300 }
        ],

        scriptHeaderItems: [
          { text: 'Miner script name' },
          { text: 'Actions', width: 300 }
        ]
      }
    }
  }
</script>

