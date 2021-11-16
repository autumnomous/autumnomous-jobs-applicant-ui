<template>
 <component :is="layout">
   <router-view v-model:layout='layout'/>
 </component>
  

</template>


<script>

import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import $ from 'jquery'

export default {

    data(){
      return {
        layout:'div',
      }
    }
}

</script>
<style>

</style>