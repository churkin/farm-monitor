<style lang="less">
  .content {
    display: flex;
    height: 100%;
  }
</style>

<script>
  import Navbar from './controls/navbar.vue';
  import Btn from './controls/button.vue';
  import AppHeader from './header.vue';

  export default {
    name: "app",

    components: {
      Navbar,
      Btn,
      AppHeader
    }
  }
</script>

<template>
  <div height="100%">
    <app-header />
    <div class="content">
      <navbar />
      <div style="width:100%; border: 20px solid rgba(216,216,216,0.24)">
        <router-view />
      </div>
    </div>
  </div>
</template>