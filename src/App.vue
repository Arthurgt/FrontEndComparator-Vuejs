<template>
  <div id="app">
    <Navigation />
      <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Navigation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@400;700&display=swap');

*, *::before, *::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	height: 100%;
	position: relative;
	font-family: 'Signika', sans-serif;
	font-size: 16px;
	background-color: rgb(87,108,127);
}

html {
	height: 100%;
}
</style>
