<template>
  <component :is="($route.fullPath.includes('login') || $route.fullPath.includes('signup')) ? AuthHeader: Header"></component>
  <router-view :key="$route.fullPath"/>
  <component :is="($route.fullPath.includes('login') || $route.fullPath.includes('signup')) ? null : Footer"></component>
</template>


<script setup>
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';
  import AuthHeader from './components/ui/auth/AuthHeader.vue';

</script>
<style>

</style>