<script>
   import { RouterLink } from 'vue-router';

    export default {
        name: 'menu',
        components:{RouterLink}
    }
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
    
    </nav>
</template>