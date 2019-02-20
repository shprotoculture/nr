<template>
	<div>
		<app-header></app-header>
		<transition
		 name="page"
		 @after-enter="afterPageEnter()"
		>

			<nuxt />
		</transition>

	</div>
</template>
<script>
import AppHeader from '~/components/AppHeader';
export default {
    components: {
      AppHeader
    },
    methods: {
      afterPageEnter() {
        this.$store.commit('closeMobileMenu');
      },
    }
}
</script>

<style lang="scss">
.page-enter {
	opacity: 0;
}

.page-enter-to {
	opacity: 1;
	transition: 0.5s ease;
}

.page-leave-to {
	opacity: 0;
	transition: 0.5s ease;
	position: absolute;
}
</style>

