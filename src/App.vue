<template>
  <component :is="header"></component>
  <router-view/>
  <component :is="footer"></component>
</template>


<script setup>

  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';
  import AuthHeader from './components/ui/auth/AuthHeader.vue';

  import { useRoute } from 'vue-router';
  // import { ref, watch } from 'vue'
  // import $ from 'jquery'
  
  const route = useRoute();
  const routePath = route.path;
  const header = Header;
  const footer = Footer;
  
  if(routePath.includes("login") || routePath.includes("signup")){
    header = AuthHeader;
    footer = null;
  }


</script>
<style>

</style>