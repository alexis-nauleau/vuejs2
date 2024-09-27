<template>
   <menu></menu>
	<p>home</p>
	<h1>nouveau composant</h1>
</template>

<script>
import menu from '../components/menu.vue'
export default {
	name: 'home',
	components:{menu},
	beforeCreate() { console.log('Je ne suis pas encore  créé') },
	created() { console.log('Je suis créé !') },
	beforeMount() { console.log('Je vais bientôt être monté sur le DOM!') },
	mounted() { console.log('Je suis monté sur le DOM!') },
	beforeDestroy() { console.log('Je suis sur le point de disparaître du DOM !') },
	destroyed() { console.log('Je suis supprimé') }
}

</script>