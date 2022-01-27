<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container d-flex flex-row justify-content-between align-items-center">
    <div class="brand">
      <a class="navbar-brand" href="#">
		<font-awesome-icon :icon="[ 'fab', 'vuejs' ]" />
        Front-End Comparator
        <font-awesome-icon icon="fa-chart-bar" />
      </a>
    </div>
    <div class="menu">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav d-flex justify-content-between align-items-baseline">
          <li class="nav-item">
            <a class="nav-link" href="#/">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/smload">Smload</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/mdload">Mdload</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/lgload">Lgload</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/crud">CRUD</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/animations">Animations</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/changingdata">Changingdata</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/services">Services</a>
          </li>
          <li class="nav-item app-change d-flex flex-row">
            <a class="nav-link p-1" href="#"><font-awesome-icon :icon="[ 'fab', 'angular' ]" /></a>
            <a class="nav-link p-1" href="#"><font-awesome-icon :icon="[ 'fab', 'react' ]" /></a>
            <a class="nav-link p-1" href="#"><font-awesome-icon :icon="[ 'fab', 'vuejs' ]" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<script>

export default {}

</script>

<style scoped>
nav .brand a {
	font-size: 14px;
	text-transform: uppercase;
	transition: color 0.3s;
}
nav .brand a:hover {
	color: green;
}
nav .brand i {
	font-size: 14px;
	color: green;
}
nav .menu .navbar-toggler .navbar-toggler-icon {
	font-size: 12px;
}
nav .menu .navbar-collapse a {
	font-size: 12px;
	transition: color 0.3s;
}
nav .menu .navbar-collapse a:hover {
	color: green;
}
nav .menu .navbar-collapse .app-change a {
	font-size: 16px;
}
nav .menu .navbar-collapse .app-change .fa-angular {
	transition: color 0.3s;
}
nav .menu .navbar-collapse .app-change .fa-angular:hover {
	color: red;
}
nav .menu .navbar-collapse .app-change .fa-react {
	transition: color 0.3s;
}
nav .menu .navbar-collapse .app-change .fa-react:hover {
	color: blue;
}
nav .menu .navbar-collapse .app-change .fa-vuejs {
	transition: color 0.3s;
}
nav .menu .navbar-collapse .app-change .fa-vuejs:hover {
	color: green;
}
@media (min-width: 576px) {
	nav .brand a {
		font-size: 18px;
	}
	nav .brand i {
		font-size: 18px;
	}
	nav .menu .navbar-toggler .navbar-toggler-icon {
		font-size: 16px;
	}
	nav .menu .navbar-collapse a {
		font-size: 16px;
	}
	nav .menu .navbar-collapse .app-change a {
		font-size: 24px;
	}
}
@media (min-width: 992px) {
	nav .brand a {
		font-size: 19px;
	}
	nav .brand i {
		font-size: 19px;
	}
	nav .menu .navbar-collapse a {
		font-size: 12px;
	}
	nav .menu .navbar-collapse .app-change a {
		font-size: 20px;
	}
}
@media (min-width: 1200px) {
	nav .brand a {
		font-size: 20px;
	}
	nav .brand i {
		font-size: 20px;
	}
	nav .menu .navbar-collapse a {
		font-size: 17px;
	}
	nav .menu .navbar-collapse .app-change a {
		font-size: 22px;
	}
}
@media (min-width: 1400px) {
	nav .brand a {
		font-size: 22px;
	}
	nav .brand i {
		font-size: 22px;
	}
	nav .menu .navbar-collapse a {
		font-size: 20px;
	}
	nav .menu .navbar-collapse .app-change a {
		font-size: 24px;
	}
}
</style>
