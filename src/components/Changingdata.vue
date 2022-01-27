<template>
    <main class="load-main">
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
        <form v-on:submit="getfilteredData">
            <div class="form-row">
                <div class="col-10">
                    <input type="text" class="form-control" placeholder="Enter category" v-model="search" v-on:keyup="getfilteredData">
                </div>
                <div class="col-2">
                    <input type="submit" class="btn btn-primary" value="Filter"/>
                </div>
            </div>
        </form>
        <div class="main-load container">
          <h1 class = "text-center"> Small List</h1>
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
                <tr class="d-flex justify-content-between" v-for="game in filteredData" :key="game.title">
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
            filteredData: [],
            search: '',
            games:[],
            requestTime: 0,
            jsHeapSizeLimit: 0,
            totalJSHeapSize: 0,
            usedJSHeapSize: 0
        };
    },
    mounted() {
        GameService.getSmallLoad().then((response) => {
        this.games=response.data;
        this.filteredData=response.data;
        });
        this.jsHeapSizeLimit=window.performance.memory.jsHeapSizeLimit;
		this.totalJSHeapSize=window.performance.memory.totalJSHeapSize;
		this.usedJSHeapSize=window.performance.memory.usedJSHeapSize;
    },
    methods: {
        getfilteredData() {
            this.filteredData = this.games;
            let filteredDataBySearch = [];

            if (this.search !== '') {
                window.performance.mark('CHANGEDATA');
                filteredDataBySearch = this.filteredData.filter(obj => obj.category.indexOf(this.search.toLowerCase()) >= 0);
                this.filteredData = filteredDataBySearch;
                this.requestTime = window.performance.now('CHANGEDATA');
            }
        }
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
</style>
