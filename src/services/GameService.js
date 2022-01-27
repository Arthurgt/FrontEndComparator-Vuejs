import axios from 'axios';
const backendUrl = 'http://localhost:8082';

export default {
    gameToSpam : {
        category: "strategy",
        country: "poland",
        description: "created by spam button",
        poster: "https://cdn.gracza.pl/galeria/gry13/528351390.jpg",
        studio: "cdProjectRed",
        year: "2021",
        title: ""
    },
    getSmallLoad() {
        return axios.get(backendUrl + '/getSmallLoad');
    },
    getMediumLoad() {
        return axios.get(backendUrl + '/getMediumLoad');
    },
    getLargeLoad() {
        return axios.get(backendUrl + '/getLargeLoad');
    },
    async addGame(request) {
        return await axios.post(backendUrl + '/createGame', request);
    },
    async addManyGames(request) {
        this.gameToSpam.title=request;
        await axios.post(backendUrl + '/createGame', this.gameToSpam);
    },
    async removeGame(request) {
        return await axios.post(backendUrl + '/deleteGame/' + request);
    }
}