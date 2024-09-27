<script setup>

import  first  from "./components/first.vue";
import second  from "./components/second.vue";

import menu from"./components/menu.vue"

const name="Alexis"


</script>
<template>
  
  <menu></menu>
 <!-- 
  <p>salut {{ name }}</p> 
  <first></first>
  <second></second>
  -->
  <router-view></router-view>
</template>




