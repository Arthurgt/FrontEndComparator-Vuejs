<template>
    <main class="d-flex flex-column justify-content-center">
        <div class="container about-container">
            <h1 class="text-center"><font-awesome-icon icon="fa-chart-bar" /> About this application <font-awesome-icon icon="fa-chart-bar" /></h1> 
            <p>Application tries to compare 3 diffrent frontend frameworks performance. Frameworks used in this application: <span class="angular">Angular</span>, <span class="vuejs">Vuejs</span>, <span class="react">React</span>.</p>
            <p>The test is about performing tasks such as: data loading speed, CRUD operations,
            animations, asynchronus operations, forms rendering and validation, http requests and rendering
            data after changes.</p>
            <p>Application is connected with backend application written in Java and Spring stack.
            This module of app is written in Vue.js. </p>
        </div>
    </main>
</template>

<script>

export default {

}

</script>

<style scoped>
main {
	height: 100vh;
}
main .container {
	height: 100vh;
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 15px;
}

main .about-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

main h1 {
	font-size: 28px;
}
 main h1 i {
	color: red;
}
 main p {
	font-size: 16px;
	text-align: justify;
}
 main p .angular {
	color: red;
}
 main p .vuejs {
	color: Green;
}
 main p .react {
	color: Blue;
}
@media (min-width: 576px) {
	main {
		height: 90vh;
	}
	main .container {
		height: 60vh;
	}
	main h1 {
		font-size: 32px;
	}
	main p {
		font-size: 20px;
	}
}
@media (min-width: 992px) {
	main {
		height: 90vh;
	}
	main .container {
		height: 60vh;
		box-shadow: 5px 5px 50px black;
	}
	main h1 {
		font-size: 34px;
	}
	main p {
		font-size: 22px;
	}
}
@media (min-width: 1200px) {
	main {
		height: 90vh;
	}
	main .container {
		height: 60vh;
	}
	main h1 {
		font-size: 35px;
	}
	main p {
		font-size: 23px;
	}
}
@media (min-width: 1400px) {
	main {
		height: 90vh;
	}
	main .container {
		height: 60vh;
	}
	main h1 {
		font-size: 36px;
	}
	main p {
		font-size: 24px;
	}
}
@media (min-width: 576px) and (max-height: 680px) {
	main {
		height: 100vh;
	}
	main .container {
		height: 100vh;
	}
}
</style>
