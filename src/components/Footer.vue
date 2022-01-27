<template>
    <footer class="bg-dark d-flex flex-columtn justify-content-center">
        <div class="d-flex flex-row justify-content-center align-items-center">
            <p>Artur Babkiewicz 2022</p>
        </div>
    </footer>
</template>

<script>

export default {}

</script>

<style scoped>
footer {
	height: 8vh;
}
footer p {
	font-size: 16px;
	margin: 0;
	color: white;
}
@media (min-width: 576px) {
	footer {
		height: 10vh;
	}
	footer p {
		font-size: 20px;
	}
}
@media (min-width: 992px) {
	footer {
		height: 10vh;
	}
	footer p {
		font-size: 22px;
	}
}
 @media (min-width: 1200px) {
	footer {
		height: 10vh;
	}
	footer p {
		font-size: 23px;
	}
}
 @media (min-width: 1400px) {
	footer {
		height: 10vh;
	}
	footer p {
		font-size: 24px;
	}
}
</style>
