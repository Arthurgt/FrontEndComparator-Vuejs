<template>
    <main class="load-main container">
        <div class="container performance-measure my-4 row">
            <h3 class="text-center">Performance measure:</h3>
            <p class="text-center">
                Component render time: {{loadTime}} ms
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
        <div class="main-load container">
          <h1 class = "text-center"> Large List</h1>
          <table class = "table">
              <thead>
                  <tr class="d-flex justify-content-center">
                      <td> Game Title</td>
                      <td> Game Description</td>
                      <td> Game Year</td>
                      <td> Game Category</td>
                      <td> Game Country</td>
                      <td> Game Studio</td>
                      <td> Game Poster</td>
                  </tr>
              </thead>
              <tbody>
                <tr class="d-flex justify-content-between" v-for="game in games" :key="game.title">
                    <td> {{game.title}}</td>
                    <td> {{game.description}}</td>   
                    <td> {{game.year}}</td>   
                    <td> {{game.category}}</td>
                    <td> {{game.country}}</td>
                    <td> {{game.studio}}</td>
                    <td> <img v-bind:src="game.poster" alt="game poster"/></td>
                </tr>
              </tbody>
          </table>
      </div>
    </main>
</template>

<script>
import GameService from '../services/GameService'
export default {
    data() {
        return {
            games: [],
            requestTime: 0,
            jsHeapSizeLimit: 0,
            totalJSHeapSize: 0,
            usedJSHeapSize: 0
        };
    },
	beforeCreate(){
		window.performance.mark('Lgload');
	},
    mounted() {
        GameService.getLargeLoad().then((response) => {
            this.games=response.data;
        });
		this.loadTime = window.performance.now('Lgload');
        this.jsHeapSizeLimit=window.performance.memory.jsHeapSizeLimit;
		this.totalJSHeapSize=window.performance.memory.totalJSHeapSize;
		this.usedJSHeapSize=window.performance.memory.usedJSHeapSize;
    },
    methods: {
    }
}

</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}

main .performance-measure { 
    background-color: rgba(0,0,0, 0.1);
    border-radius: 15px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    }

main .main-load h1, td { 
    color: rgb(211,212,217);
}
</style>
