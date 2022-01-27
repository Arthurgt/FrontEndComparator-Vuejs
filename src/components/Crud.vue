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
        <h2 className="form-label">Create Game</h2>
         <form v-on:submit.prevent="addGame">
            <div class="form-group">
                <label>Game Title:</label>
                <input type="text" class="form-control" v-model="game.title"/>
            </div>
            <div class="form-group">
                <label>Game Category:</label>
                <input type="text" class="form-control" v-model="game.category"/>
            </div>
            <div class="form-group">
                <label>Game Studio:</label>
                <input type="text" class="form-control" v-model="game.studio"/>
            </div>
            <div class="form-group">
                <label>Game Country:</label>
                <input type="text" class="form-control" v-model="game.country"/>
            </div>
            <div class="form-group">
                <label>Game Year:</label>
                <input type="text" class="form-control" v-model="game.year"/>
            </div>
            <div class="form-group">
                <label>Game Description:</label>
                <input type="text" class="form-control" v-model="game.description"/>
            </div>
            <div class="form-group">
                <label>Game Poster:</label>
                <input type="text" class="form-control" v-model="game.poster"/>
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary" value="Add Game"/>
            </div>
        </form>
        <div class="container d-flex flex-column align-items-center spam-container">
            <h2 class="form-label">Requests test</h2>
            <div>
              <button class="btn btn-primary" @click="add100games">Send 100 requests</button>
              <button class="btn btn-primary" @click="add1000games">Send 1000 requests</button>
            </div>
        </div>
        <h2 className="form-label">Remove Game</h2>
        <form v-on:submit.prevent="removeGame">
            <div class="form-group">
                <label>Game Title:</label>
                <input type="text" class="form-control" v-model="titleToRemove"/>
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary" value="Remove Game"/>
            </div>
        </form>
    </main>
</template>

<script>
import GameService from '../services/GameService'
export default {
    data() {
        return {
            game: {
                title: "",
                category: "",
                studio: "",
                country: "",
                year: "",
                description: "",
                poster: ""
            },
            titleToRemove:"",
            requestTime: 0,
            jsHeapSizeLimit: 0,
            totalJSHeapSize: 0,
            usedJSHeapSize: 0
        }
    },
    mounted() {
	this.jsHeapSizeLimit = window.performance.memory.jsHeapSizeLimit;
	this.totalJSHeapSize = window.performance.memory.totalJSHeapSize;
	this.usedJSHeapSize = window.performance.memory.usedJSHeapSize;
    },
    methods: {
        addGame() {
            window.performance.mark('CRUD');
            GameService.addGame(this.game).then((response) => {
                console.log(response);
                this.resetGame();
            });
            this.requestTime = window.performance.now('CRUD');
        },
        add100games() {
            window.performance.mark('CRUD');
            var randomWords = require('random-words');
            let title = randomWords();
            let oldTitle = title;
            for(let i=0; i<100; i++) {
                title = title + i;
                GameService.addManyGames(title).then((response) => {
                    console.log(response);
                });
                title = oldTitle;
            }
            this.requestTime = window.performance.now('CRUD');
        },
        add1000games() {
            window.performance.mark('CRUD');
            var randomWords = require('random-words');
            let title = randomWords();
            let oldTitle = title;
            for(let i=0; i<1000; i++) {
                title = title + i;
                GameService.addManyGames(title).then((response) => {
                    console.log(response);
                });
                title = oldTitle;
            }
            this.requestTime = window.performance.now('CRUD');
        },
        removeGame() {
            window.performance.mark('CRUD');
            GameService.removeGame(this.titleToRemove).then((response) => {
                console.log(response);
                this.titleToRemove = "";
            });
            this.requestTime = window.performance.now('CRUD');
        },
        resetGame() {
            this.game.title="";
            this.game.category="";
            this.game.studio="";
            this.game.country="";
            this.game.year="";
            this.game.description="";
            this.game.poster="";
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

.form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn {
    margin-left: 10px;
}
</style>
