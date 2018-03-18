<style lang="less">
  html, body {
    height: 100%;
  }

  .navbar {
      height: 100%;
      background-color: #222B37;

      .nav-item {
        &:first-child {
          display: block; 
          padding-top:40px; 
          padding-bottom:30px;
        }

        width: 250px;
        border-bottom: 1px solid #FFFFFF;
        padding-left: 40px;
        padding-top: 20px;
        padding-bottom: 20px;
  
        font-size: 24px;
        color: #FFFFFF;
        display: flex; 
            
        .statisctics-icon, .errors-icon, .settings-icon {
          margin-top: 6px;
        }

        a {
          color: #FFFFFF;
          padding-left: 10px;
        }

        .sub-item a {
          font-size: 20px;
          line-height: 28px;
          padding-left: 44px;
        }
      }
  }
</style>

<template>
  <div class="navbar">
    <div class="nav-item">
      <div style="display: flex">
        <div class="statisctics-icon" />
        <div style="padding-left: 10px">
          Statistics
        </div>
      </div>
      <div class="sub-item">
        <router-link to="rigs">Rigs</router-link>
      </div>
      <div class="sub-item">
        <router-link to="pools">Pools</router-link>
      </div>

    </div>
    <div class="nav-item">
      <div class="errors-icon" />
      <router-link to="errors">Errors</router-link>
    </div>
    <div class="nav-item">
      <div class="settings-icon" />
      <router-link to="settings">Settings</router-link>
    </div>
    <div class="nav-item"></div>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>