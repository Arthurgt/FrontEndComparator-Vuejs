<template>
    <main class="d-flex flex-column justify-content-center align-items-center">
    <div class="container performance-measure my-4 row">
        <h3 class="text-center">Performance measure:</h3>
        <p class="text-center">
            Component render time: {{requestTime}} ms
        </p>
        <p class="text-center">
            The maximum size of the heap: {{jsHeapSizeLimit}} bytes
        </p>
        <p class="text-center">
            The total allocated heap size: {{totalJSHeapSize}} bytes
        </p>
        <p class="text-center">
            The currently active segment of JS heap: {{usedJSHeapSize}} bytes
        </p>
    </div>
    <div class="container d-flex flex-column justify-content-evenly">
    <div class="column d-flex flex-column justify-content-around">
      <div class="row d-flex flex-column justify-content-center">
          <h3 class="text-center my-4">Search for Weather:</h3>
          <form>
            <div class="form-group">
              <input
                class="search-box"
                type="text"
                id="weatherLocation"
                placeholder="Please input a Location"
                v-model="query" 
                @keypress="fetchWeather"
              />
             </div>
           </form> 
      </div>
      <div class="text-center my-4" v-if="typeof weather.location != 'undefined'">
          <h3 class="text-center">Weather Details:</h3>
          <p class="text-center">
            Feels Temperature: {{weather.current.feelslike}}
          </p>
          <p class="text-center">
            Real Temperature: {{weather.current.temperature}}
          </p>
          <p class="text-center">
            Wind Speed: {{weather.current.wind_speed}}
          </p>
          <p class="text-center">
            Location Searched: {{weather.location.name}} from {{weather.location.country}}
          </p>
      </div>
      <div class="text-center my-4" v-if="typeof weather.location == 'undefined'">
            <h3 class="text-center">Weather Details:</h3>
            <p class="text-center">
                Feels Temperature: type a city
            </p>
            <p class="text-center">
                Real Temperature: type a city
            </p>
            <p class="text-center">
                Wind Speed: type a city
            </p>
            <p class="text-center">
                Location Searched: type a city
            </p>
        </div>                
        </div>
    </div>
    </main>
</template>

<script>

export default {
    data() {
        return {
            url_base: "http://api.weatherstack.com/current?access_key=fac98dbfc3b783480ba30acb554f1930&query=",
            query: "",
            weather: {},
            requestTime: 0,
            jsHeapSizeLimit: 0,
            totalJSHeapSize: 0,
            usedJSHeapSize: 0
        };
    },
    mounted() {
		this.jsHeapSizeLimit = window.performance.memory.jsHeapSizeLimit;
		this.totalJSHeapSize = window.performance.memory.totalJSHeapSize;
		this.usedJSHeapSize = window.performance.memory.usedJSHeapSize;
    },
    methods: {
        fetchWeather(e){
            if(e.key == "Enter") {
                window.performance.mark('Weather');
                fetch(`${this.url_base}${this.query}`)
                .then(res => {
                    return res.json();
                }).then(this.setResult);
                this.requestTime = window.performance.now('Weather');
            }
        },
        setResult(results){
            this.weather = results;
        }
    }
}

</script>
<style scoped>
main {
	height: 100vh;
}
main .container {
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 15px;
}
main h1 {
	font-size: 28px;
}
main p {
	font-size: 16px;
	text-align: justify;
}
main .column {
    height: 100%;
}
main .performance-measure { 
    background-color: rgba(0,0,0, 0.1);
    border-radius: 15px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
}
.search-box {
    width:100%;
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
